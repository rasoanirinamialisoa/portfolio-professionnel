import React from 'react';
import { Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Stagiaire en développement web',
      company: 'Etech Madagascar',
      period: 'Mai 2025 - Août 2025',
      description:
        "Contribué au développement d'applications web en utilisant React et PHP/Laravel.",
    },
    {
      title: 'Rédaction de contenu web',
      company: 'Noesys',
      period: '2018 - 2022',
      description:
        "Rédaction d'articles techniques et de contenu marketing pour divers clients.",
    },
    {
      title: 'Stagiaire en Recherche et Développement',
      company: 'Homepharma',
      period: 'Avril 2017 - Septembre 2017',
      description:
        'Formulation et création de produits cosmétiques naturels.',
    },
  ];

  return (
    <section id="experience" className="relative py-16 md:py-24">
      <div className="section-container space-y-16 px-4 md:px-0">
        {/* Titre */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Expérience professionnelle
          </h2>
          <div className="relative w-32 mx-auto">
            <hr className="w-full border-t-2 border-gray-300" />
            <hr className="w-20 border-t-4 border-neon-purple absolute top-0 left-1/2 -translate-x-1/2" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-neon-purple via-neon-pink to-neon-blue md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pb-14 last:pb-0">
              <div
                className={`flex ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                <div className="ml-14 md:ml-0 w-[calc(100%-3.5rem)] md:w-[45%]">
                  {/* Point */}
                  <div className="absolute left-0 md:left-1/2 h-8 w-8 md:h-10 md:w-10 md:-ml-5 flex items-center justify-center rounded-full bg-neon-purple border-2 border-white shadow-neon-purple z-10">
                    <Code size={16} className="text-white" />
                  </div>

                  {/* Card */}
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-neon-purple transition-all">
                    <span className="text-xs text-neon-purple font-semibold">
                      {exp.period}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold">
                      {exp.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 mb-2">
                      {exp.company}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SCROLL INDICATOR FIXE */}
      <div className="fixed bottom-8 right-8 hidden lg:flex z-50">
        <div className="flex flex-col items-center gap-3 text-gray-500">
          <span className="text-xs tracking-widest font-medium">SCROLL</span>
          <div className="relative w-6 h-10 rounded-full border-2 border-gray-300 overflow-hidden">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
