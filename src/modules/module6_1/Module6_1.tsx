import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chess, type Square } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { useProgressStore } from '../../store/useProgressStore';
import { module6_1Lessons, type ExerciseLesson } from './data/lessons';
import { CheckCircle2, XCircle, ArrowRight, Trophy, RotateCcw, Lightbulb, Eye } from 'lucide-react';

const playMoveSound = () => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.12);
  } catch (_e) { /* silent fail */ }
};

const playErrorSound = () => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'square';
    osc.frequency.setValueAtTime(200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.2);
  } catch (_e) { /* silent fail */ }
};

export default function Module6_1() {
  const { currentLessonIndex, nextLesson, prevLesson, setCurrentModule, markLessonCompleted, completedLessons } = useProgressStore();
  const lesson: ExerciseLesson = module6_1Lessons[currentLessonIndex] || module6_1Lessons[0];
  const navigate = useNavigate();

  const [game, setGame] = useState<Chess | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [optionSquares, setOptionSquares] = useState<Record<string, any>>({});
  const [moveHighlights, setMoveHighlights] = useState<Record<string, any>>({});
  const [isLessonPass, setIsLessonPass] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [isUndoing, setIsUndoing] = useState(false);
  const [lastWrongMove, setLastWrongMove] = useState<string | null>(null);
  const undoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Determine board orientation from FEN
  const initialTurn = lesson.initialFen.includes(' b ') ? 'black' as const : 'white' as const;

  const getHighlightStyle = () => {
    const isDark = document.documentElement.classList.contains('dark');
    return isDark
      ? { background: 'radial-gradient(circle, rgba(255,255,255,.35) 25%, transparent 25%)', borderRadius: '50%' }
      : { background: 'radial-gradient(circle, rgba(0,0,0,.3) 25%, transparent 25%)', borderRadius: '50%' };
  };

  const getMoveOptions = (sourceSquare: string) => {
    if (isLessonPass || !game || isUndoing) return;
    const newSquares: Record<string, any> = {};
    const style = getHighlightStyle();
    const moves = game.moves({ square: sourceSquare as Square, verbose: true });
    moves.forEach((move: any) => { newSquares[move.to] = style; });
    newSquares[sourceSquare] = { background: 'rgba(255, 215, 0, 0.4)' };
    setOptionSquares(newSquares);
  };

  useEffect(() => {
    setCurrentModule(6);
  }, [setCurrentModule]);

  useEffect(() => {
    setGame(new Chess(lesson.initialFen));
    setFeedback({ type: null, message: '' });
    setOptionSquares({});
    setMoveHighlights({});
    setIsLessonPass(completedLessons.includes(lesson.id));
    setWrongAttempts(0);
    setShowHint(false);
    setShowSolution(false);
    setIsUndoing(false);
    setLastWrongMove(null);
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.id]);

  useEffect(() => {
    return () => { if (undoTimerRef.current) clearTimeout(undoTimerRef.current); };
  }, []);

  if (!lesson || !game) {
    return <div className="p-8 text-center text-slate-500">Cargando ejercicio...</div>;
  }

  function handleReset() {
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
    setGame(new Chess(lesson.initialFen));
    setFeedback({ type: null, message: '' });
    setOptionSquares({});
    setMoveHighlights({});
    setIsLessonPass(false);
    setWrongAttempts(0);
    setShowHint(false);
    setShowSolution(false);
    setIsUndoing(false);
    setLastWrongMove(null);
  }

  function handleShowSolution() {
    setShowSolution(true);
    // Play the correct move automatically
    const g = new Chess(lesson.initialFen);
    try {
      const result = g.move(lesson.targetMove);
      if (result) {
        playMoveSound();
        setGame(g);
        setMoveHighlights({
          [lesson.targetFrom]: { background: 'rgba(34, 197, 94, 0.5)' },
          [lesson.targetTo]: { background: 'rgba(34, 197, 94, 0.5)' },
        });
        setFeedback({ type: 'success', message: lesson.successMessage });
        setIsLessonPass(true);
        markLessonCompleted(lesson.id);
      }
    } catch (_e) { /* skip */ }
  }

  function onDrop(sourceSquare: string, targetSquare: string) {
    setOptionSquares({});
    if (isLessonPass || isUndoing) return false;

    try {
      const g = new Chess(game!.fen());
      const moveResult = g.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
      });

      if (moveResult) {
        if (moveResult.san === lesson.targetMove) {
          // ✅ CORRECT MOVE — keep it on the board with green highlights
          setGame(g);
          playMoveSound();
          setMoveHighlights({
            [sourceSquare]: { background: 'rgba(34, 197, 94, 0.5)' },
            [targetSquare]: { background: 'rgba(34, 197, 94, 0.5)' },
          });
          setFeedback({ type: 'success', message: lesson.successMessage });
          setIsLessonPass(true);
          markLessonCompleted(lesson.id);
          return true;
        } else {
          // ❌ WRONG MOVE — show it briefly with red highlights, then undo
          const newWrongs = wrongAttempts + 1;
          setWrongAttempts(newWrongs);
          setGame(g);
          setLastWrongMove(moveResult.san);
          playErrorSound();

          // Red highlights on the wrong move
          setMoveHighlights({
            [sourceSquare]: { background: 'rgba(239, 68, 68, 0.5)' },
            [targetSquare]: { background: 'rgba(239, 68, 68, 0.5)' },
          });

          // Build error message based on attempt count
          let errorMsg = '';
          if (newWrongs === 1) {
            errorMsg = `Movimiento incorrecto (${moveResult.san}). ¡Intenta de nuevo!`;
            setShowHint(true); // Show hint after first wrong attempt
          } else if (newWrongs >= 2) {
            errorMsg = `Incorrecto (${moveResult.san}). ${lesson.wrongMoveExplanation}`;
          }
          setFeedback({ type: 'error', message: errorMsg });

          // Undo the wrong move after 2.5 seconds so they can see what they did
          setIsUndoing(true);
          undoTimerRef.current = setTimeout(() => {
            g.undo();
            setGame(new Chess(g.fen()));
            setMoveHighlights({});
            setIsUndoing(false);
            setLastWrongMove(null);
          }, 2500);

          return true; // return true so the board shows the move
        }
      }
    } catch (_e: any) {
      setFeedback({ type: 'error', message: 'Ese movimiento no es legal. Intenta de nuevo.' });
      return false;
    }
    return false;
  }

  // Solution arrow for the target squares
  const customArrows: [string, string, string][] = showSolution && !isLessonPass
    ? [[lesson.targetFrom, lesson.targetTo, 'rgba(34, 197, 94, 0.8)']]
    : [];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 flex flex-col md:flex-row gap-8 min-h-[600px] transition-colors duration-300">
      
      {/* Left Panel */}
      <div className="flex-1 flex flex-col gap-5">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
              Módulo 6.1 — Ejercicio {currentLessonIndex + 1} de {module6_1Lessons.length}
            </span>
            {completedLessons.includes(lesson.id) && (
              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full">
                <CheckCircle2 size={14} /> Completada
              </span>
            )}
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1 mb-2">{lesson.title}</h2>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-700 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-300 px-2 py-0.5 rounded-full mb-4">
            📖 {lesson.openingName}
          </span>
          
          <p className="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed mb-4">
            {lesson.description}
          </p>

          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg">
            <h3 className="text-orange-800 dark:text-orange-200 font-semibold mb-2 flex items-center gap-2">
              🎯 Tu Reto
            </h3>
            <p className="text-orange-700 dark:text-orange-300 m-0 font-medium text-[15px]">
              {lesson.instruction}
            </p>
          </div>
        </div>

        {/* Hint (shown after 1st wrong) */}
        {showHint && !isLessonPass && (
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-3 rounded-xl flex items-start gap-2">
            <Lightbulb size={18} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">Pista</span>
              <p className="text-amber-800 dark:text-amber-200 text-sm font-medium m-0 mt-1">{lesson.hint}</p>
            </div>
          </div>
        )}

        {/* Show Solution button (after 2+ wrong attempts) */}
        {wrongAttempts >= 2 && !isLessonPass && !showSolution && (
          <button onClick={handleShowSolution}
            className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 shadow transition-all text-sm w-fit">
            <Eye size={16} /> Ver Solución
          </button>
        )}

        {/* Feedback */}
        {feedback.type && (
          <div className={`p-4 rounded-xl border flex items-start gap-3 transition-all ${
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

        {/* Attempt counter */}
        {wrongAttempts > 0 && !isLessonPass && (
          <div className="text-xs text-slate-400 dark:text-slate-500 font-medium">
            Intentos fallidos: {wrongAttempts}
          </div>
        )}

        {/* Navigation */}
        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
          <button onClick={prevLesson} disabled={currentLessonIndex === 0}
            className="px-5 py-2.5 text-slate-500 dark:text-slate-400 font-medium hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition-colors disabled:opacity-30">
            Anterior
          </button>
          {currentLessonIndex < module6_1Lessons.length - 1 ? (
            <button onClick={() => nextLesson(module6_1Lessons.length)}
              disabled={!isLessonPass && !completedLessons.includes(lesson.id)}
              className="flex items-center gap-2 px-6 py-2.5 bg-orange-600 text-white font-medium rounded-xl shadow-sm hover:bg-orange-700 hover:shadow transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              Siguiente Ejercicio <ArrowRight size={18} />
            </button>
          ) : (
            <button onClick={() => navigate('/')}
              disabled={!isLessonPass && !completedLessons.includes(lesson.id)}
              className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-xl shadow-sm hover:bg-indigo-700 hover:shadow transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              Finalizar Ejercicios <Trophy size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Right Panel — Board */}
      <div className="w-full md:w-[450px] lg:w-[500px] xl:w-[600px] flex flex-col gap-4 relative">
        <div className={`bg-slate-50 dark:bg-slate-900/50 p-2 md:p-4 rounded-2xl border transition-colors shadow-inner relative ${
          feedback.type === 'success' ? 'border-emerald-300 dark:border-emerald-700 bg-emerald-50/30 dark:bg-emerald-900/20' :
          feedback.type === 'error' ? 'border-red-300 dark:border-red-700 bg-red-50/30 dark:bg-red-900/20' :
          'border-slate-200/60 dark:border-slate-700/60'
        }`}>
          {isUndoing && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
              ❌ Movimiento incorrecto — deshaciendo...
            </div>
          )}
          <Chessboard
            position={game.fen()}
            onPieceDrop={onDrop}
            onPieceDragBegin={(_, sourceSquare) => getMoveOptions(sourceSquare)}
            animationDuration={300}
            arePiecesDraggable={!isLessonPass && !isUndoing}
            boardOrientation={initialTurn}
            customBoardStyle={{
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            }}
            customDarkSquareStyle={{ backgroundColor: '#475569' }}
            customLightSquareStyle={{ backgroundColor: '#f8fafc' }}
            customSquareStyles={{ ...optionSquares, ...moveHighlights }}
            customArrows={customArrows as any}
            showBoardNotation={true}
          />
        </div>
        <div className="flex justify-between items-center px-2">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {initialTurn === 'black' ? '⬛ Juegas con Negras' : '⬜ Juegas con Blancas'}
          </span>
          <button onClick={handleReset}
            className="flex items-center gap-1 text-sm text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors font-medium">
            <RotateCcw size={14} /> Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}
