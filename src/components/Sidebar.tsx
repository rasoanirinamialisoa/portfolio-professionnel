import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, FolderKanban, MailIcon } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { cn } from '@/lib/utils';
import lisaLogo from '../../assets/lisa.png';
import useClick from '@/hooks/useClick';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";
import {motion} from 'framer-motion';

const asideVariants = {
  open: {
    width: "200px",
    transition: {
      type: "spring",
      stiffness: 400,
      restDelta: 2
    }
  },
  closed:{
    width: "60px",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }   
  }
}


const Sidebar = () => {
  // Navigation links for the sidebar
  const navLinks = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'À propos', href: '/about', icon: User },
    { name: 'Projets', href: '/projects', icon: FolderKanban },
    { name: 'Contact', href: '/contact', icon: MailIcon },
    
  ];

  const { clicked, handleClick } = useClick();

  return (
    <main className="flex justify-end">
      <motion.aside className="fixed top-0 left-0 h-screen w-14 md:w-60 bg-neon-blue shadow-md flex flex-col items-center justify-between py-8 z-50 border-r border-white/10" variants={clicked ? asideVariants : ""} animate={clicked ? "open" : "closed"}  >
      
      <div className="w-full">
        <Link to="/" className="flex justify-center mb-12">
          <div className="w-full flex flex-col items-center">
              <img src={lisaLogo} alt="Logo" className="w-16 h-16 md:w-20 md:h-20 object-cover" />
           
          </div>
        </Link>
        
        {/* Navigation */}
        <nav className="flex flex-col items-center md:items-start w-full space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "flex items-center gap-5 py-3 px-4 w-full transition-all duration-300 text-white relative overflow-hidden group",
                "md:pl-10 backdrop-blur-md bg-white/5 hover:bg-white/15 rounded-r-full"
              )}
            >
              <link.icon size={24} className="flex-shrink-0 group-hover:text-neon-indigo transition-colors duration-300" />
              <span className="block md:block font-medium transition-all duration-300 group-hover:text-neon-indigo group-hover:translate-x-1">
                {link.name}
              </span>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-neon-purple to-neon-pink group-hover:w-full transition-all duration-300"></div>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="mt-auto pb-4 p-4 backdrop-blur-md bg-white/5 rounded-lg">
        <SocialLinks variant="outline" iconSize={20} className="flex-col md:flex-row space-y-4 md:space-y-0 text-white" />
      </div>
    </motion.aside>

      

    <div className="ml-20 md:ml-60 p-8 flex-end md:hidden fixed top-4 right-4 z-50">
      <button onClick={handleClick}>
        {clicked ? <FaXmark size={24} /> : <FaBars size={24} />}
      </button>
    </div>
    </main>
    
  );
};

export default Sidebar;