import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Code } from 'lucide-react';

const TimelineDot = ({ onClick }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 z-20">
      <div 
        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg border-2 cursor-pointer hover:scale-110 transition-transform ${
          isDark 
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-gray-700' 
            : 'bg-gradient-to-r from-neon-blue to-purple-500 border-white'
        }`}
        onClick={onClick}
      >
        <Code className="w-4 h-4 md:w-5 md:h-5 text-white" />
      </div>
    </div>
  );
};

export default TimelineDot;