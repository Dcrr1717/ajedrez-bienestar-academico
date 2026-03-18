export interface Lesson {
  id: string;
  title: string;
  description: string;
  instruction: string;
  mode: 'sandbox' | 'scenario';
  
  // Para Modo Sandbox (Pieza aislada)
  pieceType?: 'p' | 'n' | 'b' | 'r' | 'q' | 'k';
  pieceColor?: 'w' | 'b';
  initialSquare?: string;
  
  // Para Modo Escenario (Ajedrez con FEN)
  initialFen?: string;
  
  requiredMoves: number;
  successMessage: string;
}

export const module1Lessons: Lesson[] = [
  {
    id: 'm1-l1',
    title: 'El Tablero de Ajedrez',
    description: 'El tablero tiene 64 casillas formadas por filas horizontales y columnas verticales. Cada bando tiene 16 piezas en su posición inicial.',
    instruction: 'Familiarízate con el tablero de Ajedrez. ¡Juega 3 movimientos con cualquier pieza blanca!',
    mode: 'scenario',
    initialFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    requiredMoves: 0,
    successMessage: '¡Excelente! Ahora veamos cómo se mueve cada pieza una por una.'
  },
  {
    id: 'm1-l2',
    title: 'La Torre',
    description: 'La Torre se mueve en línea recta: hacia adelante, atrás, izquierda o derecha, todas las casillas que quiera.',
    instruction: 'Desplaza libremente tu torre por este tablero vacío. Realiza 3 movimientos.',
    mode: 'sandbox',
    pieceType: 'r',
    pieceColor: 'w',
    initialSquare: 'e4',
    requiredMoves: 0,
    successMessage: '¡Muy bien! Tienes el control de las líneas rectas.'
  },
  {
    id: 'm1-l3',
    title: 'El Alfil',
    description: 'El Alfil se mueve en diagonal, todas las casillas que quiera, pero siempre por casillas de su mismo color inicial.',
    instruction: 'Mueve libremente en diagonal con tu alfil. Completa 3 jugadas.',
    mode: 'sandbox',
    pieceType: 'b',
    pieceColor: 'w',
    initialSquare: 'd4',
    requiredMoves: 0,
    successMessage: '¡Perfecto! Las diagonales ya no tienen secretos para ti.'
  },
  {
    id: 'm1-l4',
    title: 'La Dama',
    description: 'La Dama es la pieza más poderosa. Combina los movimientos de la Torre y del Alfil: recto o diagonal.',
    instruction: 'Realiza 3 movimientos libres con tu Dama por todo el tablero.',
    mode: 'sandbox',
    pieceType: 'q',
    pieceColor: 'w',
    initialSquare: 'd4',
    requiredMoves: 0,
    successMessage: '¡Imparable! Dominas a la poderosa Dama.'
  },
  {
    id: 'm1-l5',
    title: 'El Rey',
    description: 'El Rey es la pieza más importante. Puede moverse a cualquier casilla adyacente (recta o diagonal), pero solo de un paso a la vez.',
    instruction: 'Da 3 pasos cautelosos con tu Rey.',
    mode: 'sandbox',
    pieceType: 'k',
    pieceColor: 'w',
    initialSquare: 'e4',
    requiredMoves: 0,
    successMessage: '¡Majestuoso! Así se mueve el líder.'
  },
  {
    id: 'm1-l6',
    title: 'El Caballo',
    description: 'El Caballo tiene un salto especial en forma de "L" (dos casillas en una dirección y una hacia un lado).',
    instruction: 'Da 3 saltos libres con tu caballo.',
    mode: 'sandbox',
    pieceType: 'n',
    pieceColor: 'w',
    initialSquare: 'd5',
    requiredMoves: 0,
    successMessage: '¡Saltos perfectos! El caballo es muy escurridizo.'
  },
  {
    id: 'm1-l7',
    title: 'El Peón (Avances)',
    description: 'Los peones mueven hacia adelante una casilla, y nunca retroceden. ¡Pero desde su casilla inicial, pueden elegir saltar dos casillas!',
    instruction: 'Explora y avanza tus peones libremente. Recuerda: avanzan directo, pero desde la fila inicial pueden dar dos pasos.',
    mode: 'scenario',
    initialFen: 'k7/8/8/8/8/8/PPPPPPPP/7K w - - 0 1', // Kings added
    requiredMoves: 0,
    successMessage: '¡Genial! Los peones son el alma del ajedrez.'
  },
  {
    id: 'm1-l8',
    title: 'El Peón y Capturas',
    description: 'Las piezas capturan ocupando la misma casilla de una pieza rival. ¡Ojo! El Peón mueve recto pero captura EN DIAGONAL un pasito adelante.',
    instruction: 'Usa tu peón blanco en d4 para capturar el caballo o alfil negro.',
    mode: 'scenario',
    initialFen: 'k7/8/8/3n1b2/3P4/8/8/7K w - - 0 1', // Con reyes para cumplir con chess.js
    requiredMoves: 0,
    successMessage: '¡Zas! Captura exitosa.'
  },
  {
    id: 'm1-l9',
    title: 'Regla: El Enroque',
    description: 'El enroque protege al rey escondiéndolo en una esquina y centraliza la torre. Se mueve el Rey dos casillas hacia la torre, y la torre salta sobre él.',
    instruction: 'Realiza un enroque, ya sea Corto (hacia la derecha) o Largo (hacia la izquierda).',
    mode: 'scenario',
    initialFen: '4k3/8/8/8/8/8/8/R3K2R w KQ - 0 1', // Rey en e1, Torres en a1 y h1.
    requiredMoves: 0,
    successMessage: '¡Excelente maniobra defensiva!'
  },
  {
    id: 'm1-l10',
    title: 'Regla: Peón al Paso',
    description: 'Si un peón enemigo avanza dos casillas y queda justo al lado de tu peón (que ya estaba avanzado), puedes capturarlo en diagonal ¡como si solo hubiera avanzado una casilla!',
    instruction: 'Juega con negras: avanza tu peón de d7 d5. Luego con blancas captura "al paso" en d6.',
    mode: 'scenario',
    initialFen: 'k7/3p4/8/4P3/8/8/8/7K b - - 0 1',
    requiredMoves: 0,
    successMessage: '¡Felicidades! Has aprendido la regla más secreta del ajedrez.'
  }
];
