import { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { useProgressStore } from '../../store/useProgressStore';
import { Copy, RefreshCw, ChevronLeft, ChevronRight, Gamepad2, CheckCircle2 } from 'lucide-react';

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

export default function Module3() {
  const { setCurrentModule } = useProgressStore();
  
  // Guardamos un historial plano de FENs y la partida actual real
  const [game, setGame] = useState(new Chess());
  const [fenHistory, setFenHistory] = useState<string[]>([new Chess().fen()]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCurrentModule(3);
  }, [setCurrentModule]);

  function onDrop(sourceSquare: string, targetSquare: string, piece: string) {
    // Si estamos viendo una jugada pasada, descartamos el futuro si el jugador decide hacer un nuevo movimiento desde allí.
    const isViewingPast = currentMoveIndex < fenHistory.length - 1;
    let activeGame = game;

    if (isViewingPast) {
      // Recrear el juego hasta el punto actual
      activeGame = new Chess(fenHistory[currentMoveIndex]);
    }

    try {
      const moveResult = activeGame.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: piece[1].toLowerCase() ?? 'q',
      });

      if (moveResult) {
        const newFen = activeGame.fen();
        let newHistory = [...fenHistory];
        
        if (isViewingPast) {
          newHistory = newHistory.slice(0, currentMoveIndex + 1);
        }
        
        newHistory.push(newFen);
        
        setGame(activeGame);
        setFenHistory(newHistory);
        setCurrentMoveIndex(newHistory.length - 1);
        playMoveSound();
        return true;
      }
    } catch {
      return false;
    }
    return false;
  }

  const navigateHistory = (direction: 'back' | 'forward') => {
    if (direction === 'back' && currentMoveIndex > 0) {
      setCurrentMoveIndex(currentMoveIndex - 1);
    } else if (direction === 'forward' && currentMoveIndex < fenHistory.length - 1) {
      setCurrentMoveIndex(currentMoveIndex + 1);
    }
  };

  const resetGame = () => {
    const newGame = new Chess();
    setGame(newGame);
    setFenHistory([newGame.fen()]);
    setCurrentMoveIndex(0);
  };

  const copyPGN = () => {
    navigator.clipboard.writeText(game.pgn());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // El PGN en modo texto crudo para mostrar (chess.js maneja la notación completa si usamos su pgn() internamente)
  const currentPgn = game.pgn() || "La partida aún no ha comenzado.";

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 flex flex-col md:flex-row gap-8 min-h-[600px] transition-colors duration-300">
      
      {/* Panel izquierdo: Tablero Libre */}
      <div className="w-full md:w-[450px] lg:w-[500px] xl:w-[600px] flex flex-col gap-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-indigo-900 dark:text-indigo-100">
            <Gamepad2 size={24} className="text-indigo-600 dark:text-indigo-400"/> Tablero Libre
          </h2>
          <span className="text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full">
            Práctica Libre
          </span>
        </div>
        
        <div className="bg-slate-50 dark:bg-slate-900/50 p-2 md:p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 transition-colors shadow-inner">
          <Chessboard
            position={fenHistory[currentMoveIndex]}
            onPieceDrop={onDrop}
            animationDuration={200}
            customBoardStyle={{
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
            }}
            customDarkSquareStyle={{ backgroundColor: "#475569" }}
            customLightSquareStyle={{ backgroundColor: "#f8fafc" }}
            showBoardNotation={true}
          />
        </div>
        
        <div className="flex justify-between items-center px-2 mt-2">
          <div className="flex gap-2">
            <button 
              onClick={() => navigateHistory('back')}
              disabled={currentMoveIndex === 0}
              className="p-2 border dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-slate-700 dark:text-slate-300"
              title="Retroceder Jugada"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => navigateHistory('forward')}
              disabled={currentMoveIndex === fenHistory.length - 1}
              className="p-2 border dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-slate-700 dark:text-slate-300"
              title="Avanzar Jugada"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <button 
            onClick={resetGame}
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium border dark:border-slate-700 px-3 py-1.5 rounded-lg hover:border-red-200 dark:hover:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/30"
          >
            <RefreshCw size={14} /> Reiniciar Partida
          </button>
        </div>
      </div>

      {/* Panel derecho: Historial PGN y Herramientas */}
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Historial de la Partida (PGN)</h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Aquí puedes ver la transcripción oficial de tu partida en Notación Algebraica. 
            El PGN (Portable Game Notation) es el estándar internacional para registrar partidas de ajedrez.
          </p>
          
          <div className="relative group">
            <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 h-[300px] overflow-y-auto font-mono text-sm leading-relaxed text-slate-700 dark:text-slate-300 shadow-inner break-words">
              {currentPgn}
            </div>
            <button 
              onClick={copyPGN}
              className="absolute top-3 right-3 p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 text-slate-700 dark:text-slate-300 transition-all opacity-0 group-hover:opacity-100 flex items-center gap-2 text-sm font-medium"
            >
              {copied ? <CheckCircle2 size={16} className="text-emerald-500"/> : <Copy size={16} />}
              {copied ? '¡Copiado!' : 'Copiar PGN'}
            </button>
          </div>
        </div>

        <div className="mt-auto bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-xl p-5">
           <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Instrucciones de Práctica</h4>
           <ul className="list-disc list-inside text-indigo-800 dark:text-indigo-200 space-y-1 text-sm">
             <li>Juega una partida completa contra ti mismo o un amigo.</li>
             <li>El motor valida todas las reglas: jaques, coronación y enroques.</li>
             <li>Si te equivocas, usa las flechas inferiores para retroceder en el tiempo y probar otra idea.</li>
             <li>Copia el PGN resultante y analízalo en motores como Lichess o Chess.com.</li>
           </ul>
        </div>
      </div>

    </div>
  );
}
