import React from 'react';
import { Button } from '@/components/ui/button';
import SocialLinks from './SocialLinks';
import homeProfil2 from '../../assets/homeProfil2.png';
import homeProfilMobile from '../../assets/homeProfilMobile.png';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-16 md:pt-20 relative overflow-hidden"
    >
      {/* ===== IMAGE DESKTOP (background) ===== */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <img
          src={homeProfil2}
          alt="RASOANIRINA Mialisoa Lisa"
          className="w-full h-full object-cover object-center animate-float"
        />
      </div>

      <div className="section-container px-4 sm:px-6 relative z-10">

        {/* ===== IMAGE MOBILE (en haut) ===== */}
        <div className="lg:hidden flex justify-center mb-8">
          <img
            src={homeProfilMobile}
            alt="RASOANIRINA Mialisoa Lisa"
            className="w-100 sm:w-100 md:w-100 object-contain animate-float"
          />
        </div>

        {/* ===== TEXTE ===== */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left lg:col-start-2">
            <div className="space-y-2 md:space-y-3">
              <h2 className="text-lg md:text-xl font-medium text-neon-purple">
                Bonjour, je suis
              </h2>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neon-blue tracking-tight">
                RASOANIRINA Mialisoa Lisa
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl font-light text-neon-purple">
                étudiante en{' '}
                <span className="font-bold text-gradient">
                  INFORMATIQUE
                </span>
              </p>
            </div>

            <p className="text-gray-600 max-w-lg mx-auto lg:mx-0 text-sm md:text-base">
              Développeur web passionné par la création d'interfaces utilisateur modernes et performantes.
              Spécialisé en développement front-end, back-end et en solutions cloud.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-neon-blue text-white w-full sm:w-auto">
                <a href="#contact" className="px-4 py-2 block">
                  Voir mon CV
                </a>
              </Button>

              <Button variant="outline" className="w-full sm:w-auto">
                <a href="#projects" className="px-4 py-2 block">
                  Voir mes projets
                </a>
              </Button>
            </div>

            <SocialLinks
              className="pt-4 flex justify-center lg:justify-start space-x-4"
              variant="outline"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
