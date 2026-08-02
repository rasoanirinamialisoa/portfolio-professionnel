// features/hero/components/HeroDesktop.tsx
import React from 'react';
import { useTheme } from '@/context/ThemeContext'; 
import { Download, ArrowRight, Github, ExternalLink } from 'lucide-react';
import SocialLinks from '../../ui/SocialLinks';
import { featuredProject } from '../constants/heroConfig';

interface HeroDesktopProps {
  onCVClick: () => void;
  onProjectsClick: () => void;
  ProfileHero: string;
}

const HeroDesktop = ({ onCVClick, onProjectsClick, ProfileHero }: HeroDesktopProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="hidden min-h-screen pt-0 lg:block relative">
      {/* IMAGE à gauche */}
      <div className="absolute inset-0 z-10">
        <div className={`absolute top-1/2 left-[28%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl ${
          isDark ? 'bg-gray-700/10' : 'bg-gradient-to-r from-neon-purple/10 to-neon-blue/10'
        }`}></div>
        <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative group">
            <div className={`absolute -inset-6 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 ${
              isDark ? 'bg-gray-700/30' : 'bg-gradient-to-r from-neon-blue/20 via-neon-pink/20 to-neon-blue/20'
            }`}></div>
            <div className="relative">
              <img
                src={ProfileHero}
                alt="RASOANIRINA Mialisoa Lisa"
                className="h-screen w-auto object-contain max-w-[2000px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PROJET EN VEDETTE */}
      <div className="absolute z-30 bottom-[8%] left-[25%] -translate-x-1/2 w-full max-w-lg">
        <div className={`backdrop-blur-sm border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ${
          isDark 
            ? 'bg-gray-800/95 border-gray-700 hover:border-gray-600' 
            : 'bg-white/95 border-gray-200 hover:border-neon-purple/30'
        }`}>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h4 className={`text-lg font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                {featuredProject.title}
              </h4>
              <span className="px-3 py-1 bg-gradient-to-r from-neon-purple to-neon-blue text-white text-xs font-medium rounded-full">
                ★ Projet en vedette
              </span>
            </div>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {featuredProject.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {featuredProject.technologies.map((tech, index) => (
                <span key={index} className={`px-3 py-1 text-xs font-medium rounded-full border ${
                  isDark 
                    ? 'bg-gray-700/50 text-gray-300 border-gray-600' 
                    : 'bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-gray-700 border-gray-200'
                }`}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-2">
              <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-neon-purple'
              }`}>
                <Github className="w-4 h-4" /> Voir le code
              </a>
              <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-neon-purple'
              }`}>
                <ExternalLink className="w-4 h-4" /> Voir la démo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* TEXTE à droite */}
      <div className="section-container px-4 sm:px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-screen">
          <div className="space-y-5 md:space-y-7 text-center lg:text-left lg:col-start-2">
            <h2 className={`text-base md:text-lg font-medium tracking-wider uppercase ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
            Bonjour, je suis
            </h2>

            {/* TITRE - RASOANIRINA réduit */}
            <h1 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight font-bold ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              <span className="block sm:inline">

              </span>
              <span className={`block sm:inline ${isDark ? 'text-white' : 'text-black'}`}>
                RASOANIRINA Mialisoa Lisa
              </span>
            </h1>

            {/* TITRE - DÉVELOPPEUSE FULLSTACK agrandi */}
            <div className="flex justify-center md:justify-start items-center gap-2">
              <span className="font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl tracking-wide">
                DÉVELOPPEUSE FULLSTACK
              </span>
            </div>

            {/* Description */}
            <div className={`backdrop-blur-sm border rounded-2xl p-5 md:p-6 shadow-lg max-w-lg mx-auto lg:mx-0 group transition-all duration-300 relative ${
              isDark 
                ? 'bg-gray-800/80 border-gray-700 hover:border-gray-600 hover:shadow-xl' 
                : 'bg-white/80 border-gray-200 hover:shadow-xl hover:border-neon-purple/30'
            }`}>
              <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
               Fraîchement diplômée en informatique, je suis à la recherche d'une
              <span className="text-neon-blue font-bold"> opportunité en développement web, </span> que ce soit dans le cadre{' '}
                <span className="text-neon-blue font-bold"> d'un poste junior ou d'un stage </span>
                </p> 
              <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}> 
                <br />
               Première expérience avec <span className="text-neon-blue font-bold">PHP/Laravel, Symfony</span>, et{' '}
                <span className="text-neon-blue font-bold">React</span>,
              Je développe des applications web qui répondent à des besoins métiers concrets, tout en m'adaptant rapidement aux nouvelles technologies.
              </p>
            </div>

            {/* BOUTONS */}
            <div className="flex flex-row flex-wrap gap-3 justify-center lg:justify-start">
              <button
                onClick={onCVClick}
                className="z-50 pointer-events-auto group relative overflow-hidden text-white px-4 py-2.5 md:px-6 md:py-3 rounded-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base cursor-pointer bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-neon-blue/40"
              >
                <span className="relative z-10 flex items-center gap-2 font-semibold">
                  <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" /> Voir mon CV
                </span>
              </button>
              <button
                onClick={onProjectsClick}
                className="z-50 pointer-events-auto group relative overflow-hidden text-white px-4 py-2.5 md:px-6 md:py-3 rounded-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base cursor-pointer bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-neon-blue/40"
              >
                <span className="relative z-10 flex items-center gap-2 font-semibold">
                  Voir mes projets <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </div>

            {/* SOCIAL */}
            <div className="pt-0">
              <div className={`inline-flex flex-row sm:flex-row items-center gap-4 backdrop-blur-sm border rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ${
                isDark 
                  ? 'bg-gray-800/80 border-gray-700' 
                  : 'bg-white/80 border-gray-200'
              }`}>
                <span className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Suivez-moi
                </span>
                <div className={`h-px w-8 sm:h-8 sm:w-px ${
                  isDark 
                    ? 'bg-gray-600' 
                    : 'bg-gradient-to-r from-neon-purple to-neon-blue sm:bg-gradient-to-b'
                }`}></div>
                <SocialLinks className="flex gap-4" variant="default" iconSize={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDesktop;