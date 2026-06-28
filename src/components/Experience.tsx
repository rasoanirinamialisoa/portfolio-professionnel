import React, { useState } from 'react';
import { Briefcase, Calendar, Building, Code, CheckCircle, Award, Users, X } from 'lucide-react';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      id: 1,
      title: 'Stagiaire en développement web',
      company: 'Etech Madagascar',
      location: 'Antananarivo, Madagascar',
      period: 'Mai 2025 - Août 2025',
      type: 'Stage',
      description: "Contribué au développement d'applications web en utilisant React et PHP/Laravel.",
      longDescription: "Au sein d'Etech Madagascar, j'ai contribué au développement d'applications web professionnelles. J'ai travaillé sur la conception et l'implémentation de fonctionnalités côté frontend avec React et Tailwind CSS, ainsi que sur le backend avec PHP et Laravel. J'ai également participé à l'intégration d'APIs REST et à l'optimisation des performances.",
      technologies: ['React', 'PHP', 'Laravel', 'Tailwind CSS', 'MySQL', 'Git', 'Docker'],
      achievements: [
        'Développement de 3 modules fonctionnels',
        'Optimisation des temps de chargement de 40%',
        'Mise en place d\'une documentation technique',
        'Intégration de 5 APIs REST'
      ],
      requis: [
        'Maitrise de React et ses hooks',
        'Connaissance de Laravel et Eloquent ORM',
        'Base de données MySQL',
        'Git et gestion de versions'
      ],
      stats: [
        { value: '3', label: 'Modules créés' },
        { value: '60%', label: 'Performance gagnée' },
        { value: '5+', label: 'Technologies' },
        { value: '100%', label: 'Implication' }
      ],
      summary: "Développement d'applications web modernes avec React, Laravel et intégration d'API REST.",
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Rédaction de contenu web',
      company: 'Noesys',
      location: 'Madagascar',
      period: '2018 - 2022',
      type: 'Freelance',
      description: "Rédaction d'articles techniques et de contenu marketing pour divers clients.",
      longDescription: "En tant que rédactrice web freelance chez Noesys, j'ai créé du contenu technique et marketing pour divers secteurs. J'ai rédigé des articles SEO optimisés, des guides techniques et des études de cas. Cette expérience m'a permis de développer une excellente capacité de synthèse et une maîtrise des techniques de rédaction web.",
      technologies: ['SEO', 'Rédaction technique', 'Content Marketing', 'WordPress', 'Analytics', 'SEMrush'],
      achievements: [
        'Plus de 50 articles publiés',
        'Augmentation du trafic de 60% sur certains projets',
        'Création de guides techniques complets',
        'Optimisation SEO de 30+ pages'
      ],
      requis: [
        'Maîtrise du SEO et des outils d\'analyse',
        'Excellentes capacités rédactionnelles',
        'Connaissance de WordPress',
        'Gestion de projets éditoriaux'
      ],
      stats: [
        { value: '50+', label: 'Articles publiés' },
        { value: '60%', label: 'Trafic augmenté' },
        { value: 'SEO', label: 'Optimisation' },
        { value: '4 ans', label: "d'expérience" }
      ],
      summary: "Création de contenus optimisés SEO et rédaction technique pour divers clients.",
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Stagiaire en Recherche et Développement',
      company: 'Homepharma',
      location: 'Antananarivo, Madagascar',
      period: 'Avril 2017 - Septembre 2017',
      type: 'Stage',
      description: 'Formulation et création de produits cosmétiques naturels.',
      longDescription: "Au sein du laboratoire R&D de Homepharma, j'ai participé à la formulation de produits cosmétiques naturels. J'ai réalisé des recherches sur les ingrédients naturels, développé des protocoles de test et contribué au contrôle qualité. Cette expérience m'a apporté une rigueur scientifique et une méthodologie de recherche.",
      technologies: ['Chimie', 'Cosmétologie', 'Recherche', 'Développement produit', 'Contrôle qualité', 'Formulation'],
      achievements: [
        'Création de 5 formulations originales',
        'Mise en place de protocoles de contrôle qualité',
        'Rédaction de fiches techniques produits',
        'Validation de 15 matières premières'
      ],
      requis: [
        'Connaissances en chimie organique',
        'Maîtrise des techniques de formulation',
        'Rigueur scientifique',
        'Respect des normes qualité'
      ],
      stats: [
        { value: '5', label: 'Formulations créées' },
        { value: 'R&D', label: 'Recherche' },
        { value: 'Qualité', label: 'Contrôle' },
        { value: 'Tests', label: 'Validés' }
      ],
      summary: "Recherche et formulation de produits cosmétiques naturels en laboratoire R&D.",
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&h=300&fit=crop',
    },
  ];

  const Modal = ({ exp, onClose }) => {
    if (!exp) return null;
    
    return (
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
        <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl animate-scaleIn">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {exp.title}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-sm text-purple-200 mt-1">
                <Building className="w-4 h-4" />
                <span>{exp.company}</span>
                <span className="text-purple-300">•</span>
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="space-y-4 text-white">
            <p className="text-base md:text-lg text-purple-100 leading-relaxed">
              {exp.longDescription}
            </p>

            <div>
              <h4 className="text-sm font-semibold text-purple-200 uppercase tracking-wider flex items-center gap-2 mb-2">
                <Code className="w-4 h-4" />
                Stack Technique
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-white/20 text-white border border-white/10 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-purple-200 uppercase tracking-wider flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4" />
                  Réalisations
                </h4>
                <ul className="space-y-1.5">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm flex items-start gap-2 text-purple-100">
                      <CheckCircle className="w-4 h-4 text-purple-300 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-purple-200 uppercase tracking-wider flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4" />
                  Compétences Requises
                </h4>
                <ul className="space-y-1.5">
                  {exp.requis.map((req, i) => (
                    <li key={i} className="text-sm flex items-start gap-2 text-purple-100">
                      <span className="text-purple-300">▹</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2 border-t border-white/10">
              {exp.stats.map((stat, i) => (
                <div key={i} className="text-center bg-white/10 rounded-xl p-3">
                  <h4 className="text-xl md:text-2xl font-bold text-white">
                    {stat.value}
                  </h4>
                  <p className="text-xs text-purple-200">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm text-purple-200 text-center italic pt-2">
              "{exp.summary}"
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="relative py-16 md:py-24 bg-gradient-to-b from-white to-purple-50/30">
      <div className="section-container max-w-6xl mx-auto px-4 md:px-6">
        {/* Titre */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-medium text-purple-600 tracking-widest uppercase mb-3">
            Parcours Professionnel
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Mon <span className="text-neon-blue font-medium">Expérience</span>
          </h2>
          <div className="w-16 h-0.5 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline avec cartes à retourner */}
        <div className="relative z-10">
          {/* Ligne centrale */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-purple-600 via-purple-400 to-purple-200 -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-purple-600 via-purple-400 to-purple-200 block md:hidden"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 last:mb-0 ${
              index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%] md:pr-0'
            }`}>
              {/* Point sur la timeline */}
              <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 z-20">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center shadow-lg border-2 border-white cursor-pointer" onClick={() => setSelectedExp(exp)}>
                  <Code className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
              </div>

              {/* Carte principale - CLICK pour ouvrir en grand */}
              <div className={`ml-14 md:ml-0 relative ${index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'}`}>
                <div 
                  className="group w-full perspective transition-all duration-700 hover:z-50 cursor-pointer"
                  onClick={() => setSelectedExp(exp)}
                >
                  <div className="relative w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                   
                    {/* FACE AVANT */}
                    <div className="relative h-[300px] md:h-[380px] bg-white rounded-xl shadow-md [backface-visibility:hidden] overflow-hidden">
                      <div className="h-32 md:h-36 overflow-hidden">
                        <img
                          src={exp.image}
                          alt={exp.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      <div className="p-3 md:p-5 space-y-2">
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
                          {exp.technologies.slice(0, 4).map((tech, i) => (
                            <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 4 && (
                            <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-400">
                              +{exp.technologies.length - 4}
                            </span>
                          )}
                        </div>

                        <p className="text-gray-600 text-sm line-clamp-2">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    {/* FACE ARRIÈRE - Simple, sans scale */}
                    <div className="absolute inset-0 rounded-xl bg-neon-blue text-white p-4 md:p-7 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto min-h-[300px] md:min-h-[380px] transition-all duration-700 shadow-2xl z-[100]">
                      <div className="flex flex-col h-full gap-3">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold">
                            {exp.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-purple-200 mt-1">
                            <Building className="w-4 h-4" />
                            <span>{exp.company}</span>
                            <span className="text-purple-300">•</span>
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        <p className="text-sm md:text-base text-purple-100 leading-relaxed flex-1">
                          {exp.longDescription}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.slice(0, 5).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 text-xs rounded-full bg-white/20 text-white border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 5 && (
                            <span className="px-2 py-0.5 text-xs rounded-full bg-white/20 text-white">
                              +{exp.technologies.length - 5}
                            </span>
                          )}
                        </div>

                        <div className="text-center">
                          <span className="text-sm text-purple-200 animate-pulse">
                           Cliquez pour voir tous les détails
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* CARTE STATISTIQUES AVEC FLÈCHE */}
              <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 w-[35%] ${
                index % 2 === 0 ? 'right-2' : 'left-2'
              } z-10`}>
                <div className="relative w-full">
                  <div className={`absolute top-1/2 ${
                    index % 2 === 0 ? '-left-8' : '-right-8'
                  } -translate-y-1/2 text-purple-500 text-5xl font-bold animate-pulse`}>
                    {index % 2 === 0 ? '←' : '→'}
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-2 border-purple-200">
                    <h3 className="text-base font-bold text-purple-600 mb-3 text-center">
                      📊 Points Clés
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {exp.stats.map((stat, i) => (
                        <div key={i} className="text-center bg-purple-50 rounded-lg p-2">
                          <h4 className="text-lg md:text-xl font-bold text-purple-600">
                            {stat.value}
                          </h4>
                          <p className="text-[10px] text-gray-500">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-[19px] text-gray-600 text-center leading-relaxed italic">
                      "{exp.summary}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* MODAL */}
      <Modal exp={selectedExp} onClose={() => setSelectedExp(null)} />

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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        .group-hover\\:min-h-\\[550px\\]::-webkit-scrollbar,
        .group-hover\\:min-h-\\[520px\\]::-webkit-scrollbar {
          width: 4px;
        }
        .group-hover\\:min-h-\\[550px\\]::-webkit-scrollbar-track,
        .group-hover\\:min-h-\\[520px\\]::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
        }
        .group-hover\\:min-h-\\[550px\\]::-webkit-scrollbar-thumb,
        .group-hover\\:min-h-\\[520px\\]::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.3);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Experience;