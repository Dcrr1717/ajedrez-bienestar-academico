export interface ExerciseLesson {
  id: string;
  title: string;
  description: string;
  instruction: string;
  initialFen: string;
  targetMove: string;
  successMessage: string;
  openingName: string;
}

export const module6_1Lessons: ExerciseLesson[] = [
  {
    id: 'm6_1-l1',
    title: 'Ejercicio 1: Trampa Legal',
    description: 'En la Apertura Italiana, existe una trampa célebre llamada la "Trampa Legal". Tras una secuencia de jugadas, las blancas pueden sacrificar la dama para dar un mate espectacular.',
    instruction: 'Encuentra el sacrificio de caballo que inicia el ataque de mate.',
    openingName: 'Apertura Italiana',
    initialFen: 'r1b1kbnr/pppp1ppp/2n5/4p2q/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
    targetMove: 'Nxe5',
    successMessage: '¡Correcto! Nxe5 ataca el caballo c6 y la dama h5. Si Nxe5, Bxf7+ Ke7 y Bg5+ gana la dama.'
  },
  {
    id: 'm6_1-l2',
    title: 'Ejercicio 2: Gambito de Dama',
    description: 'Tras 1.d4 d5 2.c4 dxc4 (Gambito de Dama Aceptado), las blancas deben recuperar el peón. ¿Cuál es la mejor manera?',
    instruction: 'Juega el movimiento más preciso para recuperar el peón con ventaja de desarrollo.',
    openingName: 'Gambito de Dama',
    initialFen: 'rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',
    targetMove: 'e3',
    successMessage: '¡Correcto! e3 no recupera el peón inmediatamente, pero libera al alfil y amenaza Bxc4. El peón c4 caerá pronto.'
  },
  {
    id: 'm6_1-l3',
    title: 'Ejercicio 3: Celada Siberia',
    description: 'En la Ruy López, si las negras juegan incorrectamente, las blancas pueden ganar material con una combinación táctica sencilla.',
    instruction: 'Las negras acaban de jugar Nxe4. Encuentra la respuesta ganadora.',
    openingName: 'Ruy López',
    initialFen: 'r1bqkb1r/pppp1ppp/2n5/1B2p3/4n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4',
    targetMove: 'd4',
    successMessage: '¡Correcto! d4 abre líneas y tras exd4 Re1, el caballo e4 está clavado contra el rey. Las blancas ganan pieza.'
  },
  {
    id: 'm6_1-l4',
    title: 'Ejercicio 4: Mate del Loco',
    description: 'El mate más rápido posible en el ajedrez. Solo toma 2 jugadas. Es un ejemplo de por qué no se debe debilitar las casillas alrededor del rey.',
    instruction: 'Encuentra el mate en una jugada con la dama.',
    openingName: 'Mate del Loco',
    initialFen: 'rnbqkbnr/pppppppp/8/8/6P1/5P2/PPPPP2P/RNBQKBNR b KQkq - 0 2',
    targetMove: 'Qh4#',
    successMessage: '¡Mate del Loco! Qh4# es jaque mate. Los peones f3 y g4 dejaron al rey totalmente expuesto.'
  },
  {
    id: 'm6_1-l5',
    title: 'Ejercicio 5: Mate Pastor',
    description: 'El mate más famoso para principiantes. Las blancas combinan alfil y dama para atacar el punto f7. Debes encontrar la jugada de mate.',
    instruction: 'Da jaque mate al rey negro en f7.',
    openingName: 'Mate Pastor',
    initialFen: 'r1bqkbnr/pppppppp/2n5/4P3/2B5/8/PPP1QPPP/RNB1K1NR w KQkq - 2 4',
    targetMove: 'Qxf7#',
    successMessage: '¡Mate Pastor! Qxf7# es jaque mate. El alfil c4 y la dama se coordinan perfectamente contra f7.'
  },
  {
    id: 'm6_1-l6',
    title: 'Ejercicio 6: Celada en la Siciliana',
    description: 'En la Siciliana, si las negras no tienen cuidado con su desarrollo, las blancas pueden ganar material con un truco táctico.',
    instruction: 'Encuentra la jugada que gana la dama negra o da mate.',
    openingName: 'Defensa Siciliana',
    initialFen: 'r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 2 6',
    targetMove: 'Bb5',
    successMessage: '¡Correcto! Bb5 clava el caballo c6. Si el caballo se mueve, Nxc6 gana la dama. Presión táctica típica de la Siciliana.'
  },
  {
    id: 'm6_1-l7',
    title: 'Ejercicio 7: Contragambito Albin',
    description: 'Contra el Gambito de Dama, las negras pueden responder agresivamente con el Contragambito Albin (1.d4 d5 2.c4 e5). Encuentra la trampa oculta.',
    instruction: 'Juega el avance de peón que crea una trampa mortal.',
    openingName: 'Contragambito Albin',
    initialFen: 'rnbqkbnr/ppp2ppp/8/4p3/2Pp4/5N2/PP2PPPP/RNBQKB1R b KQkq c3 0 3',
    targetMove: 'd3',
    successMessage: '¡Correcto! d3 es la famosa trampa del Albin. El peón pasado en d3 es muy peligroso y bloquea el desarrollo blanco.'
  },
  {
    id: 'm6_1-l8',
    title: 'Ejercicio 8: Trampa en la Francesa',
    description: 'En la Defensa Francesa (variante del avance), las negras pueden aprovechar una imprecisión blanca para ganar material con una combinación táctica.',
    instruction: 'Encuentra el movimiento que gana un peón con ventaja posicional.',
    openingName: 'Defensa Francesa',
    initialFen: 'rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3',
    targetMove: 'c5',
    successMessage: '¡Correcto! c5 ataca la base de la cadena de peones en d4. Esto es un principio fundamental: ¡Ataca la base!'
  },
  {
    id: 'm6_1-l9',
    title: 'Ejercicio 9: Alfil Activo Caro-Kann',
    description: 'La gran ventaja de la Caro-Kann sobre la Francesa es que el alfil de casillas claras sale activo. Después de 1.e4 c6 2.d4 d5 3.exd5 cxd5, ¿dónde va el alfil?',
    instruction: 'Desarrolla tu alfil de casillas claras a su mejor casilla.',
    openingName: 'Defensa Caro-Kann',
    initialFen: 'rnbqkbnr/pp2pppp/8/3p4/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 4',
    targetMove: 'Bf5',
    successMessage: '¡Correcto! Bf5 es la jugada estrella de la Caro-Kann. El alfil está activo fuera de la cadena de peones, a diferencia de la Francesa.'
  },
  {
    id: 'm6_1-l10',
    title: 'Ejercicio 10: Celada del Sistema Londres',
    description: 'En el Sistema Londres, si las negras juegan pasivamente, las blancas pueden lanzar un ataque directo al rey. Encuentra la jugada que amenaza mate.',
    instruction: 'Encuentra la jugada agresiva que amenaza mate en h7.',
    openingName: 'Sistema Londres',
    initialFen: 'r1bqkb1r/pppn1ppp/4pn2/3p2B1/3P4/4PN2/PPP2PPP/RN1QKB1R w KQkq - 2 5',
    targetMove: 'Bd3',
    successMessage: '¡Correcto! Bd3 apunta directamente a h7. Combinado con Nbd2-e5, se crea una batería de ataque contra el enroque negro.'
  }
];
