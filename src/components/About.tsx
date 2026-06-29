import React from 'react';
import { Calendar, MapPin, Mail, Phone, User, Briefcase } from 'lucide-react';

const About = () => {
  const profileAbout = import.meta.env.VITE_ProfileAbout;

  return (
    <section id="about" className="relative min-h-screen pt-16 md:pt-20 py-20 md:py-28 bg-gradient-to-b from-white to-purple-50/30">
      <div className="section-container max-w-6xl mx-auto px-4 md:px-6">
        {/* En-tête minimaliste */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-medium text-purple-600 tracking-widest uppercase mb-3">
            A propos de moi
          </span>
          <h2 className="text-2xl md:text-5xl font-light text-gray-900">
            Qui suis-je <span className="text-neon-blue font-medium">?</span>
          </h2>
          <div className="w-16 h-0.5 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Colonne gauche - Image + Nom + Titre */}
          <div className="lg:col-span-2 flex flex-col items-center">
            {/* Image agrandie */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl blur-xl opacity-20" />
              <div className="relative bg-white p-1 rounded-2xl shadow-xl">
                <img 
                  src={profileAbout} 
                  alt="Mialisoa Lisa RASOANIRINA" 
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-xl"
                />
              </div>
              {/* Badge discret */}
              <div className="absolute -bottom-3 -right-3 bg-neon-blue text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-lg">
                Fullstack
              </div>
            </div>

            {/* Nom et titre sous l'image uniquement */}
            <div className="text-center mt-6">
              <h3 className="text-2xl md:text-3xl font-light text-gray-800">
                Mialisoa Lisa <span className="text-neon-blue font-medium">RASOANIRINA</span>
              </h3>
              <p className="text-gray-500 text-sm tracking-wide mt-1">
                Développeuse Fullstack · Passionnée par l'innovation
              </p>
            </div>
          </div>

          {/* Colonne droite - Infos personnelles + Description */}
          <div className="lg:col-span-3 space-y-6">
            {/* Infos personnelles - design minimaliste */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start space-x-3 p-3 bg-white/60 rounded-xl hover:bg-white transition-colors duration-200">
                <User className="text-purple-700 w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Nom</p>
                  <p className="text-sm lg:text-base text-gray-700 font-medium">RASOANIRINA</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-white/60 rounded-xl hover:bg-white transition-colors duration-200">
                <User className="text-purple-700 w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Prénom</p>
                  <p className="text-sm lg:text-base text-gray-700 font-medium">Mialisoa Lisa</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-white/60 rounded-xl hover:bg-white transition-colors duration-200">
                <Calendar className="text-purple-700 w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Date de naissance</p>
                  <p className="text-sm lg:text-base text-gray-700 font-medium">08 Mai 1995</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-white/60 rounded-xl hover:bg-white transition-colors duration-200">
                <MapPin className="text-purple-700 w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Adresse</p>
                  <p className="text-sm lg:text-base text-gray-700 font-medium">Lot 198 NJO Manandriana</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-white/60 rounded-xl hover:bg-white transition-colors duration-200">
                <Mail className="text-purple-700 w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Email</p>
                  <p className="text-sm lg:text-base text-gray-700 font-medium">rasoanirinamialisoa@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-white/60 rounded-xl hover:bg-white transition-colors duration-200">
                <Phone className="text-purple-700 w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Téléphone</p>
                  <p className="text-sm lg:text-basetext-gray-700 font-medium">+261 34 81 334 58</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white/60 rounded-xl p-5 border border-purple-100/50">
              <div className="flex items-center space-x-2 mb-3">
                <Briefcase className="text-purple-700 w-4 h-4" />
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Parcours</span>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Originaire de Madagascar, j'ai effectué une reconversion dans l'informatique après avoir obtenu un 
                <span className="text-purple-700 font-medium"> Master 2 en Pharmacologie</span>. 
                Au fil du temps, le développement web et la programmation sont devenus une véritable passion. 
                Je cherche toujours à trouver un équilibre entre ces deux domaines qui me tiennent à cœur. 
                Actuellement, je souhaite mettre mes compétences en 
                <span className="text-purple-700 font-semibold"> PHP</span> et 
                <span className="text-purple-700 font-semibold"> React</span> au service des entreprises, 
                en apportant à la fois ma rigueur scientifique et ma créativité technique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;