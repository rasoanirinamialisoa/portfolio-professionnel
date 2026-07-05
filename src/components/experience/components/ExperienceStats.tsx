import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const ExperienceStats = ({ stats, summary, index }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const isEven = index % 2 === 0;

  return (
    <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 w-[35%] ${
      isEven ? 'right-4' : 'left-4'
    } z-10`}>
      <div className="relative w-full">
        {/* Flèche */}
        <div className={`absolute top-1/2 -translate-y-1/2 ${
          isEven ? '-left-8 md:-left-12' : '-right-8 md:-right-12'
        } text-6xl md:text-8xl font-bold animate-pulse ${
          isDark ? 'text-blue-500' : 'text-blue-500'
        }`}
        style={{ 
          textShadow: isDark 
            ? '0 0 20px rgba(59, 130, 246, 0.2)' 
            : '0 0 20px rgba(51, 158, 234, 0.3)',
          zIndex: 20 
        }}>
          {isEven ? '←' : '→'}
        </div>
        
        {/* Carte statistiques */}
        <div className={`backdrop-blur-sm rounded-2xl p-4 shadow-xl border-2 transition-colors ${
          isDark 
            ? 'bg-gray-800/95 border-gray-700 hover:border-gray-600' 
            : 'bg-white/95 border-blue-200 hover:border-blue-400'
        }`}>
          <h3 className={`text-base font-bold mb-3 text-center ${
            isDark ? 'text-gray-200' : 'text-neon-dark'
          }`}>
            📊 Points Clés
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {stats.map((stat, i) => (
              <div key={i} className={`text-center rounded-lg p-2 transition-colors ${
                isDark 
                  ? 'bg-gray-700/50 hover:bg-gray-700' 
                  : 'bg-blue-50 hover:bg-blue-100'
              }`}>
                <h4 className={`text-lg md:text-xl font-bold ${
                  isDark ? 'text-gray-200' : 'text-neon-dark'
                }`}>
                  {stat.value}
                </h4>
                <p className={`text-[10px] ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <p className={`mt-3 text-[14px] text-center leading-relaxed italic ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            "{summary}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceStats;