import React from 'react';
import { Briefcase, Calendar, Building, Code, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Stagiaire en développement web',
      company: 'Etech Madagascar',
      location: 'Antananarivo, Madagascar',
      period: 'Mai 2025 - Août 2025',
      type: 'Stage',
      description: "Contribué au développement d'applications web en utilisant React et PHP/Laravel.",
      longDescription: "Au sein d'Etech Madagascar, j'ai contribué au développement d'applications web professionnelles. J'ai travaillé sur la conception et l'implémentation de fonctionnalités côté frontend avec React et Tailwind CSS, ainsi que sur le backend avec PHP et Laravel. J'ai également participé à l'intégration d'APIs REST et à l'optimisation des performances.",
      technologies: ['React', 'PHP', 'Laravel', 'Tailwind CSS', 'MySQL'],
      achievements: [
        'Développement de 3 modules fonctionnels',
        'Optimisation des temps de chargement de 40%',
        'Mise en place d\'une documentation technique'
      ],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    },
    {
      title: 'Rédaction de contenu web',
      company: 'Noesys',
      location: 'Madagascar',
      period: '2018 - 2022',
      type: 'Freelance',
      description: "Rédaction d'articles techniques et de contenu marketing pour divers clients.",
      longDescription: "En tant que rédactrice web freelance chez Noesys, j'ai créé du contenu technique et marketing pour divers secteurs. J'ai rédigé des articles SEO optimisés, des guides techniques et des études de cas. Cette expérience m'a permis de développer une excellente capacité de synthèse et une maîtrise des techniques de rédaction web.",
      technologies: ['SEO', 'Rédaction technique', 'Content Marketing', 'WordPress'],
      achievements: [
        'Plus de 50 articles publiés',
        'Augmentation du trafic de 60% sur certains projets',
        'Création de guides techniques complets'
      ],
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    },
    {
      title: 'Stagiaire en Recherche et Développement',
      company: 'Homepharma',
      location: 'Antananarivo, Madagascar',
      period: 'Avril 2017 - Septembre 2017',
      type: 'Stage',
      description: 'Formulation et création de produits cosmétiques naturels.',
      longDescription: "Au sein du laboratoire R&D de Homepharma, j'ai participé à la formulation de produits cosmétiques naturels. J'ai réalisé des recherches sur les ingrédients naturels, développé des protocoles de test et contribué au contrôle qualité. Cette expérience m'a apporté une rigueur scientifique et une méthodologie de recherche.",
      technologies: ['Chimie', 'Cosmétologie', 'Recherche', 'Développement produit'],
      achievements: [
        'Création de 5 formulations originales',
        'Mise en place de protocoles de contrôle qualité',
        'Rédaction de fiches techniques produits'
      ],
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section id="experience" className="relative py-16 md:py-24 bg-gradient-to-b from-white to-purple-50/30">
      <div className="section-container max-w-5xl mx-auto px-4 md:px-6">
        {/* Titre */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-medium text-purple-600 tracking-widest uppercase mb-3">
            Parcours Professionnel
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Mon <span className="text-purple-600 font-medium">Expérience</span>
          </h2>
          <div className="w-16 h-0.5 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline avec cartes à retourner */}
        <div className="relative">
          {/* Ligne centrale */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-purple-600 via-purple-400 to-purple-200 -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-purple-600 via-purple-400 to-purple-200 block md:hidden"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 last:mb-0 ${
              index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%] md:pr-0'
            }`}>
              {/* Point sur la timeline */}
              <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 z-20">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center shadow-lg border-2 border-white">
                  <Code className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
              </div>

              {/* Carte à retourner avec agrandissement */}
              <div className={`ml-14 md:ml-0 ${index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'}`}>
                <div className="group w-full perspective transition-all duration-700 hover:z-30">
                  <div className="relative w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    
                    {/* FACE AVANT - Hauteur fixe réduite */}
                    <div className="relative h-[300px] md:h-[340px] bg-white rounded-xl overflow-hidden shadow-md [backface-visibility:hidden]">
                      {/* Image */}
                      <div className="h-32 md:h-36 overflow-hidden">
                        <img
                          src={exp.image}
                          alt={exp.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Contenu face avant - TEXTES AGRANDIS */}
                      <div className="p-3 md:p-4 space-y-2">
                        <div className="flex items-start justify-between">
                          <h3 className="text-base md:text-lg font-bold text-gray-800 line-clamp-1">
                            {exp.title}
                          </h3>
                          <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-full flex-shrink-0 ml-2">
                            {exp.type}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                          <Building className="w-4 h-4 text-purple-400" />
                          <span className="truncate">{exp.company}</span>
                        </div>

                        <div className="flex items-center gap-1.5 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.slice(0, 3).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 3 && (
                            <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-400">
                              +{exp.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        <p className="text-gray-600 text-sm line-clamp-2">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    {/* FACE ARRIÈRE - TEXTES AGRANDIS */}
                    <div className="absolute inset-0 rounded-xl bg-neon-blue text-white p-4 md:p-5 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto min-h-[300px] md:min-h-[340px] group-hover:min-h-[460px] md:group-hover:min-h-[500px] transition-all duration-700">
                      <div className="flex flex-col h-full">
                        <h3 className="text-lg md:text-xl font-bold mb-2">
                          {exp.title}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-sm text-purple-200 mb-3">
                          <Building className="w-4 h-4" />
                          <span className="truncate">{exp.company}</span>
                          <span className="text-purple-300">•</span>
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>

                        <p className="text-lg md:text-base text-purple-100 leading-relaxed flex-1">
                          {exp.longDescription}
                        </p>

                        {/* Réalisations */}
                        <div className="space-y-1 mb-4">
                          <h4 className="text-xs font-semibold text-purple-200 uppercase tracking-wider">
                            Réalisations clés
                          </h4>
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="text-sm flex items-start gap-2 text-purple-100">
                              <span className="text-purple-300 mt-0.5">✓</span>
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 text-xs rounded-full bg-white/20 text-white border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Lien */}
                        <div className="flex gap-2 mt-auto">
                          <a
                            href="#"
                            className="inline-flex items-center gap-1.5 text-sm bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <Briefcase size={14} />
                            <span>Détails</span>
                          </a>
                          <a
                            href="#"
                            className="inline-flex items-center gap-1.5 text-sm bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <ExternalLink size={14} />
                            <span>En savoir plus</span>
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>

      {/* CSS personnalisé */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Experience;