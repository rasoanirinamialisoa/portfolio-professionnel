// src/components/ui/ThemeToggle.tsx
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-4
        relative p-2.5 rounded-full transition-all duration-300 
        hover:scale-110 active:scale-95
        flex items-center justify-center
        shadow-lg
        ${isDark 
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 hover:text-yellow-300 border border-gray-700' 
          : 'bg-white/90 text-gray-700 hover:bg-white hover:text-gray-900 border border-gray-200'
        }
      `}
      aria-label="Basculer le thème"
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;