import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const CHESS_PIECES = ['♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟'];

const PHRASES = [
  'El ajedrez es la gimnasia de la mente.',
  'Un error te lleva al abismo. Dos te llevan a la derrota.',
  'Pieza sin mover, ventaja que se pierde.',
  'El caballo en el borde es un peligro menor.',
  'Controla el centro, controla la partida.',
];

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [phase, setPhase] = useState<'enter' | 'ready'>('enter');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [exiting, setExiting] = useState(false);

  // Board squares animation
  const squares = Array.from({ length: 64 }, (_, i) => i);

  // Typewriter effect for main title
  const fullTitle = 'Ajedrez Académico';
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullTitle.slice(0, i + 1));
      i++;
      if (i >= fullTitle.length) {
        clearInterval(interval);
        setTimeout(() => setPhase('ready'), 300);
        setTimeout(() => setShowButton(true), 800);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Cycle phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex(p => (p + 1) % PHRASES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(onFinish, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500 ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #0f172a 100%)',
      }}
    >
      {/* Animated chess board background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          gridTemplateRows: 'repeat(8, 1fr)',
        }}
      >
        {squares.map(i => {
          const row = Math.floor(i / 8);
          const col = i % 8;
          const isLight = (row + col) % 2 === 0;
          return (
            <div
              key={i}
              className={`${isLight ? 'bg-slate-400' : 'bg-transparent'} transition-all`}
              style={{
                animationDelay: `${(i * 30) % 500}ms`,
                animation: 'pulse 4s ease-in-out infinite',
              }}
            />
          );
        })}
      </div>

      {/* Floating chess pieces */}
      {CHESS_PIECES.slice(0, 8).map((piece, i) => (
        <div
          key={i}
          className="absolute text-white select-none pointer-events-none"
          style={{
            fontSize: `${Math.random() * 20 + 20}px`,
            opacity: 0.08 + Math.random() * 0.08,
            left: `${(i / 8) * 100 + Math.random() * 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            animation: `float-${i % 3} ${5 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`,
          }}
        >
          {piece}
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-8 text-center">
        {/* Logo */}
        <div
          className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
            boxShadow: '0 0 60px rgba(99, 102, 241, 0.5)',
            animation: 'glow 2s ease-in-out infinite',
          }}
        >
          ♞
        </div>

        {/* Title with typewriter */}
        <div>
          <h1
            className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight"
            style={{ textShadow: '0 0 40px rgba(99,102,241,0.6)' }}
          >
            {typedText}
            <span
              className="inline-block w-1 h-12 md:h-16 bg-indigo-400 ml-1 align-middle"
              style={{ animation: 'blink 1s step-end infinite' }}
            />
          </h1>
          <p
            className="text-indigo-300 text-xl md:text-2xl font-semibold mt-3 tracking-widest uppercase"
            style={{ opacity: phase === 'ready' ? 1 : 0, transition: 'opacity 0.8s' }}
          >
            Aprende · Piensa · Gana
          </p>
        </div>

        {/* Animated quote */}
        <div
          className="max-w-md h-14 flex items-center justify-center"
          style={{ opacity: phase === 'ready' ? 1 : 0, transition: 'opacity 0.8s 0.3s' }}
        >
          <p
            key={phraseIndex}
            className="text-slate-300 text-base md:text-lg italic leading-relaxed"
            style={{ animation: 'fadeInUp 0.6s ease-out' }}
          >
            "{PHRASES[phraseIndex]}"
          </p>
        </div>

        {/* Stats row */}
        <div
          className="flex gap-8 md:gap-12"
          style={{ opacity: phase === 'ready' ? 1 : 0, transition: 'opacity 0.8s 0.5s' }}
        >
          {[
            { label: 'Módulos', value: '8' },
            { label: 'Ejercicios', value: '80+' },
            { label: 'Patrones', value: '32' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-indigo-400">{stat.value}</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enter button */}
        {showButton && (
          <button
            onClick={handleEnter}
            className="group relative px-10 py-4 rounded-2xl text-white font-bold text-xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
              boxShadow: '0 0 40px rgba(99,102,241,0.4)',
              animation: 'fadeInUp 0.6s ease-out',
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Comenzar
              <span className="text-2xl group-hover:translate-x-1 transition-transform duration-200">→</span>
            </span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #2563eb, #4f46e5)' }}
            />
          </button>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 40px rgba(99,102,241,0.4); }
          50% { box-shadow: 0 0 80px rgba(99,102,241,0.8); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(8deg); }
        }
      `}</style>
    </div>
  );
}
