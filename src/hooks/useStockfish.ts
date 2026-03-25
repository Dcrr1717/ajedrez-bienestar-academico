import { useState } from 'react';
import { stockfishEngine } from '../services/stockfishService';

export type MoveFeedbackType = 'brilliant' | 'excellent' | 'good' | 'inaccuracy' | 'mistake' | 'blunder' | null;

interface FeedbackState {
  type: MoveFeedbackType;
  visible: boolean;
}

export function useStockfish() {
  const [evalBefore, setEvalBefore] = useState<number | null>(null);
  const [isMateBefore, setIsMateBefore] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<FeedbackState>({ type: null, visible: false });
  const [isEvaluating, setIsEvaluating] = useState(false);

  // Analiza la posición antes de que el usuario mueva
  const analyzeBeforeMove = async (fen: string) => {
    try {
      const result = await stockfishEngine.evaluatePosition(fen, 10);
      setEvalBefore(result.score);
      setIsMateBefore(result.isMate);
    } catch (e) {
      console.error('Stockfish error:', e);
    }
  };

  // Analiza la posición justo después del movimiento
  const analyzeAfterMove = async (fen: string) => {
    if (evalBefore === null && !isMateBefore) return null;

    setIsEvaluating(true);
    setFeedback({ ...feedback, visible: false });

    try {
      // El nuevo FEN tiene el turno del OPONENTE, por lo que el score es desde la perspectiva del oponente
      const result = await stockfishEngine.evaluatePosition(fen, 10);
      
      let evalAfterFromMoverPerspective = -result.score; // Invertimos porque el score es del oponente

      // Calculamos la pérdida en centipeones
      const deltaCp = evalAfterFromMoverPerspective - (evalBefore || 0);

      let type: MoveFeedbackType = 'good';

      if (deltaCp < -300) {
        type = 'blunder';
      } else if (deltaCp < -100) {
        type = 'mistake';
      } else if (deltaCp < -50) {
        type = 'inaccuracy';
      } else if (deltaCp > 200) {
        type = 'brilliant';
      } else if (deltaCp > 50) {
        type = 'excellent';
      }

      setFeedback({ type, visible: true });
      
      // Ocultar feedback después de 2.5s
      setTimeout(() => {
        setFeedback(prev => ({ ...prev, visible: false }));
      }, 2500);

      setIsEvaluating(false);
      return type;
    } catch (e) {
      console.error('Stockfish after move error:', e);
      setIsEvaluating(false);
      return null;
    }
  };

  return { analyzeBeforeMove, analyzeAfterMove, feedback, isEvaluating };
}
