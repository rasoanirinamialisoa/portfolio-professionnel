import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import ThemeToggle from '@/components/ui/ThemeToggle';
import HeroDesktop from './HeroDesktop';
import HeroMobile from './HeroMobile';
import { Star } from 'lucide-react';

const ProfileHero = import.meta.env.VITE_ProfileHero;
const ProfileHeroMobile = import.meta.env.VITE_ProfileHeroMobile;

const Hero = () => {
  const { theme } = useTheme();

  // Fonction pour scroller vers la section projets
  const handleProjectsClick = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  // Fonction pour télécharger le CV
  const handleCVClick = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'CV_RASOANIRINA_Mialisoa_Lisa.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Classes dynamiques pour le fond
  const bgClasses = theme === 'dark'
    ? 'bg-gray-900'
    : 'bg-gradient-to-b from-white via-blue-50/30 to-white';

  const bubbleColor = theme === 'dark'
    ? 'from-gray-700/20 to-gray-700/20'
    : 'from-neon-blue/10 to-neon-blue/10';

  const blobColor = theme === 'dark'
    ? 'from-gray-700/10 to-gray-700/10'
    : 'from-neon-blue/5 to-neon-blue/5';

  const starColor = theme === 'dark'
    ? 'text-gray-500/40'
    : 'text-neon-purple/40';

  return (
    <section id="hero" className={`relative min-h-screen pt-0 overflow-hidden ${bgClasses} transition-colors duration-300`}>
      {/* BOUTON THEME EN HAUT À DROITE */}
      <div className="fixed top-2 right-5 md:right-14  z-50">
        <ThemeToggle />
      </div>

      {/* EFFETS DE FOND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute pointer-events-none rounded-full bg-gradient-to-r ${bubbleColor}`}
            style={{
              width: Math.random() * 100 + 50 + "px",
              height: Math.random() * 100 + 50 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 20 + 20}s infinite linear`,
              animationDelay: Math.random() * 5 + "s",
            }}
          />
        ))}
        <div className={`absolute top-0 -left-48 w-96 h-96 bg-gradient-to-br ${blobColor} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-0 -right-48 w-96 h-96 bg-gradient-to-tr ${blobColor} rounded-full blur-3xl`}></div>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
            }}
          >
            <Star className={`w-2 h-2 ${starColor}`} />
          </div>
        ))}
      </div>

      {/* VERSION DESKTOP */}
      <HeroDesktop
        onCVClick={handleCVClick}
        onProjectsClick={handleProjectsClick}
        ProfileHero={ProfileHero}
      />

      {/* VERSION MOBILE */}
      <HeroMobile
        onCVClick={handleCVClick}
        onProjectsClick={handleProjectsClick}
        ProfileHeroMobile={ProfileHeroMobile}
      />

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.1); } }
      `}</style>
    </section>
  );
};

export default Hero;