import React from 'react';
import { ChevronRight, Code, Database, Server, Rocket, Layout, Cpu, Smartphone } from 'lucide-react';

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
            <img src="/assets/1.png" alt="Profile" className="w-full h-auto object-cover rounded-lg shadow-md" /> {/* Ajout de styles pour mobile */}
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
              Actuellement, je mets mes compétences en <span> <strong> PHP et React </strong> </span>au service des entreprises, 
              en apportant à la fois ma rigueur scientifique et ma créativité technique.
            </p>
          </div>
        </div>

        {/* Compétences */}
        <div className="space-y-8 md:space-y-10 px-4 md:px-0"> {/* Espacement réduit et padding sur mobile */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Compétences</h2> {/* Taille réduite sur mobile */}
            <div className="relative w-32 mx-auto">
              <hr className="w-full border-t-2 border-gray-300" />
              <hr className="w-20 border-t-4 border-neon-purple absolute top-0 left-1/2 -translate-x-1/2 font-bold" />
            </div>
          </div>

          {/* Grille des compétences responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"> {/* Espacement réduit sur mobile */}
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-neon-purple transition-all duration-300 group w-full flex flex-col items-center" /* Padding réduit sur mobile */
              >
                <div className="p-2 md:p-3 rounded-md bg-gray-50 text-neon-purple group-hover:text-white group-hover:bg-neon-purple transition-colors duration-300 mb-3 md:mb-4"> {/* Taille réduite sur mobile */}
                  <skill.icon className="text-xl md:text-2xl lg:text-3xl" /> {/* Tailles d'icônes responsive */}
                </div>
                <div className="flex-1 text-center">
                  <h4 className="text-lg md:text-xl font-medium mb-1 md:mb-2">{skill.name}</h4> {/* Taille réduite sur mobile */}
                  <p className="text-gray-600 text-xs md:text-sm">{skill.description}</p> {/* Taille réduite sur mobile */}
                </div>
              </div>
            ))}
          </div>
        </div>

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

export default About;