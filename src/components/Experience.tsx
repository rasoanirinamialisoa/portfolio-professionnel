import React from 'react';
import { ChevronRight, Code, Database, Server, Rocket, Layout, Cpu, Smartphone } from 'lucide-react';
import profil from "../../assets/profil.png";
const Experience = () => {

  const experiences = [
    {
      title: 'Stagiaire en développement web',
      company: 'Etech Madagascar',
      period: 'Mai 2025 - Août 2025',
      description: 'Contribué au développement d\'applications web en utilisant React et PHP/Laravel.',
    },
    {
      title: 'Redaction de contenu web',
      company: 'Noesys',
      period: '2018 - 2022',
      description: 'Rédaction d\'articles techniques et de contenu marketing pour divers clients.',
    },
    {
      title: 'Stagiaire en Recherche et Développement',
      company: 'Homepharma',
      period: 'Avril 2017 - Septembre 2017',
      description: 'Formulation et création des produits cosmétiques naturels.',
    },
  ];

  return (
    <section id="about" className="relative py-16 md:py-24"> {/* Ajustement du padding vertical pour mobile */}
      <div className="section-container space-y-12 md:space-y-16"> {/* Espacement réduit sur mobile */}
        {/* Expérience professionnelle */}
        <div className="space-y-8 md:space-y-10 px-4 md:px-0"> {/* Espacement réduit et padding sur mobile */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Expérience professionnelle</h2> {/* Taille réduite sur mobile */}
            <div className="relative w-32 mx-auto">
              <hr className="w-full border-t-2 border-gray-300" />
              <hr className="w-20 border-t-4 border-neon-purple absolute top-0 left-1/2 -translate-x-1/2 font-bold" />
            </div>
          </div>
          
          {/* Timeline des expériences */}
          <div className="relative">
            {/* Ligne de timeline - position ajustée pour mobile */}
            <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-neon-purple via-neon-pink to-neon-blue md:-translate-x-1/2"></div>
            
            {experiences.map((experience, index) => (
              <div key={index} className="relative pb-12 md:pb-16 last:pb-0"> {/* Espacement réduit sur mobile */}
                <div className={`flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className="ml-14 md:ml-0 w-[calc(100%-3.5rem)] md:w-[45%]"> {/* Marge et largeur ajustées pour mobile */}
                    {/* Point sur la timeline */}
                    <div className="absolute left-0 md:left-1/2 h-8 w-8 md:h-10 md:w-10 md:-ml-5 flex items-center justify-center rounded-full border-2 border-white bg-neon-purple shadow-neon-purple z-10"> {/* Taille réduite sur mobile */}
                      <Code size={16} className="text-white md:size-5" /> {/* Taille d'icône réduite sur mobile */}
                    </div>
                    
                    {/* Carte d'expérience */}
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-neon-purple transition-all duration-300 h-full"> {/* Padding réduit sur mobile */}
                      <div className="font-semibold text-neon-purple text-xs md:text-sm">{experience.period}</div> {/* Taille réduite sur mobile */}
                      <div className="font-bold text-lg md:text-xl mb-1">{experience.title}</div> {/* Taille réduite sur mobile */}
                      <div className="font-medium text-gray-500 text-xs md:text-sm mb-2">{experience.company}</div> {/* Taille réduite sur mobile */}
                      <p className="text-gray-600 text-xs md:text-sm">{experience.description}</p> {/* Taille réduite sur mobile */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;