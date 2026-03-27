import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chess, type Square } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { useProgressStore } from '../../store/useProgressStore';
import { module6_1Lessons, type ExerciseLesson } from './data/lessons';
import { CheckCircle2, XCircle, ArrowRight, Trophy, Loader2 } from 'lucide-react';
import { useStockfish } from '../../hooks/useStockfish';
import MoveFeedback from '../../components/chess/MoveFeedback';

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

export default function Module6_1() {
  const { currentLessonIndex, nextLesson, prevLesson, setCurrentModule, markLessonCompleted, completedLessons } = useProgressStore();
  const lesson: ExerciseLesson = module6_1Lessons[currentLessonIndex] || module6_1Lessons[0];
  const navigate = useNavigate();

  const [game, setGame] = useState<Chess | null>(null);
  const [updater, setUpdater] = useState(0);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [optionSquares, setOptionSquares] = useState<Record<string, any>>({});
  const [isLessonPass, setIsLessonPass] = useState(false);
  const { analyzeBeforeMove, analyzeAfterMove, feedback: sfFeedback, isEvaluating } = useStockfish();

  // Determine board orientation from FEN (whose turn it is)
  const boardOrientation = game && game.turn() === 'b' ? 'black' as const : 'white' as const;

  const getHighlightStyle = () => {
    const isDark = document.documentElement.classList.contains('dark');
    return isDark
      ? { background: 'radial-gradient(circle, rgba(255,255,255,.35) 25%, transparent 25%)', borderRadius: '50%' }
      : { background: 'radial-gradient(circle, rgba(0,0,0,.3) 25%, transparent 25%)', borderRadius: '50%' };
  };

  const getMoveOptions = (sourceSquare: string) => {
    if (isLessonPass || !game) return;
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
    if (game && !isLessonPass) {
      analyzeBeforeMove(game.fen());
    }
  }, [game, currentLessonIndex, isLessonPass]);

  useEffect(() => {
    setGame(new Chess(lesson.initialFen));
    setFeedback({ type: null, message: '' });
    setOptionSquares({});
    setIsLessonPass(completedLessons.includes(lesson.id));
    setUpdater(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.id]);

  if (!lesson || !game) {
    return <div className="p-8 text-center text-slate-500">Cargando ejercicio...</div>;
  }

  function handleSuccess(msg?: string) {
    setFeedback({ type: 'success', message: msg || lesson.successMessage });
    setIsLessonPass(true);
    markLessonCompleted(lesson.id);
    playMoveSound();
  }

  function handleError(msg: string) {
    setFeedback({ type: 'error', message: msg });
  }

  function onDrop(sourceSquare: string, targetSquare: string) {
    setOptionSquares({});
    if (isLessonPass) return false;

    try {
      const moveResult = game!.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
      });

      if (moveResult) {
        if (moveResult.san === lesson.targetMove) {
          handleSuccess();
        } else {
          analyzeAfterMove(game!.fen()).then((type) => {
            if (type === 'excellent' || type === 'brilliant' || type === 'good') {
              handleSuccess('¡Excelente jugada alternativa! Stockfish confirma que también es una decisión ganadora.');
            } else {
              const label = type === 'blunder' ? 'Grave Error' : type === 'mistake' ? 'Error' : 'Imprecisión';
              handleError(`Incorrecto (${label}). La jugada correcta era ${lesson.targetMove}.`);
              setTimeout(() => {
                if (!isLessonPass) {
                  game!.undo();
                  setUpdater((u: number) => u + 1);
                }
              }, 2500);
            }
          });
        }
        setUpdater((u: number) => u + 1);
        return true;
      }
    } catch (_e: any) {
      handleError('Ese movimiento no es legal. Intenta de nuevo.');
      return false;
    }
    return false;
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 flex flex-col md:flex-row gap-8 min-h-[600px] transition-colors duration-300">
      
      {/* Left Panel */}
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
              Módulo 6.1 - Ejercicio {currentLessonIndex + 1} de {module6_1Lessons.length}
            </span>
            {completedLessons.includes(lesson.id) && (
              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                <CheckCircle2 size={14} /> Completada
              </span>
            )}
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1 mb-2">{lesson.title}</h2>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-700 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-300 px-2 py-0.5 rounded-full mb-4">
            📖 {lesson.openingName}
          </span>
          
          <div className="prose prose-slate">
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              {lesson.description}
            </p>
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg mt-6">
              <h3 className="text-orange-800 dark:text-orange-200 font-semibold mb-2 flex items-center gap-2">
                🎯 Tu Reto
              </h3>
              <p className="text-orange-700 dark:text-orange-300 m-0 font-medium pb-2 text-lg">
                {lesson.instruction}
              </p>
            </div>
          </div>
        </div>

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
        <MoveFeedback type={sfFeedback.type} visible={sfFeedback.visible} />
        <div className={`bg-slate-50 dark:bg-slate-900/50 p-2 md:p-4 rounded-2xl border transition-colors shadow-inner relative ${
          feedback.type === 'success' ? 'border-emerald-300 dark:border-emerald-700 bg-emerald-50/30 dark:bg-emerald-900/20' :
          feedback.type === 'error' ? 'border-red-300 dark:border-red-700 bg-red-50/30 dark:bg-red-900/20' :
          'border-slate-200/60 dark:border-slate-700/60'
        }`}>
          {isEvaluating && (
            <div className="absolute inset-0 z-10 bg-white/40 dark:bg-slate-900/40 rounded-2xl flex items-center justify-center">
              <div className="bg-white dark:bg-slate-800 shadow-lg rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 animate-pulse">
                <Loader2 size={16} className="animate-spin text-blue-600" /> Analizando IA...
              </div>
            </div>
          )}
          <Chessboard
            key={updater}
            position={game.fen()}
            onPieceDrop={onDrop}
            onPieceDragBegin={(_, sourceSquare) => getMoveOptions(sourceSquare)}
            animationDuration={200}
            boardOrientation={boardOrientation}
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
            {boardOrientation === 'black' ? '⬛ Juegas con Negras' : '⬜ Juegas con Blancas'}
          </span>
          <button onClick={() => {
            setGame(new Chess(lesson.initialFen));
            setFeedback({ type: null, message: '' });
            setOptionSquares({});
            setIsLessonPass(false);
            setUpdater((u: number) => u + 1);
          }} className="text-sm text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors font-medium">
            Reiniciar tablero
          </button>
        </div>
      </div>
    </div>
  );
}
