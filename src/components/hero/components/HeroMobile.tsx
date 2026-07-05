import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Download, ArrowRight, Github, ExternalLink } from 'lucide-react';
import SocialLinks from '../../ui/SocialLinks';
import { featuredProject } from '../constants/heroConfig';

interface HeroMobileProps {
  onCVClick: () => void;
  onProjectsClick: () => void;
  ProfileHeroMobile: string;
}

const HeroMobile = ({ onCVClick, onProjectsClick, ProfileHeroMobile }: HeroMobileProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="lg:hidden px-4 py-6 relative z-20">
      {/* IMAGE */}
      <div className="flex justify-center mb-6">
        <div className="relative group">
          <div className={`absolute -inset-4 rounded-2xl blur-lg ${
            isDark ? 'bg-gray-700/20' : 'bg-gradient-to-r from-neon-purple/15 to-neon-blue/15'
          }`}></div>
          <div className={`relative backdrop-blur-md border-2 rounded-full p-2 shadow-xl ${
            isDark ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-white'
          }`}>
            <img src={ProfileHeroMobile} alt="RASOANIRINA Mialisoa Lisa" className="w-56 sm:w-64 object-contain rounded-full" />
          </div>
        </div>
      </div>

      {/* CONTENU */}
      <div className="text-center space-y-4">
        {/* Disponibilité */}
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mx-auto ${
          isDark 
            ? 'bg-green-900/30 border border-green-800' 
            : 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300'
        }`}>
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-green-400/50"></div>
            <div className={`relative w-2 h-2 rounded-full ${isDark ? 'bg-green-400' : 'bg-green-500'}`}></div>
          </div>
          <span className={`text-xs font-semibold ${isDark ? 'text-green-400' : 'text-green-700'}`}>
            Disponible pour un stage
          </span>
        </div>

        <h2 className={`text-sm font-medium tracking-wider uppercase ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Bonjour, je suis
        </h2>

        {/* NOM - Réduit et en blanc en mode dark */}
        <h1 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          <span className={isDark ? 'text-white' : 'text-gray-800'}>
           RASOANIRINA Mialisoa Lisa
          </span>
        </h1>

        {/* TITRE - Agrandi */}
        <div className="flex justify-center items-center gap-2">
          <span className="font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent text-xl sm:text-2xl tracking-wide">
            DÉVELOPPEUSE FULLSTACK
          </span>
        </div>

        {/* Description */}
        <div className={`backdrop-blur-sm border rounded-xl p-4 shadow-lg text-left ${
          isDark 
            ? 'bg-gray-800/80 border-gray-700' 
            : 'bg-white/80 border-gray-200'
        }`}>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Fraîchement diplômée en informatique, parcours écosystème logiciel,
          </p>
          <p className={`text-sm leading-relaxed mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            avec une appétence pour <span className="text-neon-blue font-bold">PHP/Laravel, Symfony</span>, et{' '}
            <span className="text-neon-blue font-bold">React</span>.
          </p>
          <p className={`text-sm leading-relaxed mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Je cherche une opportunité pour consolider mes compétences techniques dans un environnement stimulant.
          </p>
        </div>

        {/* BOUTONS */}
        <div className="flex flex-wrap gap-2 justify-center relative z-30">
          <button
            onClick={onCVClick}
            className="text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95 bg-gradient-to-r from-neon-blue to-neon-purple"
          >
            <span className="flex items-center gap-2"><Download className="w-4 h-4" /> Voir mon CV</span>
          </button>
          <button
            onClick={onProjectsClick}
            className="text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95 bg-gradient-to-r from-neon-blue to-neon-purple"
          >
            <span className="flex items-center gap-2">Voir mes projets <ArrowRight className="w-4 h-4" /></span>
          </button>
        </div>

        {/* SOCIAL */}
        <div className="flex justify-center pt-2">
          <div className={`inline-flex items-center gap-3 backdrop-blur-sm border rounded-xl px-4 py-2.5 shadow-md ${
            isDark 
              ? 'bg-gray-800/80 border-gray-700' 
              : 'bg-white/80 border-gray-200'
          }`}>
            <span className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Suivez-moi
            </span>
            <div className={`h-5 w-px ${isDark ? 'bg-gray-600' : 'bg-gradient-to-b from-neon-purple to-neon-blue'}`}></div>
            <SocialLinks className="flex gap-3" variant="default" iconSize={18} />
          </div>
        </div>
      </div>

      {/* PROJET EN VEDETTE */}
      <div className="mt-6">
        <div className={`backdrop-blur-sm border rounded-xl p-4 shadow-lg ${
          isDark 
            ? 'bg-gray-800/95 border-gray-700' 
            : 'bg-white/95 border-gray-200'
        }`}>
          <div className="flex items-center justify-between">
            <h4 className={`text-base font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
              {featuredProject.title}
            </h4>
            <span className="px-2.5 py-0.5 bg-gradient-to-r from-neon-purple to-neon-blue text-white text-[10px] font-medium rounded-full">
              ★ En vedette
            </span>
          </div>
          <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {featuredProject.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {featuredProject.technologies.slice(0, 4).map((tech, index) => (
              <span key={index} className={`px-2 py-0.5 text-[10px] font-medium rounded-full border ${
                isDark 
                  ? 'bg-gray-700/50 text-gray-300 border-gray-600' 
                  : 'bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-gray-700 border-gray-200'
              }`}>
                {tech}
              </span>
            ))}
            {featuredProject.technologies.length > 4 && (
              <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full border ${
                isDark 
                  ? 'text-gray-400 border-gray-600' 
                  : 'text-gray-500 border-gray-200'
              }`}>
                +{featuredProject.technologies.length - 4}
              </span>
            )}
          </div>
          <div className={`flex gap-3 mt-2 pt-2 border-t ${
            isDark ? 'border-gray-700' : 'border-gray-100'
          }`}>
            <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
              isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-neon-purple'
            }`}>
              <Github className="w-3.5 h-3.5" /> Code
            </a>
            <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
              isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-neon-purple'
            }`}>
              <ExternalLink className="w-3.5 h-3.5" /> Démo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMobile;