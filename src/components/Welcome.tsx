import { useNavigate } from 'react-router-dom';
import { BookOpen, GraduationCap, Swords, ChevronRight } from 'lucide-react';

const modules = [
  {
    number: 1,
    icon: <BookOpen size={28} />,
    color: 'blue',
    title: 'Conoce las Piezas',
    description: 'Aprende cómo se mueve cada pieza: peones, caballos, alfiles, torres, dama y rey. Interactúa libremente con el tablero.',
    topics: ['El tablero de Ajedrez', 'Movimiento de piezas', 'Capturas y reglas especiales'],
    href: '/module/1',
  },
  {
    number: 2,
    icon: <GraduationCap size={28} />,
    color: 'emerald',
    title: 'Notación y Conceptos',
    description: 'Aprende a leer y escribir posiciones con notación algebraica, identifica casillas y comprende el valor relativo de las piezas.',
    topics: ['Coordenadas a-h / 1-8', 'Notación algebraica', 'Valor de piezas'],
    href: '/module/2',
  },
  {
    number: 3,
    icon: <Swords size={28} />,
    color: 'indigo',
    title: 'Juego Libre (PGN)',
    description: 'Pon en práctica todo lo aprendido con una partida completa. El motor valida cada jugada y exporta el PGN de tu partida.',
    topics: ['Partida libre', 'Historial PGN', 'Retroceder y avanzar jugadas'],
    href: '/module/3',
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; btn: string; iconBg: string; dot: string }> = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    text: 'text-blue-700 dark:text-blue-300',
    border: 'border-blue-200 dark:border-blue-800',
    btn: 'bg-blue-600 hover:bg-blue-700',
    iconBg: 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300',
    dot: 'bg-blue-400',
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    text: 'text-emerald-700 dark:text-emerald-300',
    border: 'border-emerald-200 dark:border-emerald-800',
    btn: 'bg-emerald-600 hover:bg-emerald-700',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300',
    dot: 'bg-emerald-400',
  },
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    text: 'text-indigo-700 dark:text-indigo-300',
    border: 'border-indigo-200 dark:border-indigo-800',
    btn: 'bg-indigo-600 hover:bg-indigo-700',
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300',
    dot: 'bg-indigo-400',
  },
};

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="text-center py-6">
        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800 mb-5">
          ♟️ Plataforma de Ajedrez Educativo
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-tight">
          Aprende Ajedrez<br />
          <span className="text-blue-600 dark:text-blue-400">jugando y experimentando</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto leading-relaxed mb-8">
          Una plataforma interactiva y progresiva donde no solo lees teoría —
          mueves piezas, ves las opciones posibles y aprendes a tu ritmo.
        </p>
        <button
          onClick={() => navigate('/module/1')}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all text-lg"
        >
          Comenzar desde el principio <ChevronRight size={22} />
        </button>
      </div>

      {/* Module Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modules.map((mod) => {
          const c = colorMap[mod.color];
          return (
            <div
              key={mod.number}
              className={`rounded-2xl border ${c.border} ${c.bg} p-6 flex flex-col gap-4 cursor-pointer hover:shadow-md transition-all group`}
              onClick={() => navigate(mod.href)}
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${c.iconBg}`}>
                  {mod.icon}
                </div>
                <div>
                  <div className={`text-xs font-bold uppercase tracking-widest ${c.text} opacity-70`}>Capítulo {mod.number}</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{mod.title}</h3>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {mod.description}
              </p>
              <ul className="space-y-1.5 mt-auto">
                {mod.topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                    {topic}
                  </li>
                ))}
              </ul>
              <button className={`mt-2 w-full py-2.5 ${c.btn} text-white font-medium rounded-xl transition-colors text-sm flex items-center justify-center gap-1 group-hover:gap-2`}>
                Ir a Capítulo {mod.number} <ChevronRight size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
