export interface OpeningMove {
  white: string;      // SAN notation for white's move
  black?: string;     // SAN notation for black's reply (undefined = last move of sequence)
  hint?: string;      // Hint shown to student during practice mode
}

export interface Module6Lesson {
  id: string;
  title: string;
  description: string;
  instruction: string;
  moves: OpeningMove[];
  successMessage: string;
  playerColor: 'white' | 'black'; // which side the student plays in practice
}

export const module6Lessons: Module6Lesson[] = [
  // ─── WHITE OPENINGS ──────────────────────────────────────
  {
    id: 'm6-l1',
    title: 'Apertura Italiana',
    description: 'Una de las aperturas más antiguas y naturales del ajedrez. Las blancas desarrollan rápidamente sus piezas menores hacia casillas activas, apuntando al débil peón f7 del negro. La idea es controlar el centro con peones y piezas, preparar el enroque corto y lanzar un ataque temprano.',
    instruction: 'Replica la Apertura Italiana jugando con blancas.',
    playerColor: 'white',
    moves: [
      { white: 'e4', black: 'e5', hint: 'Comienza controlando el centro con e4' },
      { white: 'Nf3', black: 'Nc6', hint: 'Desarrolla el caballo atacando el peón e5' },
      { white: 'Bc4', black: 'Bc5', hint: 'Alfil a c4 apuntando al débil f7' },
      { white: 'c3', black: 'Nf6', hint: 'c3 prepara el avance d4 para dominar el centro' },
      { white: 'd4', black: 'exd4', hint: 'Ahora sí, abre el centro con d4' },
      { white: 'cxd4', hint: 'Recaptura con el peón c, manteniendo un centro fuerte' },
    ],
    successMessage: '¡Apertura Italiana completada! Tienes un centro fuerte con peones en d4 y e4, y todas tus piezas menores desarrolladas.'
  },
  {
    id: 'm6-l2',
    title: 'Ruy López (Española)',
    description: 'Inventada por el sacerdote español Ruy López de Segura en 1561, es la apertura más estudiada de la historia. El alfil va a b5 presionando indirectamente el peón e5 a través del caballo defensor en c6. La idea es obtener ventaja posicional a largo plazo.',
    instruction: 'Replica la Ruy López con la Defensa Morphy jugando con blancas.',
    playerColor: 'white',
    moves: [
      { white: 'e4', black: 'e5', hint: 'Comienza con e4' },
      { white: 'Nf3', black: 'Nc6', hint: 'Caballo a f3 atacando e5' },
      { white: 'Bb5', black: 'a6', hint: 'Alfil a b5 — la jugada característica de la Ruy López' },
      { white: 'Ba4', black: 'Nf6', hint: 'Retira el alfil a a4 manteniendo la presión' },
      { white: 'O-O', black: 'Be7', hint: 'Enroca corto para poner tu rey a salvo' },
      { white: 'Re1', hint: 'Torre a e1 reforzando el peón e4 y la columna e' },
    ],
    successMessage: '¡Ruy López completada! Tienes enroque hecho, torre activa en e1, y presión posicional sobre el centro negro.'
  },
  {
    id: 'm6-l3',
    title: 'Gambito de Dama',
    description: 'La apertura cerrada más clásica. Las blancas ofrecen el peón c4 para desviar al peón d5 y controlar el centro. No es un verdadero gambito porque las blancas siempre pueden recuperar el peón. Ha sido jugada por todos los campeones mundiales.',
    instruction: 'Juega el Gambito de Dama Rehusado con blancas.',
    playerColor: 'white',
    moves: [
      { white: 'd4', black: 'd5', hint: 'Peón de dama a d4' },
      { white: 'c4', black: 'e6', hint: 'Ofrece el gambito con c4' },
      { white: 'Nc3', black: 'Nf6', hint: 'Desarrolla el caballo apoyando e4' },
      { white: 'Bg5', black: 'Be7', hint: 'Alfil a g5 clavando el caballo f6' },
      { white: 'e3', black: 'O-O', hint: 'Prepara el desarrollo del alfil de rey con e3' },
      { white: 'Nf3', hint: 'Completa el desarrollo de piezas menores' },
    ],
    successMessage: '¡Gambito de Dama Rehusado completado! Posición clásica con excelente control del centro y desarrollo armonioso.'
  },
  {
    id: 'm6-l4',
    title: 'Apertura Inglesa',
    description: 'Las blancas inician con c4, controlando la casilla d5 desde el flanco. Es extremadamente flexible y puede transponer a muchos otros sistemas. El plan típico incluye el fianchetto del alfil en g2 para dominar la gran diagonal.',
    instruction: 'Juega la Apertura Inglesa con fianchetto.',
    playerColor: 'white',
    moves: [
      { white: 'c4', black: 'e5', hint: 'Comienza con c4, controlando d5 desde el flanco' },
      { white: 'Nc3', black: 'Nf6', hint: 'Desarrolla el caballo a c3' },
      { white: 'g3', black: 'Bb4', hint: 'Prepara el fianchetto con g3' },
      { white: 'Bg2', black: 'O-O', hint: 'Alfil a g2 dominando la gran diagonal a8-h1' },
      { white: 'e3', black: 'd6', hint: 'Refuerza el centro con e3' },
      { white: 'Nge2', hint: 'Caballo a e2 evitando bloquear el alfil de g2' },
    ],
    successMessage: '¡Apertura Inglesa completada! Tu alfil en g2 controla la gran diagonal y tienes una posición flexible.'
  },
  {
    id: 'm6-l5',
    title: 'Sistema Londres',
    description: 'Un sistema universal muy popular a todos los niveles. La clave es desarrollar el alfil a f4 ANTES de jugar e3 (si no, el alfil queda encerrado). Es sólido, fácil de aprender y funciona contra casi cualquier defensa negra.',
    instruction: 'Juega el Sistema Londres paso a paso.',
    playerColor: 'white',
    moves: [
      { white: 'd4', black: 'd5', hint: 'Comienza con d4' },
      { white: 'Bf4', black: 'Nf6', hint: '¡Alfil a f4 ANTES de e3! Esta es la clave del Londres' },
      { white: 'e3', black: 'c5', hint: 'Ahora sí cierras con e3, el alfil ya está activo' },
      { white: 'c3', black: 'Nc6', hint: 'c3 apoya el centro y prepara Nd2' },
      { white: 'Nd2', black: 'e6', hint: 'Caballo a d2 preparando Ngf3' },
      { white: 'Ngf3', hint: 'Completa el desarrollo. Siguiente paso: enrocar corto' },
    ],
    successMessage: '¡Sistema Londres completado! Alfil activo en f4, estructura sólida y listo para enrocar. ¡Muy práctico!'
  },
  {
    id: 'm6-l6',
    title: 'Gambito de Rey',
    description: 'La apertura más agresiva y romántica del ajedrez. Las blancas sacrifican el peón f para abrir la columna f y atacar al rey enemigo. Fue la apertura favorita de los maestros del siglo XIX. ¡Juego táctico explosivo!',
    instruction: 'Ofrece el Gambito de Rey y desarrolla el ataque.',
    playerColor: 'white',
    moves: [
      { white: 'e4', black: 'e5', hint: 'Comienza con e4' },
      { white: 'f4', black: 'exf4', hint: '¡Sacrifica el peón f4! Abre líneas de ataque' },
      { white: 'Nf3', black: 'd6', hint: 'Caballo a f3 controlando casillas centrales' },
      { white: 'Bc4', black: 'h6', hint: 'Alfil a c4 apuntando a f7, el punto más débil' },
      { white: 'd4', hint: 'Domina el centro con d4. Tienes compensación por el peón con desarrollo y ataque' },
    ],
    successMessage: '¡Gambito de Rey aceptado! Centro dominante, piezas desarrolladas y la columna f se abrirá pronto para tu torre.'
  },
  {
    id: 'm6-l7',
    title: 'Apertura Escocesa',
    description: 'Las blancas abren el centro tempranamente con d4 en la tercera jugada, a diferencia de la Italiana o la Ruy López. Fue popularizada por Kasparov en su match contra Karpov. Lleva a posiciones abiertas y tácticas.',
    instruction: 'Juega la Apertura Escocesa abriendo el centro rápido.',
    playerColor: 'white',
    moves: [
      { white: 'e4', black: 'e5', hint: 'Comienza con e4' },
      { white: 'Nf3', black: 'Nc6', hint: 'Caballo a f3' },
      { white: 'd4', black: 'exd4', hint: '¡Abre el centro inmediatamente con d4!' },
      { white: 'Nxd4', black: 'Bc5', hint: 'Recaptura con el caballo en el centro' },
      { white: 'Be3', black: 'Qf6', hint: 'Alfil a e3 desarrollando y defendiendo d4' },
      { white: 'c3', hint: 'Refuerza el caballo central. Posición activa y rica en tácticas' },
    ],
    successMessage: '¡Escocesa completada! Centro abierto, caballo poderoso en d4 y excelente desarrollo.'
  },

  // ─── BLACK DEFENSES (student plays as Black) ─────────────
  {
    id: 'm6-l8',
    title: 'Defensa Siciliana',
    description: 'La defensa más popular y agresiva contra 1.e4. Las negras juegan c5 buscando un juego asimétrico. La Siciliana produce las partidas más combativas del ajedrez profesional. Aquí aprenderás a jugarla con negras.',
    instruction: 'Juega la Defensa Siciliana (Variante del Dragón) con negras.',
    playerColor: 'black',
    moves: [
      { white: 'e4', black: 'c5', hint: 'Responde c5 — la jugada que define la Siciliana' },
      { white: 'Nf3', black: 'd6', hint: 'd6 prepara Nf6 y controla e5' },
      { white: 'd4', black: 'cxd4', hint: 'Captura en d4 abriendo la columna c para tu torre' },
      { white: 'Nxd4', black: 'Nf6', hint: 'Caballo a f6 atacando e4' },
      { white: 'Nc3', black: 'g6', hint: 'g6 prepara el fianchetto del alfil — ¡Variante del Dragón!' },
      { white: 'Be3', black: 'Bg7', hint: 'Alfil a g7, el "dragón" que domina la gran diagonal' },
    ],
    successMessage: '¡Defensa Siciliana Dragón completada! Tu alfil en g7 es poderoso y la columna c está lista para tu torre.'
  },
  {
    id: 'm6-l9',
    title: 'Defensa Francesa',
    description: 'Una defensa sólida y estratégica contra 1.e4. Las negras construyen una cadena de peones fuerte con e6 y d5. El plan es presionar el centro blanco y buscar contraataque en el flanco de dama.',
    instruction: 'Juega la Defensa Francesa (Variante Winawer) con negras.',
    playerColor: 'black',
    moves: [
      { white: 'e4', black: 'e6', hint: 'e6 — prepara d5 para desafiar el centro' },
      { white: 'd4', black: 'd5', hint: 'd5 ataca directamente el peón e4' },
      { white: 'Nc3', black: 'Bb4', hint: 'Alfil a b4 clavando el caballo — ¡Variante Winawer!' },
      { white: 'e5', black: 'c5', hint: 'c5 ataca la base de la cadena de peones blancos en d4' },
      { white: 'a3', black: 'Bxc3+', hint: 'Captura en c3 doblando los peones blancos' },
      { white: 'bxc3', black: 'Ne7', hint: 'Caballo a e7 preparando Nf5 para presionar d4' },
    ],
    successMessage: '¡Defensa Francesa Winawer completada! Has doblado los peones blancos y tienes contraataque en el flanco de dama.'
  },
  {
    id: 'm6-l10',
    title: 'Defensa Caro-Kann',
    description: 'Una de las defensas más sólidas contra 1.e4. A diferencia de la Francesa, el alfil de casillas claras no queda encerrado. Es la favorita de jugadores posicionales como Karpov y Capablanca.',
    instruction: 'Juega la Defensa Caro-Kann (Variante Clásica) con negras.',
    playerColor: 'black',
    moves: [
      { white: 'e4', black: 'c6', hint: 'c6 — prepara d5 sin encerrar al alfil de casillas claras' },
      { white: 'd4', black: 'd5', hint: 'd5 desafía el centro directamente' },
      { white: 'Nc3', black: 'dxe4', hint: 'Captura en e4 — Variante Clásica' },
      { white: 'Nxe4', black: 'Bf5', hint: 'Alfil a f5 — ¡esta es la ventaja de la Caro-Kann! El alfil sale activo' },
      { white: 'Ng3', black: 'Bg6', hint: 'Retira el alfil a g6, manteniéndolo en la diagonal' },
      { white: 'Nf3', black: 'Nd7', hint: 'Caballo a d7 preparando Ngf6 con desarrollo armonioso' },
    ],
    successMessage: '¡Defensa Caro-Kann Clásica completada! Alfil activo en g6, desarrollo sólido y posición sin debilidades.'
  }
];
