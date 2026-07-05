// features/skills/components/SkillCard.tsx
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import SkillLevel from './SkillLevel';

const SkillCard = ({ skill }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`p-4 md:p-5 rounded-xl border transition-all duration-300 hover:shadow-md ${
      isDark 
        ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
        : 'bg-white border-gray-100 hover:border-purple-200'
    }`}>
      {/* En-tête */}
      <div className="flex items-center gap-2 mb-3">
        <div className={`p-1.5 rounded-lg transition-colors duration-300 ${
          isDark ? 'bg-gray-700' : 'bg-purple-50'
        }`}>
          <skill.icon className={`w-4 h-4 transition-colors duration-300 ${
            isDark ? 'text-purple-400' : 'text-purple-600'
          }`} />
        </div>
        <h4 className={`text-sm md:text-lg font-semibold transition-colors duration-300 ${
          isDark ? 'text-gray-200' : 'text-gray-800'
        }`}>
          {skill.name}
        </h4>
      </div>

      {/* Technologies avec niveau */}
      <div className="space-y-2">
        {skill.techs.map((tech, i) => (
          <div key={i} className={`flex items-center justify-between py-1 border-b last:border-0 transition-colors duration-300 ${
            isDark ? 'border-gray-700' : 'border-gray-50'
          }`}>
            <div className="flex items-center gap-2">
              <tech.icon className={`text-base ${tech.color}`} />
              <span className={`text-xs md:text-lg font-medium transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {tech.label}
              </span>
            </div>
            <SkillLevel level={tech.level} />
          </div>
        ))}
      </div>

      {/* Concepts */}
      {skill.concepts && (
        <div className={`flex flex-wrap gap-1 mt-3 pt-3 border-t transition-colors duration-300 ${
          isDark ? 'border-gray-700' : 'border-gray-100'
        }`}>
          {skill.concepts.map((concept, i) => (
            <span
              key={i}
              className={`text-[10px] px-2 py-0.5 rounded-full font-medium transition-colors duration-300 ${
                isDark 
                  ? 'bg-gray-700 text-purple-300' 
                  : 'bg-purple-50 text-purple-700'
              }`}
            >
              {concept}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillCard;