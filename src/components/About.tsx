import React from 'react';
import { ChevronRight, Code, Database, Server, Rocket, Layout, Cpu, Smartphone } from 'lucide-react';
import profil from "../../assets/profil.png";
const About = () => {
  const skills = [
    { name: 'Frontend', icon: Layout, description: 'React, Next, HTML/CSS' },
    { name: 'Backend', icon: Server, description: 'Node.js, Express, SpringBoot, Symfony, Laravel' },
    { name: 'Database', icon: Database, description: 'PostgreSQL, MySQL' },
    { name: 'DevOps', icon: Rocket, description: 'Docker, CI/CD' },
    { name: 'Architecture', icon: Cpu, description: 'RESTful APIs' },
    { name: 'Mobile', icon: Smartphone, description: 'React Native' },
  ];

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
        <div className="text-center space-y-4 max-w-3xl mx-auto px-4"> {/* Ajout de padding horizontal */}
          <h2 className="text-3xl md:text-4xl font-bold">À Propos</h2> {/* Taille de texte réduite sur mobile */}
          <div className="relative w-32 mx-auto">
            <hr className="w-full border-t-2 border-gray-300" />
            <hr className="w-20 border-t-4 border-neon-purple absolute top-0 left-1/2 -translate-x-1/2 font-bold" />
          </div>
        </div>

        {/* Grille responsive pour l'image et les informations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:grid-cols-1 xl:grid-cols-3 md:gap-12 items-center px-4 md:px-0"> {/* Ajout de padding et réduction d'espacement */}
          {/* Image centrée sur mobile */}
          <div className="w-full max-w-xs mx-auto md:max-w-none md:mx-0"> {/* Centrage et taille maximale sur mobile */}
            <img src={profil} alt="Profile" className="w-full h-auto object-cover rounded-lg shadow-md" /> {/* Ajout de styles pour mobile */}
          </div>

          {/* Informations (pleine largeur sur mobile, 2/3 sur desktop) */}
          <div className="md:col-span-2 space-y-4 md:space-y-6"> {/* Espacement réduit sur mobile */}
            <h2 className="text-xl md:text-2xl text-gray-600 font-bold text-center md:text-left">Développeur Fullstack</h2> {/* Centrage sur mobile */}
            
            {/* Grille responsive pour les informations personnelles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-gray-700 text-sm md:text-base"> {/* Taille texte réduite sur mobile */}
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="text-purple-600 mr-2 flex-shrink-0" size={18} /> {/* Taille d'icône fixe */}
                  <span className='font-bold'>Nom:</span>&nbsp;RASOANIRINA
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-purple-600 mr-2 flex-shrink-0" size={18} />
                  <span className='font-bold'>Prénom:</span>&nbsp;Mialisoa Lisa
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-purple-600 mr-2 flex-shrink-0" size={18} />
                  <span className='font-bold'>Date de naissance:</span>&nbsp;08 Mai 1995
                </li>
              </ul>
              
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="text-purple-600 mr-2 flex-shrink-0" size={18} />
                  <span className='font-bold'>Adresse:</span>&nbsp;Lot 198 NJO Manandriana
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-purple-600 mr-2 flex-shrink-0" size={18} />
                  <span className='font-bold'>Email:</span>&nbsp;hei.lisa.30@gmail.com
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-purple-600 mr-2 flex-shrink-0" size={18} />
                  <span className='font-bold'>Téléphone:</span>&nbsp;+261 34 81 334 58
                </li>
              </ul>
            </div>
            
            {/* Texte de description avec taille responsive */}
            <p className="text-gray-600 text-base md:text-lg mt-2 md:mt-4 text-justify md:text-left"> {/* Justifié sur mobile */}
              Originaire de Madagascar, j'ai effectué une reconversion dans l'informatique après avoir obtenu un Master 2 en Pharmacologie. 
              Au fil du temps, le développement web et la programmation sont devenus une véritable passion. 
              Je cherche toujours à trouver un équilibre entre ces deux domaines qui me tiennent à cœur. 
              Actuellement, je souhaite mettre mes compétences en <span> <strong> PHP et React </strong> </span>au service des entreprises, 
              en apportant à la fois ma rigueur scientifique et ma créativité technique.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;