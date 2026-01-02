import React from 'react';
import { Button } from '@/components/ui/button';
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 md:pt-20 relative overflow-hidden">
      {/* Image en arrière-plan sur toute la page */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/new-hero.png" 
          alt="RASOANIRINA Mialisoa Lisa" 
          className="w-full h-full object-cover object-center" 
        />
      </div>

      <div className="section-container px-4 sm:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Texte centré sur mobile, à droite sur desktop */}
        <div className="space-y-6 md:space-y-8 text-center lg:text-center lg:col-start-6 xl:col-start-13 xl:text-left">
          <div className="space-y-2 md:space-y-3">
            <h2 className="text-lg md:text-xl font-medium text-neon-purple">Bonjour, je suis</h2>
          
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neon-blue tracking-tight">
              RASOANIRINA Mialisoa Lisa
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-neon-purple font-light">
              étudiante en <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gradient tracking-tight"> INFORMATIQUE </span>
            </p>
          </div>

          <p className="text-gray-600 max-w-lg mx-auto lg:mx-0 text-sm md:text-base">
            Développeur web passionné par la création d'interfaces utilisateur modernes et performantes.
            Spécialisé en développement front-end, back-end et en solutions cloud.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-2 justify-center lg:justify-start">
            <Button
              className="relative text-white bg-neon-blue rounded-lg 
              transition-all duration-300 hover:bg-neon-purple
              border-transparent hover:border-2 hover:border-[3px] 
              hover:border-gradient-to-r hover:from-neon-pink hover:via-neon-purple hover:to-neon-blue
              w-full sm:w-auto"
            >
              <a href="#contact" className="flex items-center justify-center gap-2 p-2">
                Voir mon CV
              </a>
            </Button>

            <Button
              variant="outline"
              className="border-2 hover:bg-neon-purple bg-white text-black rounded-lg
              transition-all duration-300 hover:text-white
              w-full sm:w-auto"
            >
              <a href="#projects" className="flex items-center justify-center gap-2 p-2">
                Voir mes projets
              </a>
            </Button>
          </div>
          <SocialLinks className="pt-4 flex justify-center lg:justify-start space-x-4" variant="outline" />
        </div>
      </div>
    </section>
  );
};

export default Hero;