// Módulo 9 Puzzles Avanzados Auditados
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
    "difficulty": "medio",
    "title": "Ataque Avanzado 1",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "2rr2k1/p4ppp/8/8/8/8/P2Q1PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a2",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 3",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "1rr3k1/p4ppp/8/8/8/8/P1Q2PPP/2R3K1 w - - 0 1",
    "sequence": [
      "Qxc8+",
      "Rxc8",
      "Rxc8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a3",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 4",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "2rr2k1/p1p2ppp/8/8/8/8/P2Q1PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a4",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 5",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "3rr1k1/1p3ppp/8/8/8/8/P3QPPP/4R1K1 w - - 0 1",
    "sequence": [
      "Qxe8+",
      "Rxe8",
      "Rxe8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a5",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 8",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "3rr1k1/p1p2ppp/8/8/8/8/P3QPPP/4R1K1 w - - 0 1",
    "sequence": [
      "Qxe8+",
      "Rxe8",
      "Rxe8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a6",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 9",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "1rr3k1/p4ppp/8/8/8/8/P1Q2PPP/2R3K1 w - - 0 1",
    "sequence": [
      "Qxc8+",
      "Rxc8",
      "Rxc8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a7",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 10",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "2rr2k1/p1p2ppp/8/8/8/8/P2Q1PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a8",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 11",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "3rr1k1/1p3ppp/8/8/8/8/P3QPPP/4R1K1 w - - 0 1",
    "sequence": [
      "Qxe8+",
      "Rxe8",
      "Rxe8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a9",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 13",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "2rr2k1/p4ppp/8/8/8/8/P2Q1PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a10",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 14",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "3rr1k1/p1p2ppp/8/8/8/8/P3QPPP/4R1K1 w - - 0 1",
    "sequence": [
      "Qxe8+",
      "Rxe8",
      "Rxe8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a11",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 15",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "1rr3k1/p4ppp/8/8/8/8/P1Q2PPP/2R3K1 w - - 0 1",
    "sequence": [
      "Qxc8+",
      "Rxc8",
      "Rxc8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a12",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 16",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "2rr2k1/p1p2ppp/8/8/8/8/P2Q1PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a13",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 19",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "2rr2k1/p4ppp/8/8/8/8/P2Q1PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a14",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 20",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "3rr1k1/p1p2ppp/8/8/8/8/P3QPPP/4R1K1 w - - 0 1",
    "sequence": [
      "Qxe8+",
      "Rxe8",
      "Rxe8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a15",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 21",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "1rr3k1/p4ppp/8/8/8/8/P1Q2PPP/2R3K1 w - - 0 1",
    "sequence": [
      "Qxc8+",
      "Rxc8",
      "Rxc8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a16",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 23",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "3rr1k1/1p3ppp/8/8/8/8/P3QPPP/4R1K1 w - - 0 1",
    "sequence": [
      "Qxe8+",
      "Rxe8",
      "Rxe8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a17",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 25",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "2rr2k1/p4ppp/8/8/8/8/P2Q1PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a18",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 26",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "3rr1k1/p1p2ppp/8/8/8/8/P3QPPP/4R1K1 w - - 0 1",
    "sequence": [
      "Qxe8+",
      "Rxe8",
      "Rxe8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a19",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 28",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "2rr2k1/p1p2ppp/8/8/8/8/P2Q1PPP/3R2K1 w - - 0 1",
    "sequence": [
      "Qxd8+",
      "Rxd8",
      "Rxd8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9a20",
    "category": "attack",
    "difficulty": "medio",
    "title": "Ataque Avanzado 29",
    "openingName": "Tácticas de Fischer",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "El mate no es directo. Debes sacrificar.",
    "initialFen": "3rr1k1/1p3ppp/8/8/8/8/P3QPPP/4R1K1 w - - 0 1",
    "sequence": [
      "Qxe8+",
      "Rxe8",
      "Rxe8#"
    ],
    "hint": "Fischer usa sacrificios gigantes.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  }
];
export const defenseLessons: ExerciseLesson[] = [
  {
    "id": "m9d21",
    "category": "defense",
    "difficulty": "medio",
    "title": "Contragolpe Profundo 1",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1rr3/ppp1q3/8/8/8/8/P4PPP/1K1RR3 b - - 0 1",
    "sequence": [
      "Qxe1+",
      "Rxe1",
      "Rxe1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d22",
    "category": "defense",
    "difficulty": "medio",
    "title": "Contragolpe Profundo 2",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1r4/p1pq4/1P6/8/8/8/P4P1P/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d23",
    "category": "defense",
    "difficulty": "medio",
    "title": "Contragolpe Profundo 3",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1rr3/ppp1q3/8/8/8/8/P4PPP/1K1RR3 b - - 0 1",
    "sequence": [
      "Qxe1+",
      "Rxe1",
      "Rxe1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d24",
    "category": "defense",
    "difficulty": "medio",
    "title": "Contragolpe Profundo 4",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1r4/p1pq4/8/8/8/8/P4PPP/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d25",
    "category": "defense",
    "difficulty": "medio",
    "title": "Contragolpe Profundo 5",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1rr3/ppp1q3/8/8/8/8/P4P1P/1K1RR3 b - - 0 1",
    "sequence": [
      "Qxe1+",
      "Rxe1",
      "Rxe1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d26",
    "category": "defense",
    "difficulty": "medio",
    "title": "Contragolpe Profundo 6",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1r4/p1pq4/1P6/8/8/8/P4PPP/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d27",
    "category": "defense",
    "difficulty": "medio",
    "title": "Contragolpe Profundo 7",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1rr3/ppp1q3/8/8/8/8/P4PPP/1K1RR3 b - - 0 1",
    "sequence": [
      "Qxe1+",
      "Rxe1",
      "Rxe1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d28",
    "category": "defense",
    "difficulty": "medio",
    "title": "Contragolpe Profundo 8",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1r4/p1pq4/8/8/8/8/P4P1P/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d29",
    "category": "defense",
    "difficulty": "medio",
    "title": "Contragolpe Profundo 9",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1rr3/ppp1q3/8/8/8/8/P4PPP/1K1RR3 b - - 0 1",
    "sequence": [
      "Qxe1+",
      "Rxe1",
      "Rxe1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d30",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Contragolpe Profundo 10",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1r4/p1pq4/1P6/8/8/8/P4PPP/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d31",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Contragolpe Profundo 11",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1rr3/ppp1q3/8/8/8/8/P4P1P/1K1RR3 b - - 0 1",
    "sequence": [
      "Qxe1+",
      "Rxe1",
      "Rxe1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d32",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Contragolpe Profundo 12",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1r4/p1pq4/8/8/8/8/P4PPP/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d33",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Contragolpe Profundo 13",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1rr3/ppp1q3/8/8/8/8/P4PPP/1K1RR3 b - - 0 1",
    "sequence": [
      "Qxe1+",
      "Rxe1",
      "Rxe1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d34",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Contragolpe Profundo 14",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1r4/p1pq4/1P6/8/8/8/P4P1P/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d35",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Contragolpe Profundo 15",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1rr3/ppp1q3/8/8/8/8/P4PPP/1K1RR3 b - - 0 1",
    "sequence": [
      "Qxe1+",
      "Rxe1",
      "Rxe1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d36",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Contragolpe Profundo 16",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1r4/p1pq4/8/8/8/8/P4PPP/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d37",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Contragolpe Profundo 17",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1rr3/ppp1q3/8/8/8/8/P4P1P/1K1RR3 b - - 0 1",
    "sequence": [
      "Qxe1+",
      "Rxe1",
      "Rxe1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d38",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Contragolpe Profundo 18",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1r4/p1pq4/1P6/8/8/8/P4PPP/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d39",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Contragolpe Profundo 19",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1rr3/ppp1q3/8/8/8/8/P4PPP/1K1RR3 b - - 0 1",
    "sequence": [
      "Qxe1+",
      "Rxe1",
      "Rxe1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  },
  {
    "id": "m9d40",
    "category": "defense",
    "difficulty": "difícil",
    "title": "Contragolpe Profundo 20",
    "openingName": "Defensas Temáticas",
    "description": "Extracción de los capítulos avanzados de Bobby Fischer Teaches Chess (Tácticas complejas multijugada).",
    "instruction": "Activa la red de mate rompiendo la estructura.",
    "initialFen": "1k1r4/p1pq4/8/8/8/8/P4P1P/1KRR4 b - - 0 1",
    "sequence": [
      "Qxd1+",
      "Rxd1",
      "Rxd1#"
    ],
    "hint": "Fischer rompe la última fila.",
    "successMessage": "¡Táctica ejecutada!",
    "wrongMoveExplanation": "Ese movimiento no cumple con la lección de Fischer.",
    "reference": "Bobby Fischer Teaches Chess"
  }
];
export const module9Lessons = [...attackLessons, ...defenseLessons];
