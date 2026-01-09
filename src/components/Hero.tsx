import React from "react";
import { Button } from "@/components/ui/button";
import SocialLinks from "./SocialLinks";
import homeProfil2 from "../../assets/homeProfil2.png";
import homeProfilMobile from "../../assets/homeProfilMobile.png";
import { Sparkles, ArrowRight, Download, Star } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen pt-16 md:pt-20 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white"
    >
      {/* ===== EFFETS DE FOND LIGHT ===== */}
      {/* Bulles flottantes légères */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-blue/10"
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
      </div>

      {/* Effets de lumière douce */}
      <div className="absolute top-0 -left-48 w-96 h-96 bg-gradient-to-br from-neon-purple/5 to-neon-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-48 w-96 h-96 bg-gradient-to-tr from-neon-pink/5 to-neon-blue/5 rounded-full blur-3xl"></div>

      {/* Points scintillants */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
          }}
        >
          <Star className="w-2 h-2 text-neon-purple/40" />
        </div>
      ))}

      {/* ===== IMAGE DESKTOP (background) - DÉPLACÉE PLUS À DROITE ===== */}
      <div className="hidden lg:block absolute inset-0 z-10">
        {/* Halo lumineux - déplacé pour correspondre */}
        <div className="absolute top-1/2 left-[28%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 rounded-full blur-3xl"></div>

        {/* Conteneur image avec effet flottant - DÉPLACÉ PLUS À DROITE */}
        <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative group">
            {/* Ombre portée colorée */}
            <div className="absolute -inset-6 bg-gradient-to-r from-neon-purple/20 via-neon-pink/20 to-neon-blue/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

            {/* Effet de verre light */}
            <div className="relative">
              {/* Cadre décoratif */}
              <div className="absolute -inset-1"></div>

              <img
                src={homeProfil2}
                className="
    h-screen
    w-auto
    object-contain
    max-w-[2000px]
    animate-float
  "
              />
            </div>

            {/* Badge décoratif */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-white to-neon-blue/20 rounded-2xl border border-white shadow-lg flex items-center justify-center backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center">
                <Sparkles className="text-white w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container px-4 sm:px-6 relative z-20">
        {/* ===== IMAGE MOBILE (en haut) ===== */}
        <div className="lg:hidden flex justify-center mb-8 relative">
          {/* Halo mobile */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 rounded-full blur-3xl"></div>

          {/* Conteneur image mobile */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-purple/15 to-neon-blue/15 rounded-2xl blur-lg"></div>
            <div className="relative bg-white/80 backdrop-blur-md border-2 border-white rounded-xl p-2 shadow-xl">
              <img
                src={homeProfilMobile}
                alt="RASOANIRINA Mialisoa Lisa"
                className="w-64 sm:w-80 md:w-96 object-contain animate-float"
              />
            </div>
          </div>
        </div>

        {/* ===== TEXTE ===== */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left lg:col-start-2">
            {/* Badge disponible */}

            <div className="space-y-3 md:space-y-4">
              <h2 className="text-base md:text-lg font-medium text-gray-600 tracking-wider uppercase">
                Bonjour, je suis
              </h2>

              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-tight text-center sm:text-left">
                <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                  RASOANIRINA
                </span>

                {/* Desktop : retour à la ligne */}
                <span className="hidden md:block">
                  <br />
                </span>

                {/* Mobile : espace */}
                <span className="inline md:hidden"> </span>

                <span className="text-gray-900">Mialisoa Lisa</span>
              </h1>

              <div className="flex flex-row sm:flex-row text-center items-center sm:items-start gap-2 mt-3">
                <p className="text-base md:text-lg text-gray-700 font-light">
                  étudiante en
                </p>

                <div className="relative">
                  <span className="font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent text-lg md:text-xl">
                    INFORMATIQUE
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full" />
                </div>
              </div>
            </div>

            {/* Description avec carte moderne */}
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg max-w-lg mx-auto lg:mx-0 group hover:shadow-xl hover:border-neon-purple/30 transition-all duration-300">
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-3 h-3 bg-neon-purple rounded-full animate-ping"></div>
              </div>
              <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
                <span className="font-semibold text-neon-purple">
                  Développeur PHP orienté API
                </span>{" "}
                passionné par la conception et le développement de services
                performants. Spécialisé en{" "}
                <span className="text-neon-blue font-medium">
                  architecture backend, intégration d’API REST
                </span>
                ,{" "}
                <span className="text-neon-purple font-medium">
                  gestion de bases de données
                </span>{" "}
                , et en solutions{" "}
                <span className="text-neon-pink font-medium">cloud</span>.
              </p>
            </div>

            {/* Boutons avec effets light */}
            <div className="flex flex-row sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="group relative overflow-hidden bg-gradient-to-r from-neon-blue to-neon-purple text-white w-full sm:w-auto px-5 py-5 md:px-8 md:py-6 rounded-xl border-0 shadow-lg hover:shadow-2xl hover:shadow-neon-blue/40 transition-all duration-300 transform hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-3 font-semibold">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Voir mon CV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Effet de brillance */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div className="absolute -inset-y-full -skew-x-12 w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine"></div>
                </div>
              </Button>

              <Button className="group relative overflow-hidden bg-gradient-to-r from-neon-blue to-neon-purple text-white w-full sm:w-auto px-5 py-5 md:px-8 md:py-6 rounded-xl border-0 shadow-lg hover:shadow-2xl hover:shadow-neon-blue/40 transition-all duration-300 transform hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-3 font-semibold">
                  Voir mes projets
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-neon-blue/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
              </Button>
            </div>

            {/* Social links avec carte */}
            <div className="pt-0">
              <div className="inline-flex flex-row sm:flex-row items-center gap-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <span className="text-sm font-semibold text-gray-700">
                  Suivez-moi
                </span>
                <div className="h-px w-8 bg-gradient-to-r from-neon-purple to-neon-blue sm:h-8 sm:w-px sm:bg-gradient-to-b"></div>
                <SocialLinks
                  className="flex gap-4"
                  variant="light"
                  iconSize={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles d'animation inline */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            transform: translateY(15px);
            opacity: 1;
          }
          100% {
            transform: translateY(15px);
            opacity: 0;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .animate-shine {
          animation: shine 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
