export interface ExerciseLesson {
  id: string;
  title: string;
  description: string;
  instruction: string;
  initialFen: string;
  sequence: string[]; // Moves in SAN. Even indices are user moves, odd indices are opponent replies.
  successMessage: string;
  wrongMoveExplanation: string;
  openingName: string;
  hint: string;
}

export const module6_1Lessons: ExerciseLesson[] = [
  {
    id: 'm6_1-l1',
    title: 'Ejercicio 1: Trampa Legal',
    description: 'En la Apertura Italiana, existe una trampa célebre llamada la "Trampa Legal". Tras desarrollar las piezas y provocar una clavada aparente, las blancas pueden sacrificar su dama para dar un mate espectacular.',
    instruction: 'Realiza la secuencia de 3 jugadas que empieza sacrificando el caballo central.',
    openingName: 'Apertura Italiana',
    initialFen: 'r2qkbnr/ppp2ppp/2np4/4p2b/2B1P3/2N2N1P/PPPP1PP1/R1BQK2R w KQkq - 1 6',
    sequence: ['Nxe5', 'Bxd1', 'Bxf7+', 'Ke7', 'Nd5#'],
    hint: 'Ignora la clavada sobre tu dama y captura el peón central con tu caballo f3...',
    wrongMoveExplanation: 'La combinación empieza con Nxe5! ignorando que el alfil negro puede capturar tu dama. Al hacer esto las piezas se coordinan a la perfección: si las negras capturan la dama en d1, sigue Bxf7+ forzando al rey a e7, y luego Nd5 es jaque mate inmediato.',
    successMessage: '¡Excelente! Has ejecutado a la perfección la legendaria Trampa Legal. Un sacrificio de dama histórico.'
  },
  {
    id: 'm6_1-l2',
    title: 'Ejercicio 2: Recuperando el Gambito de Dama',
    description: 'En el Gambito de Dama Aceptado (1.d4 d5 2.c4 dxc4 3.e3 b5?), las negras se "aferran" al peón extra jugando b5. Las blancas tienen un método contundente para castigar esta codicia.',
    instruction: 'Castiga a las negras minando y destruyendo la estructura de peones que defiende c4.',
    openingName: 'Gambito de Dama',
    initialFen: 'rnbqkbnr/p1p1pppp/8/1p6/2pP4/4P3/PP3PPP/RNBQKBNR w KQkq - 0 4',
    sequence: ['a4', 'c6', 'axb5', 'cxb5', 'Qf3'],
    hint: 'Mueve el peón "a" para amenazar la base de su estructura. Observa la diagonal que se abrirá...',
    wrongMoveExplanation: 'La secuencia correcta empieza con a4. El negro intentará mantener la defensa con c6. Tras intercambiar peones (axb5 cxb5), la diagonal a8-h1 queda abierta de par en par. Esto permite a la dama blanca ir a f3, atacando a la torre negra que no tiene escapatoria (ganando material decisivo).',
    successMessage: '¡Correcto! Qf3 atrapa la torre negra. Este es el motivo táctico por el cual aferrarse al peón en el Gambito de Dama suele ser un error grave.'
  },
  {
    id: 'm6_1-l3',
    title: 'Ejercicio 3: Caña de Pescar (Fishing Pole)',
    description: 'En esta variante agresiva de la Ruy López/Italiana, las negras colocan un caballo en g4 apoyado por el peón h. Si las blancas intentan expulsar al caballo, sucede el desastre.',
    instruction: 'Las blancas acaban de capturar tu caballo con hxg4. ¡Lanza el contraataque mortal!',
    openingName: 'Defensa Berlinesa (Variante Fishing Pole)',
    initialFen: 'r1bqkb1r/pppp1pp1/2n5/4p2p/4P1P1/5N2/PPPP1PP1/RNBQ1RK1 b kq - 0 6',
    sequence: ['hxg4', 'Ne1', 'Qh4'],
    hint: 'Permite que abran la columna "h" recapturando con tu peón. Luego, trae a tu dama a la fiesta...',
    wrongMoveExplanation: 'La clave es capturar con el peón h (hxg4). Al hacerlo, se abre la columna "h" para tu propia torre. El caballo blanco se ve obligado a retirarse, lo que te permite jugar Qh4, amenazando un jaque mate imparable en h2 o h1.',
    successMessage: '¡Brillante! Qh4 amenaza mate inevitable. El sacrificio de pieza estuvo completamente justificado al abrir la letal columna h.'
  },
  {
    id: 'm6_1-l4',
    title: 'Ejercicio 4: El Mate del Loco',
    description: 'El mate más rápido posible del ajedrez (solo 2 jugadas) ocurre cuando las blancas exponen su rey avanzando imprudentemente sus peones del flanco de rey.',
    instruction: 'Las blancas han jugado f3. Realiza la secuencia inicial para dar jaque mate rápidamente.',
    openingName: 'Mate del Loco',
    initialFen: 'rnbqkbnr/pppppppp/8/8/8/5P2/PPPPP1PP/RNBQKBNR b KQkq - 0 1',
    sequence: ['e5', 'g4', 'Qh4#'],
    hint: 'Avanza el peón del rey para liberar la diagonal de tu dama...',
    wrongMoveExplanation: 'De entrada debes liberar a la dama jugando e5 (o e6). Luego, ante el grave error g4 de las blancas, tu dama se desliza fulminante a h4 para dar un jaque mate, aprovechando que las blancas dejaron la diagonal e8-h4 sin defensores.',
    successMessage: '¡Mate del Loco! Una excelente demostración de por qué es vital proteger las diagonales hacia el rey en la apertura.'
  },
  {
    id: 'm6_1-l5',
    title: 'Ejercicio 5: La Amenaza del Mate Pastor',
    description: 'Aquí pondremos a prueba la combinación de Dama y Alfil atacando el famoso punto f7. Es una táctica de apertura que debes conocer a la perfección.',
    instruction: 'Desarrolla tu dama para apuntar a f7 y da jaque mate si el negro ignora la amenaza.',
    openingName: 'Mate Pastor',
    initialFen: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 2 3',
    sequence: ['Qh5', 'Nf6', 'Qxf7#'],
    hint: 'Tu alfil ya mira a f7. Mueve tu dama a h5 (o f3) para sumar un atacante a esa casilla...',
    wrongMoveExplanation: 'Tu alfil c4 ya mira a f7, que sólo es defendido por el rey. Jugando Qh5 añades una doble amenaza sobre ese peón. Si las negras desarrollan el caballo (Nf6) atacando a tu dama pero olvidando defender f7, castigas con Qxf7#.',
    successMessage: '¡Mate Pastor completo! Es un aprendizaje esencial para todos los jugadores que empiezan.'
  },
  {
    id: 'm6_1-l6',
    title: 'Ejercicio 6: El Sacrificio de Magnus Smith',
    description: 'En la variante Siciliana, tras dudar con la salida de alfiles, las negras han encerrado su propio rey y dejado su dama en la misma columna. Las blancas tienen un truco.',
    instruction: 'Aplica una desviación táctica con el alfil para dejar indefensa la dama enemiga.',
    openingName: 'Defensa Siciliana (Trampa Smith)',
    initialFen: 'r1bqkb1r/p3pp1p/2p2np1/4p3/2B5/2N5/PPP2PPP/R1BQK2R w KQkq - 0 9',
    sequence: ['Bxf7+', 'Kxf7', 'Qxd8'],
    hint: 'Saca a la luz al rey negro mediante un jaque doloroso y fíjate qué pieza queda sin guardia...',
    wrongMoveExplanation: 'Al sacrificar sorpresivamente Bxf7+, obligas al rey negro a moverse. Si captura con Kxf7, se aleja de la protección de su reina en d8, la cual capturas con Qxd8. Una brillante desviación táctica.',
    successMessage: '¡Ganas la dama! El sacrificio de desviación expuso la fatal desconexión entre el rey y la reina negra.'
  },
  {
    id: 'm6_1-l7',
    title: 'Ejercicio 7: Mate Ahogado (Caro-Kann)',
    description: 'Si las piezas negras estorban a su propio monarca y éste no tiene escapatoria, la entrada fulminante de un caballo puede ser letal.',
    instruction: 'Encuentra la única jugada que da un jaque mate por asfixia inmediato.',
    openingName: 'Defensa Caro-Kann (Smothered Mate)',
    initialFen: 'r1bqkb1r/pp1npppp/2p2n2/8/4N3/5N2/PPPPQPPP/R1B1KB1R w KQkq - 3 6',
    sequence: ['Nd6#'],
    hint: '¡Usa tu caballo para dar jaque en el corazón de la defensa! Fíjate qué pieza blanca clava al peón e7...',
    wrongMoveExplanation: 'La respuesta correcta es saltar con el caballo: Nd6#. Es jaque mate debido a que el peón de e7 está clavado por la dama en e2 (no puede tomar el caballo). ¡El rey negro está asfixiado por sus propias defensas!',
    successMessage: '¡Mate por Asfixia (Smothered)! Cuando el peón defensor está clavado, ocurren estos mates tan hermosos.'
  },
  {
    id: 'm6_1-l8',
    title: 'Ejercicio 8: Destruyendo el Centro (Francesa)',
    description: 'Contra el cerrojo estructural de los peones blancos en la Variante del Avance de la Francesa, las negras deben minar su pilar principal: d4.',
    instruction: 'Ataca la base del centro de peones blanco con peones y piezas coordinadamente.',
    openingName: 'Defensa Francesa (Avance)',
    initialFen: 'rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3',
    sequence: ['c5', 'c3', 'Nc6', 'Nf3', 'Qb6'],
    hint: 'La estructura de peones d4-e5 en cadena tiene una base en d4. Empieza atacándola con un peón lateral...',
    wrongMoveExplanation: 'En la Defensa Francesa es fundamental golpear la cadena de peones de inmediato con c5. Después de c3 (defensa de las blancas), debes redoblar la presión añadiendo tu caballo Nc6 y después tu dama a Qb6, concentrando todos tus ataques en la casilla vital d4.',
    successMessage: '¡Formación posicional correcta! Atacar rápidamente la base de la cadena d4 es el pilar de la Defensa Francesa.'
  },
  {
    id: 'm6_1-l9',
    title: 'Ejercicio 9: El Ataque Fígaro (Fried Liver)',
    description: 'En el Juego Italiano (Ataque Fígaro o Fried Liver), el avance del caballo y alfil apunta a f7 de forma dramática, llevando a rey a pasear al centro del tablero.',
    instruction: 'Sacrifica el caballo, da jaque y presiona sobre la pieza clavada.',
    openingName: 'Juego Italiano (Fried Liver Attack)',
    initialFen: 'r1bqkb1r/ppp2ppp/2n5/3np1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq - 0 6',
    sequence: ['Nxf7', 'Kxf7', 'Qf3+', 'Ke6', 'Nc3'],
    hint: 'Golpea la cicatriz f7 con tu caballo. A la captura, usa tu reina para hacer un jaque doble...',
    wrongMoveExplanation: 'El Ataque Fried Liver demanda agresividad total. Tras Nxf7, el rey toma (Kxf7). Sigue un veloz Qf3+ para atacar al rey y clavar al caballo en d5 obligando al rey a defenderlo (Ke6). Finalmente, añadiendo más leña al fuego con Nc3 garantizas ganar en ataque.',
    successMessage: '¡Impresionante ataque posicional! El rey negro en e6 quedará a merced de tácticas mortales a través de clavadas.'
  },
  {
    id: 'm6_1-l10',
    title: 'Ejercicio 10: La Celada de la Petrov',
    description: 'La Defensa Petrov promueve copiar movimientos. Cuando ambos bandos toman los peones de e4/e5, se asoma un truco mortal a favor del primer jugador.',
    instruction: 'Aprovecha el caballo expuesto del rival en el centro para dar caza a la reina.',
    openingName: 'Defensa Petrov',
    initialFen: 'rnbqkb1r/pppp1ppp/8/4N3/4n3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 4',
    sequence: ['Qe2', 'Nf6', 'Nc6+'],
    hint: 'Amenaza al caballo negro de e4 con tu reina sobre la misma columna abierta del rey rival...',
    wrongMoveExplanation: 'Al alinear la dama (Qe2) frente al caballo suelto en e4 y el rey enemigo en e8 se arma la celada. Si las negras retiran su caballo ingenuamente a f6, creas un brillante ataque al descubierto mediante Nc6+, que daña la estructura del rey pero además ataca irremediablemente a la dama.',
    successMessage: '¡Jaque a la descubierta magistral! Con Nc6+ has sentenciado y ganado la dama enemiga y la partida.'
  }
];
