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

export const module7Lessons: ExerciseLesson[] = [
  {
    id: 'm7-l1',
    title: 'Ejercicio 1: Mate del Pasillo',
    description: 'El Mate del Pasillo (o Back Rank Mate) ocurre cuando el rey está atrapado detrás de su propia barrera de peones y recibe jaque mate por una torre o dama en la octava fila.',
    instruction: 'Da jaque mate en un solo movimiento aprovechando la falta de escape del rey negro.',
    openingName: 'Mate del Pasillo',
    initialFen: '6k1/p4ppp/8/8/8/8/P4PPP/3R2K1 w - - 0 1',
    sequence: ['Rd8#'],
    hint: 'Lleva tu torre a la última fila para atacar al rey por la espalda...',
    wrongMoveExplanation: 'Debías mover tu torre a d8 (Rd8#). Observa cómo los peones negros en f7, g7 y h7 actúan como una pared de ladrillos que impide al rey escapar.',
    successMessage: '¡Mate del Pasillo! Un patrón fundamental que siempre debes buscar en tus partidas.'
  },
  {
    id: 'm7-l2',
    title: 'Ejercicio 2: Mate Árabe',
    description: 'El Mate Árabe es una hermosa combinación donde el Caballo y la Torre trabajan juntos para acorralar al rey enemigo en una esquina del tablero.',
    instruction: 'Encuentra la casilla donde la torre da jaque mate, protegida por tu caballo.',
    openingName: 'Mate Árabe',
    initialFen: 'k7/p6R/2N5/8/8/8/8/7K w - - 0 1',
    sequence: ['Rxa7#'],
    hint: 'Combina el radio de acción de tu torre con la protección de tu caballo en c6...',
    wrongMoveExplanation: 'La jugada ganadora es Rxa7#. Al capturar el peón de a7, tu torre da jaque al rey y quita la casilla de escape b7. Al mismo tiempo, tu caballo en c6 protege incondicionalmente a la torre y también cubre b8.',
    successMessage: '¡Mate Árabe ejecutado! La perfecta armonía entre el caballo y la torre.'
  },
  {
    id: 'm7-l3',
    title: 'Ejercicio 3: Mate de Anastasia',
    description: 'El Mate de Anastasia utiliza un caballo y una torre para atrapar al rey en el borde del tablero. Todo comienza con un brutal sacrificio de dama.',
    instruction: 'Realiza la secuencia de 2 jugadas sacrificando tu Dama para forzar el mate.',
    openingName: 'Mate de Anastasia',
    initialFen: 'r4r1k/pp2N1pp/8/7Q/8/R7/P4PPP/6K1 w - - 0 1',
    sequence: ['Qxh7+', 'Kxh7', 'Rh3#'],
    hint: '¡Sacrifica audazmente a tu dama en h7! Luego desliza tu torre a la columna h de inmediato...',
    wrongMoveExplanation: 'La brillante jugada es Qxh7+! Esto obliga al rey a capturar (Kxh7). Luego entra la torre con Rh3#. El caballo en e7 cubre g8 y g6, impidiendo cualquier escape.',
    successMessage: '¡Simplemente perfecto! El sacrificio para extraer al rey al Mate de Anastasia.'
  },
  {
    id: 'm7-l4',
    title: 'Ejercicio 4: Mate de la Coz (Smothered Mate)',
    description: 'Este es el mate más humillante. Ocurre cuando el rey es asfixiado por sus propias piezas tras ser forzado a arrinconarse mediante otro sacrificio.',
    instruction: 'Entrega tu dama forzando a la torre negra a bloquear la salida del rey.',
    openingName: 'Mate de la Coz',
    initialFen: 'r4r1k/p5pp/7N/3Q4/8/8/P4PPP/6K1 w - - 0 1',
    sequence: ['Qg8+', 'Rxg8', 'Nf7#'],
    hint: 'Pon tu dama donde pueda dar jaque y estar protegida por tu caballo. Obligarás al oponente a bloquear a su propio rey...',
    wrongMoveExplanation: 'La magia ocurre al jugar Qg8+. El rey no puede capturar la reina porque está protegida por tu caballo en h6. ¡La única opción del negro es Rxg8! Esto deja al rey sin ninguna casilla libre, permitiendo el épico remate Nf7#.',
    successMessage: '¡Mate de la Coz logrado! Has ahogado al rey rival con sus propios defensores.'
  },
  {
    id: 'm7-l5',
    title: 'Ejercicio 5: Mate de la Charretera',
    description: 'El mate de la Charretera visualmente se asemeja a los ornamentos en los hombros de un abrigo militar, donde dos piezas amigas bloquean el escape del rey.',
    instruction: 'Da jaque mate frontal; los escapes laterales están bloqueados por las torres enemigas.',
    openingName: 'Mate de la Charretera',
    initialFen: '3rkr2/8/8/3Q4/8/8/8/4K3 w - - 0 1',
    sequence: ['Qe6#'],
    hint: 'Busca la casilla de mate directa usando a tu dama en la sexta fila y aprovecha que las torres cortan a su propio rey...',
    wrongMoveExplanation: 'Qe6# es la solución. La dama da jaque mate justo en la "cara" del rey. El rey no puede escapar hacia d8 o f8 porque sus propias torres actúan como charreteras, reteniéndolo.',
    successMessage: '¡Excelente Mate de la Charretera! Tus ojos están muy afilados para la táctica.'
  },
  {
    id: 'm7-l6',
    title: 'Ejercicio 6: Mate de Boden',
    description: 'Un bellísimo e inesperado mate perpetrado mediante el sacrificio de la dama seguido del asalto de la pareja de alfiles, que se cruzan como espadas.',
    instruction: 'Sacrifica tu Dama para abrirle paso letal a tu Alfil rey.',
    openingName: 'Mate de Boden',
    initialFen: '2kr4/pp1p1ppp/2n5/8/Q4B2/8/8/4KB2 w - - 0 1',
    sequence: ['Qxc6+', 'bxc6', 'Ba6#'],
    hint: 'No dudes en entregar la Dama en c6. Una vez que el peón b7 recapture, esa diagonal será toda de tu alfil f1...',
    wrongMoveExplanation: 'Debes iniciar con Qxc6+. El negro captura obligadamente con bxc6 abriendo la diagonal f1-a6. Ahora, rematas con Ba6#, formando la "X" letal característica del Mate de Boden con los 2 alfiles.',
    successMessage: '¡Extraordinario! Has realizado con éxito el fulminante Mate de los dos Alfiles.'
  },
  {
    id: 'm7-l7',
    title: 'Ejercicio 7: Mate de la Ópera (Morphy)',
    description: 'Creado por el legendario Paul Morphy durante una tarde en la ópera en 1858. El mate consta de desviar a una pieza bloqueadora sacrificando la última torre.',
    instruction: 'Elimina al caballo defensor de b8 para asestar el mate con tu torre limpia.',
    openingName: 'Mate de la Ópera',
    initialFen: '4kb1r/p2n1ppp/4q3/4p1B1/8/1Q6/PPP2PPP/2KR4 w k - 0 1',
    sequence: ['Qb8+', 'Nxb8', 'Rd8#'],
    hint: 'El caballo negro de d7 defiende la casilla clave... ¿has pensado en atacarlo mortalmente con tu reina para deshacerte de su defensa?',
    wrongMoveExplanation: 'La brillante sucesión de Morphy fue Qb8+! El negro es forzado a jugar Nxb8 abandonando la custodia de d8. Con la casilla d8 indefensa y el rey sin escape (el alfil lo vigila), ejecutas Rd8# ineludiblemente.',
    successMessage: '¡Aprobado con honores! Replicaste exactamente el espectacular remate de Paul Morphy.'
  },
  {
    id: 'm7-l8',
    title: 'Ejercicio 8: Mate del Beso de la Muerte',
    description: 'Probablemente el mate más utilizado en toda la historia, la Dama se acerca a besar al Rey, escudándose por una pieza de apoyo tan leal que el rey queda sin opciones.',
    instruction: 'Da el fatídico "Beso de la Muerte" protegido por el Alfil desde la distancia.',
    openingName: 'Beso de la Muerte',
    initialFen: 'r4r1k/ppp3pp/8/6Q1/3B4/8/PP3PPP/6K1 w - - 0 1',
    sequence: ['Qxg7#'],
    hint: 'Tu alfil de casillas oscuras apunta como flecha al enroque. Posiciona a tu Dama cara a cara con el Monarca...',
    wrongMoveExplanation: 'El movimiento ganador y devastador es Qxg7#. No sólo le das jaque directo, sino que también atacas todas las posibles huidas. Al rey negro le está prohibido capturar porque caería ante el alfil de d4.',
    successMessage: '¡Mate por Beso! Súper limpio y seguro.'
  },
  {
    id: 'm7-l9',
    title: 'Ejercicio 9: Mate de Lolli',
    description: 'El Mate de Lolli ocurre mediante la filtración de un peón en f6 que debilita severamente el enroque, apoyando a la Dama para su salto mortal al hueco g7.',
    instruction: 'Utiliza el tremendo poder de tu peón que se incrustó en su defensa para dar el zarpazo final.',
    openingName: 'Mate de Lolli',
    initialFen: '4r1k1/pp3ppp/5P1Q/8/8/8/PP3PPP/6K1 w - - 0 1',
    sequence: ['Qg7#'],
    hint: 'Tu peón actúa como un muro y una fortaleza. ¡Abalánzate sobre el punto de ruptura!...',
    wrongMoveExplanation: 'Basta jugar Qg7#. La dama queda completamente infiltrada protegida por su fiel peón en f6. Este modelo subraya la profunda importancia de mantener la estructura defensiva frente a los peones oponentes.',
    successMessage: '¡Lolli Mate! Las grietas en las defensas a menudo terminan exactamente de esta manera.'
  },
  {
    id: 'm7-l10',
    title: 'Ejercicio 10: Mate de la Escalera',
    description: 'El más básico, pero a la vez, el mate posicional más infalible. Las torres forman una "escalera mecánica" que barre al rey fila por fila hasta lanzarlo del tablero.',
    instruction: 'Sube la última torre para completar la "limpieza" paralela sobre el rey negro.',
    openingName: 'Mate de la Escalera (Lawnmower)',
    initialFen: '7k/R7/1R6/8/8/8/8/7K w - - 0 1',
    sequence: ['Rb8#'],
    hint: 'La torre en a7 ya cubre la séptima fila, empujando al rey a su perdición final...',
    wrongMoveExplanation: 'Rb8# remata la operación. Mientras que tu torre a7 vigila la fila 7 como barra de contención, tu torre en b8 da el golpe de gracia a través de toda la fila 8. Una muerte limpia, simple y predecible.',
    successMessage: '¡La podadora nunca falla! Una resolución obligatoria para cerrar cualquier partida de ajedrez.'
  }
];
