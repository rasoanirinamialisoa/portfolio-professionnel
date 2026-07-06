// src/layout/sidebar/SidebarFooter.tsx
import React from 'react';
import SocialLinks from '@/components/ui/SocialLinks';
import { useTheme } from '@/context/ThemeContext';
import Copyright from '@/components/ui/copyright';

interface SidebarFooterProps {
  currentYear: number;
  isMobile?: boolean;
}

const SidebarFooter = ({ currentYear, isMobile = false }: SidebarFooterProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const textSize = isMobile ? 'text-[12px]' : 'text-[14px]';
  const nameSize = isMobile ? 'text-[12px]' : 'text-[14px]';

  return (
    <div className="w-full px-4 space-y-4 relative z-10">
      {/* Social Links */}
      <div className={`p-4 backdrop-blur-sm rounded-lg transition-colors duration-300 ${
        isDark 
          ? 'bg-blue-900/10 border border-blue-800/20' 
          : 'bg-blue-900/10 border border-blue-800/20'
      }`}>
        <SocialLinks
          variant="outline"
          iconSize={20}
          className={`flex justify-center gap-4 transition-colors duration-300 ${
            isDark ? 'text-blue-400/80' : 'text-blue-400/70'
          }`}
        />
      </div>
      <Copyright currentYear={currentYear} textSize={textSize} nameSize={nameSize} isDark={isDark} />
    </div>
  );
};

export default SidebarFooter;