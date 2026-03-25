export interface StockfishLine {
  depth: number;
  score: number; // in centipawns. Positive means side-to-move is winning
  isMate: boolean;
  bestmove: string;
}

class StockfishService {
  private worker: Worker | null = null;
  private isInitializing = false;
  private ready = false;
  private currentResolve: ((result: StockfishLine) => void) | null = null;
  private currentBestMove: string = '';
  private currentScore: number = 0;
  private currentIsMate: boolean = false;

  constructor() {
    this.init();
  }

  private init() {
    if (this.worker || this.isInitializing) return;
    this.isInitializing = true;

    try {
      // Usar BASE_URL para asegurar que funciona en GitHub Pages (/ajedrez-bienestar-academico/) y Vercel (/)
      const basePath = import.meta.env.BASE_URL || '/';
      this.worker = new Worker(`${basePath}stockfish.js`);
      
      this.worker.onmessage = (event) => {
        const line = event.data;
        
        if (line === 'uciok') {
          this.ready = true;
        }

        if (typeof line === 'string' && line.startsWith('info depth')) {
          // Parse score
          const scoreMatch = line.match(/score (cp|mate) (-?\d+)/);
          if (scoreMatch) {
            this.currentIsMate = scoreMatch[1] === 'mate';
            this.currentScore = parseInt(scoreMatch[2], 10);
          }
        }

        if (typeof line === 'string' && line.startsWith('bestmove')) {
          const parts = line.split(' ');
          this.currentBestMove = parts[1];
          if (this.currentResolve) {
            this.currentResolve({
              depth: 10, // hardcoded or tracked
              score: this.currentScore,
              isMate: this.currentIsMate,
              bestmove: this.currentBestMove
            });
            this.currentResolve = null;
          }
        }
      };

      this.worker.postMessage('uci');
    } catch (e) {
      console.error('Error initializing Stockfish Web Worker:', e);
    }
  }

  public async evaluatePosition(fen: string, depth: number = 10): Promise<StockfishLine> {
    return new Promise((resolve, reject) => {
      if (!this.worker) {
        reject(new Error('Stockfish is not initialized'));
        return;
      }
      
      this.currentResolve = resolve;
      this.worker.postMessage('ucinewgame');
      this.worker.postMessage(`position fen ${fen}`);
      this.worker.postMessage(`go depth ${depth}`);
    });
  }

  public terminate() {
    if (this.worker) {
      this.worker.postMessage('quit');
      this.worker.terminate();
      this.worker = null;
      this.ready = false;
      this.isInitializing = false;
    }
  }
}

export const stockfishEngine = new StockfishService();
