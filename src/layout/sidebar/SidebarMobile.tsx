import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { useTheme } from '@/context/ThemeContext';
import SidebarFooter from './SidebarFooter';

interface SidebarMobileProps {
  navLinks: Array<{ name: string; id: string; icon: React.ElementType }>;
  activeSection: string;
  scrollToSection: (id: string) => void;
  currentYear: number;
  clicked: boolean;
  handleClick: () => void;
  Logo: string;
}

const SidebarMobile = ({
  navLinks,
  activeSection,
  scrollToSection,
  currentYear,
  clicked,
  handleClick,
  Logo,
}: SidebarMobileProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      {/* ☰ HAMBURGER */}
      <button
        onClick={handleClick}
        className="fixed top-4 left-4 z-50 md:hidden p-3 rounded-xl shadow-lg transition-colors duration-300 bg-[#0a1628] text-white hover:bg-[#0d1f3c] border border-white/10 hover:border-blue-400/30"
      >
        {clicked ? <FaXmark size={22} /> : <FaBars size={22} />}
      </button>

      {/* SIDEBAR MOBILE */}
      <AnimatePresence>
        {clicked && (
          <>
            {/* OVERLAY */}
            <motion.div
              onClick={handleClick}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-screen w-64 flex flex-col items-center justify-between py-8 z-50 md:hidden border-r border-blue-900/30 shadow-2xl shadow-white/20"
              style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)' }}
            >
              {/* Effet de fond */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxYzNkNmMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 -z-10"></div>

              {/* BOUTON FERMER EN HAUT À DROITE */}
              <button
                onClick={handleClick}
                className="absolute top-4 right-4 z-20 p-2 rounded-lg text-blue-400/60 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                aria-label="Fermer le menu"
              >
                <FaXmark size={24} />
              </button>

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
                      className="relative w-14 h-14 object-cover rounded-full cursor-pointer hover:scale-105 transition-transform duration-300 ring-2 ring-blue-400/30 hover:ring-blue-400/50 shadow-lg shadow-blue-500/20"
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
                          'flex items-center gap-4 py-2.5 px-4 w-full transition-all duration-300 rounded-r-full text-[14px] relative group',
                          'hover:bg-blue-500/10',
                          isActive 
                            ? 'text-white font-medium bg-blue-500/20 shadow-lg shadow-white-500' 
                            : 'text-neon-indigo hover:text-blue-300'
                        )}
                      >
                        {isActive && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-r-full shadow-lg shadow-blue-500/50"></div>
                        )}
                        
                        <Icon size={20} className={cn(
                          'transition-colors duration-300',
                          isActive 
                            ? 'text-blue-400' 
                            : 'text-blue-400/60 group-hover:text-blue-300'
                        )} />
                        <span className="font-medium">{link.name}</span>
                        
                        {isActive && (
                          <span className="ml-auto w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-500/50" />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              <SidebarFooter currentYear={currentYear} isMobile={true} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarMobile;