import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chess, type Square } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { useProgressStore } from '../../store/useProgressStore';
import { module6Lessons, type Module6Lesson } from './data/lessons';
import { CheckCircle2, XCircle, ArrowRight, Trophy, Play, RotateCcw, Eye, Gamepad2 } from 'lucide-react';

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

type Phase = 'demo' | 'practice';

export default function Module6() {
  const { currentLessonIndex, nextLesson, prevLesson, setCurrentModule, markLessonCompleted, completedLessons } = useProgressStore();
  const lesson: Module6Lesson = module6Lessons[currentLessonIndex] || module6Lessons[0];
  const navigate = useNavigate();

  const [game, setGame] = useState<Chess>(new Chess());
  const [phase, setPhase] = useState<Phase>('demo');
  const [demoIndex, setDemoIndex] = useState(-1);
  const [demoPlaying, setDemoPlaying] = useState(false);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [waitingForOpponent, setWaitingForOpponent] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [optionSquares, setOptionSquares] = useState<Record<string, any>>({});
  const [isLessonPass, setIsLessonPass] = useState(false);
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
  const demoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isPlayingBlack = lesson.playerColor === 'black';

  const getHighlightStyle = () => {
    const isDark = document.documentElement.classList.contains('dark');
    return isDark
      ? { background: 'radial-gradient(circle, rgba(255,255,255,.35) 25%, transparent 25%)', borderRadius: '50%' }
      : { background: 'radial-gradient(circle, rgba(0,0,0,.3) 25%, transparent 25%)', borderRadius: '50%' };
  };

  const getMoveOptions = (sourceSquare: string) => {
    if (phase !== 'practice' || waitingForOpponent || isLessonPass || !game) return;
    const newSquares: Record<string, any> = {};
    const style = getHighlightStyle();
    const moves = game.moves({ square: sourceSquare as Square, verbose: true });
    moves.forEach((move: any) => { newSquares[move.to] = style; });
    newSquares[sourceSquare] = { background: 'rgba(255, 215, 0, 0.4)' };
    setOptionSquares(newSquares);
  };

  // Helper: get the student's move and opponent's move from a pair
  const getStudentMove = (pair: { white: string; black?: string }) => {
    return isPlayingBlack ? pair.black : pair.white;
  };
  const getOpponentMove = (pair: { white: string; black?: string }) => {
    return isPlayingBlack ? pair.white : pair.black;
  };
  const getHint = (idx: number) => {
    return lesson.moves[idx]?.hint || '';
  };

  useEffect(() => {
    setCurrentModule(6);
  }, [setCurrentModule]);

  useEffect(() => {
    setGame(new Chess());
    setPhase('demo');
    setDemoIndex(-1);
    setDemoPlaying(false);
    setPracticeIndex(0);
    setWaitingForOpponent(false);
    setFeedback({ type: null, message: '' });
    setOptionSquares({});
    setMoveHistory([]);
    setIsLessonPass(completedLessons.includes(lesson.id));
    if (demoTimerRef.current) clearTimeout(demoTimerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.id]);

  // ─── DEMO MODE ────────────────────────────────────────────
  const playNextDemoStep = useCallback(() => {
    setDemoIndex(prev => {
      const next = prev + 1;
      if (next >= lesson.moves.length) {
        setDemoPlaying(false);
        return prev;
      }
      const pair = lesson.moves[next];

      setGame(prevGame => {
        const g = new Chess(prevGame.fen());
        try {
          const wResult = g.move(pair.white);
          if (wResult) {
            playMoveSound();
            setMoveHistory(h => [...h, wResult.san]);
          }
        } catch (_e) { /* skip */ }

        if (pair.black) {
          demoTimerRef.current = setTimeout(() => {
            setGame(prevG2 => {
              const g2 = new Chess(prevG2.fen());
              try {
                const bResult = g2.move(pair.black!);
                if (bResult) {
                  playMoveSound();
                  setMoveHistory(h => [...h, bResult.san]);
                }
              } catch (_e) { /* skip */ }
              demoTimerRef.current = setTimeout(() => {
                playNextDemoStep();
              }, 800);
              return g2;
            });
          }, 800);
        } else {
          setDemoPlaying(false);
        }
        return g;
      });
      return next;
    });
  }, [lesson.moves]);

  const startDemo = useCallback(() => {
    setGame(new Chess());
    setDemoIndex(-1);
    setDemoPlaying(true);
    setMoveHistory([]);
    if (demoTimerRef.current) clearTimeout(demoTimerRef.current);
    demoTimerRef.current = setTimeout(() => {
      playNextDemoStep();
    }, 600);
  }, [playNextDemoStep]);

  const switchToPractice = useCallback(() => {
    if (demoTimerRef.current) clearTimeout(demoTimerRef.current);
    const newGame = new Chess();
    setPhase('practice');
    setDemoPlaying(false);
    setDemoIndex(-1);
    setPracticeIndex(0);
    setWaitingForOpponent(false);
    setFeedback({ type: null, message: '' });
    setOptionSquares({});
    setMoveHistory([]);

    // If black: white moves first automatically
    if (isPlayingBlack) {
      const firstPair = lesson.moves[0];
      if (firstPair) {
        setWaitingForOpponent(true);
        setTimeout(() => {
          try {
            const result = newGame.move(firstPair.white);
            if (result) {
              playMoveSound();
              setMoveHistory(h => [...h, result.san]);
            }
          } catch (_e) { /* skip */ }
          setGame(new Chess(newGame.fen()));
          setWaitingForOpponent(false);
        }, 600);
      }
    }
    setGame(newGame);
  }, [isPlayingBlack, lesson.moves]);

  const switchToDemo = () => {
    if (demoTimerRef.current) clearTimeout(demoTimerRef.current);
    setPhase('demo');
    setDemoPlaying(false);
    setDemoIndex(-1);
    setGame(new Chess());
    setFeedback({ type: null, message: '' });
    setOptionSquares({});
    setMoveHistory([]);
  };

  // ─── PRACTICE MODE ────────────────────────────────────────
  function onDrop(sourceSquare: string, targetSquare: string) {
    setOptionSquares({});
    if (phase !== 'practice' || waitingForOpponent || isLessonPass) return false;

    const currentPair = lesson.moves[practiceIndex];
    if (!currentPair) return false;

    const expectedStudentMove = getStudentMove(currentPair);
    if (!expectedStudentMove) return false;

    try {
      const g = new Chess(game.fen());
      const moveResult = g.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
      });

      if (moveResult) {
        if (moveResult.san === expectedStudentMove) {
          // Correct!
          setGame(g);
          setMoveHistory(h => [...h, moveResult.san]);
          playMoveSound();
          setFeedback({ type: null, message: '' });

          const opponentReply = getOpponentMove(currentPair);
          if (opponentReply) {
            // Opponent auto-replies
            setWaitingForOpponent(true);
            setTimeout(() => {
              setGame(prevG => {
                const g2 = new Chess(prevG.fen());
                try {
                  const oResult = g2.move(opponentReply);
                  if (oResult) {
                    playMoveSound();
                    setMoveHistory(h => [...h, oResult.san]);
                  }
                } catch (_e) { /* skip */ }
                return g2;
              });
              setWaitingForOpponent(false);

              const nextIdx = practiceIndex + 1;
              if (nextIdx >= lesson.moves.length) {
                setFeedback({ type: 'success', message: lesson.successMessage });
                setIsLessonPass(true);
                markLessonCompleted(lesson.id);
              } else {
                setPracticeIndex(nextIdx);
                // If playing black, white moves first in the next pair too
                if (isPlayingBlack) {
                  const nextPair = lesson.moves[nextIdx];
                  if (nextPair) {
                    setWaitingForOpponent(true);
                    setTimeout(() => {
                      setGame(prevG => {
                        const g3 = new Chess(prevG.fen());
                        try {
                          const wResult = g3.move(nextPair.white);
                          if (wResult) {
                            playMoveSound();
                            setMoveHistory(h => [...h, wResult.san]);
                          }
                        } catch (_e) { /* skip */ }
                        return g3;
                      });
                      setWaitingForOpponent(false);
                    }, 600);
                  }
                }
              }
            }, 600);
          } else {
            // No opponent reply → sequence complete
            setFeedback({ type: 'success', message: lesson.successMessage });
            setIsLessonPass(true);
            markLessonCompleted(lesson.id);
          }
          return true;
        } else {
          setFeedback({ type: 'error', message: `Movimiento incorrecto. Debes jugar ${expectedStudentMove}. ${getHint(practiceIndex)}` });
          return false;
        }
      }
    } catch (_e) {
      setFeedback({ type: 'error', message: 'Ese movimiento no es legal. Intenta de nuevo.' });
      return false;
    }
    return false;
  }

  const renderMoveList = () => {
    const pairs: { num: number; w?: string; b?: string }[] = [];
    for (let i = 0; i < moveHistory.length; i += 2) {
      pairs.push({ num: Math.floor(i / 2) + 1, w: moveHistory[i], b: moveHistory[i + 1] });
    }
    return pairs;
  };

  useEffect(() => {
    return () => { if (demoTimerRef.current) clearTimeout(demoTimerRef.current); };
  }, []);

  const currentStudentHint = phase === 'practice' && !isLessonPass && lesson.moves[practiceIndex]
    ? getHint(practiceIndex)
    : '';

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 flex flex-col md:flex-row gap-8 min-h-[600px] transition-colors duration-300">
      
      {/* Left Panel */}
      <div className="flex-1 flex flex-col gap-5">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Módulo 6 - Apertura {currentLessonIndex + 1} de {module6Lessons.length}
            </span>
            {completedLessons.includes(lesson.id) && (
              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                <CheckCircle2 size={14} /> Completada
              </span>
            )}
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1 mb-1">{lesson.title}</h2>
          {isPlayingBlack && (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-100 bg-slate-800 dark:bg-slate-600 px-2 py-0.5 rounded-full mb-3">
              ⬛ Juegas con Negras
            </span>
          )}
          {!isPlayingBlack && (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-200 dark:bg-slate-500 dark:text-slate-100 px-2 py-0.5 rounded-full mb-3">
              ⬜ Juegas con Blancas
            </span>
          )}
          
          <p className="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed mb-4">
            {lesson.description}
          </p>

          {/* Phase Toggle */}
          <div className="flex gap-2 mb-4">
            <button onClick={switchToDemo}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                phase === 'demo'
                  ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 border-2 border-amber-400'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-2 border-transparent hover:border-slate-300'
              }`}>
              <Eye size={16} /> Ver Demostración
            </button>
            <button onClick={switchToPractice}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                phase === 'practice'
                  ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 border-2 border-emerald-400'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-2 border-transparent hover:border-slate-300'
              }`}>
              <Gamepad2 size={16} /> Practicar
            </button>
          </div>

          {phase === 'demo' ? (
            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <h3 className="text-amber-800 dark:text-amber-200 font-semibold mb-2 flex items-center gap-2">
                🎬 Modo Demostración
              </h3>
              <p className="text-amber-700 dark:text-amber-300 m-0 font-medium text-sm">
                Observa cómo se desarrolla la apertura en vivo. Las piezas se mueven automáticamente.
              </p>
              {!demoPlaying && (
                <button onClick={startDemo}
                  className="mt-3 flex items-center gap-2 px-5 py-2 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 shadow transition-all text-sm">
                  <Play size={16} /> {demoIndex >= 0 ? 'Repetir Demostración' : 'Iniciar Demostración'}
                </button>
              )}
              {demoPlaying && (
                <div className="mt-3 flex items-center gap-2 text-amber-700 dark:text-amber-300 text-sm font-medium animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                  Reproduciendo apertura...
                </div>
              )}
            </div>
          ) : (
            <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg">
              <h3 className="text-emerald-800 dark:text-emerald-200 font-semibold mb-2 flex items-center gap-2">
                🎯 Tu Turno — Practica la Apertura
              </h3>
              <p className="text-emerald-700 dark:text-emerald-300 m-0 font-medium text-sm">
                {lesson.instruction}
              </p>
              {currentStudentHint && !isLessonPass && (
                <div className="mt-3 bg-white/70 dark:bg-slate-800/70 rounded-lg px-3 py-2 text-sm text-emerald-800 dark:text-emerald-200 font-medium flex items-center gap-2">
                  💡 Pista: {currentStudentHint}
                </div>
              )}
              {waitingForOpponent && (
                <div className="mt-3 flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm font-medium animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-slate-500 animate-ping" />
                  {isPlayingBlack ? '⬜ Blancas jugando...' : '⬛ Negras respondiendo...'}
                </div>
              )}
              {/* Progress bar */}
              {!isLessonPass && (
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-emerald-700 dark:text-emerald-300 mb-1">
                    <span>Progreso</span>
                    <span>{practiceIndex}/{lesson.moves.length} jugadas</span>
                  </div>
                  <div className="w-full bg-emerald-200 dark:bg-emerald-900 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${(practiceIndex / lesson.moves.length) * 100}%` }} />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Move History */}
        {moveHistory.length > 0 && (
          <div className="bg-slate-50 dark:bg-slate-900/40 rounded-xl p-3 border border-slate-200 dark:border-slate-700">
            <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Jugadas</h4>
            <div className="flex flex-wrap gap-1">
              {renderMoveList().map((pair) => (
                <span key={pair.num} className="text-sm font-mono bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                  {pair.num}. {pair.w}{pair.b ? ` ${pair.b}` : ''}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Feedback */}
        {feedback.type && (
          <div className={`p-4 rounded-xl border flex items-start gap-3 transition-all ${
            feedback.type === 'success'
              ? 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
              : 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
          }`}>
            {feedback.type === 'success' ? <CheckCircle2 className="mt-0.5 shrink-0" /> : <XCircle className="mt-0.5 shrink-0" />}
            <span className="font-medium text-[15px]">{feedback.message}</span>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
          <button onClick={prevLesson} disabled={currentLessonIndex === 0}
            className="px-5 py-2.5 text-slate-500 dark:text-slate-400 font-medium hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition-colors disabled:opacity-30">
            Anterior
          </button>
          {currentLessonIndex < module6Lessons.length - 1 ? (
            <button onClick={() => nextLesson(module6Lessons.length)}
              className="flex items-center gap-2 px-6 py-2.5 bg-amber-600 text-white font-medium rounded-xl shadow-sm hover:bg-amber-700 hover:shadow transition-all">
              Siguiente Apertura <ArrowRight size={18} />
            </button>
          ) : (
            <button onClick={() => navigate('/')}
              className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-xl shadow-sm hover:bg-indigo-700 hover:shadow transition-all">
              Finalizar Curso <Trophy size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Right Panel — Board */}
      <div className="w-full md:w-[450px] lg:w-[500px] xl:w-[600px] flex flex-col gap-4">
        <div className={`bg-slate-50 dark:bg-slate-900/50 p-2 md:p-4 rounded-2xl border transition-colors shadow-inner relative ${
          feedback.type === 'success' ? 'border-emerald-300 dark:border-emerald-700 bg-emerald-50/30 dark:bg-emerald-900/20' :
          feedback.type === 'error' ? 'border-red-300 dark:border-red-700 bg-red-50/30 dark:bg-red-900/20' :
          'border-slate-200/60 dark:border-slate-700/60'
        }`}>
          {(phase === 'demo' || waitingForOpponent) && (
            <div className="absolute inset-0 z-10 rounded-2xl" style={{ pointerEvents: 'all' }} />
          )}
          <Chessboard
            position={game.fen()}
            onPieceDrop={onDrop}
            onPieceDragBegin={(_, sourceSquare) => getMoveOptions(sourceSquare)}
            animationDuration={300}
            arePiecesDraggable={phase === 'practice' && !waitingForOpponent && !isLessonPass}
            boardOrientation={phase === 'practice' && isPlayingBlack ? 'black' : 'white'}
            customBoardStyle={{
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            }}
            customDarkSquareStyle={{ backgroundColor: '#475569' }}
            customLightSquareStyle={{ backgroundColor: '#f8fafc' }}
            customSquareStyles={{ ...optionSquares }}
            showBoardNotation={true}
          />
        </div>
        <div className="flex justify-between items-center px-2">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {phase === 'demo' ? '🎬 Demostración' : waitingForOpponent ? (isPlayingBlack ? '⬜ Turno de blancas' : '⬛ Turno del oponente') : (isPlayingBlack ? '⬛ Tu turno (negras)' : '⬜ Tu turno (blancas)')}
          </span>
          <button
            onClick={() => {
              if (demoTimerRef.current) clearTimeout(demoTimerRef.current);
              if (phase === 'practice') { switchToPractice(); } else { switchToDemo(); }
            }}
            className="flex items-center gap-1 text-sm text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors font-medium">
            <RotateCcw size={14} /> Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}
