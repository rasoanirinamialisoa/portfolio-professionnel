// 📁 src/layout/sidebar/SidebarNav.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavLink {
  name: string;
  id: string;
  icon: React.ElementType;
}

interface SidebarNavProps {
  navLinks: NavLink[];
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  isMobile?: boolean;
}

const SidebarNav = ({
  navLinks,
  activeSection,
  scrollToSection,
  isMobile = false,
}: SidebarNavProps) => {
  const iconSize = isMobile ? 20 : 24;
  const textSize = isMobile ? 'text-sm' : 'text-base';
  const paddingY = isMobile ? 'py-2.5' : 'py-3';
  const gapSize = isMobile ? 'gap-3' : 'gap-4';

  return (
    <nav className="flex flex-col items-start w-full space-y-2">
      {navLinks.map((link) => {
        const isActive = activeSection === link.id;
        return (
          <button
            key={link.name}
            onClick={() => scrollToSection(link.id)}
            className={cn(
              'flex items-center w-full transition-all duration-200 text-white',
              'backdrop-blur-md bg-white/5 hover:bg-white/15 rounded-r-full',
              'px-4',
              textSize,
              paddingY,
              gapSize,
              isActive && 'bg-white/20 text-neon-indigo font-medium shadow-lg'
            )}
          >
            <link.icon size={iconSize} className="flex-shrink-0" />
            <span className="font-medium truncate">{link.name}</span>
            {isActive && (
              isMobile ? (
                <span className="ml-auto w-1 h-6 bg-white rounded-full flex-shrink-0" />
              ) : (
                <motion.span
                  layoutId="activeIndicator"
                  className="ml-auto w-1.5 h-8 bg-white rounded-full flex-shrink-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default SidebarNav;