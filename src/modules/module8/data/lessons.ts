export interface ExerciseLesson {
  id: string;
  title: string;
  category: 'mate' | 'fork' | 'pin' | 'discovery';
  description: string;
  instruction: string;
  initialFen: string;
  sequence: string[];
  successMessage: string;
  wrongMoveExplanation: string;
  openingName: string;
  hint: string;
}

export const module8Lessons: ExerciseLesson[] = [

  // ═══════════════════════════════════════
  // CATEGORÍA 1: JAQUE MATE (8 ejercicios)
  // ═══════════════════════════════════════
  {
    id: 'm8-l1', category: 'mate',
    title: 'Ejercicio 1: Mate del Pasillo Avanzado',
    openingName: 'Mate del Pasillo',
    description: 'El rey está encerrado detrás de sus peones sin ninguna casilla de escape. Una torre en la octava fila lo sentencia.',
    instruction: 'Mata al rey negro en un movimiento usando tu torre.',
    initialFen: '6k1/5ppp/8/3R4/8/8/5PPP/6K1 w - - 0 1',
    sequence: ['Rd8#'],
    hint: 'El rey está atrapado en la esquina. Tu torre domina toda la columna d...',
    wrongMoveExplanation: 'La solución es Td8#. Al mover tu torre a d8, das jaque en la última fila. Los peones negros f7, g7 y h7 actúan como una prisión perfecta para el rey.',
    successMessage: '¡Mate del Pasillo! Siempre busca reyes encerrados detrás de sus propios peones. Es uno de los patrones más comunes en partidas reales.'
  },
  {
    id: 'm8-l2', category: 'mate',
    title: 'Ejercicio 2: Torre en la Primera Fila',
    openingName: 'Mate de Retaguardia',
    description: 'Tu torre ocupa la columna de la reina. El rey negro no puede escapar hacia ningún lado. Un solo movimiento de torre basta.',
    instruction: 'Juega el movimiento ganador de torre para dar jaque mate.',
    initialFen: '7k/5ppp/8/8/8/8/5PPP/R6K w - - 0 1',
    sequence: ['Ra8#'],
    hint: 'La columna "a" está libre. Tu torre puede recorrerla de un extremo al otro...',
    wrongMoveExplanation: 'Ta8# es el remate. La torre desliza por toda la columna "a" hasta acorralar al rey en h8. Los peones hacen el resto del trabajo cerrándole la salida.',
    successMessage: '¡Excelente! Un clásico mate de retaguardia con torre. Cuando el rey está en una esquina con sus peones bloqueados, las columnas abiertas son mortales.'
  },
  {
    id: 'm8-l3', category: 'mate',
    title: 'Ejercicio 3: La Dama Vengadora',
    openingName: 'Mate de Dama',
    description: 'Tu dama con apoyo de la torre entra hasta el último rincón. El rey negro no tiene adónde ir.',
    instruction: 'Da jaque mate con la dama usando la posición de tu torre como apoyo.',
    initialFen: '3r2k1/p4ppp/8/8/8/8/P4PPP/3Q2K1 w - - 0 1',
    sequence: ['Qd8#'],
    hint: 'Mira la columna d. Tu dama puede ocupar la casilla que más le duele al rey enemigo...',
    wrongMoveExplanation: 'Dd8# es la solución. La dama entra en d8 suplantando a la torre negra y encerrando al rey en su propia esquina. Los peones g7 y h7 le quitan cualquier escape.',
    successMessage: '¡Brillante! Dama tomando el control de la última fila para un mate limpio. Aprende a sacrificar y recapturar de esta forma en tus propias partidas.'
  },
  {
    id: 'm8-l4', category: 'mate',
    title: 'Ejercicio 4: Dama Captura, Mate Garantizado',
    openingName: 'Mate con Captura de Dama',
    description: 'La torre negra está en la misma columna que su rey, pero expuesta. Una captura de dama con jaque cierra el juego de inmediato.',
    instruction: 'Captura la torre negra con tu dama para dar jaque mate.',
    initialFen: '4r1k1/pp3ppp/8/4Q3/8/8/PP3PPP/6K1 w - - 0 1',
    sequence: ['Qxe8#'],
    hint: 'Tu dama domina la columna e. La torre negra en e8 está desprotegida... ¡tómala!',
    wrongMoveExplanation: 'Dxe8# es la jugada reina. Al capturar la torre en e8, tu dama da jaque desde la octava fila. El rey en g8 no tiene escapatoria: f8 y h8 están cubiertos, y los peones cierran el paso.',
    successMessage: '¡Perfecto! Una captura de pieza que al mismo tiempo da jaque mate. En ajedrez, siempre busca jugadas que hagan varias cosas a la vez.'
  },
  {
    id: 'm8-l5', category: 'mate',
    title: 'Ejercicio 5: Mate de Anastasia',
    openingName: 'Mate de Anastasia',
    description: 'Un patrón histórico: sacrifica la dama para extraer al rey, luego la torre lo caza en el borde del tablero con ayuda de tu caballo.',
    instruction: 'Inicia el sacrificio de dama para forzar el Mate de Anastasia.',
    initialFen: 'r4r1k/pp2N1pp/8/7Q/8/R7/P4PPP/6K1 w - - 0 1',
    sequence: ['Qxh7+', 'Kxh7', 'Rh3#'],
    hint: 'El rey está en la esquina. Sacrifica tu dama para sacarlo al descubierto, luego entra la torre por la columna h...',
    wrongMoveExplanation: 'La secuencia es Dxh7+! El rey está obligado a capturar (Rxh7). Ahora el caballo en e7 vigila g8 y g6, y la torre reina desde Th3#. No hay escape posible.',
    successMessage: '¡Mate de Anastasia ejecutado con maestría! Este patrón demuestra cómo el trabajo en equipo entre caballo y torre puede ser devastador.'
  },
  {
    id: 'm8-l6', category: 'mate',
    title: 'Ejercicio 6: Mate de la Coz (Smothered Mate)',
    openingName: 'Mate de la Coz',
    description: 'El rey será asfixiado por sus propias piezas. Un sacrificio de dama obliga a la torre negra a bloquear la única casilla de escape.',
    instruction: 'Sacrifica tu dama para que el caballo dé jaque mate al rey sofocado.',
    initialFen: 'r4r1k/p5pp/7N/3Q4/8/8/P5PP/6K1 w - - 0 1',
    sequence: ['Qg8+', 'Rxg8', 'Nf7#'],
    hint: 'Tu caballo vigila f7. Si puedes obligar a la torre negra a bloquear su propio rey... ¡el caballo dará el golpe definitivo!',
    wrongMoveExplanation: 'El truco está en Dg8+! El rey no puede capturar (el caballo en h6 protege g8). La única defensa es Txg8, pero entonces el rey queda completamente sofocado y Cf7# es inevitable.',
    successMessage: '¡Mate de la Coz! El más humillante de todos: el rey es sellado por sus propias defensas. Un patrón que todo ajedrecista debe conocer de memoria.'
  },
  {
    id: 'm8-l7', category: 'mate',
    title: 'Ejercicio 7: Reina y Torre en Armonía',
    openingName: 'Mate de Pasillo con Reina',
    description: 'La reina puede acercar al rey a una posición donde la torre da el golpe de gracia. Una cooperación perfecta entre dos piezas.',
    instruction: 'Da jaque mate en 1 movimiento aprovechando al rey atrapado en la esquina.',
    initialFen: '6k1/5ppp/8/8/8/8/5PPP/Q5RK w - - 0 1',
    sequence: ['Qa8#'],
    hint: 'Tu reina tiene todo el tablero para moverse. El rey está en la última casilla posible...',
    wrongMoveExplanation: 'Da8# es la solución. La reina desliza por la diagonal hasta a8, dando jaque mate. Con los peones cerrando la 7ma fila y la torre en g1 cubriendo la columna g, el rey no tiene ningún escape.',
    successMessage: '¡Soberbio! La reina y la torre dominando esquinas opuestas crean una trampa perfecta. En el final de partida, estas combinaciones son las más devastadoras.'
  },
  {
    id: 'm8-l8', category: 'mate',
    title: 'Ejercicio 8: Mate de la Ópera (Morphy)',
    openingName: 'Mate de la Ópera',
    description: 'Paul Morphy ejecutó este mate en 1858 durante una visita a la ópera en París. Sacrifica la dama para eliminar al defensor y usa tu torre para el remate histórico.',
    instruction: 'Replica la genialidad de Morphy: sacrifica la dama para dar el mate definitivo.',
    initialFen: '4kb1r/p2n1ppp/4q3/4p1B1/8/1Q6/PPP2PPP/2KR4 w k - 0 1',
    sequence: ['Qb8+', 'Nxb8', 'Rd8#'],
    hint: 'El caballo negro en d7 cuida la casilla clave. ¿Puedes sacarlo del camino con tu dama?',
    wrongMoveExplanation: 'La genial secuencia de Morphy: Db8+! El caballo en d7 debe capturar (Cxb8), dejando d8 sin defender. La torre remata con Td8#. Un maestro de la táctica sacrificial.',
    successMessage: '¡Replicaste el Mate de la Ópera de Morphy! Una de las combinaciones más bellas de la historia del ajedrez. Morphy demostró que la actividad de piezas supera al material.'
  },

  // ══════════════════════════════════════
  // CATEGORÍA 2: TENEDOR / FORK (8 ejercicios)
  // ══════════════════════════════════════
  {
    id: 'm8-l9', category: 'fork',
    title: 'Ejercicio 9: Tenedor de Caballo — Rey y Reina',
    openingName: 'Tenedor de Caballo',
    description: 'El caballo es la pieza más peligrosa para crear tenedores porque ataca en "L" y nadie lo espera. Aquí ataca simultáneamente al rey (¡jaque!) y a la reina.',
    instruction: 'Mueve el caballo para atacar al rey Y a la reina al mismo tiempo.',
    initialFen: 'q1k5/3N4/8/8/8/8/8/4K3 w - - 0 1',
    sequence: ['Nb6+', 'Kd8', 'Nxa8'],
    hint: 'Tu caballo en d7 puede saltar a una casilla desde donde ataque dos piezas negras vitales simultáneamente...',
    wrongMoveExplanation: 'Cb6+ es el tenedor perfecto. Desde b6, el caballo ataca la reina en a8 Y da jaque al rey en c8. El rey debe escapar, y luego capturas la reina sin defensa.',
    successMessage: '¡Tenedor de Caballo devastador! El caballo atacando rey y reina simultáneamente. Cuando el caballo da jaque y amenaza otra pieza al mismo tiempo, el resultado es siempre material gratis.'
  },
  {
    id: 'm8-l10', category: 'fork',
    title: 'Ejercicio 10: Tenedor de Caballo — Rey y Torre',
    openingName: 'Tenedor con Captura de Torre',
    description: 'El caballo tiene la habilidad única de saltar sobre piezas. Aquí, un solo movimiento del caballo da jaque al rey y amenaza la torre simultáneamente.',
    instruction: 'Encuentra el movimiento de caballo que da jaque y amenaza la torre negra.',
    initialFen: '1r3k2/8/5N2/8/8/8/8/4K3 w - - 0 1',
    sequence: ['Nd7+', 'Kg8', 'Nxb8'],
    hint: 'Desde f6, tu caballo puede saltar a una casilla que ataque al rey en f8 y a la torre en b8 simultáneamente...',
    wrongMoveExplanation: 'Cd7+ es el tenedor. El caballo en d7 da jaque al rey en f8 (¡verifica los movimientos del caballo!) y simultáneamente ataca la torre en b8. Después del jaque, Cxb8 captura la torre.',
    successMessage: '¡Tenedor ejecutado! La regla de oro: cuando el caballo da jaque Y amenaza otra pieza, siempre tendrás algo gratis. ¡Busca estas oportunidades en cada partida!'
  },
  {
    id: 'm8-l11', category: 'fork',
    title: 'Ejercicio 11: Caballo Ataca Dos Torres',
    openingName: 'Tenedor de Dos Torres',
    description: 'Cuando el rey está entre dos torres, un caballo bien colocado puede atacar al rey y a una de las torres. El rey se mueve, pierdes la torre.',
    instruction: 'Usa tu caballo para dar jaque al rey y amenazar ambas torres.',
    initialFen: 'r3k2r/8/8/1N6/8/8/8/4K3 w - - 0 1',
    sequence: ['Nc7+', 'Kd8', 'Nxa8'],
    hint: 'Tu caballo en b5 puede dar un salto que haga jaque al rey y ataque la torre al mismo tiempo...',
    wrongMoveExplanation: 'Cc7+ es la jugada. Desde c7, el caballo ataca el rey en e8 (jaque!) y la torre en a8. El rey debe huir, y el caballo captura la torre. Un tenedor clásico con el caballo.',
    successMessage: '¡Excelente tenedor! La posición de las torres en los extremos las hace vulnerables a los tenedores del caballo. Siempre vigila cuándo tu caballo puede atacar dos piezas a la vez.'
  },
  {
    id: 'm8-l12', category: 'fork',
    title: 'Ejercicio 12: Tenedor de Caballo — Rey y Dama',
    openingName: 'Tenedor Caballo-Dama',
    description: 'Un caballo que da jaque y simultáneamente ataca a la dama enemiga es una de las combinaciones tácticas más frecuentes y lucrativas del ajedrez.',
    instruction: 'Mueve el caballo para dar jaque al rey y atacar la dama simultáneamente.',
    initialFen: '8/2q1k3/8/8/8/4N3/8/4K3 w - - 0 1',
    sequence: ['Nd5+', 'Ke6', 'Nxc7'],
    hint: 'Tu caballo en e3 necesita llegar a una casilla que haga jaque al rey en e7 Y amenace la dama en c7...',
    wrongMoveExplanation: 'Cd5+ es el tenedor maestro. Desde d5, el caballo da jaque al rey en e7 Y amenaza la dama en c7. El rey debe moverse, y capturas la dama valiosa con Cxc7.',
    successMessage: '¡Un tenedor que gana la dama! Ganar la dama del oponente suele ser suficiente para ganar la partida. El caballo es un experto en crear el caos desde posiciones inesperadas.'
  },
  {
    id: 'm8-l13', category: 'fork',
    title: 'Ejercicio 13: Tenedor de Dama — Dos Torres',
    openingName: 'Tenedor de Dama',
    description: 'La dama puede amenazar múltiples piezas a la vez por sus líneas diagonales, horizontales y verticales. Aquí, un golpe de dama con jaque amenaza dos torres.',
    instruction: 'Mueve la dama para dar jaque al rey y amenazar ambas torres negras.',
    initialFen: '2r3r1/4k3/8/8/8/8/8/3QK3 w - - 0 1',
    sequence: ['Qd8+', 'Ke6', 'Qxc8'],
    hint: 'Tu dama puede ir a la octava fila para dar jaque y amenazar ambas torres desde allí...',
    wrongMoveExplanation: 'Dd8+ es el tenedor de dama. Desde d8, la dama da jaque al rey en e7 Y ataca las torres en c8 y g8 a lo largo de la 8a fila. El rey debe esconderse, y capturas una torre.',
    successMessage: '¡Tenedor de Dama brillante! La dama puede amenazar piezas en todas las direcciones a la vez. Una sola jugada puede cambiar el rumbo de toda la partida.'
  },
  {
    id: 'm8-l14', category: 'fork',
    title: 'Ejercicio 14: El Caballo en el Borde Ataca el Centro',
    openingName: 'Tenedor Lateral',
    description: 'Un caballo bien posicionado puede atacar piezas en el centro desde el borde del tablero. Esta posición demuestra cómo un salto de caballo con jaque gana una torre.',
    instruction: 'Encuentra el movimiento del caballo que da jaque al rey y captura la torre.',
    initialFen: 'r7/8/8/1N1k4/8/8/8/4K3 w - - 0 1',
    sequence: ['Nc7+', 'Ke5', 'Nxa8'],
    hint: 'El caballo puede atacar en "L". Busca una casilla desde donde el caballo ataque tanto al rey como a la torre...',
    wrongMoveExplanation: 'Cc7+ es el tenedor. El caballo salta a c7, dando jaque al rey en d5 y atacando la torre en a8. Después del jaque el rey huye y el caballo captura la torre. ¡Torre gratis!',
    successMessage: '¡Excelente! El caballo en el borde puede atacar el centro. Recuerda siempre calcular a qué casillas puede saltar tu caballo antes de cada jugada.'
  },
  {
    id: 'm8-l15', category: 'fork',
    title: 'Ejercicio 15: Tenedor de Dama — Rey y Dama',
    openingName: 'Interceptación con Captura',
    description: 'Cuando dos piezas valiosas del oponente están en líneas que tu dama puede atacar, puedes ganar material enorme con UN solo movimiento.',
    instruction: 'Captura la dama negra dando jaque al rey para ganar material decisivo.',
    initialFen: '2qk4/8/8/8/8/7Q/8/4K3 w - - 0 1',
    sequence: ['Qxc8+', 'Ke7', 'Qe8#'],
    hint: 'Tu dama puede capturar la dama negra mientras da jaque al rey. ¡Ataca ambas cosas a la vez!',
    wrongMoveExplanation: 'Dxc8+ captura la dama y da jaque al rey. Después de Ke7, la jugada Qe8# cierra el tablero con elegancia. ¡Ganaste la dama Y diste jaque mate!',
    successMessage: '¡Magistral! Capturaste la dama enemiga y aún lograste dar jaque mate. Este tipo de combinación, ganando material mientras amenazas al rey, es la esencia de la táctica en ajedrez.'
  },
  {
    id: 'm8-l16', category: 'fork',
    title: 'Ejercicio 16: Caballo Forquea Rey y Torre',
    openingName: 'Tenedor con Jaque Descubierto',
    description: 'El caballo da jaque al rey mientras simultáneamente amenaza la torre. El rey debe responder al jaque, y la torre cae sin remedio.',
    instruction: 'Mueve el caballo para dar jaque y amenazar la torre en la misma jugada.',
    initialFen: '8/8/8/4r3/8/8/1N1k4/5K2 w - - 0 1',
    sequence: ['Nc4+', 'Kc3', 'Nxe5'],
    hint: 'Desde b2, tu caballo puede llegar a una casilla que dé jaque al rey en d2 y amenace la torre en e5...',
    wrongMoveExplanation: 'Cc4+ es el tenedor. El caballo salta a c4, dando jaque al rey en d2 Y amenazando la torre en e5. Después del jaque y la huida del rey, Cxe5 captura la torre gratis.',
    successMessage: '¡El tenedor de caballo en acción! Una vez que el rey está en jaque, no puede salvar la torre. Siempre busca esta combinación cuando tienes un caballo cerca del rey enemigo.'
  },

  // ══════════════════════════════════════
  // CATEGORÍA 3: CLAVADA / PIN (8 ejercicios)
  // ══════════════════════════════════════
  {
    id: 'm8-l17', category: 'pin',
    title: 'Ejercicio 17: Captura la Pieza Clavada',
    openingName: 'Clavada Diagonal',
    description: 'El alfil en a2 clava al caballo negro en c4 absoluta contra el rey en g8. Una pieza clavada no puede moverse sin exponer al rey a jaque. ¡Captúrala!',
    instruction: 'El caballo negro está clavado. Usa tu torre para capturarlo sin miedo.',
    initialFen: '6k1/8/8/8/2nR4/8/B7/4K3 w - - 0 1',
    sequence: ['Rxc4'],
    hint: 'El caballo en c4 no puede moverse porque está clavado por el alfil en a2. Tu torre en d4 puede capturarlo sin riesgo...',
    wrongMoveExplanation: 'Txc4 captura el caballo clavado. El caballo en c4 está "clavado" en la diagonal a2-g8: si se mueve, el alfil daría jaque al rey. Por eso puedes tomarlo gratis.',
    successMessage: '¡Clavada perfectamente explotada! La clave es reconocer cuándo una pieza enemiga no puede moverse. Una pieza clavada es una pieza indefensa.'
  },
  {
    id: 'm8-l18', category: 'pin',
    title: 'Ejercicio 18: Torre Captura Pieza Inmovilizada',
    openingName: 'Clavada con Torre',
    description: 'El alfil clava al caballo negro en c5 contra el rey en e7. La diagonal a3-e7 es la línea mágica. El caballo no puede moverse.',
    instruction: 'Captura el caballo clavado usando tu torre ya posicionada.',
    initialFen: '4k3/8/8/2n5/8/B1R5/8/4K3 w - - 0 1',
    sequence: ['Rxc5'],
    hint: 'El alfil en a3 clava al caballo en c5 contra el rey en e7. Tu torre en c3 está perfectamente posicionada para capturarlo...',
    wrongMoveExplanation: 'Txc5 captura el caballo. El alfil a3 clava absolutamente al caballo c5 (si el caballo se mueve, el alfil daría jaque al rey en e7). La torre toma la pieza indefensa.',
    successMessage: '¡Excelente diagnóstico táctico! Ver las clavadas es fundamental. Cuando una pieza está clavada, es como si no existiera: está paralizada por completo.'
  },
  {
    id: 'm8-l19', category: 'pin',
    title: 'Ejercicio 19: Alfil Captura el Caballo Clavado',
    openingName: 'Clavada Diagonal con Alfil',
    description: 'El alfil en c3 tiene una diagonal que pasa directamente por el caballo negro en f6. Si el caballo está clavado contra el rey, el alfil puede capturarlo.',
    instruction: 'Usa el alfil para atacar al caballo negro que no puede defenderse.',
    initialFen: '7k/8/5n2/8/8/2B5/6R1/4K3 w - - 0 1',
    sequence: ['Bxf6+'],
    hint: 'El alfil en c3 puede avanzar por la diagonal hasta capturar el caballo en f6. ¿Por qué no puede el caballo moverse?',
    wrongMoveExplanation: 'Axf6+! El alfil captura el caballo dando jaque al rey en h8 vía diagonal. El caballo estaba en la diagonal c3-h8, exactamente clavado entre el alfil y el rey.',
    successMessage: '¡El alfil captura la pieza clavada! Nótese que la captura también dio jaque, lo que indica que la clavada era absoluta: el caballo nunca pudo moverse.'
  },
  {
    id: 'm8-l20', category: 'pin',
    title: 'Ejercicio 20: Caballo Captura Torre Clavada',
    openingName: 'Clavada con Caballo',
    description: 'La torre negra en h7 está clavada absolutamente: si se mueve, el rey en h8 queda sin protección de la columna h. La torre está paralizada.',
    instruction: 'Captura la torre negra clavada con tu caballo.',
    initialFen: '7k/7r/8/6NR/8/8/8/4K3 w - - 0 1',
    sequence: ['Nxh7'],
    hint: 'La torre blanca en h5 clava a la torre negra en h7 contra el rey en h8. ¡Tu caballo puede capturarla!',
    wrongMoveExplanation: 'Cxh7 captura la torre clavada. La torre negra en h7 está absolutamente clavada por la torre blanca en h5 (si la torre negra se mueve, el rey en h8 queda en jaque). De esta forma capturas una torre entera.',
    successMessage: '¡Clavada vertical explotada! Las clavadas no ocurren solo en diagonales — las torres y damas también pueden clavar piezas en filas y columnas. Aprende a reconocerlas en todas direcciones.'
  },
  {
    id: 'm8-l21', category: 'pin',
    title: 'Ejercicio 21: Torre Elimina el Caballo Inmovilizado',
    openingName: 'Clavada y Captura',
    description: 'El alfil blanco clava al caballo negro en la diagonal contra su propio rey. La torre puede entrar para capturarlo libremente.',
    instruction: 'Captura el caballo negro que no puede saltar porque está clavado.',
    initialFen: '6k1/8/3n4/8/3R4/1B6/8/4K3 w - - 0 1',
    sequence: ['Rxd6'],
    hint: 'El alfil en b3 clava al caballo en d6 contra el rey en g8. Tu torre en d4 puede capturarlo moviéndose por la columna d...',
    wrongMoveExplanation: 'Txd6 captura el caballo clavado. El alfil b3 clava al caballo d6 en la diagonal b3-g8. El caballo no puede moverse sin exponer al rey, así que la torre lo captura impunemente.',
    successMessage: '¡Torre y alfil cooperando! El alfil crea la clavada y la torre capitaliza. Este trabajo en equipo entre piezas es la esencia de una buena coordinación de piezas.'
  },
  {
    id: 'm8-l22', category: 'pin',
    title: 'Ejercicio 22: Clavada en la Columna',
    openingName: 'Clavada Vertical',
    description: 'La torre negra en d6 está clavada verticalmente: el alfil blanco en la diagonal y la posición del rey hacen que cualquier movimiento resulte fatal.',
    instruction: 'Captura la torre negra que está inmovilizada por la clavada.',
    initialFen: '4k3/8/3r4/8/3R4/8/3B4/4K3 w - - 0 1',
    sequence: ['Rxd6'],
    hint: 'El alfil en d2 y la posición del rey crean una situación donde la torre negra en d6 no puede moverse con seguridad. ¡Tu torre puede capturarla!',
    wrongMoveExplanation: 'Txd6 captura la torre negra. La torre negra está clavada en la columna d: si se mueve, el rey en d8 queda expuesto. De esta forma capturas toda una torre sin costo.',
    successMessage: '¡Clavada en columna! Una de las clavadas más comunes en ajedrez. La columna abierta y la posición del alfil diagonal crean una trampa perfecta.'
  },
  {
    id: 'm8-l23', category: 'pin',
    title: 'Ejercicio 23: Torre Pena al Caballo',
    openingName: 'Clavada Diagonal con Alfil',
    description: 'El alfil blanco en b4 está en la misma diagonal que el rey negro en h8 y el caballo en d6. Una clavada absoluta inmoviliza al caballo.',
    instruction: 'Usa tu torre para capturar el caballo que está clavado por el alfil.',
    initialFen: '7k/8/3n4/8/1B6/3R4/8/4K3 w - - 0 1',
    sequence: ['Rxd6'],
    hint: 'El alfil en b4 se alinea con el caballo en d6 y el rey en h8 en la misma diagonal. El caballo no puede moverse... ¡captúralo con la torre!',
    wrongMoveExplanation: 'Txd6 captura el caballo clavado. La diagonal b4-d6-h8 crea una clavada absoluta. El caballo no puede moverse porque expondría al rey al jaque del alfil.',
    successMessage: '¡Diagonal mortal! Recuerda siempre buscar diagonales largas donde tu alfil pueda clavar piezas enemigas contra su propio rey. Esta es una poderosa arma posicional.'
  },
  {
    id: 'm8-l24', category: 'pin',
    title: 'Ejercicio 24: Torre Captura Torre Clavada',
    openingName: 'Rayos X Táctico',
    description: 'El alfil blanco y la posición del rey crean una presión de "rayos X". La torre negra en e7 está clavada y no puede escapar.',
    instruction: 'Captura la torre negra clavada en la misma columna.',
    initialFen: '4k3/4r3/8/8/4R3/2B5/8/4K3 w - - 0 1',
    sequence: ['Rxe7'],
    hint: 'Mira el alfil en c5 y la posición del rey en e8. La torre negra en e7 está entre el alfil y el rey...',
    wrongMoveExplanation: 'Txe7+! La torre captura la torre clavada, dando además jaque. El alfil c5 clavaba la torre negra: si la torre e7 se movía, el alfil daría jaque al rey e8.',
    successMessage: '¡La clavada con "rayos X"! Cuando el alfil clava una pieza y la torre puede explotarlo, se dice que hay un ataque de rayos X táctico. Una de las combinaciones más elegantes en ajedrez.'
  },

  // ════════════════════════════════════════════
  // CATEGORÍA 4: ATAQUE DESCUBIERTO (8 ejercicios)
  // ════════════════════════════════════════════
  {
    id: 'm8-l25', category: 'discovery',
    title: 'Ejercicio 25: Jaque Descubierto con Torre',
    openingName: 'Jaque Descubierto',
    description: 'Un ataque descubierto ocurre cuando una pieza se mueve y revela el ataque de otra pieza detrás. En este caso, al mover el alfil, la torre en e8 descubre un jaque mortal.',
    instruction: 'Mueve el alfil para descubrir el jaque de la torre en el rey enemigo.',
    initialFen: '4R3/8/8/8/4B3/4k3/8/4K3 w - - 0 1',
    sequence: ['Bc6+'],
    hint: 'El alfil en e4 bloquea la vista de la torre en e8 hacia el rey en e3. Si mueves el alfil fuera de la columna e, ¿qué pasa?',
    wrongMoveExplanation: 'Ac6+ es el jaque descubierto. Al mover el alfil a c6 (dando jaque por sí mismo), la columna e queda libre y la torre en e8 también ataca directamente al rey en e3. ¡Doble jaque!',
    successMessage: '¡Jaque descubierto devastador! Cuando el alfil se mueve, libera a la torre. Una pieza descubre el ataque de otra. Los ataques descubiertos son casi siempre imposibles de defender.'
  },
  {
    id: 'm8-l26', category: 'discovery',
    title: 'Ejercicio 26: Alfil Descubre Ataque de Torre',
    openingName: 'Ataque Descubierto Diagonal',
    description: 'El alfil y la torre trabajan en conjunto. Al mover el alfil con jaque, simultáneamente liberas a la torre para atacar una segunda pieza. El oponente no puede defenderse de ambas amenazas.',
    instruction: 'Mueve el alfil para dar jaque al rey descubriendo el ataque de la torre.',
    initialFen: '2k5/8/8/8/8/2B5/8/2R1K3 w - - 0 1',
    sequence: ['Bb4+', 'Kb7', 'Rc7#'],
    hint: 'El alfil en c3 bloquea la columna c. Si mueves el alfil dando jaque al rey, la torre en c1 queda con una vista directa sobre el rey...',
    wrongMoveExplanation: 'Ab4+ mueve el alfil dando jaque al rey en c8 y simultáneamente libera la columna c para la torre. Después de Rb7 (el rey huye), Tc7# es un mate elegante.',
    successMessage: '¡Descubierta letal! Al mover el alfil, das jaque y liberas a la torre. El rey no puede atender dos amenazas al mismo tiempo. ¡Esa es la esencia del ataque descubierto!'
  },
  {
    id: 'm8-l27', category: 'discovery',
    title: 'Ejercicio 27: Jaque del Alfil Descubre la Torre',
    openingName: 'Descubierta con Ganancia de Material',
    description: 'El alfil se mueve con jaque, forzando al rey a moverse. Mientras el rey atiende el jaque, la torre captura la poderosa torre negra en el otro lado del tablero.',
    instruction: 'Mueve el alfil para dar jaque y dejar actuar a la torre en el flanco.',
    initialFen: 'r7/8/1k6/8/8/5B2/8/R3K3 w Q - 0 1',
    sequence: ['Bc6+', 'Kxc6', 'Rxa8'],
    hint: 'Tu alfil puede dar jaque al rey en b6. Mientras el rey atiende esa amenaza, ¿qué puede hacer tu torre?',
    wrongMoveExplanation: 'Ac6+ da jaque al rey en b6. El rey debe responder (Rxc6). Mientras tanto, la torre captura Txa8 ganando la torre negra que estaba desatendida. ¡Dos amenazas simultáneas!',
    successMessage: '¡Ataque descubierto que gana material! Obligar al rey a moverse mientras capturas una pieza valiosa es la combinación perfecta. Siempre busca cómo "distraer" al rey de sus defensas.'
  },
  {
    id: 'm8-l28', category: 'discovery',
    title: 'Ejercicio 28: Jaque que Descubre Ataque de Torre',
    openingName: 'Descubierta con Jaque',
    description: 'El alfil da jaque directo al rey, obligándolo a moverse. En ese momento la torre puede entrar y atacar con fuerza. El oponente no puede defender dos flancos a la vez.',
    instruction: 'Da el jaque con el alfil para descubrir la amenaza de tu torre.',
    initialFen: '8/8/8/8/k3B3/8/8/R3K3 w Q - 0 1',
    sequence: ['Bc6+', 'Kb3', 'Ra3+'],
    hint: 'El alfil en e4 puede dar jaque al rey en a4 moviéndose a c6. Después de que el rey huya, ¿dónde puede actuar la torre?',
    wrongMoveExplanation: 'Ac6+ da jaque al rey en a4. El rey debe moverse a b3 (u otra casilla). Pero ahora la torre está activa y Ra3+ sigue atacando al rey en movimiento. Cada jugada presiona al oponente al máximo.',
    successMessage: '¡Descubierta que no para! Primero el jaque del alfil, luego el jaque de la torre. El rey es perseguido sin descanso. Los ataques descubiertos en cadena son los más difíciles de defender.'
  },
  {
    id: 'm8-l29', category: 'discovery',
    title: 'Ejercicio 29: Caballo Descubre al Alfil',
    openingName: 'Descubierta de Caballo',
    description: 'El caballo da jaque al rey, y al moverse, revela el ataque poderoso del alfil. El oponente debe atender el jaque inmediato, sin poder bloquear la amenaza descubierta.',
    instruction: 'Mueve el caballo para dar jaque y descubrir el ataque del alfil.',
    initialFen: '8/8/2k5/8/8/3N4/5B2/4K3 w - - 0 1',
    sequence: ['Nb4+', 'Kb5', 'Bd4+'],
    hint: 'El caballo en d3 puede dar jaque al rey en c6 si salta a b4. Al hacerlo, ¿qué ataque del alfil queda descubierto?',
    wrongMoveExplanation: 'Cb4+ salta el caballo dando jaque al rey en c6. El rey huye a b5. Ahora el alfil f2 tiene libre la diagonal hacia el rey: Ad4+ continúa el ataque. El rey es perseguido por ambas piezas.',
    successMessage: '¡Caballo que activa al alfil! Al mover el caballo con jaque, liberas la diagonal del alfil. Esta coordinación entre salto de caballo y diagonal de alfil es difícil de anticipar para el oponente.'
  },
  {
    id: 'm8-l30', category: 'discovery',
    title: 'Ejercicio 30: Jaque Doble — Rey Forzado',
    openingName: 'Jaque Doble',
    description: 'El jaque doble es el ataque más poderoso en ajedrez: el rey recibe jaque de DOS piezas simultáneamente. La única defensa es mover el rey — las capturas y bloqueos son imposibles.',
    instruction: 'Mueve el alfil para crear un jaque doble irresistible sobre el rey negro.',
    initialFen: '4k3/8/8/8/4B3/8/8/4RK2 w - - 0 1',
    sequence: ['Bb7+'],
    hint: 'El alfil en e4 puede moverse dando jaque al rey en e8. Pero al moverse, ¿qué otra pieza blanca también empieza a dar jaque?',
    wrongMoveExplanation: 'Ab7+ mueve el alfil saliendo de la columna e. El alfil da jaque al rey y simultáneamente libera la columna e, donde la torre en e1 también da jaque al rey en e8. ¡Jaque doble! Solo mover el rey ayuda.',
    successMessage: '¡Jaque doble! La imposible defensa: cuando dos piezas atacan al rey a la vez, no hay bloqueo posible. Es el ataque más potente del ajedrez. Los maestros lo buscan constantemente.'
  },
  {
    id: 'm8-l31', category: 'discovery',
    title: 'Ejercicio 31: Caballo Descubre al Alfil en Diagonal',
    openingName: 'Descubierta Diagonal',
    description: 'Un caballo bien colocado puede revelar el ataque de un alfil al moverse. El oponente debe atender el jaque del caballo, pero el alfil queda activo y amenazante.',
    instruction: 'Mueve el caballo para dar jaque y revelar el ataque del alfil.',
    initialFen: '8/8/3k4/8/3N4/8/5B2/4K3 w - - 0 1',
    sequence: ['Ne6+', 'Ke5', 'Bd4+'],
    hint: 'El caballo en d4 puede saltar a e6 dando jaque al rey en d6. Al hacerlo, ¿qué diagonal del alfil queda libre?',
    wrongMoveExplanation: 'Ce6+ da jaque al rey en d6. El rey huye a e5. Ahora el alfil f2 tiene la diagonal libre hacia el rey: Ad4+ continúa la persecución. El rey no puede escapar de tantas amenazas.',
    successMessage: '¡Descubierta en diagonal! El alfil esperando pacientemente mientras el caballo ejecuta el trabajo sucio. Esta coordinación de piezas es lo que diferencia a los buenos ajedrecistas.'
  },
  {
    id: 'm8-l32', category: 'discovery',
    title: 'Ejercicio 32: Descubierta Final — Caballo y Alfil',
    openingName: 'Combinación de Cierre',
    description: 'El caballo da jaque, el rey huye, y el alfil entra con nuevo jaque. El rey no puede descansar nunca. Esta persecución en zigzag es la esencia de los ataques descubiertos.',
    instruction: 'Inicia la secuencia de descubierta con el salto de caballo.',
    initialFen: '8/k7/8/8/4N3/8/2B5/4K3 w - - 0 1',
    sequence: ['Nd6+', 'Ka6', 'Bb3+'],
    hint: 'El caballo en e4 puede saltar a d6 dando jaque al rey en a7. Al moverse el caballo, ¿qué diagonal del alfil queda activa?',
    wrongMoveExplanation: 'Cd6+ da jaque al rey en a7. El rey huye a a6. Ahora el alfil c2 tiene la diagonal libre: Ab3+ ataca al rey en a6. El rey es perseguido sin descanso por el caballo y el alfil trabajando juntos.',
    successMessage: '¡Combinación maestra! Caballo y alfil colaborando en una persecución imparable. Cuando las piezas trabajan en armonía, crean amenazas que el oponente simplemente no puede defender. ¡Has completado las 32 tácticas!'
  }
];
