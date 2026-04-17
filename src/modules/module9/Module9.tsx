import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chess, type Square } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { useProgressStore } from '../../store/useProgressStore';
import { attackLessons, defenseLessons, type ExerciseLesson } from './data/lessons';
import { CheckCircle2, XCircle, ArrowRight, Trophy, RotateCcw, Lightbulb, Eye, Sword, Shield } from 'lucide-react';

const playMoveSound = () => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator(); const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sine'; osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.12);
  } catch (_e) {}
};

const playErrorSound = () => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator(); const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'square'; osc.frequency.setValueAtTime(200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.2);
  } catch (_e) {}
};

type Tab = 'attack' | 'defense';

export default function Module9() {
  const { setCurrentModule, markLessonCompleted, completedLessons } = useProgressStore();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<Tab>('attack');
  const [lessonIndex, setLessonIndex] = useState(0);

  const lessons = activeTab === 'attack' ? attackLessons : defenseLessons;
  const lesson: ExerciseLesson = lessons[lessonIndex] || lessons[0];

  const [game, setGame] = useState<Chess>(new Chess());
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [optionSquares, setOptionSquares] = useState<Record<string, any>>({});
  const [moveHighlights, setMoveHighlights] = useState<Record<string, any>>({});
  const [isLessonPass, setIsLessonPass] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isUndoing, setIsUndoing] = useState(false);
  const [lastWrongMove, setLastWrongMove] = useState<string | null>(null);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [isSystemMoving, setIsSystemMoving] = useState(false);
  const [showSolutionPlaying, setShowSolutionPlaying] = useState(false);
  const undoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const systemMoveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const initialTurn = lesson.initialFen.includes(' b ') ? 'black' as const : 'white' as const;

  const getHighlightStyle = () => {
    const isDark = document.documentElement.classList.contains('dark');
    return isDark
      ? { background: 'radial-gradient(circle, rgba(255,255,255,.35) 25%, transparent 25%)', borderRadius: '50%' }
      : { background: 'radial-gradient(circle, rgba(0,0,0,.3) 25%, transparent 25%)', borderRadius: '50%' };
  };

  const getMoveOptions = (sourceSquare: string) => {
    if (isLessonPass || isUndoing || isSystemMoving || showSolutionPlaying) return;
    const newSquares: Record<string, any> = {};
    const style = getHighlightStyle();
    const moves = game.moves({ square: sourceSquare as Square, verbose: true });
    moves.forEach((move: any) => { newSquares[move.to] = style; });
    newSquares[sourceSquare] = { background: 'rgba(255, 215, 0, 0.4)' };
    setOptionSquares(newSquares);
  };

  useEffect(() => { setCurrentModule(9); }, [setCurrentModule]);

  const resetLesson = useCallback((l: ExerciseLesson) => {
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
    if (systemMoveTimerRef.current) clearTimeout(systemMoveTimerRef.current);
    // Handle stalemate-only lessons (empty sequence)
    const isStalemateLesson = l.sequence.length === 0;
    setGame(new Chess(l.initialFen));
    setFeedback({ type: null, message: '' });
    setOptionSquares({});
    setMoveHighlights({});
    setIsLessonPass(isStalemateLesson || completedLessons.includes(l.id));
    setWrongAttempts(0);
    setShowHint(false);
    setIsUndoing(false);
    setLastWrongMove(null);
    setCurrentMoveIndex(0);
    setIsSystemMoving(false);
    setShowSolutionPlaying(false);
    if (isStalemateLesson) {
      setFeedback({ type: 'success', message: l.successMessage });
      markLessonCompleted(l.id);
    }
  }, [completedLessons, markLessonCompleted]);

  useEffect(() => { resetLesson(lesson); }, [lesson.id]);

  useEffect(() => { return () => {
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
    if (systemMoveTimerRef.current) clearTimeout(systemMoveTimerRef.current);
  }; }, []);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setLessonIndex(0);
  };

  const handleReset = () => resetLesson(lesson);

  const playSystemMove = useCallback((idx: number) => {
    if (idx >= lesson.sequence.length) return;
    const nextSan = lesson.sequence[idx];
    setGame(prevG => {
      const g = new Chess(prevG.fen());
      try {
        const md = g.move(nextSan);
        if (md) {
          playMoveSound();
          setMoveHighlights({ [md.from]: { background: 'rgba(34,197,94,0.5)' }, [md.to]: { background: 'rgba(34,197,94,0.5)' } });
        }
      } catch (e) { console.error('Invalid system move', e); }
      return g;
    });
    const newIdx = idx + 1;
    setCurrentMoveIndex(newIdx);
    setIsSystemMoving(false);
    if (newIdx >= lesson.sequence.length) {
      setFeedback({ type: 'success', message: lesson.successMessage });
      setIsLessonPass(true);
      markLessonCompleted(lesson.id);
    } else {
      setFeedback({ type: null, message: 'Oponente responde. Tu turno de nuevo.' });
    }
  }, [lesson, markLessonCompleted]);

  const executeSolutionStep = useCallback((idx: number, currentFen: string) => {
    if (idx >= lesson.sequence.length) {
      setFeedback({ type: 'success', message: lesson.successMessage });
      setIsLessonPass(true);
      markLessonCompleted(lesson.id);
      setShowSolutionPlaying(false);
      return;
    }
    const g = new Chess(currentFen);
    try {
      const md = g.move(lesson.sequence[idx]);
      if (md) {
        playMoveSound();
        setMoveHighlights({ [md.from]: { background: 'rgba(34,197,94,0.5)' }, [md.to]: { background: 'rgba(34,197,94,0.5)' } });
        setGame(g);
        setCurrentMoveIndex(idx + 1);
        systemMoveTimerRef.current = setTimeout(() => { executeSolutionStep(idx + 1, g.fen()); }, 1200);
      }
    } catch (e) { setShowSolutionPlaying(false); }
  }, [lesson, markLessonCompleted]);

  function handleShowSolution() {
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
    if (systemMoveTimerRef.current) clearTimeout(systemMoveTimerRef.current);
    setIsUndoing(false);
    setShowSolutionPlaying(true);
    setOptionSquares({});
    setFeedback({ type: null, message: 'Mostrando solución completa...' });
    setGame(new Chess(lesson.initialFen));
    setCurrentMoveIndex(0);
    setMoveHighlights({});
    systemMoveTimerRef.current = setTimeout(() => { executeSolutionStep(0, lesson.initialFen); }, 600);
  }

  function onDrop(sourceSquare: string, targetSquare: string) {
    setOptionSquares({});
    if (isLessonPass || isUndoing || isSystemMoving || showSolutionPlaying || lesson.sequence.length === 0) return false;

    try {
      const currentSanTarget = lesson.sequence[currentMoveIndex];
      // Resolve expected from/to by trying the SAN on a copy
      const gExpected = new Chess(game.fen());
      let expectedFrom = '', expectedTo = '';
      try {
        const er = gExpected.move(currentSanTarget);
        if (er) { expectedFrom = er.from; expectedTo = er.to; }
      } catch (_e) {}

      const g = new Chess(game.fen());
      const moveResult = g.move({ from: sourceSquare, to: targetSquare, promotion: 'q' });

      if (moveResult) {
        const isCorrect = moveResult.from === expectedFrom && moveResult.to === expectedTo;
        if (isCorrect) {
          setGame(g); playMoveSound();
          setMoveHighlights({ [sourceSquare]: { background: 'rgba(34,197,94,0.5)' }, [targetSquare]: { background: 'rgba(34,197,94,0.5)' } });
          const nextIdx = currentMoveIndex + 1;
          setCurrentMoveIndex(nextIdx);
          if (nextIdx >= lesson.sequence.length) {
            setFeedback({ type: 'success', message: lesson.successMessage });
            setIsLessonPass(true);
            markLessonCompleted(lesson.id);
          } else {
            setIsSystemMoving(true);
            setFeedback({ type: null, message: '¡Correcto! Oponente pensando...' });
            systemMoveTimerRef.current = setTimeout(() => { playSystemMove(nextIdx); }, 600);
          }
          return true;
        } else {
          const newWrongs = wrongAttempts + 1;
          setWrongAttempts(newWrongs); setGame(g); setLastWrongMove(moveResult.san); playErrorSound();
          setMoveHighlights({ [sourceSquare]: { background: 'rgba(239,68,68,0.5)' }, [targetSquare]: { background: 'rgba(239,68,68,0.5)' } });
          const errorMsg = newWrongs === 1
            ? `Movimiento incorrecto (${moveResult.san}). ¡Intenta de nuevo!`
            : `Incorrecto (${moveResult.san}). ${lesson.wrongMoveExplanation}`;
          if (newWrongs === 1) setShowHint(true);
          setFeedback({ type: 'error', message: errorMsg });
          setIsUndoing(true);
          undoTimerRef.current = setTimeout(() => {
            g.undo(); setGame(new Chess(g.fen())); setMoveHighlights({});
            setIsUndoing(false); setLastWrongMove(null);
            if (newWrongs === 1) setFeedback({ type: null, message: '' });
          }, 2500);
          return true;
        }
      }
    } catch (_e: any) {
      setFeedback({ type: 'error', message: 'Ese movimiento no es legal. Intenta con otro.' });
      return false;
    }
    return false;
  }

  const isAttack = activeTab === 'attack';
  const accentClasses = isAttack
    ? { badge: 'text-yellow-800 bg-yellow-100 dark:bg-yellow-900/40 dark:text-yellow-300', border: 'border-yellow-500', box: 'bg-gradient-to-r from-yellow-50 to-white dark:from-yellow-900/20 dark:to-slate-800 border-l-4 border-yellow-500', text: 'text-yellow-900 dark:text-yellow-100', btn: 'bg-yellow-600 hover:bg-yellow-700', activeTab: 'bg-yellow-500 shadow-md text-white ring-2 ring-yellow-500/50' }
    : { badge: 'text-amber-800 bg-amber-100 dark:bg-amber-900/40 dark:text-amber-300', border: 'border-amber-500', box: 'bg-gradient-to-r from-amber-50 to-white dark:from-amber-900/20 dark:to-slate-800 border-l-4 border-amber-500', text: 'text-amber-900 dark:text-amber-100', btn: 'bg-amber-600 hover:bg-amber-700', activeTab: 'bg-amber-600 shadow-md text-white ring-2 ring-amber-600/50' };

  const diffColors = {
    fácil: 'text-emerald-700 bg-emerald-100 dark:bg-emerald-900/40 dark:text-emerald-400',
    medio: 'text-orange-700 bg-orange-100 dark:bg-orange-900/40 dark:text-orange-400',
    difícil: 'text-rose-700 bg-rose-100 dark:bg-rose-900/40 dark:text-rose-400'
  };
  const diffIcons = { fácil: '🟢', medio: '🟡', difícil: '🔴' };

  return (
    <div className="flex flex-col gap-6">
      {/* Header with tabs */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Módulo 9 — Estilo Bobby Fischer</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">40 ejercicios inspirados en el jugador más brillante del siglo XX</p>
          </div>
          <div className="flex gap-2 bg-slate-100 dark:bg-slate-700/50 p-1 rounded-xl">
            <button
              onClick={() => handleTabChange('attack')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm transition-all ${activeTab === 'attack' ? accentClasses.activeTab : 'text-slate-500 dark:text-slate-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:text-yellow-600'}`}
            >
              <Sword size={18} /> ⚔️ Ataque Dorado
            </button>
            <button
              onClick={() => handleTabChange('defense')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm transition-all ${activeTab === 'defense' ? accentClasses.activeTab : 'text-slate-500 dark:text-slate-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-amber-600'}`}
            >
              <Shield size={18} /> 🛡️ Defensa Sólida
            </button>
          </div>
        </div>

        {/* Lesson navigation strip */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {lessons.map((l, i) => (
            <button
              key={l.id}
              onClick={() => setLessonIndex(i)}
              className={`w-8 h-8 rounded-lg text-xs font-bold transition-all relative ${
                i === lessonIndex
                  ? (isAttack ? 'bg-yellow-500 text-white shadow-md scale-110 shadow-yellow-500/30' : 'bg-amber-600 text-white shadow-md scale-110 shadow-amber-600/30')
                  : completedLessons.includes(l.id)
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {i + 1}
              {i === lessonIndex && <span className="absolute -bottom-1 -right-1 flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span></span>}
            </button>
          ))}
        </div>
      </div>

      {/* Main exercise area */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 flex flex-col md:flex-row gap-8 min-h-[580px] transition-colors duration-300">

        {/* Left Panel */}
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <div className="flex justify-between items-center mb-3">
              <div className="flex gap-2">
                <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${accentClasses.badge}`}>
                  {isAttack ? '⚔️ Ataque' : '🛡️ Defensa'} — #{lessonIndex + 1}
                </span>
                <span className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${diffColors[lesson.difficulty]}`}>
                  {diffIcons[lesson.difficulty]} {lesson.difficulty}
                </span>
              </div>
              {completedLessons.includes(lesson.id) && (
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full">
                  <CheckCircle2 size={14} /> Completado
                </span>
              )}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1 mb-2">{lesson.title}</h2>
            {lesson.reference && (
              <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full mb-3 ${accentClasses.badge}`}>
                📚 {lesson.reference}
              </span>
            )}
            <p className="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed mb-4">{lesson.description}</p>

            <div className={`${accentClasses.box} p-4 rounded-r-lg shadow-sm`}>
              <h3 className={`${accentClasses.text} font-semibold mb-2 flex items-center gap-2`}>
                🎯 Tu Reto
              </h3>
              <p className={`${accentClasses.text} m-0 font-medium text-[15px]`}>{lesson.instruction}</p>
              {!isLessonPass && lesson.sequence.length > 0 && (
                <div className="mt-3 pt-3 border-t border-slate-200/50 flex justify-between items-center text-xs text-slate-500">
                  <span>Progreso: {currentMoveIndex}/{lesson.sequence.length} jugadas</span>
                  {isSystemMoving && <span className="animate-pulse flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" />Oponente responde...</span>}
                </div>
              )}
            </div>
          </div>

          {/* Hints & Solutions */}
          <div className="flex flex-col gap-3">
            {showHint && !isLessonPass && (
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-3 rounded-xl flex items-start gap-2 shadow-sm">
                <Lightbulb size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">Pista</span>
                  <p className="text-amber-800 dark:text-amber-200 text-sm font-medium m-0 mt-1">{lesson.hint}</p>
                </div>
              </div>
            )}

            {wrongAttempts >= 2 && !isLessonPass && !showSolutionPlaying && lesson.sequence.length > 0 && (
              <button onClick={handleShowSolution}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 shadow-sm transition-all text-sm w-fit self-start">
                <Eye size={16} /> Ver Solución
              </button>
            )}

            {feedback.type && (
              <div className={`p-4 rounded-xl border flex items-start gap-3 transition-all shadow-sm ${
                feedback.type === 'success'
                  ? 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                  : 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
              }`}>
                {feedback.type === 'success' ? <CheckCircle2 className="mt-0.5 shrink-0" size={20} /> : <XCircle className="mt-0.5 shrink-0" size={20} />}
                <div>
                  <span className="font-semibold text-[15px] block">{feedback.type === 'success' ? '¡Correcto!' : `Incorrecto${lastWrongMove ? ` (${lastWrongMove})` : ''}`}</span>
                  <span className="text-[14px] mt-1 block opacity-90">{feedback.message}</span>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-auto pt-5 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
            <button onClick={() => setLessonIndex(i => Math.max(0, i - 1))} disabled={lessonIndex === 0}
              className="px-5 py-2.5 text-slate-500 dark:text-slate-400 font-medium hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition-colors disabled:opacity-30">
              Anterior
            </button>
            {lessonIndex < lessons.length - 1 ? (
              <button onClick={() => setLessonIndex(i => i + 1)}
                disabled={!isLessonPass && !completedLessons.includes(lesson.id)}
                className={`flex items-center gap-2 px-6 py-2.5 text-white font-medium rounded-xl shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed ${accentClasses.btn}`}>
                Siguiente <ArrowRight size={18} />
              </button>
            ) : activeTab === 'attack' ? (
              <button onClick={() => handleTabChange('defense')}
                className="flex items-center gap-2 px-6 py-2.5 bg-amber-600 text-white font-medium rounded-xl shadow-sm hover:bg-amber-700 transition-all">
                Ir a Defensa <Shield size={18} />
              </button>
            ) : (
              <button onClick={() => navigate('/')}
                disabled={!isLessonPass && !completedLessons.includes(lesson.id)}
                className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-xl shadow-sm hover:bg-indigo-700 transition-all disabled:opacity-50">
                Finalizar <Trophy size={18} />
              </button>
            )}
          </div>
        </div>

        <div className="w-full md:w-[450px] lg:w-[500px] xl:w-[560px] flex flex-col gap-4 relative">
          <div className={`bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-900/10 dark:to-slate-900/50 p-2 md:p-3 rounded-xl border-2 transition-all shadow-lg relative ${
            feedback.type === 'success' ? 'border-emerald-400 dark:border-emerald-600 shadow-emerald-500/20' :
            feedback.type === 'error' ? 'border-red-400 dark:border-red-600 shadow-red-500/20' :
            isAttack ? 'border-yellow-400/60 dark:border-yellow-600/60 shadow-yellow-500/10' : 'border-amber-400/60 dark:border-amber-600/60 shadow-amber-500/10'
          }`}>
            {isUndoing && (
              <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse whitespace-nowrap">
                ❌ Movimiento incorrecto — deshaciendo...
              </div>
            )}
            {showSolutionPlaying && (
              <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse whitespace-nowrap">
                🪄 Mostrando solución automática...
              </div>
            )}
            <Chessboard
              position={game.fen()}
              onPieceDrop={onDrop}
              onPieceDragBegin={(_, sourceSquare) => getMoveOptions(sourceSquare)}
              animationDuration={300}
              arePiecesDraggable={!isLessonPass && !isUndoing && !isSystemMoving && !showSolutionPlaying && lesson.sequence.length > 0}
              boardOrientation={initialTurn}
              customBoardStyle={{ borderRadius: '6px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.2)' }}
              customDarkSquareStyle={{ backgroundColor: '#c29b62' }}
              customLightSquareStyle={{ backgroundColor: '#f3e5ab' }}
              customSquareStyles={{ ...optionSquares, ...moveHighlights }}
              showBoardNotation={true}
            />
          </div>
          <div className="flex justify-between items-center px-2">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {initialTurn === 'black' ? '⬛ Juegas con Negras' : '⬜ Juegas con Blancas'}
            </span>
            <button onClick={handleReset}
              className="flex items-center gap-1 text-sm text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors font-medium">
              <RotateCcw size={14} /> Reiniciar Puzzle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
