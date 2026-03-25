export interface Module5Lesson {
  id: string;
  title: string;
  description: string;
  instruction: string;
  mode: 'find_square' | 'move_piece' | 'capture_value';
  targetSquare?: string;
  targetMove?: string;
  expectedCapture?: string;
  initialFen: string;
  successMessage: string;
}

export const module5Lessons: Module5Lesson[] = [
  {
    id: 'm5-l1',
    title: 'La Regla del Cuadrado',
    description: 'Para saber si tu Rey puede alcanzar el peón pasado enemigo antes de que corone, imagina un cuadrado desde el peón hasta la última fila. Si tu Rey entra en ese cuadrado, ¡lo alcanza!',
    instruction: 'El peón negro en a4 va camino a coronar en a1. Juega tu Rey blanco para entrar en el cuadrado del peón a4-e4-e1-a1.',
    mode: 'move_piece',
    targetMove: 'Kc2', 
    initialFen: 'k7/8/8/8/p7/8/8/4K3 w - - 0 1', // Black King on a8, White K on e1
    successMessage: '¡Excelente! Moviste hacia el peón (o hacia la diagonal c2/d2) entrando al cuadrado. Stockfish confirma que el empate está asegurado.'
  },
  {
    id: 'm5-l2',
    title: 'La Oposición',
    description: 'La Oposición ocurre cuando los dos Reyes quedan frente a frente con una casilla de separación. Quien no tiene el turno tiene el control para evitar que el otro avance.',
    instruction: 'Gana la oposición colocando tu rey justo frente al rey negro.',
    mode: 'move_piece',
    targetMove: 'Ke3',
    initialFen: '8/8/8/4k3/8/8/8/4K3 w - - 0 1', // K on e1, K on e5
    successMessage: '¡Bien hecho! Ahora posees la oposición. El Rey negro tendrá que cederte el paso a su izquierda o derecha.'
  },
  {
    id: 'm5-l3',
    title: 'El Peón Pasado',
    description: 'Un peón pasado es aquel que ya no tiene peones enemigos frente a él ni en las columnas adyacentes. Su destino es coronar.',
    instruction: 'Avanza y libera el camino de tu peón pasado para acercarlo a la coronación, aprovechando que el Rey enemigo está muy lejos para alcanzarlo.',
    mode: 'move_piece',
    targetMove: 'a5',
    initialFen: '8/8/8/8/P7/8/1K5k/8 w - - 0 1',
    successMessage: '¡Excelente! El peón a5 es imparable, el esfuerzo solitario te garantizará una Dama nueva.'
  }
];
