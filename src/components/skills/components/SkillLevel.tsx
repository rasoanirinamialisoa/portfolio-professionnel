// features/skills/components/SkillLevel.tsx
import React from 'react';
import { useSkillLevel } from '../../../hooks/useSkillLevel';
import { useTheme } from '@/context/ThemeContext';

const SkillLevel = ({ level }) => {
  const { getLevel } = useSkillLevel();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const levelInfo = getLevel(level);

  // Adapter les couleurs pour le mode dark
  const getDarkColors = () => {
    if (level >= 85) return 'bg-purple-900/30 text-purple-300 border-purple-700';
    if (level >= 70) return 'bg-blue-900/30 text-blue-300 border-blue-700';
    if (level >= 50) return 'bg-green-900/30 text-green-300 border-green-700';
    return 'bg-gray-700/30 text-gray-400 border-gray-600';
  };

  const lightColors = levelInfo.bg;
  const textColor = levelInfo.color;
  const borderColor = levelInfo.border;

  return (
    <span className={`text-[12px] font-semibold px-2 py-0.5 rounded-full border transition-colors duration-300 ${
      isDark 
        ? `${getDarkColors()}` 
        : `${lightColors} ${textColor} ${borderColor}`
    }`}>
      {levelInfo.label}
    </span>
  );
};

export default SkillLevel;