import React, { useState } from 'react';
import { Briefcase, Calendar, Building, Code, CheckCircle, Award, Users, X, Users2, Target, Search, Clock, Globe, Lightbulb } from 'lucide-react';

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
      description: "Contribué au développement d'applications web en utilisant React et PHP/Laravel et Symfony.",
      longDescription: "Au sein d'Etech Madagascar, j'ai contribué au développement d'applications web professionnelles. J'ai travaillé sur la conception et l'implémentation de fonctionnalités côté frontend avec React et Tailwind CSS, ainsi que sur le backend avec PHP et Laravel. J'ai également participé à l'intégration d'APIs REST et à l'optimisation des performances.",
      technologies: ['React', 'PHP', 'Laravel', 'Tailwind CSS', 'PostgreSQL', 'Git', 'Docker'],
      achievements: [
        'Création et intégration de 8 APIs RESTful avec Laravel',
        'Développement de 3 modules fonctionnels complets',
        'Mise en place du pipeline CI/CD avec GitHub Actions',
        'Déploiement automatisé sur serveur de production',
        'Optimisation des temps de chargement de 40%',
        'Rédaction d\'une documentation technique complète (Swagger/OpenAPI)',
        'Configuration d\'un environnement de staging et production'
      ],
      requis: [
        'Maitrise de React et ses hooks',
        'Connaissance de Laravel et Eloquent ORM',
        'Base de données PostgreSQL',
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
      // Compétences transversales pour le dev web
      softSkills: [
        'Travail d\'équipe et collaboration avec les développeurs',
        'Respect des délais de livraison (sprints de 2 semaines)',
        'Veille technologique et auto-formation continue',
        'Communication technique avec les stakeholders',
        'Résolution de problèmes complexes en équipe'
      ]
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
      technologies: ['SEO', 'Rédaction technique', 'Content Marketing', 'Analytics'],
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
      // Compétences transversales pour la rédaction
      softSkills: [
        'Respect strict des délais de publication',
        'Recherche approfondie sur internet et documentation',
        'Culture générale et connaissance des tendances',
        'Adaptation du ton et du style selon le public cible',
        'Gestion de projets éditoriaux et autonomie',
        'Veille informationnelle et curation de contenu'
      ]
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
      // Compétences transversales pour la R&D
      softSkills: [
        'Travail d\'équipe en laboratoire et collaboration interdisciplinaire',
        'Recherche documentaire et analyse de données scientifiques',
        'Rigueur et méthodologie scientifique expérimentale',
        'Capacité d\'adaptation face aux résultats expérimentaux',
        'Curiosité intellectuelle et veille scientifique',
        'Relation avec les fournisseurs et gestion des approvisionnements',
        'Rédaction de rapports techniques et fiches produits'
      ]
    },
  ];

  const Modal = ({ exp, onClose }) => {
    if (!exp) return null;
    
    return (
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
        <div className="bg-neon-blue rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl animate-scaleIn">
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

            {/* Section Compétences Transversales - Soft Skills */}
            {exp.softSkills && (
              <div>
                <h4 className="text-sm font-semibold text-purple-200 uppercase tracking-wider flex items-center gap-2 mb-2">
                  <Users2 className="w-4 h-4" />
                  Compétences Transversales Acquises
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {exp.softSkills.map((skill, i) => (
                    <div key={i} className="flex items-start gap-2 bg-white/10 rounded-lg p-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-purple-100">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
          <h2 className="text-2xl md:text-5xl font-light text-gray-900">
            Mon <span className="text-neon-blue font-medium">Expérience</span>
          </h2>
          <div className="w-16 h-0.5 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline avec cartes cliquables pour la modale */}
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
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedExp(exp)}>
                  <Code className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
              </div>

              {/* Carte principale - Click pour ouvrir la modale */}
              <div className={`ml-14 md:ml-0 relative ${index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'}`}>
                <div 
                  className="group w-full transition-all duration-300 cursor-pointer hover:shadow-xl"
                  onClick={() => setSelectedExp(exp)}
                >
                  <div className="relative w-full bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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

                      {/* Indicateur de clic pour la modale */}
                      <div className="text-center pt-1">
                        <span className="text-xs text-purple-400 group-hover:text-purple-600 transition-colors">
                          Cliquez pour voir tous les détails →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARTE STATISTIQUES AVEC FLÈCHE - Version améliorée */}
              <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 w-[35%] ${
                index % 2 === 0 ? 'right-4' : 'left-4'
              } z-10`}>
                <div className="relative w-full">
                  {/* Flèche avec meilleur positionnement */}
                  <div className={`absolute top-1/2 -translate-y-1/2 ${
                    index % 2 === 0 
                      ? '-left-8 md:-left-12' 
                      : '-right-8 md:-right-12'
                  } text-purple-500 text-6xl md:text-8xl font-bold animate-pulse`}
                  style={{ 
                    textShadow: '0 0 20px rgba(147, 51, 234, 0.3)',
                    zIndex: 20 
                  }}>
                    {index % 2 === 0 ? '←' : '→'}
                  </div>
                  
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-2 border-purple-200 hover:border-purple-400 transition-colors">
                    <h3 className="text-base font-bold text-purple-600 mb-3 text-center">
                      📊 Points Clés
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {exp.stats.map((stat, i) => (
                        <div key={i} className="text-center bg-purple-50 rounded-lg p-2 hover:bg-purple-100 transition-colors">
                          <h4 className="text-lg md:text-xl font-bold text-purple-600">
                            {stat.value}
                          </h4>
                          <p className="text-[10px] text-gray-500">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-[14px] text-gray-600 text-center leading-relaxed italic">
                      "{exp.summary}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* MODAL - Animations ultra-rapides */}
      <Modal exp={selectedExp} onClose={() => setSelectedExp(null)} />

      <style jsx>{`
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
          from { transform: scale(0.98); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.08s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.08s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Experience;