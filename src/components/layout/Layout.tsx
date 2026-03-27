import { useEffect, useState, type ReactNode } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, Award, Moon, Sun, Home } from 'lucide-react';
import { useProgressStore } from '../../store/useProgressStore';
import { module1Lessons } from '../../modules/module1/data/lessons';
import { module2Lessons } from '../../modules/module2/data/lessons';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { completedLessons, currentModule } = useProgressStore();
  const navigate = useNavigate();
  const location = useLocation();
  const totalLessons = module1Lessons.length + module2Lessons.length;
  const progressPercent = Math.round((completedLessons.length / totalLessons) * 100) || 0;
  const isHome = location.pathname === '/';

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
        <div className="w-full px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl pb-1">
              ♞
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Ajedrez Académico
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-1">
            {!isHome && (
              <Link to="/" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium text-sm text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors">
                <Home size={16} />
                <span>Inicio</span>
              </Link>
            )}
            <Link to="/module/1" className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-sm transition-colors ${currentModule === 1 ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/30' : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30'}`}>
              <BookOpen size={16} />
              <span>Módulo 1</span>
            </Link>
            <Link to="/module/2" className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-sm transition-colors ${currentModule === 2 ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/30' : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30'}`}>
              <BookOpen size={16} />
              <span>Módulo 2</span>
            </Link>
            <Link to="/module/3" className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-sm transition-colors ${currentModule === 3 ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/30' : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30'}`}>
              <BookOpen size={16} />
              <span>Módulo 3</span>
            </Link>
            <Link to="/module/4" className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-sm transition-colors ${currentModule === 4 ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/30' : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30'}`}>
              <BookOpen size={16} />
              <span>Módulo 4</span>
            </Link>
            <Link to="/module/5" className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-sm transition-colors ${currentModule === 5 ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/30' : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30'}`}>
              <BookOpen size={16} />
              <span>Módulo 5</span>
            </Link>
            <Link to="/module/6" className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-sm transition-colors ${currentModule === 6 ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/30' : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30'}`}>
              <BookOpen size={16} />
              <span>Módulo 6</span>
            </Link>
            <Link to="/module/6.1" className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-sm transition-colors text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30`}>
              <BookOpen size={16} />
              <span>6.1</span>
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

      <main className="flex-1 w-full px-4 md:px-6 py-4 md:py-6">
        {children}
      </main>
    </div>
  );
}
