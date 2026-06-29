import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, FolderKanban, MailIcon, Briefcase, Brain } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { cn } from '@/lib/utils';
import useClick from '@/hooks/useClick';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
  const location = useLocation();
  const { clicked, handleClick } = useClick();
  const Logo = import.meta.env.VITE_Logo;
  
  // Date automatique
  const currentYear = new Date().getFullYear();

  // Sections pour le scroll (single page)
  const navLinks = [
    { name: 'Accueil', id: 'hero', icon: Home },
    { name: 'À propos', id: 'about', icon: User },
    { name: 'Compétences', id: 'skills', icon: Brain },
    { name: 'Expériences', id: 'experience', icon: Briefcase },
    { name: 'Projets', id: 'projects', icon: FolderKanban },
    { name: 'Contact', id: 'contact', icon: MailIcon },
  ];

  const [activeSection, setActiveSection] = useState('hero');

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
    handleScroll(); // Vérification initiale

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour scroller vers une section
  const scrollToSection = (sectionId) => {
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

  return (
    <>
      {/* ☰ HAMBURGER — MOBILE SEULEMENT */}
      <button
        onClick={handleClick}
        className="fixed top-4 left-4 z-50 md:hidden bg-neon-blue text-white p-3 rounded-xl shadow-lg"
      >
        {clicked ? <FaXmark size={22} /> : <FaBars size={22} />}
      </button>

      {/* SIDEBAR POUR DESKTOP (toujours visible) */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-60 bg-neon-blue shadow-md flex-col items-center justify-between py-8 z-40 border-r border-white/10">
        <div className="w-full px-4">
          <button onClick={() => scrollToSection('hero')} className="flex justify-center mb-12 w-full">
            <img
              src={Logo}
              alt="Logo"
              className="w-16 h-16 object-cover rounded-full cursor-pointer hover:scale-105 transition-transform"
            />
          </button>

          <nav className="flex flex-col items-start w-full space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    'flex items-center gap-4 py-3 px-4 w-full transition-all duration-200 text-white',
                    'backdrop-blur-md bg-white/5 hover:bg-white/15 rounded-r-full',
                    isActive && 'bg-white/20 text-neon-indigo font-medium shadow-lg'
                  )}
                >
                  <link.icon size={24} />
                  <span className="font-medium">{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="ml-auto w-1.5 h-8 bg-white rounded-full"
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

        <div className="w-full px-4 space-y-4">
          {/* Social Links */}
          <div className="p-4 backdrop-blur-md bg-white/5 rounded-lg">
            <SocialLinks
              variant="outline"
              iconSize={20}
              className="flex justify-center gap-4 text-white"
            />
          </div>

          {/* Copyright - Desktop */}
          <div className="text-center text-white/50 text-[14px] leading-relaxed">
            <p>© {currentYear} Tous droits réservés</p>
            <p className="text-[14px] text-white/30 mt-0.5">
              RASOANIRINA Mialisoa Lisa
            </p>
          </div>
        </div>
      </aside>

      {/* SIDEBAR POUR MOBILE (avec animation) */}
      <AnimatePresence>
        {clicked && (
          <>
            {/* OVERLAY */}
            <motion.div
              onClick={handleClick}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* SIDEBAR MOBILE */}
            <motion.aside
              initial={{ x: -240 }}
              animate={{ x: 0 }}
              exit={{ x: -240 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-screen w-60 bg-neon-blue shadow-md flex flex-col items-center justify-between py-8 z-50 border-r border-white/10 md:hidden"
            >
              <div className="w-full px-4">
                <button onClick={() => scrollToSection('hero')} className="flex justify-center mb-12 w-full">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="w-16 h-16 object-cover rounded-full cursor-pointer hover:scale-105 transition-transform"
                  />
                </button>

                <nav className="flex flex-col items-start w-full space-y-3">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <button
                        key={link.name}
                        onClick={() => scrollToSection(link.id)}
                        className={cn(
                          'flex items-center gap-4 py-1 md:py-3 px-4 w-full transition-all duration-200 text-white text-[12px]',
                          'backdrop-blur-md bg-white/5 hover:bg-white/15 rounded-r-full',
                          isActive && 'bg-white/20 text-neon-indigo font-medium shadow-lg'
                        )}
                      >
                        <link.icon size={20} />
                        <span className="font-medium">{link.name}</span>
                        {isActive && (
                          <span className="ml-auto w-1 h-6 bg-white rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="w-full px-4 space-y-4">
                {/* Social Links */}
                <div className="p-4 backdrop-blur-md bg-white/5 rounded-lg">
                  <SocialLinks
                    variant="outline"
                    iconSize={20}
                    className="flex justify-center gap-4 text-white"
                  />
                </div>

                {/* Copyright - Mobile */}
                <div className="text-center text-white/50 text-[10px] px-2 leading-relaxed">
                  <p>© {currentYear} Tous droits réservés</p>
                  <p className="text-[8px] text-white/30 mt-0.5">
                    RASOANIRINA Mialisoa Lisa
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;