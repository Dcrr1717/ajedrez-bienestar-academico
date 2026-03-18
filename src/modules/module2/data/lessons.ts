export interface Module2Lesson {
  id: string;
  title: string;
  description: string;
  instruction: string;
  mode: 'find_square' | 'move_piece' | 'capture_value';
  
  targetSquare?: string; // Para 'find_square'
  targetMove?: string;   // Para 'move_piece' (ej. 'e4', 'Nf3')
  expectedCapture?: string; // Para 'capture_value' (casilla destino de captura)
  
  initialFen: string;
  successMessage: string;
}

export const module2Lessons: Module2Lesson[] = [
  {
    id: 'm2-l1',
    title: 'Coordenadas del Tablero',
    description: 'El tablero de ajedrez es una cuadrícula. Las columnas van de la "a" a la "h", y las filas del 1 al 8. Cada casilla tiene un nombre único combinado.',
    instruction: 'Identifica la casilla haciendo clic en: e4',
    mode: 'find_square',
    targetSquare: 'e4',
    initialFen: 'k7/8/8/8/8/8/8/7K w - - 0 1', // Tablero con reyes en esquinas para chess.js
    successMessage: '¡Correcto! Has encontrado la casilla e4, el centro del tablero.'
  },
  {
    id: 'm2-l2',
    title: 'Notación de Movimientos',
    description: 'Cuando una pieza se mueve, escribimos su inicial (en inglés: N=Caballo, B=Alfil, R=Torre, Q=Dama, K=Rey) y la casilla destino. Los peones no usan inicial.',
    instruction: 'Juega el movimiento: Nf3 (Caballo a f3)',
    mode: 'move_piece',
    targetMove: 'Nf3',
    initialFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    successMessage: '¡Excelente! Has ejecutado y leído notación algebraica con éxito.'
  },
  {
    id: 'm2-l3',
    title: 'Valor de las Piezas',
    description: 'No todas las piezas valen lo mismo. Generalmente: Peón=1, Caballo/Alfil=3, Torre=5, Dama=9. En un intercambio, intenta ganar material.',
    instruction: 'Con la Dama blanca en d4, captura la pieza negra de mayor valor que esté desprotegida.',
    mode: 'capture_value',
    expectedCapture: 'a7', // The rook on a7
    initialFen: '3b3k/r7/8/8/3Q4/8/8/7K w - - 0 1', // Reyes añadidos para validación de chess.js
    successMessage: '¡Sabia decisión! Ganaste una Torre (5 puntos) en vez de un Alfil (3 puntos).'
  }
];
