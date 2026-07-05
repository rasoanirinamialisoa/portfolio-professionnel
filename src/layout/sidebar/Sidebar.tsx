import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import useClick from '@/hooks/useClick';
import { navLinks } from './SidebarConfig';
import SidebarDesktop from './SidebarDesktop';
import SidebarMobile from './SidebarMobile';

const Sidebar = () => {
  const location = useLocation();
  const { clicked, handleClick } = useClick();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const Logo = import.meta.env.VITE_Logo;
  const currentYear = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState('hero');

  // Fonction pour scroller vers une section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 0;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
      handleClick();
    }
  };

  // Détecter la section active lors du défilement
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const section of navLinks) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* SIDEBAR MOBILE */}
      <SidebarMobile
        navLinks={navLinks}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        currentYear={currentYear}
        clicked={clicked}
        handleClick={handleClick}
        Logo={Logo}
      />

      {/* SIDEBAR DESKTOP */}
      <SidebarDesktop
        navLinks={navLinks}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        currentYear={currentYear}
        Logo={Logo}
      />
    </>
  );
};

export default Sidebar;