import React from 'react';
import { Code, Database, Server, Rocket, Layout, Cpu, Smartphone } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Frontend', icon: Layout, description: 'React, Next, HTML/CSS' },
    { name: 'Backend', icon: Server, description: 'Node.js, Express, SpringBoot, Symfony, Laravel' },
    { name: 'Database', icon: Database, description: 'PostgreSQL, MySQL' },
    { name: 'DevOps', icon: Rocket, description: 'Docker, CI/CD' },
    { name: 'Architecture', icon: Cpu, description: 'RESTful APIs' },
    { name: 'Mobile', icon: Smartphone, description: 'React Native' },
  ];

  return (
    <section id="about" className="relative py-16 md:py-24"> {/* Ajustement du padding vertical pour mobile */}
      <div className="section-container space-y-12 md:space-y-16"> {/* Espacement réduit sur mobile */}
        <div className="text-center space-y-4 max-w-3xl mx-auto px-4"> {/* Ajout de padding horizontal */}
          <h2 className="text-3xl md:text-4xl font-bold">Compétences</h2> {/* Taille de texte réduite sur mobile */}
          <div className="relative w-32 mx-auto">
            <hr className="w-full border-t-2 border-gray-300" />
            <hr className="w-20 border-t-4 border-neon-purple absolute top-0 left-1/2 -translate-x-1/2 font-bold" />
          </div>
        </div>

      {/* Grille des compétences */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-neon-purple transition-all duration-300 group w-full flex flex-col items-center"
          >
            <div className="p-2 md:p-3 rounded-md bg-gray-50 text-neon-purple group-hover:text-white group-hover:bg-neon-purple transition-colors duration-300 mb-3 md:mb-4">
              <skill.icon className="text-xl md:text-2xl lg:text-3xl" />
            </div>
            <div className="flex-1 text-center">
              <h4 className="text-lg md:text-2xl font-medium mb-1 md:mb-2">{skill.name}</h4>
              <p className="text-gray-600 text-xl md:text-xl">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Skills;