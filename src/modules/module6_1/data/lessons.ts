export interface ExerciseLesson {
  id: string;
  title: string;
  description: string;
  instruction: string;
  initialFen: string;
  targetMove: string;
  targetFrom: string;   // source square of the correct move (for solution arrow)
  targetTo: string;     // target square of the correct move (for solution arrow)
  successMessage: string;
  wrongMoveExplanation: string;  // detailed explanation when they get it wrong
  openingName: string;
  hint: string;         // hint shown after 1st wrong attempt
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
    targetFrom: 'f3',
    targetTo: 'e5',
    hint: 'El caballo puede capturar un peón central que está desprotegido…',
    wrongMoveExplanation: 'La clave de esta trampa es capturar el peón e5 con el caballo (Nxe5). Este sacrificio funciona porque ataca simultáneamente al caballo c6 y a la dama en h5. Si las negras capturan Nxe5, entonces Bxf7+ Ke7 y Bg5+ gana la dama.',
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
    targetFrom: 'e2',
    targetTo: 'e3',
    hint: 'No necesitas capturar el peón inmediatamente. Piensa en liberar una pieza que pueda recuperarlo después…',
    wrongMoveExplanation: 'La jugada correcta es e3, que libera al alfil de f1 para que pueda capturar en c4 en la siguiente jugada. Jugar e3 es mejor que intentar recapturar inmediatamente porque te da desarrollo. El peón en c4 no se puede defender fácilmente y caerá pronto.',
    successMessage: '¡Correcto! e3 no recupera el peón inmediatamente, pero libera al alfil y amenaza Bxc4. El peón c4 caerá pronto.'
  },
  {
    id: 'm6_1-l3',
    title: 'Ejercicio 3: Celada en la Ruy López',
    description: 'En la Ruy López, si las negras juegan incorrectamente, las blancas pueden ganar material con una combinación táctica sencilla.',
    instruction: 'Las negras acaban de jugar Nxe4. Encuentra la respuesta ganadora.',
    openingName: 'Ruy López',
    initialFen: 'r1bqkb1r/pppp1ppp/2n5/1B2p3/4n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4',
    targetMove: 'd4',
    targetFrom: 'd2',
    targetTo: 'd4',
    hint: 'Abre el centro. Si las negras capturan exd4, tu torre entrará con jaque en la columna e…',
    wrongMoveExplanation: 'La jugada correcta es d4, que abre la posición. La idea es que tras exd4, las blancas juegan Re1 clavando el caballo e4 contra el rey. El caballo no puede escapar porque si se mueve, Re8+ gana la dama. Esto se llama "clavada absoluta" porque el caballo está clavado contra el rey.',
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
    targetFrom: 'd8',
    targetTo: 'h4',
    hint: 'La diagonal e1-h4 está completamente abierta por los peones que avanzaron. ¿Qué pieza puede aprovechar esa diagonal?',
    wrongMoveExplanation: 'La dama debe ir a h4 (Qh4#). Las blancas debilitaron fatalmente la diagonal e1-h4 al mover los peones f3 y g4. No hay ninguna pieza blanca que pueda bloquear o capturar la dama en h4, por eso es jaque mate inmediato.',
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
    targetFrom: 'e2',
    targetTo: 'f7',
    hint: 'El punto f7 solo está defendido por el rey. Tu dama y tu alfil apuntan directamente a esa casilla…',
    wrongMoveExplanation: 'La jugada correcta es Qxf7# (jaque mate). El peón f7 es el punto más débil en la posición inicial porque solo lo defiende el rey. La dama captura en f7 con jaque, y como el alfil en c4 también apunta a f7, el rey no puede capturar la dama. No hay casillas de escape ni piezas que bloqueen.',
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
    targetFrom: 'f1',
    targetTo: 'b5',
    hint: 'Busca una jugada que "clave" una pieza negra contra otra pieza más valiosa detrás de ella…',
    wrongMoveExplanation: 'La jugada correcta es Bb5, que clava el caballo c6 contra la dama en d8. El caballo no puede moverse porque expondría la dama a la captura por el alfil. Además, si Nxd4, Qxd4 sigue ganando. La clavada es uno de los motivos tácticos más importantes en ajedrez.',
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
    targetFrom: 'd4',
    targetTo: 'd3',
    hint: 'Tu peón pasado puede avanzar una casilla más y crear un problema enorme para las blancas…',
    wrongMoveExplanation: 'La jugada correcta es d3. Este peón pasado en d3 es extremadamente peligroso porque: (1) bloquea el desarrollo del alfil blanco de f1, (2) amenaza dxe2 ganando la partida, (3) las blancas no pueden capturarlo fácilmente con exd3 porque el alfil aún estaría bloqueado. Es una de las trampas más famosas del ajedrez.',
    successMessage: '¡Correcto! d3 es la famosa trampa del Albin. El peón pasado en d3 es muy peligroso y bloquea el desarrollo blanco.'
  },
  {
    id: 'm6_1-l8',
    title: 'Ejercicio 8: Trampa en la Francesa',
    description: 'En la Defensa Francesa (variante del avance), las negras pueden aprovechar una imprecisión blanca para ganar material con una combinación táctica.',
    instruction: 'Encuentra el movimiento que ataca la cadena de peones blanca.',
    openingName: 'Defensa Francesa',
    initialFen: 'rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3',
    targetMove: 'c5',
    targetFrom: 'c7',
    targetTo: 'c5',
    hint: 'Un principio fundamental contra cadenas de peones: ¡ataca la base! ¿Cuál es la base de la cadena blanca?',
    wrongMoveExplanation: 'La jugada correcta es c5, que ataca la BASE de la cadena de peones blanca (d4). Este es un principio fundamental de Nimzowitsch: "Ataca la base de la cadena de peones". Si las blancas no protegen d4, se derrumba toda su estructura central (d4 y e5). Si dxc5, las negras recuperan con Bxc5 y tienen excelente juego.',
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
    targetFrom: 'c8',
    targetTo: 'f5',
    hint: 'El alfil de casillas claras debe salir ANTES de jugar e6 (que lo encerraría como en la Francesa)…',
    wrongMoveExplanation: 'La jugada correcta es Bf5. Esta es la GRAN ventaja de la Caro-Kann sobre la Defensa Francesa: como no jugaste e6 para apoyar d5 (usaste c6 en su lugar), el alfil de casillas claras puede salir libremente a f5 o g4. En la Francesa, este alfil queda encerrado detrás de los peones en e6/d5. Por eso la Caro-Kann es considerada más sólida.',
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
    targetFrom: 'f1',
    targetTo: 'd3',
    hint: 'Tu alfil de casillas claras puede apuntar directamente al enroque negro desde una diagonal peligrosa…',
    wrongMoveExplanation: 'La jugada correcta es Bd3, que apunta directamente a h7. La batería Bd3 + Nf3 (con posible Ne5) crea una amenaza directa contra el enroque negro. Tras Bd3, la amenaza es Bxh7+ Nxh7 seguido de Ng5+ y Qh5, recuperando la pieza con ataque decisivo. Las negras deben debilitar su posición para defenderse.',
    successMessage: '¡Correcto! Bd3 apunta directamente a h7. Combinado con Nbd2-e5, se crea una batería de ataque contra el enroque negro.'
  }
];
