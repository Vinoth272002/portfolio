import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const root = window.document.documentElement;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    root.classList.remove('light', 'dark');
    
    if (theme === 'system') {
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }    
  }, [theme]);

  return (
    <div className="flex items-center bg-gray-100 dark:bg-slate-800 p-1 rounded-full border border-gray-200 dark:border-slate-700 shadow-inner">
      <button 
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition-all ${theme === 'light' ? 'bg-white text-yellow-500 shadow-sm' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
        aria-label="Light Mode"
      >
        <Sun size={16} />
      </button>
      <button 
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full transition-all ${theme === 'system' ? 'bg-white dark:bg-slate-600 text-blue-500 shadow-sm' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
        aria-label="System Mode"
      >
        <Monitor size={16} />
      </button>
      <button 
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition-all ${theme === 'dark' ? 'bg-slate-700 text-purple-400 shadow-sm' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
        aria-label="Dark Mode"
      >
        <Moon size={16} />
      </button>
    </div>
  );
};
