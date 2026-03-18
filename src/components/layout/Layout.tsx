import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Moon, Sun } from 'lucide-react';
import { useProgressStore } from '../../store/useProgressStore';
import { module1Lessons } from '../../modules/module1/data/lessons';
import { module2Lessons } from '../../modules/module2/data/lessons';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { completedLessons, currentModule } = useProgressStore();
  const totalLessons = module1Lessons.length + module2Lessons.length;
  const progressPercent = Math.round((completedLessons.length / totalLessons) * 100) || 0;

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl pb-1">
              ♞
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Ajedrez Académico
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/module/1" className={`flex items-center gap-2 font-medium transition-colors ${currentModule === 1 ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>
              <BookOpen size={18} />
              <span>Módulo 1</span>
            </Link>
            <Link to="/module/2" className={`flex items-center gap-2 font-medium transition-colors ${currentModule === 2 ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>
              <BookOpen size={18} />
              <span>Módulo 2</span>
            </Link>
            <Link to="/module/3" className={`flex items-center gap-2 font-medium transition-colors ${currentModule === 3 ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>
              <BookOpen size={18} />
              <span>Módulo 3</span>
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
              title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1.5 rounded-full text-sm font-semibold border border-emerald-200 dark:border-emerald-800 shadow-sm">
              <Award size={16} />
              <span>Progreso: {progressPercent}%</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}
