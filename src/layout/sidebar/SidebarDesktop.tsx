import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';
import SidebarFooter from './SidebarFooter';

interface SidebarDesktopProps {
  navLinks: Array<{ name: string; id: string; icon: React.ElementType }>;
  activeSection: string;
  scrollToSection: (id: string) => void;
  currentYear: number;
  Logo: string;
}

const SidebarDesktop = ({
  navLinks,
  activeSection,
  scrollToSection,
  currentYear,
  Logo,
}: SidebarDesktopProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <aside className={`
      hidden md:flex fixed top-0 left-0 h-screen w-60 flex-col items-center justify-between py-8 z-40
      transition-colors duration-500
      ${isDark 
        ? 'bg-[#0a0e1a] border-r border-blue-900/30 shadow-2xl shadow-blue-900/20' 
        : 'bg-[#0a1628] border-r border-blue-900/20 shadow-xl'
      }
    `}>
      {/* Effet de fond bleu nuit */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f3c] to-[#0a1628] opacity-90 -z-10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxYzNkNmMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 -z-10"></div>

      <div className="w-full px-4 relative z-10">
        <button
          onClick={() => scrollToSection('hero')}
          className="flex justify-center mb-8 w-full"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <img
              src={Logo}
              alt="Logo"
              className="relative w-16 h-16 object-cover rounded-full cursor-pointer hover:scale-105 transition-transform duration-300 ring-2 ring-blue-400/30 hover:ring-blue-400/50 shadow-lg shadow-blue-500/20"
            />
          </div>
        </button>

        <nav className="flex flex-col items-start w-full space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const Icon = link.icon;

            return (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  'flex items-center gap-4 py-2.5 px-4 w-full transition-all duration-300 rounded-r-full text-sm relative group',
                  'hover:bg-blue-500/10',
                  isActive 
                            ? 'text-white font-medium bg-blue-500/20 shadow-lg shadow-white-500' 
                            : 'text-neon-indigo hover:text-blue-300'
                )}
              >
                {/* Effet de surbrillance active */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-r-full shadow-lg shadow-blue-500/50"></div>
                )}
                
                <Icon size={20} className={cn(
                  'transition-colors duration-300',
                  isActive 
                    ? 'text-blue-400' 
                    : 'text-blue-400/60 group-hover:text-blue-300'
                )} />
                <span className="font-medium">{link.name}</span>
                
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="ml-auto w-1.5 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-500/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <SidebarFooter currentYear={currentYear} isMobile={false} />
    </aside>
  );
};

export default SidebarDesktop;