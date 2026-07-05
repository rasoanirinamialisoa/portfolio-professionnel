// src/layout/sidebar/Copyright.tsx
import React from 'react';
import { useTheme } from '@/context/ThemeContext';

interface CopyrightProps {
  isMobile?: boolean;
}

const Copyright = ({ isMobile = false }: CopyrightProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const currentYear = new Date().getFullYear();
  
  const textSize = isMobile ? 'text-[12px]' : 'text-[14px]';
  const nameSize = isMobile ? 'text-[12px]' : 'text-[14px]';

  return (
    <div className={`text-center ${textSize} leading-relaxed transition-colors duration-300 ${
      isDark ? 'text-blue-400/40' : 'text-blue-400/30'
    }`}>
      <p>© {currentYear} Tous droits réservés</p>
      <p className={`${nameSize} mt-0.5 transition-colors duration-300 ${
        isDark ? 'text-blue-400/30' : 'text-blue-400/20'
      }`}>
        RASOANIRINA Mialisoa Lisa
      </p>
    </div>
  );
};

export default Copyright;