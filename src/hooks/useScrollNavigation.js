import { useState, useEffect, useCallback } from "react";
import { navLinks } from "@/layout/sidebar/SidebarConfig";

export const useScrollNavigation = (initialSection = 'hero') => {
  const [activeSection, setActiveSection] = useState(initialSection);
  const [isOpen, setIsOpen] = useState(false);

  // Détecter la section active
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

  // Scroller vers une section
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
      setIsOpen(false); // Ferme le mobile
    }
  }, []);

  // Ouvrir/Fermer la sidebar mobile
  const toggleSidebar = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return {
    activeSection,
    isOpen,
    scrollToSection,
    toggleSidebar,
    closeSidebar: () => setIsOpen(false),
  };
};