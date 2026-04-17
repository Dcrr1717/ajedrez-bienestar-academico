// Auto-generated Fisher Book Dataset

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
    "difficulty": "fácil",
    "title": "Mate del Pasillo Básico",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1",
    "sequence": [
      "Ra8#"
    ],
    "hint": "La torre puede bajar a la octava fila.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a2",
    "category": "attack",
    "difficulty": "fácil",
    "title": "Intercambio en el Pasillo",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "5rk1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Rd8",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Cambiar torres lleva a un mate final.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a3",
    "category": "attack",
    "difficulty": "fácil",
    "title": "Dama al Fondo",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "6k1/5ppp/8/8/8/8/Q4PPP/6K1 w - - 0 1",
    "sequence": [
      "Qa8#"
    ],
    "hint": "La dama tiene el mismo poder de invasión.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a4",
    "category": "attack",
    "difficulty": "fácil",
    "title": "Estructura Modificada",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "6k1/p4ppp/1p6/8/8/8/PP3PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Rd8#"
    ],
    "hint": "Aunque los peones estén avanzados, la octava está débil.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a5",
    "category": "attack",
    "difficulty": "fácil",
    "title": "Atracción Fatal",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "2r3k1/5ppp/8/3R4/8/8/1P3PPP/6K1 w - - 0 1",
    "sequence": [
      "Rd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Tu torre debe amenazar el mate obligando a defender.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a6",
    "category": "attack",
    "difficulty": "fácil",
    "title": "Sacrificio de Dama Básico",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "1r4k1/5ppp/8/3Q4/8/8/5PPP/6K1 w - - 0 1",
    "sequence": [
      "Qd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Sacrifica la dama para abrir la red de mate.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a7",
    "category": "attack",
    "difficulty": "fácil",
    "title": "Alfil Testigo",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "6k1/5ppp/8/8/8/2B5/5PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Rd8#"
    ],
    "hint": "El alfil no impide el mate directo.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a8",
    "category": "attack",
    "difficulty": "medio",
    "title": "Limpiando la Fila",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "2r3k1/5ppp/3Q4/8/8/8/5PPP/2R3K1 w - - 0 1",
    "sequence": [
      "Qd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Sacrifica la dama para desviar a la torre.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a9",
    "category": "attack",
    "difficulty": "medio",
    "title": "El Alfil Defensor",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "4r1k1/5ppp/8/3R4/8/2B5/5PPP/6K1 w - - 0 1",
    "sequence": [
      "Rd8",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Usa la clavada o apoya la torre.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a10",
    "category": "attack",
    "difficulty": "medio",
    "title": "Caballo Inútil",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "r1b3k1/2p2ppp/1pn5/p2p4/8/B7/P1P2PPP/3RR1K1 w - - 0 1",
    "sequence": [
      "Re8#"
    ],
    "hint": "El caballo negro no puede defender e8.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a11",
    "category": "attack",
    "difficulty": "medio",
    "title": "Despejando y Penetración",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "3r2k1/p1pr1ppp/1p6/8/2R5/1P6/P4PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Rxd7",
      "Rxd7",
      "Rc8+"
    ],
    "hint": "Elimina al defensor antes de asestar el golpe.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a12",
    "category": "attack",
    "difficulty": "medio",
    "title": "La Amenaza Dual",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "r5k1/pp3ppp/2p5/5q2/8/2Q5/PP3PPP/4R1K1 w - - 0 1",
    "sequence": [
      "Qe3",
      "h6",
      "Qe8+"
    ],
    "hint": "Amenaza mate para obligar a una concesión.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a13",
    "category": "attack",
    "difficulty": "medio",
    "title": "El Bloqueo Ineficaz",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "1rb3k1/1p3ppp/p7/4q3/8/5Q2/P4PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Rd8+",
      "Qe8",
      "Rxe8#"
    ],
    "hint": "Aunque defienda temporalmente, el ataque es abrumador.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a14",
    "category": "attack",
    "difficulty": "medio",
    "title": "Atracción Brillante",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "5rk1/p4ppp/1q2p3/3pP3/8/P1r5/5PPP/R2Q1RK1 w - - 0 1",
    "sequence": [
      "Qd4",
      "Qxd4",
      "Rfc8#"
    ],
    "hint": "Desvía la dama enemiga de la defensa del fondo.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a15",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Doble Penetración",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "1k1r4/ppp5/8/8/3Q4/8/8/1K1R4 w - - 0 1",
    "sequence": [
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Sacrificio mortal cuando la estructura lo permite.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a16",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Mate al Descubierto",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "2r1r1k1/pp3ppp/8/3R4/8/5Q2/PP3PPP/K1q1R3 w - - 0 1",
    "sequence": [
      "Rexc1",
      "Rxc1",
      "Rxc1#"
    ],
    "hint": "Defiende y contraataca la última fila.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a17",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Desviación Extrema",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "4rrk1/pp3p1p/2p3p1/2P1n3/1P6/P3R1P1/1q2NP1P/3R1QK1 w - - 0 1",
    "sequence": [
      "Re1",
      "Nf3+",
      "Rxf3"
    ],
    "hint": "Carga de tensión antes de la ruptura.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a18",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Liberación de Casillas",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "r1br2k1/p4ppp/1pn1pq2/3P4/8/2P1BQ2/P3NPPP/R4RK1 w - - 0 1",
    "sequence": [
      "dxc6",
      "Rxd1",
      "Raxd1"
    ],
    "hint": "El peón de ventaja rompe la defensa.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a19",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Tensión Central",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "3rr1k1/ppp1qppp/8/3R4/8/1P3Q2/1PP2PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Rxd8",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "La captura correcta despeja el camino a la gloria.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a20",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Batería Impenitente",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "k2r4/pppR4/8/8/8/8/8/1K1R4 w - - 0 1",
    "sequence": [
      "Rxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Dos torres alineadas son la muerte.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  }
];

export const defenseLessons: ExerciseLesson[] = [
  {
    "id": "m9d1",
    "category": "defense",
    "difficulty": "fácil",
    "title": "Crear una Ventana (Luft)",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "6k1/5ppp/8/8/8/8/5PPP/4R1K1 b - - 0 1",
    "sequence": [
      "h6"
    ],
    "hint": "Avanza un peón del flanco para que el rey pueda escapar.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d2",
    "category": "defense",
    "difficulty": "fácil",
    "title": "Captura al Atacante",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "4r1k1/5ppp/8/8/8/8/5PPP/4R1K1 b - - 0 1",
    "sequence": [
      "Rxe1+"
    ],
    "hint": "La mejor defensa a veces es eliminar la pieza agresora.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d3",
    "category": "defense",
    "difficulty": "fácil",
    "title": "El Rey Camina",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "r1b3k1/2p2prp/1pn5/p2p4/8/B7/P1P2PPP/3RR1K1 b - - 0 1",
    "sequence": [
      "Kf8"
    ],
    "hint": "Usa a tu rey para escapar de la zona de mate.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d4",
    "category": "defense",
    "difficulty": "fácil",
    "title": "Contraataque de Mate",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "3r2k1/p1pr1ppp/1p6/4R3/8/1P6/P4PPP/3R2K1 b - - 0 1",
    "sequence": [
      "Rxd1+"
    ],
    "hint": "Defiéndete atacando el punto débil de tu enemigo.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d5",
    "category": "defense",
    "difficulty": "fácil",
    "title": "Bloqueo y Ventana",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "r5k1/pp3ppp/2p5/5R2/8/2Q5/PP3PPP/4R1K1 b - - 0 1",
    "sequence": [
      "g6"
    ],
    "hint": "Evita problemas en la octava fila creando aire.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d6",
    "category": "defense",
    "difficulty": "fácil",
    "title": "Interposición Correcta",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "1rb3k1/1p3ppp/p7/4R3/8/5Q2/P4PPP/3R2K1 b - - 0 1",
    "sequence": [
      "Be6"
    ],
    "hint": "Usa tu alfil para tapar el campo de acción de la torre blanca.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d7",
    "category": "defense",
    "difficulty": "fácil",
    "title": "Reforzar la Defensa",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "5rk1/p4ppp/1q2p3/3pP3/8/P1r5/5PPP/R2Q1RK1 b - - 0 1",
    "sequence": [
      "Rfc8"
    ],
    "hint": "Trae otra pieza para consolidar tu posición trasera.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d8",
    "category": "defense",
    "difficulty": "medio",
    "title": "Eliminación Directa",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "1k1r4/ppp5/8/4R3/3Q4/8/8/1K2R3 b - - 0 1",
    "sequence": [
      "Qxd4"
    ],
    "hint": "Captura la dama atacante para evitar cualquier combinación.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d9",
    "category": "defense",
    "difficulty": "medio",
    "title": "Táctica Inversa",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "2r1r1k1/pp3ppp/8/3R4/8/5Q2/PP3PPP/K1q1R3 b - - 0 1",
    "sequence": [
      "Rxe1+"
    ],
    "hint": "Las negras están a punto de dar mate, hazlo tú primero!",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d10",
    "category": "defense",
    "difficulty": "medio",
    "title": "Contragolpe Central",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "4rrk1/pp3p1p/2p3p1/2P1n3/1P6/P3R1P1/1q2NPPP/3R1QK1 b - - 0 1",
    "sequence": [
      "Nf3+"
    ],
    "hint": "Da un jaque que altere completamente el curso del juego.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d11",
    "category": "defense",
    "difficulty": "medio",
    "title": "Liberación de Presión",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "r1br2k1/p4ppp/1pn1pq2/3P4/8/2P1BQ2/P3NPPP/R4RK1 b - - 0 1",
    "sequence": [
      "exd5"
    ],
    "hint": "Captura el peón central para darle respiro a tus piezas.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d12",
    "category": "defense",
    "difficulty": "medio",
    "title": "Cambio de Torres",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "3rr1k1/ppp1qppp/8/3R4/8/1P3Q2/1PP2PPP/3R2K1 b - - 0 1",
    "sequence": [
      "Rxd5"
    ],
    "hint": "Al cambiar las torres reduces drásticamente la tensión.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d13",
    "category": "defense",
    "difficulty": "medio",
    "title": "Cortando el Pelo",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "k2r4/pppR4/8/8/8/8/8/1K1R4 b - - 0 1",
    "sequence": [
      "Rxd7"
    ],
    "hint": "Toma la torre avanzada blanca.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d14",
    "category": "defense",
    "difficulty": "medio",
    "title": "Luft de Emergencia",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "6k1/p4ppp/8/8/8/2q5/P4PPP/3R2K1 b - - 0 1",
    "sequence": [
      "h6"
    ],
    "hint": "Debes darle una casilla de escape a tu rey urgentemente.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d15",
    "category": "defense",
    "difficulty": "difícil",
    "title": "El Error de Cálculo Blanco",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "3r2k1/p4ppp/8/8/8/N7/P3bPPP/3R2K1 b - - 0 1",
    "sequence": [
      "Rxd1#"
    ],
    "hint": "Las blancas fallaron, da mate inmediatamente.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d16",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Seguridad Ante Todo",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "r1b1k2r/pp3ppp/2n5/1B1pN3/1P2n3/P3P3/2P3PP/RN1QK2R b KQkq - 0 1",
    "sequence": [
      "O-O"
    ],
    "hint": "Enrócate de inmediato para salvaguardar tu monarca.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d17",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Peón Salvador",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "5k2/ppp2ppp/8/8/8/8/PPP3PP/2K1R3 b - - 0 1",
    "sequence": [
      "f6"
    ],
    "hint": "Mueve el peón \"f\" para crear un escape lateral de g7 o e7.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d18",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Desarrollo Activo",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "rn2k1nr/ppp2ppp/4b3/3q4/1b6/2N1P3/PP2NPPP/R1BQKB1R b KQkq - 0 1",
    "sequence": [
      "Nc6"
    ],
    "hint": "Desarrolla el caballo impidiendo futuros ataques.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d19",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Simplificación Estratégica",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "rn2kb1r/pp3ppp/4b3/3q4/8/2N1BN2/PP3PPP/R2QKB1R b KQkq - 0 1",
    "sequence": [
      "Qxd1+"
    ],
    "hint": "Cambiar damas alivia cualquier ataque prematuro.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d20",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Reubicación y Defensa",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "r1bq1rk1/pp2bppp/2n1pn2/3p4/2pP1B2/P1P1PN2/1P1NBPPP/2RQ1RK1 b - - 0 1",
    "sequence": [
      "Nh5"
    ],
    "hint": "Reposiciona el caballo para presionar el alfil blanco.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  }
];

export const module9Lessons = [...attackLessons, ...defenseLessons];
