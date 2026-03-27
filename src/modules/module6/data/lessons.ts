export interface OpeningMove {
  white: string;      // SAN notation for white's move
  black?: string;     // SAN notation for black's auto-reply (undefined = last move)
  hint?: string;      // Hint shown to student during practice mode
}

export interface Module6Lesson {
  id: string;
  title: string;
  description: string;
  instruction: string;
  moves: OpeningMove[];
  successMessage: string;
}

export const module6Lessons: Module6Lesson[] = [
  {
    id: 'm6-l1',
    title: 'Apertura Italiana',
    description: 'Una de las aperturas más antiguas y naturales. Las blancas desarrollan su alfil a c4 apuntando al punto débil f7, mientras ambos bandos desarrollan sus caballos.',
    instruction: 'Replica la Apertura Italiana movimiento por movimiento.',
    moves: [
      { white: 'e4', black: 'e5', hint: 'Comienza con el peón de rey a e4' },
      { white: 'Nf3', black: 'Nc6', hint: 'Desarrolla tu caballo a f3 atacando el peón e5' },
      { white: 'Bc4', hint: 'Coloca tu alfil en c4 apuntando a f7' },
    ],
    successMessage: '¡Apertura Italiana completada! El alfil en c4 presiona el punto débil f7.'
  },
  {
    id: 'm6-l2',
    title: 'Ruy López (Española)',
    description: 'Inventada por el sacerdote español Ruy López de Segura en 1561. Es una de las aperturas más estudiadas de la historia. El alfil va a b5 presionando al caballo defensor.',
    instruction: 'Replica la Apertura Ruy López movimiento por movimiento.',
    moves: [
      { white: 'e4', black: 'e5', hint: 'Comienza con e4' },
      { white: 'Nf3', black: 'Nc6', hint: 'Desarrolla el caballo a f3' },
      { white: 'Bb5', hint: 'Alfil a b5 presionando el caballo que defiende e5' },
    ],
    successMessage: '¡Ruy López completada! El alfil en b5 amenaza capturar el caballo defensor de e5.'
  },
  {
    id: 'm6-l3',
    title: 'Defensa Siciliana',
    description: 'La defensa más popular contra 1.e4. Las negras juegan c5 buscando un juego asimétrico y desequilibrado. Las blancas responden desarrollando y abriendo el centro con d4.',
    instruction: 'Juega la línea principal de la Siciliana Abierta.',
    moves: [
      { white: 'e4', black: 'c5', hint: 'Comienza con e4 (las negras responderán c5)' },
      { white: 'Nf3', black: 'd6', hint: 'Caballo a f3 preparando d4' },
      { white: 'd4', hint: 'Abre el centro con d4, desafiando a las negras' },
    ],
    successMessage: '¡Siciliana Abierta lista! Tras cxd4 Nxd4, las blancas tienen ventaja de desarrollo.'
  },
  {
    id: 'm6-l4',
    title: 'Gambito de Dama',
    description: 'Una apertura clásica cerrada donde las blancas ofrecen el peón c4 para controlar el centro. Es una de las aperturas más sólidas y ha sido jugada por todos los campeones mundiales.',
    instruction: 'Juega el Gambito de Dama ofreciendo el peón.',
    moves: [
      { white: 'd4', black: 'd5', hint: 'Comienza con el peón de dama a d4' },
      { white: 'c4', hint: 'Ofrece el gambito con c4. Si las negras capturan, recuperarás el peón con ventaja de centro.' },
    ],
    successMessage: '¡Gambito de Dama presentado! Las negras deben decidir: aceptar, rechazar o jugar la Eslava.'
  },
  {
    id: 'm6-l5',
    title: 'Defensa Francesa',
    description: 'Las negras responden a e4 con e6, preparando d5 para desafiar el centro. Es una apertura sólida pero puede dejar al alfil de casillas claras pasivo.',
    instruction: 'Juega la línea principal de la Defensa Francesa.',
    moves: [
      { white: 'e4', black: 'e6', hint: 'Comienza con e4 (las negras contestarán e6)' },
      { white: 'd4', black: 'd5', hint: 'Avanza d4 controlando el centro' },
      { white: 'Nc3', hint: 'Desarrolla el caballo a c3 defendiendo e4' },
    ],
    successMessage: '¡Defensa Francesa establecida! Ahora las negras deben decidir cómo enfrentar la cadena de peones.'
  },
  {
    id: 'm6-l6',
    title: 'Defensa Caro-Kann',
    description: 'Similar a la Francesa pero con c6 en vez de e6. Las negras mantienen libre la diagonal del alfil de casillas claras. Muy sólida y popular a alto nivel.',
    instruction: 'Juega la línea principal de la Caro-Kann.',
    moves: [
      { white: 'e4', black: 'c6', hint: 'Comienza con e4 (las negras jugarán c6)' },
      { white: 'd4', black: 'd5', hint: 'Refuerza el centro con d4' },
      { white: 'Nc3', hint: 'Defiende e4 con el caballo en c3' },
    ],
    successMessage: '¡Caro-Kann establecida! Las negras tienen una posición muy sólida con un alfil de casillas claras activo.'
  },
  {
    id: 'm6-l7',
    title: 'Apertura Inglesa',
    description: 'Las blancas inician con c4, controlando d5 desde el flanco. Es una apertura flexible que permite transponer a muchos sistemas.',
    instruction: 'Juega la línea principal de la Apertura Inglesa.',
    moves: [
      { white: 'c4', black: 'e5', hint: 'Comienza con c4, controlando d5 desde el flanco' },
      { white: 'Nc3', black: 'Nf6', hint: 'Desarrolla el caballo a c3' },
      { white: 'g3', hint: 'Prepara el fianchetto del alfil con g3' },
    ],
    successMessage: '¡Apertura Inglesa lista! El alfil irá a g2 controlando la gran diagonal.'
  },
  {
    id: 'm6-l8',
    title: 'Sistema Londres',
    description: 'Un sistema muy popular a todos los niveles. Las blancas desarrollan el alfil a f4 antes de cerrar la posición con e3. Sólido y fácil de aprender.',
    instruction: 'Juega el Sistema Londres paso a paso.',
    moves: [
      { white: 'd4', black: 'd5', hint: 'Comienza con d4' },
      { white: 'Bf4', black: 'Nf6', hint: 'Desarrolla el alfil a f4 ANTES de jugar e3' },
      { white: 'e3', hint: 'Cierra la estructura con e3, manteniendo el alfil activo fuera de la cadena' },
    ],
    successMessage: '¡Sistema Londres establecido! Tu alfil está activo en f4 y la posición es muy sólida.'
  },
  {
    id: 'm6-l9',
    title: 'Gambito de Rey',
    description: 'Una de las aperturas más agresivas y románticas del ajedrez. Las blancas sacrifican el peón f para abrir líneas y atacar al rey enemigo. ¡Juego táctico explosivo!',
    instruction: 'Ofrece el Gambito de Rey con valentía.',
    moves: [
      { white: 'e4', black: 'e5', hint: 'Comienza con e4' },
      { white: 'f4', hint: '¡Sacrifica el peón f4! Abre la columna f para tu torre y ataca e5.' },
    ],
    successMessage: '¡Gambito de Rey ofrecido! Si las negras aceptan con exf4, tendrás líneas abiertas para un ataque furioso.'
  },
  {
    id: 'm6-l10',
    title: 'Apertura Escocesa',
    description: 'Las blancas abren el centro tempranamente con d4 en la tercera jugada. Muy directa y práctica, fue usada por Kasparov en su match contra Karpov.',
    instruction: 'Juega la Apertura Escocesa abriendo el centro rápidamente.',
    moves: [
      { white: 'e4', black: 'e5', hint: 'Comienza con e4' },
      { white: 'Nf3', black: 'Nc6', hint: 'Caballo a f3 como en la Italiana' },
      { white: 'd4', hint: '¡Abre el centro inmediatamente con d4!' },
    ],
    successMessage: '¡Escocesa completada! Has abierto el centro antes de que las negras puedan consolidar.'
  }
];
