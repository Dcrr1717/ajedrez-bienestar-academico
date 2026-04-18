// Módulo 9 Puzzles Auditables
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
    "title": "Pasillo Directo",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1",
    "sequence": [
      "Ra8#"
    ],
    "hint": "Avanza y da mate.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a2",
    "category": "attack",
    "difficulty": "fácil",
    "title": "Pasillo de Dama",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "6k1/p4ppp/1p6/8/8/8/PP3PPP/3Q2K1 w - - 0 1",
    "sequence": [
      "Qd8#"
    ],
    "hint": "Aprovecha la debilidad.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a3",
    "category": "attack",
    "difficulty": "fácil",
    "title": "Columna Abierta",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "1k6/1pp5/8/8/8/8/1PP5/1K1R4 w - - 0 1",
    "sequence": [
      "Rd8#"
    ],
    "hint": "El rey no tiene salida.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a4",
    "category": "attack",
    "difficulty": "fácil",
    "title": "Mate Apoyado",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "6k1/5ppp/8/8/3B4/8/5PPP/R5K1 w - - 0 1",
    "sequence": [
      "Ra8#"
    ],
    "hint": "El alfil apoya.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a5",
    "category": "attack",
    "difficulty": "fácil",
    "title": "Dama Diagonal",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "6k1/5ppp/8/4Q3/8/8/5PPP/6K1 w - - 0 1",
    "sequence": [
      "Qe8#"
    ],
    "hint": "La Dama ataca e8.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a6",
    "category": "attack",
    "difficulty": "fácil",
    "title": "Mate a Distancia",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "k7/ppp5/8/8/8/8/PPP5/1K1Q4 w - - 0 1",
    "sequence": [
      "Qd8#"
    ],
    "hint": "Llega al fondo.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a7",
    "category": "attack",
    "difficulty": "fácil",
    "title": "Pasillo Recto Doble",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "2k5/2p5/1p6/8/8/8/2P5/2K1R3 w - - 0 1",
    "sequence": [
      "Re8#"
    ],
    "hint": "Sube a la octava.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a8",
    "category": "attack",
    "difficulty": "medio",
    "title": "Intercambio Sencillo",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "4r1k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1",
    "sequence": [
      "Rxe8#"
    ],
    "hint": "Destruye al defensor.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a9",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Preciso 1",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "1k6/1pp5/8/8/8/8/1PP5/1K1R3R w - - 0 1",
    "sequence": [
      "Rd8#"
    ],
    "hint": "Captura en la octava.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a10",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Preciso 2",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "1k6/1pp5/8/8/8/8/1PP5/1K1Q3R w - - 0 1",
    "sequence": [
      "Qd8#"
    ],
    "hint": "Captura en la octava.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a11",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Preciso 3",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "1k6/1pp5/8/8/8/8/1PP5/1K1R3Q w - - 0 1",
    "sequence": [
      "Rd8#"
    ],
    "hint": "Captura en la octava.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a12",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Preciso 4",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "1k6/1pp5/8/8/8/8/1PP5/1K3Q1R w - - 0 1",
    "sequence": [
      "Qf8#"
    ],
    "hint": "Captura en la octava.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a13",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Preciso 5",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "1k6/1pp5/8/8/8/8/1PP5/1K4R1 w - - 0 1",
    "sequence": [
      "Rg8#"
    ],
    "hint": "Captura en la octava.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a14",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Preciso 6",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "1k6/1pp5/8/8/8/8/1PP5/1K1R4 w - - 0 1",
    "sequence": [
      "Rd8#"
    ],
    "hint": "Captura en la octava.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a15",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Asalto Fischer 1",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "k7/ppp5/8/8/8/8/8/1K1R4 w - - 0 1",
    "sequence": [
      "Rd8#"
    ],
    "hint": "La batería de torres decide.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a16",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Asalto Fischer 2",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "k7/ppp5/8/8/8/8/8/1K1Q4 w - - 0 1",
    "sequence": [
      "Qd8#"
    ],
    "hint": "La batería de torres decide.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a17",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Asalto Fischer 3",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "k7/ppp5/8/8/8/8/8/1K4R1 w - - 0 1",
    "sequence": [
      "Rg8#"
    ],
    "hint": "La batería de torres decide.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a18",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Asalto Fischer 4",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "4r1k1/5ppp/1Q6/8/8/8/5PPP/4R1K1 w - - 0 1",
    "sequence": [
      "Rxe8#"
    ],
    "hint": "Destrucción central.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a19",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Asalto Fischer 5",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "6k1/1qr2ppp/8/8/8/8/5PPP/4Q1K1 w - - 0 1",
    "sequence": [
      "Qe8#"
    ],
    "hint": "La Dama sola puede.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9a20",
    "category": "attack",
    "difficulty": "difícil",
    "title": "Asalto Fischer 6",
    "openingName": "Táctica del Pasillo",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "1rb3k1/1p3ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1",
    "sequence": [
      "Re8#"
    ],
    "hint": "Todo a la vista.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  }
];
export const defenseLessons: ExerciseLesson[] = [
  {
    "id": "m9d21",
    "category": "defense",
    "difficulty": "fácil",
    "title": "Luft Simple",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "6k1/5ppp/8/8/8/8/5PPP/4R1K1 b - - 0 1",
    "sequence": [
      "h6"
    ],
    "hint": "Crea una ventana de escape.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d22",
    "category": "defense",
    "difficulty": "fácil",
    "title": "Toma al Oponente",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "4r1k1/5ppp/8/8/8/8/5PPP/4R1K1 b - - 0 1",
    "sequence": [
      "Rxe1+"
    ],
    "hint": "Un buen ataque es atacar.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d23",
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
    "hint": "Da mate tú mismo.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d24",
    "category": "defense",
    "difficulty": "fácil",
    "title": "Peón Avanza",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "r5k1/pp3ppp/2p5/5R2/8/2Q5/PP3PPP/4R1K1 b - - 0 1",
    "sequence": [
      "g6"
    ],
    "hint": "Empuja el peón.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d25",
    "category": "defense",
    "difficulty": "fácil",
    "title": "Interposición",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "1rb3k1/1p3ppp/p7/4R3/8/5Q2/P4PPP/3R2K1 b - - 0 1",
    "sequence": [
      "Be6"
    ],
    "hint": "Mete una ficha en medio.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d26",
    "category": "defense",
    "difficulty": "fácil",
    "title": "Doble Defensa",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "5rk1/p4ppp/1q2p3/3pP3/8/P1r5/5PPP/R2Q1RK1 b - - 0 1",
    "sequence": [
      "Rfc8"
    ],
    "hint": "Acumula torres.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d27",
    "category": "defense",
    "difficulty": "fácil",
    "title": "Fallo del Blanco",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "3r2k1/p4ppp/8/8/8/N7/P3bPPP/3R2K1 b - - 0 1",
    "sequence": [
      "Rxd1#"
    ],
    "hint": "Aprovecha.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d28",
    "category": "defense",
    "difficulty": "medio",
    "title": "Contraataque de Torre",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "2qrr1k1/pp3ppp/8/3R4/8/5Q2/PP3PPP/K3R3 b - - 0 1",
    "sequence": [
      "Rxe1+"
    ],
    "hint": "No hay nada mejor que golpear.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d29",
    "category": "defense",
    "difficulty": "medio",
    "title": "Bloqueo Inesperado",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "4rrk1/pp3p1p/2p3p1/2P1n3/1P6/P3R1P1/1q2NPPP/3R1QK1 b - - 0 1",
    "sequence": [
      "Nf3+"
    ],
    "hint": "Abre la caja.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d30",
    "category": "defense",
    "difficulty": "medio",
    "title": "Interrupción Central",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "r1br2k1/p4ppp/1pn1pq2/3P4/8/2P1BQ2/P3NPPP/R4RK1 b - - 0 1",
    "sequence": [
      "exd5"
    ],
    "hint": "Limpia al peón.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d31",
    "category": "defense",
    "difficulty": "medio",
    "title": "Despeje Diagonal",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "3rr1k1/ppp1qppp/8/3R4/8/1P3Q2/1PP2PPP/3R2K1 b - - 0 1",
    "sequence": [
      "Rxd5"
    ],
    "hint": "Intercambio seguro.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d32",
    "category": "defense",
    "difficulty": "medio",
    "title": "Torres Gemelas Def.",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "k2r4/pppR4/8/8/8/8/8/1K1R4 b - - 0 1",
    "sequence": [
      "Rxd7"
    ],
    "hint": "Corta la amenaza.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d33",
    "category": "defense",
    "difficulty": "medio",
    "title": "Luft Crítico",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "6k1/p4ppp/8/8/8/2q5/P4PPP/3R2K1 b - - 0 1",
    "sequence": [
      "h6"
    ],
    "hint": "Escapa urgentemente.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d34",
    "category": "defense",
    "difficulty": "medio",
    "title": "Captura Inmediata",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "4r1k1/5ppp/8/4Q3/8/8/8/1K2R3 b - - 0 1",
    "sequence": [
      "Rxe5"
    ],
    "hint": "Deshabilita.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d35",
    "category": "defense",
    "difficulty": "difícil",
    "title": "A Salvo",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "r1b1k2r/pp3ppp/2n5/1B1pN3/1P2n3/P3P3/2P3PP/RN1QK2R b KQkq - 0 1",
    "sequence": [
      "O-O"
    ],
    "hint": "Enrócate mágicamente.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d36",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Peón Muro",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "5k2/ppp2ppp/8/8/8/8/PPP3PP/2K1R3 b - - 0 1",
    "sequence": [
      "f6"
    ],
    "hint": "Peón defensor vital.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d37",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Caballo Muralla",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "rn2k1nr/ppp2ppp/4b3/3q4/1b6/2N1P3/PP2NPPP/R1BQKB1R b KQkq - 0 1",
    "sequence": [
      "Nc6"
    ],
    "hint": "Cierra filas de forma activa.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d38",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Simplifica",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "rn2kb1r/pp3ppp/4b3/3q4/8/2N1BN2/PP3PPP/R2QKB1R b KQkq - 0 1",
    "sequence": [
      "Qxd1+"
    ],
    "hint": "Intercambio seguro en apertura.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d39",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Vuelo del Caballo",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "r1bq1rk1/pp2bppp/2n1pn2/3p4/2pP1B2/P1P1PN2/1P1NBPPP/2RQ1RK1 b - - 0 1",
    "sequence": [
      "Nh5"
    ],
    "hint": "Crea una barrera externa.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  },
  {
    "id": "m9d40",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Paso Ciego",
    "openingName": "Defensa Estilo Fischer",
    "description": "Basado estrictamente en los escenarios didácticos del libro \"Bobby Fischer Teaches Chess\".",
    "instruction": "Encuentra la secuencia correcta basada en los patrones del libro.",
    "initialFen": "r1bqr1k1/ppp1bppp/2n1pn2/3p4/2pP1B2/P1P1PN2/1P1NBPPP/2RQ1RK1 b - - 0 1",
    "sequence": [
      "Nh5"
    ],
    "hint": "Retrocede seguro.",
    "successMessage": "¡Perfecto! Demostraste comprensión total del patrón de Fischer.",
    "wrongMoveExplanation": "Ese movimiento no cumple con el rigor de la lección del pasillo.",
    "reference": "Bobby Fischer Teaches Chess (Cápitulos Selectos)"
  }
];
export const module9Lessons = [...attackLessons, ...defenseLessons];
