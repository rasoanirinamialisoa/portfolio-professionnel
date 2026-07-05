// features/contact/components/ContactSocial.tsx
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import SocialLinks from '@/components/ui/SocialLinks';

const ContactSocial = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`mt-4 md:mt-6 p-4 md:p-4 rounded-xl border transition-colors duration-300 ${
      isDark 
        ? 'bg-gray-700/30 border-gray-700' 
        : 'bg-gradient-to-r from-neon-purple/5 to-neon-blue/5 border-gray-200'
    }`}>
      <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
        <p className={`text-xs md:text-sm transition-colors duration-300 ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Suivez-moi pour plus d'actualités
        </p>
        <div className={`h-px w-full sm:h-6 sm:w-px sm:min-h-6 transition-colors duration-300 ${
          isDark 
            ? 'bg-gray-600' 
            : 'bg-gradient-to-r from-neon-purple to-neon-blue sm:bg-gradient-to-b'
        }`}></div>
        <SocialLinks
          className="flex gap-3 md:gap-4"
          variant={isDark ? 'dark' : 'outline'}
          iconSize={18}
        />
      </div>
    </div>
  );
};

export default ContactSocial;