// Módulo 9: Bobby Fischer Teaches Chess — Ejercicios Únicos y Validados
export interface ExerciseLesson {
  id: string;
  title: string;
  openingName: string;
  description: string;
  instruction: string;
  initialFen: string;
  sequence: string[];
  hint: string;
  successMessage: string;
  wrongMoveExplanation: string;
  category: 'attack' | 'defense';
  difficulty: 'fácil' | 'medio' | 'difícil';
  reference?: string;
}

export const attackLessons: ExerciseLesson[] = [
  {
    "id": "m9a1",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Fischer vs. Larsen 1958 (Mate Real)",
    "openingName": "Partida Real: Fischer-Larsen, Portoroz 1958",
    "description": "Táctica del estilo Bobby Fischer: Partida Real: Fischer-Larsen, Portoroz 1958. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "3r1k2/1q1P2b1/7Q/p3p2p/1p6/1B3P2/PPP5/1K1R4 w - - 0 1",
    "sequence": [
      "Qd6#"
    ],
    "hint": "Esta es la posición real de la partida Fischer-Larsen. ¿Ves el mate en uno?",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a2",
    "category": "attack",
    "difficulty": "medio",
    "title": "Red Táctica: Caballo f5 a e7",
    "openingName": "Red Táctica: Caballo + Dama",
    "description": "Táctica del estilo Bobby Fischer: Red Táctica: Caballo + Dama. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "6k1/5ppp/8/5N2/3Q4/8/5PPP/6K1 w - - 0 1",
    "sequence": [
      "Ne7+",
      "Kh8",
      "Qd8#"
    ],
    "hint": "El caballo salta a e7 forzando al rey al rincón.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a3",
    "category": "attack",
    "difficulty": "medio",
    "title": "Red Táctica: Caballo d5 a e7",
    "openingName": "Red Táctica: Caballo + Dama",
    "description": "Táctica del estilo Bobby Fischer: Red Táctica: Caballo + Dama. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "6k1/5ppp/8/3N4/3Q4/8/5PPP/6K1 w - - 0 1",
    "sequence": [
      "Ne7+",
      "Kh8",
      "Qd8#"
    ],
    "hint": "El caballo en d5 tiene el mismo salto decisivo a e7.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a4",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Red Táctica: Caballo h5 a f6",
    "openingName": "Red Táctica: Caballo + Dama",
    "description": "Táctica del estilo Bobby Fischer: Red Táctica: Caballo + Dama. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "5rk1/5ppp/8/7N/4Q3/8/5PPP/6K1 w - - 0 1",
    "sequence": [
      "Nf6+",
      "Kh8",
      "Qxh7#"
    ],
    "hint": "El caballo en h5 da jaque desde f6 forzando al rey al rincón.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a5",
    "category": "attack",
    "difficulty": "medio",
    "title": "Sacrificio de Dama en d8",
    "openingName": "Sacrificio de Dama: Pasillo de Torre",
    "description": "Táctica del estilo Bobby Fischer: Sacrificio de Dama: Pasillo de Torre. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "2rr2k1/p4ppp/8/8/8/8/P2Q1PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "La dama se sacrifica para que la torre logre el pasillo.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a6",
    "category": "attack",
    "difficulty": "medio",
    "title": "Sacrificio de Dama en c8",
    "openingName": "Sacrificio de Dama: Pasillo de Torre",
    "description": "Táctica del estilo Bobby Fischer: Sacrificio de Dama: Pasillo de Torre. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "1rr3k1/p4ppp/8/8/8/8/P1Q2PPP/2R3K1 w - - 0 1",
    "sequence": [
      "Qxc8+",
      "Rxc8",
      "Rxc8#"
    ],
    "hint": "La dama blanca se sacrifica en la columna c.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a7",
    "category": "attack",
    "difficulty": "medio",
    "title": "Sacrificio de Dama en e8",
    "openingName": "Sacrificio de Dama: Pasillo de Torre",
    "description": "Táctica del estilo Bobby Fischer: Sacrificio de Dama: Pasillo de Torre. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "3rr1k1/p4ppp/8/8/8/8/P3QPPP/4R1K1 w - - 0 1",
    "sequence": [
      "Qxe8+",
      "Rxe8",
      "Rxe8#"
    ],
    "hint": "La dama blanca se sacrifica en la columna e.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a8",
    "category": "attack",
    "difficulty": "medio",
    "title": "Sacrificio con Peón Pasado Negro",
    "openingName": "Sacrificio de Dama: Pasillo de Torre",
    "description": "Táctica del estilo Bobby Fischer: Sacrificio de Dama: Pasillo de Torre. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "2rr2k1/p1p2ppp/1p6/8/8/8/P2Q1PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Los peones negros no pueden defender la última fila.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a9",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Sacrificio — Alfil Negro en a6",
    "openingName": "Sacrificio de Dama: Pasillo de Torre",
    "description": "Táctica del estilo Bobby Fischer: Sacrificio de Dama: Pasillo de Torre. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "2rr2k1/p4ppp/b7/8/8/8/P2Q1PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "El alfil negro en a6 no puede defender la última fila.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a10",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Sacrificio — Peones Avanzados",
    "openingName": "Sacrificio de Dama: Pasillo de Torre",
    "description": "Táctica del estilo Bobby Fischer: Sacrificio de Dama: Pasillo de Torre. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "2rr2k1/5ppp/p1p5/8/8/8/P2Q1PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Los peones avanzados no salvan al rey negro.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a11",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Sacrificio — Cadena de Peones en e",
    "openingName": "Sacrificio de Dama: Pasillo de Torre",
    "description": "Táctica del estilo Bobby Fischer: Sacrificio de Dama: Pasillo de Torre. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "3rr1k1/5ppp/1p6/p7/8/8/P3QPPP/4R1K1 w - - 0 1",
    "sequence": [
      "Qxe8+",
      "Rxe8",
      "Rxe8#"
    ],
    "hint": "La cadena de peones no bloquea el pasillo en la columna e.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a12",
    "category": "attack",
    "difficulty": "fácil",
    "title": "Dama Invade la Columna a",
    "openingName": "Mate de Corredor: Dama",
    "description": "Táctica del estilo Bobby Fischer: Mate de Corredor: Dama. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "6k1/5ppp/8/8/8/8/5PPP/Q5K1 w - - 0 1",
    "sequence": [
      "Qa8#"
    ],
    "hint": "La dama blanca tiene la columna a completamente libre.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a13",
    "category": "attack",
    "difficulty": "fácil",
    "title": "Torre Invade la Columna a",
    "openingName": "Mate de Corredor: Torre",
    "description": "Táctica del estilo Bobby Fischer: Mate de Corredor: Torre. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1",
    "sequence": [
      "Ra8#"
    ],
    "hint": "La torre blanca tiene la columna a completamente libre.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a14",
    "category": "attack",
    "difficulty": "fácil",
    "title": "Dama Diagonal — Mate en d8",
    "openingName": "Mate de Corredor: Dama",
    "description": "Táctica del estilo Bobby Fischer: Mate de Corredor: Dama. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "6k1/5ppp/8/8/8/8/5PPP/3QR1K1 w - - 0 1",
    "sequence": [
      "Qd8#"
    ],
    "hint": "La dama blanca puede ir directamente a d8.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a15",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Ataque Italiano Estilo Fischer",
    "openingName": "Apertura Italiana: Ataque Fischer",
    "description": "Táctica del estilo Bobby Fischer: Apertura Italiana: Ataque Fischer. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    "sequence": [
      "Ng5",
      "Nd4",
      "Qh5",
      "Ne6",
      "Qxf7#"
    ],
    "hint": "Apertura italiana con un ataque fulminante de 5 jugadas.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a16",
    "category": "attack",
    "difficulty": "fácil",
    "title": "Torre Sacrificada da Mate en c8",
    "openingName": "Sacrificio de Torre: Mate Directo",
    "description": "Táctica del estilo Bobby Fischer: Sacrificio de Torre: Mate Directo. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "2b3k1/5ppp/8/8/8/8/5PPP/2RQ2K1 w - - 0 1",
    "sequence": [
      "Rxc8#"
    ],
    "hint": "La torre captura en c8 dando jaque mate al rey atrapado.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a17",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Sacrificio — Peones en Ambos Flancos",
    "openingName": "Sacrificio de Dama: Pasillo de Torre",
    "description": "Táctica del estilo Bobby Fischer: Sacrificio de Dama: Pasillo de Torre. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "2rr2k1/2p2ppp/p7/8/8/8/P2Q1PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Los peones en ambos flancos no protegen la última fila.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a18",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Caballo en b5 + Sacrificio de Dama",
    "openingName": "Sacrificio de Dama con Apoyo de Caballo",
    "description": "Táctica del estilo Bobby Fischer: Sacrificio de Dama con Apoyo de Caballo. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "2rr2k1/p4ppp/8/1N6/3Q4/8/P4PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "El caballo en b5 controla casillas claves mientras la dama sacrifica.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a19",
    "category": "attack",
    "difficulty": "fácil",
    "title": "Torre Sacrificada da Mate en e8",
    "openingName": "Sacrificio de Torre: Mate Directo",
    "description": "Táctica del estilo Bobby Fischer: Sacrificio de Torre: Mate Directo. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "4b1k1/5ppp/8/8/8/8/5PPP/3QR1K1 w - - 0 1",
    "sequence": [
      "Rxe8#"
    ],
    "hint": "La torre captura en e8 dando jaque mate al rey atrapado.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a20",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Caballo Activo + Sacrificio (Estructura Abierta)",
    "openingName": "Sacrificio de Dama con Caballo en b5",
    "description": "Táctica del estilo Bobby Fischer: Sacrificio de Dama con Caballo en b5. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Blancas. Encuentra la combinación ganadora.",
    "initialFen": "2rr2k1/p4ppp/8/1N6/8/8/P2Q1PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "El caballo en b5 controla casillas pero el sacrificio es la clave.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  }
];

