import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chess, type Square } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { useProgressStore } from '../../store/useProgressStore';
import { module5Lessons, type Module5Lesson } from './data/lessons';
import { CheckCircle2, XCircle, ArrowRight, MousePointerClick, Trophy, Loader2 } from 'lucide-react';
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
  } catch (e) { /* silent fail */ }
};

export default function Module5() {
  const { currentLessonIndex, nextLesson, prevLesson, setCurrentModule, markLessonCompleted, completedLessons } = useProgressStore();
  const lesson: Module5Lesson = module5Lessons[currentLessonIndex] || module5Lessons[0];
  const navigate = useNavigate();
  
  const [game, setGame] = useState<Chess | null>(null);
  const [updater, setUpdater] = useState(0);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [optionSquares, setOptionSquares] = useState<Record<string, any>>({});
  const [isLessonPass, setIsLessonPass] = useState(false);
  const { analyzeBeforeMove, analyzeAfterMove, feedback: sfFeedback, isEvaluating } = useStockfish();

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

    newSquares[sourceSquare] = {
      background: 'rgba(255, 215, 0, 0.4)',
    };
    setOptionSquares(newSquares);
  };

  useEffect(() => {
    setCurrentModule(5);
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
    return <div className="p-8 text-center text-slate-500">Cargando lección del Módulo 5...</div>;
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

  function onSquareClick(square: string) {
    if (isLessonPass || lesson.mode !== 'find_square') return;
    
    if (square === lesson.targetSquare) {
      handleSuccess();
    } else {
      handleError(`Has hecho clic en la casilla ${square}. Intenta encontrar la casilla ${lesson.targetSquare}.`);
    }
  }

  function onDrop(sourceSquare: string, targetSquare: string) {
    setOptionSquares({});
    if (isLessonPass || lesson.mode === 'find_square') return false;

    try {
      const moveResult = game!.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q', 
      });

      if (moveResult) {
        if (lesson.mode === 'move_piece') {
          if (moveResult.san === lesson.targetMove) {
            handleSuccess();
          } else {
            analyzeAfterMove(game!.fen()).then((type) => {
              if (type === 'excellent' || type === 'brilliant' || type === 'good') {
                handleSuccess('¡Excelente jugada alternativa! Stockfish confirma que también es una decisión ganadora/correcta.');
              } else {
                const label = type === 'blunder' ? 'Grave Error' : type === 'mistake' ? 'Error' : 'Imprecisión';
                handleError(`Incorrecto. Eso es un ${label}. La jugada principal era ${lesson.targetMove}.`);
                setTimeout(() => {
                  if (!isLessonPass) {
                    game!.undo();
                    setUpdater(u => u + 1);
                  }
                }, 2500);
              }
            });
          }
        }
        setUpdater(u => u + 1);
        return true;
      }
    } catch (e: any) {
      handleError(`Ese movimiento no está permitido. Intenta de nuevo.`);
      return false;
    }
    return false;
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 flex flex-col md:flex-row gap-8 min-h-[600px] transition-colors duration-300">
      
      {/* Panel izquierdo: Teoría e Instrucciones */}
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Módulo 5 - Lección {currentLessonIndex + 1} de {module5Lessons.length}
            </span>
            {completedLessons.includes(lesson.id) && (
              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                <CheckCircle2 size={14} /> Completada
              </span>
            )}
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1 mb-4">{lesson.title}</h2>
          
          <div className="prose prose-slate">
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              {lesson.description}
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-r-lg mt-6 transition-colors">
              <h3 className="text-blue-800 font-semibold mb-2 flex items-center gap-2">
                🎯 Tu Reto
              </h3>
              <p className="text-blue-700 m-0 font-medium pb-2 text-lg">
                {lesson.instruction}
              </p>
              {lesson.mode === 'find_square' && (
                <div className="flex items-center gap-2 mt-2 text-emerald-800 dark:text-emerald-200 text-sm font-semibold bg-white/60 dark:bg-slate-800/60 p-2 rounded w-max">
                  <MousePointerClick size={16}/> Haz clic sobre la casilla directamente
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Feedback visual interactivo */}
        {feedback.type && (
           <div className={`p-4 rounded-xl border flex items-start gap-3 transition-all animate-in fade-in slide-in-from-bottom-2 ${
            feedback.type === 'success' 
              ? 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200' 
              : 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
          }`}>
            {feedback.type === 'success' ? <CheckCircle2 className="mt-0.5 shrink-0" /> : <XCircle className="mt-0.5 shrink-0" />}
            <span className="font-medium text-[15px]">{feedback.message}</span>
          </div>
        )}

        <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
          <button 
            onClick={prevLesson}
            disabled={currentLessonIndex === 0}
            className="px-5 py-2.5 text-slate-500 dark:text-slate-400 font-medium hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
          >
            Anterior
          </button>
          
          {currentLessonIndex < module5Lessons.length - 1 ? (
            <button 
              onClick={() => nextLesson(module5Lessons.length)}
              disabled={(!isLessonPass && !completedLessons.includes(lesson.id))}
              className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-medium rounded-xl shadow-sm hover:bg-blue-700 hover:shadow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente Lección <ArrowRight size={18} />
            </button>
          ) : (
            <button 
              onClick={() => navigate('/module/6')}
              disabled={(!isLessonPass && !completedLessons.includes(lesson.id))}
              className="flex items-center gap-2 px-6 py-2.5 bg-amber-600 text-white font-medium rounded-xl shadow-sm hover:bg-amber-700 hover:shadow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Ir al Módulo 6 <Trophy size={18} />
            </button>
          )}
        </div>
      </div>

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
            key={updater} // force re-render when piece moves
            position={game.fen()}
            onPieceDrop={onDrop}
            onPieceDragBegin={(_, sourceSquare) => getMoveOptions(sourceSquare)}
            onSquareClick={onSquareClick}
            animationDuration={200}
            customBoardStyle={{
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              cursor: lesson.mode === 'find_square' ? 'pointer' : 'default'
            }}
            customDarkSquareStyle={{ backgroundColor: "#475569" }}
            customLightSquareStyle={{ backgroundColor: "#f8fafc" }}
            customSquareStyles={{ ...optionSquares }}
            showBoardNotation={true}
          />
        </div>
        <div className="flex justify-between items-center px-2">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {lesson.mode === 'find_square' ? 'Prueba Visual' : 'Prueba de Movimiento'}
          </span>
          <button 
            onClick={() => {
              setGame(new Chess(lesson.initialFen));
              setFeedback({ type: null, message: '' });
              setOptionSquares({});
              setIsLessonPass(false);
              setUpdater(u => u + 1);
            }}
            className="text-sm text-slate-400 hover:text-slate-700 transition-colors font-medium"
          >
            Reiniciar tablero
          </button>
        </div>
      </div>

    </div>
  );
}
