export interface Module4Lesson {
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

export const module4Lessons: Module4Lesson[] = [
  {
    id: 'm4-l1',
    title: 'La Clavada (Pin)',
    description: 'Una clavada ocurre cuando una pieza defensora no puede moverse sin exponer una pieza de mayor valor (o al Rey) a la captura.',
    instruction: 'Usa tu Alfil de casillas blancas para clavar a la Dama negra contra su Rey.',
    mode: 'move_piece',
    targetMove: 'Bd5',
    initialFen: '6k1/8/4q3/8/8/8/B7/1K6 w - - 0 1',
    successMessage: '¡Excelente! Ahora la Dama no puede moverse porque dejaría en jaque a su Rey (clavada absoluta).'
  },
  {
    id: 'm4-l2',
    title: 'El Tenedor (Fork)',
    description: 'El tenedor o ataque doble es un movimiento donde una sola pieza ataca a dos o más piezas enemigas al mismo tiempo.',
    instruction: 'Mueve tu Caballo para dar jaque al Rey y atacar a la Dama negra simultáneamente.',
    mode: 'move_piece',
    targetMove: 'Ne3+',
    initialFen: '8/8/8/8/3k1q2/8/2N5/1K6 w - - 0 1',
    successMessage: '¡Brillante! Has logrado un tenedor perfecto.'
  },
  {
    id: 'm4-l3',
    title: 'Ataque a la Descubierta',
    description: 'Un ataque a la descubierta se produce cuando mueves una pieza para "descubrir" o liberar el ataque de otra pieza propia que estaba detrás.',
    instruction: 'Mueve el Caballo para dar jaque al Rey con tu Torre escondida.',
    mode: 'move_piece',
    targetMove: 'Ng6+',
    initialFen: '6k1/8/8/8/8/6N1/6R1/1K6 w - - 0 1',
    successMessage: '¡Muy bien! Al apartar el Caballo, la Torre queda automáticamente atacando al Rey.'
  }
];