export const defenseLessons: ExerciseLesson[] = [
  {
    "id": "m9d1",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Fischer vs Keres – Las Negras Matan",
    "openingName": "Partida Real: Fischer jugó con Negras",
    "description": "Táctica del estilo Bobby Fischer: Partida Real: Fischer jugó con Negras. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "8/8/2P5/3K1k2/2R3p1/2q5/8/8 b - - 0 1",
    "sequence": [
      "Qe5#"
    ],
    "hint": "La reina negra tiene un mate en uno directo. Encuentra la casilla.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d2",
    "category": "defense",
    "difficulty": "medio",
    "title": "Pasillo Invertido — Columna d (I)",
    "openingName": "Pasillo Invertido: Sacrificio de Reina Negra",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido: Sacrificio de Reina Negra. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k2r4/pppq4/8/8/8/8/PPP5/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "La reina negra se sacrifica en d1 para que la torre dé mate.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d3",
    "category": "defense",
    "difficulty": "medio",
    "title": "Pasillo Invertido — Columna d (II)",
    "openingName": "Pasillo Invertido: Sacrificio de Reina Negra",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido: Sacrificio de Reina Negra. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k2r4/p1pq4/1p6/8/8/8/PPP5/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "Estructura siciliana negra pero el pasillo en d1 es decisivo.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d4",
    "category": "defense",
    "difficulty": "medio",
    "title": "Pasillo Invertido — Columna d (III)",
    "openingName": "Pasillo Invertido: Sacrificio de Reina Negra",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido: Sacrificio de Reina Negra. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k2r4/1ppq4/p7/8/8/8/PPP5/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "El peón en a6 presiona pero el pasillo es más rápido.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d5",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Pasillo d — Apoyo de Caballo Negro",
    "openingName": "Pasillo Invertido con Apoyo de Caballo",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido con Apoyo de Caballo. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k2r4/pppq4/2n5/8/8/8/PPP5/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "El caballo negro en c6 apoya pero la secuencia es idéntica.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d6",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Pasillo d — Apoyo de Alfil Negro",
    "openingName": "Pasillo Invertido con Apoyo de Alfil",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido con Apoyo de Alfil. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k2r4/pppq4/b7/8/8/8/PPP5/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "El alfil negro apoya controlando diagonales mientras la reina sacrifica.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d7",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Pasillo d — Peón Avanzado Negro",
    "openingName": "Pasillo Invertido: Peones Activos",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido: Peones Activos. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k2r4/pppq4/8/1p6/8/8/PPP5/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "El peón avanzado en b5 amenaza pero el pasillo es más rápido.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d8",
    "category": "defense",
    "difficulty": "medio",
    "title": "Pasillo Invertido — Columna e (I)",
    "openingName": "Pasillo Invertido: Columna e",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido: Columna e. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k3r3/ppp1q3/8/8/8/8/PPP5/1K1RR3 b - - 0 1",
    "sequence": [
      "Qxe1+",
      "Rxe1",
      "Rxe1#"
    ],
    "hint": "La reina negra invade la columna e para dar mate.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d9",
    "category": "defense",
    "difficulty": "medio",
    "title": "Pasillo Invertido — Columna e (II)",
    "openingName": "Pasillo Invertido: Columna e",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido: Columna e. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k3r3/p1p1q3/1p6/8/8/8/PPP5/1K1RR3 b - - 0 1",
    "sequence": [
      "Qxe1+",
      "Rxe1",
      "Rxe1#"
    ],
    "hint": "Estructura diferente pero el pasillo en columna e es letal.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d10",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Pasillo e — con Caballo Negro",
    "openingName": "Pasillo Invertido: Columna e",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido: Columna e. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k3r3/ppp1q3/2n5/8/8/8/PPP5/1K1RR3 b - - 0 1",
    "sequence": [
      "Qxe1+",
      "Rxe1",
      "Rxe1#"
    ],
    "hint": "El caballo apoya la ofensiva mientras la reina abre camino.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d11",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Pasillo e — con Alfil Negro",
    "openingName": "Pasillo Invertido: Columna e",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido: Columna e. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k3r3/ppp1q3/b7/8/8/8/PPP5/1K1RR3 b - - 0 1",
    "sequence": [
      "Qxe1+",
      "Rxe1",
      "Rxe1#"
    ],
    "hint": "El alfil negro presiona la diagonal mientras la reina sacrifica en e1.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d12",
    "category": "defense",
    "difficulty": "medio",
    "title": "Pasillo Invertido — Columna c (I)",
    "openingName": "Pasillo Invertido: Columna c (Rey en a1)",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido: Columna c (Rey en a1). Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k1r5/ppq5/8/8/8/8/PP6/K1RR4 b - - 0 1",
    "sequence": [
      "Qxc1+",
      "Rxc1",
      "Rxc1#"
    ],
    "hint": "La reina negra sacrifica en c1 con el rey blanco en la esquina a1.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d13",
    "category": "defense",
    "difficulty": "medio",
    "title": "Pasillo Invertido — Columna c (II)",
    "openingName": "Pasillo Invertido: Columna c (Rey en a1)",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido: Columna c (Rey en a1). Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k1r5/p1q5/1p6/8/8/8/PP6/K1RR4 b - - 0 1",
    "sequence": [
      "Qxc1+",
      "Rxc1",
      "Rxc1#"
    ],
    "hint": "Estructura diferente pero el pasillo en c1 funciona igual.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d14",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Pasillo c — con Caballo en b4",
    "openingName": "Pasillo Invertido: Columna c con Caballo",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido: Columna c con Caballo. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k1r5/ppq5/8/8/1n6/8/PP6/K1RR4 b - - 0 1",
    "sequence": [
      "Qxc1+",
      "Rxc1",
      "Rxc1#"
    ],
    "hint": "El caballo negro en b4 presiona mientras la reina sacrifica.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d15",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Pasillo c — con Alfil Negro en a6",
    "openingName": "Pasillo Invertido: Columna c con Alfil",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido: Columna c con Alfil. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k1r5/ppq5/b7/8/8/8/PP6/K1RR4 b - - 0 1",
    "sequence": [
      "Qxc1+",
      "Rxc1",
      "Rxc1#"
    ],
    "hint": "El alfil negro apoya desde a6 mientras la reina sacrifica en c1.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d16",
    "category": "defense",
    "difficulty": "medio",
    "title": "Pasillo d — Estructura Caro-Kann",
    "openingName": "Pasillo Invertido: Estructura Caro-Kann",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido: Estructura Caro-Kann. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k2r4/pp1q1p2/2p5/8/8/8/PPP5/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "Estructura Caro-Kann negra pero el pasillo en d1 es decisivo.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d17",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Pasillo e — Peones Negros Avanzados",
    "openingName": "Pasillo Invertido: Peones Activos en e",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido: Peones Activos en e. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k3r3/ppp1q3/8/1p6/8/8/PPP5/1K1RR3 b - - 0 1",
    "sequence": [
      "Qxe1+",
      "Rxe1",
      "Rxe1#"
    ],
    "hint": "El peón avanzado en b5 no ayuda al rey blanco atrapado.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d18",
    "category": "defense",
    "difficulty": "medio",
    "title": "Pasillo d — Reina en d6",
    "openingName": "Pasillo Invertido: Variante de Reina en d6",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido: Variante de Reina en d6. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k2r4/ppp5/3q4/8/8/8/PPP5/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "La reina negra en d6 también puede ejecutar el pasillo.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d19",
    "category": "defense",
    "difficulty": "medio",
    "title": "Pasillo e — Reina en e6",
    "openingName": "Pasillo Invertido: Variante de Reina en e6",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido: Variante de Reina en e6. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k3r3/ppp5/4q3/8/8/8/PPP5/1K1RR3 b - - 0 1",
    "sequence": [
      "Qxe1+",
      "Rxe1",
      "Rxe1#"
    ],
    "hint": "La reina negra en e6 ejecuta el mismo pasillo decisivo.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d20",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Contraataque Final — Apoyo de Caballo c6",
    "openingName": "Pasillo Invertido: Apoyo Total",
    "description": "Táctica del estilo Bobby Fischer: Pasillo Invertido: Apoyo Total. Calcula la secuencia exacta y ejecuta el golpe maestro.",
    "instruction": "Eres las Negras. Contraataca con precisión de Gran Maestro.",
    "initialFen": "k2r4/pppq4/2n5/8/8/8/PPP5/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "Caballo negro en c6 apoya el ataque pero la secuencia de pasillo es la clave.",
    "successMessage": "¡Brillante! Calculaste como Bobby Fischer.",
    "wrongMoveExplanation": "No es la secuencia correcta. Busca las piezas sobrecargadas o la debilidad en la última fila.",
    "reference": "Bobby Fischer Teaches Chess"
  }
];

export const module9Lessons = [...attackLessons, ...defenseLessons];
