import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPositions = sections.map(id => {
        const el = document.getElementById(id);
        return el ? el.offsetTop : 0;
      });

      for (let i = 0; i < scrollPositions.length; i++) {
        if (window.scrollY >= scrollPositions[i] - 200) {
          setActiveSection(sections[i]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Accueil', 
      href: '#home' 
    },
    { 
      name: 'À propos', 
      href: '#about', 
      subSections: [
        { name: 'Compétences', href: '#competences' },
        { name: 'Expériences', href: '#experiences' }
      ] 
    },
    { 
      name: 'Projets', 
      href: '#projects' 
    },
    { 
      name: 'Contact', 
      href: '#contact' 
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        activeSection === 'home' 
          ? "bg-white" 
          : "bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple bg-opacity-80 backdrop-blur-md shadow-md"
      )}
    >
      <div className="section-container flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gradient">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative"
              onMouseEnter={() => link.subSections && setIsDropdownOpen(true)}
              onMouseLeave={() => link.subSections && setIsDropdownOpen(false)}
            >
              <a
                href={link.href}
                className="font-medium text-white hover:text-neon-purple transition-colors duration-300"
              >
                {link.name}
              </a>

              {link.subSections && isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48">
                  {link.subSections.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2 text-white hover:text-neon-purple hover:bg-gray-100 transition-colors duration-300"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-neon-purple" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="relative w-full text-center">
                <a
                  href={link.href}
                  className="block font-medium text-white hover:text-neon-purple transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
                {link.subSections && (
                  <div className="flex flex-col bg-gray-100 rounded-md mt-1">
                    {link.subSections.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="block py-2 text-white hover:text-neon-purple hover:bg-gray-200 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
