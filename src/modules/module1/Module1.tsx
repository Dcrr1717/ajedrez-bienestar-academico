import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chess, type Square } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { useProgressStore } from '../../store/useProgressStore';
import { module1Lessons, type Lesson } from './data/lessons';
import { CheckCircle2, XCircle, ArrowRight, Trophy } from 'lucide-react';

// Soft move sound using Web Audio API
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

export default function Module1() {
  const { currentLessonIndex, nextLesson, prevLesson, markLessonCompleted, completedLessons } = useProgressStore();
  const lesson: Lesson = module1Lessons[currentLessonIndex] || module1Lessons[0];
  const navigate = useNavigate();
  
  const [game, setGame] = useState<Chess | null>(null);
  const [sandboxPos, setSandboxPos] = useState<Record<string, string>>({});
  const [updater, setUpdater] = useState(0);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [optionSquares, setOptionSquares] = useState<Record<string, any>>({});
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);

  const initLesson = useCallback((l: Lesson) => {
    if (l.mode === 'scenario') {
      setGame(new Chess(l.initialFen));
      setSandboxPos({});
    } else {
      setGame(null);
      setSandboxPos({
        [l.initialSquare!]: l.pieceColor! + l.pieceType!.toUpperCase()
      });
    }
  }, []);

  useEffect(() => {
    initLesson(lesson);
    setFeedback({ type: null, message: '' });
    setOptionSquares({});
    setSelectedSquare(null);
    setUpdater(0);
    markLessonCompleted(lesson.id);
  }, [currentLessonIndex, lesson, markLessonCompleted, initLesson]);

  if (!lesson) {
    return <div className="p-8 text-center text-slate-500">Cargando lección...</div>;
  }

  const getVisiblePosition = () => {
    if (lesson.mode === 'sandbox') return sandboxPos;
    return game ? game.fen() : {};
  };

  const validateSandboxMove = (type: string, source: string, target: string) => {
    const files = 'abcdefgh';
    const sx = files.indexOf(source[0]);
    const sy = parseInt(source[1]) - 1;
    const tx = files.indexOf(target[0]);
    const ty = parseInt(target[1]) - 1;

    const dx = Math.abs(tx - sx);
    const dy = Math.abs(ty - sy);

    if (dx === 0 && dy === 0) return false;

    switch (type) {
      case 'r': return dx === 0 || dy === 0;
      case 'b': return dx === dy;
      case 'q': return dx === 0 || dy === 0 || dx === dy;
      case 'k': return dx <= 1 && dy <= 1;
      case 'n': return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
      default: return false;
    }
  };

  const getHighlightStyle = () => {
    const isDark = document.documentElement.classList.contains('dark');
    return isDark
      ? { background: 'radial-gradient(circle, rgba(255,255,255,.35) 25%, transparent 25%)', borderRadius: '50%' }
      : { background: 'radial-gradient(circle, rgba(0,0,0,.3) 25%, transparent 25%)', borderRadius: '50%' };
  };

  const getMoveOptions = (sourceSquare: string, piece: string) => {
    const newSquares: Record<string, any> = {};
    const style = getHighlightStyle();

    if (lesson.mode === 'scenario' && game) {
      const pieceColor = piece[0]; // 'w' or 'b'
      let activeGame = game;
      
      if (pieceColor !== game.turn()) {
        const fenParts = game.fen().split(' ');
        fenParts[1] = pieceColor;
        fenParts[3] = '-';
        const tempGame = new Chess();
        try {
          tempGame.load(fenParts.join(' '));
          activeGame = tempGame;
        } catch (e) { /* ignore */ }
      }

      const moves = activeGame.moves({ square: sourceSquare as Square, verbose: true });
      moves.forEach((move: any) => { newSquares[move.to] = style; });
    } else if (lesson.mode === 'sandbox') {
      const type = piece[1].toLowerCase();
      const files = 'abcdefgh';
      const ranks = '12345678';
      for (const f of files) {
        for (const r of ranks) {
          const target = f + r;
          if (validateSandboxMove(type, sourceSquare, target)) {
            newSquares[target] = style;
          }
        }
      }
    }
    // Highlight selected square
    newSquares[sourceSquare] = {
      background: 'rgba(255, 215, 0, 0.4)',
    };
    setOptionSquares(newSquares);
    setSelectedSquare(sourceSquare);
  };

  const handleSquareClick = (square: string) => {
    // If clicking the selected square again, clear selection
    if (selectedSquare === square) {
      setOptionSquares({});
      setSelectedSquare(null);
      return;
    }

    // If a square is selected and a drop target is clicked, attempt move in sandbox
    if (selectedSquare && lesson.mode === 'sandbox') {
      const didMove = onDrop(selectedSquare, square);
      if (didMove) {
        setOptionSquares({});
        setSelectedSquare(null);
        return;
      }
    }

    // Try to find piece on clicked square
    let pieceOnSquare: string | null = null;
    if (lesson.mode === 'scenario' && game) {
      const p = game.get(square as Square);
      if (p) pieceOnSquare = (p.color === 'w' ? 'w' : 'b') + p.type.toUpperCase();
    } else if (lesson.mode === 'sandbox') {
      pieceOnSquare = sandboxPos[square] || null;
    }

    if (pieceOnSquare) {
      getMoveOptions(square, pieceOnSquare);
    } else {
      setOptionSquares({});
      setSelectedSquare(null);
    }
  };

  function onDrop(sourceSquare: string, targetSquare: string): boolean {
    setOptionSquares({});
    setSelectedSquare(null);

    if (lesson.mode === 'scenario') {
      try {
        const pieceInfo = game!.get(sourceSquare as Square);
        if (!pieceInfo) return false;

        let activeGame = game!;
        if (pieceInfo.color !== game!.turn()) {
          const fenParts = game!.fen().split(' ');
          fenParts[1] = pieceInfo.color;
          fenParts[3] = '-';
          const tempGame = new Chess();
          try {
            tempGame.load(fenParts.join(' '));
            activeGame = tempGame;
          } catch (e) { /* ignore */ }
        }

        const moveResult = activeGame.move({
          from: sourceSquare,
          to: targetSquare,
          promotion: 'q', 
        });

        if (moveResult) {
          setGame(new Chess(activeGame.fen()));
          playMoveSound();
          setFeedback({ type: 'success', message: lesson.successMessage || '¡Excelente movimiento!' });
          setUpdater(u => u + 1);
          return true;
        } else {
          setFeedback({ type: 'error', message: `Movimiento inválido o rey bajo ataque.` });
          return false;
        }
      } catch (e: any) {
        setFeedback({ type: 'error', message: `Movimiento inválido.` });
        return false;
      }
    } else {
      // Sandbox Mode
      const piece = sandboxPos[sourceSquare];
      if (!piece) return false;

      const type = piece[1].toLowerCase();
      const isValid = validateSandboxMove(type, sourceSquare, targetSquare);

      if (isValid) {
        const newPos = { ...sandboxPos };
        delete newPos[sourceSquare];
        newPos[targetSquare] = piece;
        setSandboxPos(newPos);
        playMoveSound();
        setFeedback({ type: 'success', message: lesson.successMessage || '¡Excelente movimiento!' });
        return true;
      } else {
        setFeedback({ type: 'error', message: `Ese movimiento no corresponde al patrón de la pieza.` });
        return false;
      }
    }
  }

  // Dynamic turn indicator
  const currentTurn = lesson.mode === 'scenario' && game ? game.turn() : 'w';
  const turnLabel = currentTurn === 'w' ? '⬜ Turno de Blancas' : '⬛ Turno de Negras';

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 flex flex-col md:flex-row gap-8 min-h-[600px] transition-colors duration-300">
      
      {/* Panel izquierdo: Teoría e Instrucciones — animate on lesson change */}
      <div key={currentLessonIndex} className="flex-1 flex flex-col gap-6 animate-in fade-in slide-in-from-left-4 duration-300">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Lección {currentLessonIndex + 1} de {module1Lessons.length}
            </span>
            {completedLessons.includes(lesson.id) && (
              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-1 rounded-full">
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
              <h3 className="text-blue-800 dark:text-blue-300 font-semibold mb-2 flex items-center gap-2">
                🎮 Interactúa Libremente
              </h3>
              <p className="text-blue-700 dark:text-blue-200 m-0 font-medium">
                {lesson.instruction}
              </p>
              <p className="text-blue-500 dark:text-blue-400 text-sm mt-3 m-0 italic">
                💡 Haz clic o arrastra una pieza para ver sus movimientos posibles.
              </p>
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

        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
          <button 
            onClick={prevLesson}
            disabled={currentLessonIndex === 0}
            className="px-5 py-2.5 text-slate-500 dark:text-slate-400 font-medium hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
          >
            Anterior
          </button>
          
          {currentLessonIndex < module1Lessons.length - 1 ? (
            <button 
              onClick={() => nextLesson(module1Lessons.length)}
              className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-medium rounded-xl shadow-sm hover:bg-blue-700 hover:shadow transition-all"
            >
              Siguiente Lección <ArrowRight size={18} />
            </button>
          ) : (
            <button 
              onClick={() => navigate('/module/2')}
              className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white font-medium rounded-xl shadow-sm hover:bg-emerald-700 hover:shadow transition-all"
            >
              Ir al Módulo 2 <Trophy size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Panel derecho: Tablero Interactivo */}
      <div className="w-full md:w-[450px] lg:w-[500px] xl:w-[600px] flex flex-col gap-4">
        <div className={`bg-slate-50 dark:bg-slate-900/50 p-2 md:p-3 rounded-2xl border transition-colors shadow-inner ${
          feedback.type === 'success' ? 'border-emerald-300 dark:border-emerald-700 bg-emerald-50/30 dark:bg-emerald-900/20' : 
          feedback.type === 'error' ? 'border-red-300 dark:border-red-700 bg-red-50/30 dark:bg-red-900/20' : 
          'border-slate-200/60 dark:border-slate-700/60'
        }`}>
          <Chessboard
            key={updater}
            position={getVisiblePosition()}
            onPieceDrop={onDrop}
            onPieceDragBegin={(piece, sourceSquare) => getMoveOptions(sourceSquare, piece)}
            onSquareClick={handleSquareClick}
            animationDuration={200}
            showBoardNotation={true}
            customBoardStyle={{
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
            }}
            customDarkSquareStyle={{ backgroundColor: "#475569" }}
            customLightSquareStyle={{ backgroundColor: "#f8fafc" }}
            customSquareStyles={{ ...optionSquares }}
          />
        </div>
        <div className="flex justify-between items-center px-2">
          {/* Dynamic turn indicator */}
          <span className={`text-sm font-semibold px-3 py-1.5 rounded-full border transition-colors ${
            currentTurn === 'w' 
              ? 'text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700' 
              : 'text-slate-800 dark:text-slate-100 border-slate-700 dark:border-slate-400 bg-slate-800 dark:bg-slate-600 text-white'
          }`}>
            {turnLabel}
          </span>
          <button 
            onClick={() => {
              initLesson(lesson);
              setFeedback({ type: null, message: '' });
              setOptionSquares({});
              setSelectedSquare(null);
            }}
            className="text-sm text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors font-medium"
          >
            Reiniciar tablero
          </button>
        </div>
      </div>

    </div>
  );
}
