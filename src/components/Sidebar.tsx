import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, FolderKanban, MailIcon, Briefcase, Brain } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { cn } from '@/lib/utils';
import lisaLogo from '../../assets/lisa.png';
import useClick from '@/hooks/useClick';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
  const location = useLocation();
  const { clicked, handleClick } = useClick();

  const navLinks = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'À propos', href: '/about', icon: User },
    { name: 'Compétences', href: '/skills', icon: Brain },
    { name: 'Expériences', href: '/experience', icon: Briefcase },
    { name: 'Projets', href: '/projects', icon: FolderKanban },
    { name: 'Contact', href: '/contact', icon: MailIcon },
  ];

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
          <Link to="/" className="flex justify-center mb-12">
            <img
              src={lisaLogo}
              alt="Logo"
              className="w-16 h-16 object-cover rounded-full"
            />
          </Link>

          <nav className="flex flex-col items-start w-full space-y-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'flex items-center gap-4 py-3 px-4 w-full transition-all duration-200 text-white',
                    'backdrop-blur-md bg-white/5 hover:bg-white/15 rounded-r-full',
                    isActive && 'bg-white/20 text-neon-indigo font-medium'
                  )}
                >
                  <link.icon size={24} />
                  <span className="font-medium">{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="w-full px-4">
          <div className="mt-auto p-4 backdrop-blur-md bg-white/5 rounded-lg">
            <SocialLinks
              variant="outline"
              iconSize={20}
              className="flex justify-center gap-4 text-white"
            />
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
                <Link to="/" className="flex justify-center mb-12" onClick={handleClick}>
                  <img
                    src={lisaLogo}
                    alt="Logo"
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </Link>

                <nav className="flex flex-col items-start w-full space-y-3">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={handleClick}
                        className={cn(
                          'flex items-center gap-4 py-3 px-4 w-full transition-all duration-200 text-white',
                          'backdrop-blur-md bg-white/5 hover:bg-white/15 rounded-r-full',
                          isActive && 'bg-white/20 text-neon-indigo font-medium'
                        )}
                      >
                        <link.icon size={24} />
                        <span className="font-medium">{link.name}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="w-full px-4">
                <div className="mt-auto p-4 backdrop-blur-md bg-white/5 rounded-lg">
                  <SocialLinks
                    variant="outline"
                    iconSize={20}
                    className="flex justify-center gap-4 text-white"
                  />
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