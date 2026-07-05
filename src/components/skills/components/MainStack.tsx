// features/skills/components/MainStack.tsx
import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const MainStack = ({ stack }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`mb-10 p-4 md:p-6 rounded-2xl shadow-lg transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
        : 'stack-bg'
    }`}>
      <div className="text-center mb-4">
        <h3 className={`text-sm md:text-base font-light transition-colors duration-300 ${
          isDark ? 'text-gray-300' : 'text-white'
        }`}>
          Stack Technique <span className="font-semibold">Principale</span>
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
        {stack.map((tech, index) => (
          <div
            key={index}
            className={`backdrop-blur-sm hover:scale-105 transition-all duration-300 p-2 md:p-3 rounded-xl border ${
              isDark 
                ? 'bg-gray-700/30 border-gray-600 hover:bg-gray-700/50' 
                : 'bg-white/10 border-white/10 hover:bg-white/20'
            }`}
          >
            <div className="flex flex-col items-center gap-0.5">
              <tech.icon className={`text-4xl md:text-5xl ${tech.color}`} />
              <span className={`font-medium text-xs transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-white'
              }`}>
                {tech.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainStack;