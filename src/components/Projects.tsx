import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, X, Code, Award, Users, Eye, ChevronRight, Hourglass } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  // ===== État =====
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  // ===== Variables d'environnement =====
  const env = {
    projectNatecolo: import.meta.env.VITE_ProjectNatEcolo,
    projectFacebak: import.meta.env.VITE_ProjectFacebak,
    projectAkoryHotel: import.meta.env.VITE_ProjectAkoryHotel,
    projectBlogArticle: import.meta.env.VITE_ProjectBlogArticle,
    projectMusicApp: import.meta.env.VITE_ProjectMusicApp,
    projectPostnova: import.meta.env.VITE_ProjectPostNovaAi,
  };

  // ===== Données des projets =====
  const projects = [
    {
      id: 1,
      title: "Boutique Écolo Natecolo",
      category: "web",
      tags: ["HTML", "CSS", "Site statique", "Écologie"],
      image: env.projectNatecolo,
      description:
        "Premier site web développé en HTML et CSS pur.",
      longDescription:
        "Natecolo est mon premier projet web réalisé dans le cadre de mon apprentissage du développement front-end. L'objectif était de concevoir un site vitrine présentant des produits écologiques tout en découvrant les bases du HTML5 et du CSS3. Ce projet m'a permis de comprendre la structuration des pages web, la création d'interfaces responsives ainsi que l'organisation du contenu sur plusieurs pages.",
      features: [
        "Design responsive adapté aux mobiles et ordinateurs",
        "Catalogue de produits écologiques",
        "Navigation multi-pages",
        "Formulaire de contact",
        "Utilisation de Flexbox",
        "Utilisation de CSS Grid"
      ],
      githubUrl: "https://github.com/rasoanirinamialisoa/rasoanirinamialisoa",
      demoUrl: "https://natecolo.netlify.app/",
      hasDemo: true, // Indique que le projet a une démo
    },
    {
      id: 2,
      title: "Facebak - Réseau Social",
      category: "web",
      tags: ["React", "Hooks", "JSX", "Components"],
      image: env.projectFacebak,
      description: "Application développée pour apprendre React.",
      longDescription: "Facebak est mon premier projet réalisé avec React. L'objectif était de reproduire les fonctionnalités principales d'un réseau social afin de comprendre l'architecture des composants, la gestion d'état et le fonctionnement des hooks React. Ce projet m'a permis de découvrir la logique de développement moderne basée sur les composants réutilisables.",
      features: [
        "Architecture basée sur les composants",
        "Utilisation de useState",
        "Utilisation de useEffect",
        "Gestion des événements utilisateur",
        "Rendu dynamique avec JSX",
        "Communication entre composants via les props"
      ],
      githubUrl: "https://github.com/rasoanirinamialisoa/facebak",
      demoUrl: null,
      hasDemo: false, // Pas de démo disponible
    },
    {
      id: 3,
      title: "AKORY-HOTEL - Gestion d'Hôtel",
      category: "web",
      tags: ["Node.js", "Express", "PostgreSQL", "HTML", "CSS"],
      image: env.projectAkoryHotel,
      description: "Application de gestion hôtelière avec base de données.",
      longDescription: "AKORY-HOTEL est une application de gestion permettant d'administrer les chambres, les clients et les réservations d'un hôtel. Ce projet représente ma première expérience avec les bases de données relationnelles et le développement back-end. J'ai pu apprendre à créer des opérations CRUD complètes et à connecter une application à PostgreSQL.",
      features: [
        "Gestion des réservations",
        "Gestion des chambres",
        "Gestion des clients",
        "CRUD complet",
        "Connexion PostgreSQL",
        "API Node.js / Express"
      ],
      githubUrl: "https://github.com/rasoanirinamialisoa/Gestion_Hotel",
      demoUrl: null,
      hasDemo: false,
    },
    {
      id: 4,
      title: "Blog Article",
      category: "web",
      tags: ["Symfony", "PHP", "Bootstrap", "PostgreSQL"],
      image: env.projectBlogArticle,
      description: "Plateforme de publication et gestion d'articles.",
      longDescription: "Projet réalisé durant ma formation PHP/Symfony. L'application permet de créer, modifier, consulter et supprimer des articles. Ce projet m'a permis de comprendre le fonctionnement du framework Symfony, l'architecture MVC, la gestion des routes, les contrôleurs ainsi que les interactions avec une base de données.",
      features: [
        "Gestion des articles",
        "Architecture MVC",
        "Utilisation de Symfony",
        "Gestion des formulaires",
        "Connexion base de données",
        "Interface Bootstrap responsive"
      ],
      githubUrl: "https://github.com/TECHLAB-ETECH-MAI-2025/BLOG-Lisa",
      demoUrl: null,
      hasDemo: false,
    },
    {
      id: 5,
      title: "Music App",
      category: "mobile",
      tags: ["React Native", "Mobile"],
      image: env.projectMusicApp,
      description: "Application mobile de lecture audio.",
      longDescription: "Application mobile développée avec React Native permettant d'écouter de la musique depuis une interface simple et intuitive. Ce projet m'a permis de découvrir le développement mobile multiplateforme ainsi que la création d'interfaces adaptées aux smartphones Android et iOS.",
      features: [
        "Lecture audio",
        "Contrôle Play / Pause",
        "Navigation mobile",
        "Gestion des composants React Native",
        "Interface responsive",
        "Découverte du développement mobile"
      ],
      githubUrl: "https://github.com/rasoanirinamialisoa/Music-Player",
      demoUrl: null,
      hasDemo: false,
    },
    {
      id: 6,
      title: "PostNova AI",
      category: "web",
      tags: ["Laravel", "React", "Tailwind CSS", "PostgreSQL", "SaaS"],
      image: env.projectPostnova,
      description: "Plateforme SaaS basée sur l'intelligence artificielle.",
      longDescription: "PostNova AI est une plateforme SaaS permettant de générer automatiquement du contenu digital grâce à l'intelligence artificielle. J'ai participé au développement du front-end et du back-end ainsi qu'à la création d'interfaces modernes pour les utilisateurs et les administrateurs. Ce projet m'a permis d'approfondir mes compétences Full Stack et de travailler sur une architecture proche d'un projet professionnel.",
      features: [
        "Authentification des utilisateurs",
        "Dashboard administrateur",
        "Gestion des contenus",
        "API REST Laravel",
        "Interface React + Tailwind CSS",
        "Base de données PostgreSQL"
      ],
      githubUrl: "https://github.com/rasoanirinamialisoa/PostNova.AI-server",
      demoUrl: "https://prod-postnova-web.netlify.app",
      hasDemo: true,
    }
  ];

  // ===== Filtrage des projets =====
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  // ===== Fonction pour gérer le clic sur "Voir la démo" =====
  const handleDemoClick = (project, e) => {
    e.stopPropagation(); // Empêche l'ouverture de la modale
    
    if (project.hasDemo && project.demoUrl) {
      // Si le projet a une démo, ouvrir dans un nouvel onglet
      window.open(project.demoUrl, "_blank");
    } else {
      // Sinon, rediriger vers la page "Coming Soon"
      navigate("/video-coming-soon");
    }
  };

  // ===== MODAL =====
  const Modal = ({ project, onClose }) => {
    if (!project) return null;

    // Fonction de démo dans la modale
    const handleModalDemoClick = () => {
      if (project.hasDemo && project.demoUrl) {
        window.open(project.demoUrl, "_blank");
      } else {
        navigate("/video-coming-soon");
        onClose(); // Fermer la modale après redirection
      }
    };
    
    return (
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
        <div className="bg-neon-blue rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl animate-scaleIn">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {project.title}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-sm text-purple-300 mt-1">
                <span className="px-2 py-0.5 bg-purple-600/30 text-purple-300 rounded-full text-xs">
                  {project.category === "web" ? "🌐 Web" : "📱 Mobile"}
                </span>
                <span className="text-gray-400">•</span>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-xs text-gray-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Image du projet */}
          <div className="rounded-xl overflow-hidden mb-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 md:h-64 object-cover"
            />
          </div>

          <div className="space-y-4 text-white">
            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-2">
                📝 Description
              </h4>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Tags complets */}
            <div>
              <h4 className="text-sm font-semibold text-purple-300 uppercase tracking-wider flex items-center gap-2 mb-2">
                <Code className="w-4 h-4" />
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-purple-600/30 text-purple-300 border border-purple-500/30 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Fonctionnalités */}
            <div>
              <h4 className="text-sm font-semibold text-purple-300 uppercase tracking-wider flex items-center gap-2 mb-2">
                <Award className="w-4 h-4" />
                Fonctionnalités
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, i) => (
                  <div key={i} className="text-sm flex items-start gap-2 text-gray-300">
                    <span className="text-purple-400">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Liens */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-white"
              >
                <Github size={18} />
                <span>Code Source</span>
              </a>
              <button
                onClick={handleModalDemoClick}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-white ${
                  project.hasDemo
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-purple-600/50 hover:bg-purple-700/50 cursor-pointer"
                }`}
              >
                {project.hasDemo ? (
                  <>
                    <ExternalLink size={18} />
                    <span>Voir la démo</span>
                  </>
                ) : (
                  <>
                    <Hourglass className="w-4 h-4 animate-spin-slow" />
                    <span>Vidéo à venir</span>
                  </>
                )}
              </button>
            </div>

            {/* Message "Vidéo à venir" si pas de démo */}
            {!project.hasDemo && (
              <div className="bg-purple-600/10 border border-purple-500/30 rounded-lg p-3 text-center">
                <p className="text-sm text-purple-300/80">
                  🎬 Une démonstration vidéo est en cours de préparation pour ce projet. 
                  Revenez bientôt !
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // ===== Composant Carte =====
  const ProjectCard = ({ project }) => {
    const handleCardClick = () => {
      setSelectedProject(project);
    };

    return (
      <div 
        className="group h-[420px] cursor-pointer transition-all duration-300 hover:-translate-y-2"
        onClick={handleCardClick}
      >
        <div className="relative h-full w-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
          
          {/* Badge "Vidéo à venir" sur la carte */}
          {!project.hasDemo && (
            <div className="absolute top-3 right-3 z-10">
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-purple-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                <Hourglass className="w-3 h-3 animate-spin-slow" />
                Vidéo à venir
              </span>
            </div>
          )}

          {/* Image */}
          <div className="h-60 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Contenu */}
          <div className="p-5 space-y-3">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-800 line-clamp-1">
                {project.title}
              </h3>
              <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-full flex-shrink-0 ml-2">
                {project.category === "web" ? "Web" : "Mobile"}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-500">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>

            <p className="text-gray-600 text-sm line-clamp-2">
              {project.description}
            </p>

            {/* Indicateur de clic */}
            <div className="flex items-center justify-between pt-1 border-t border-gray-100">
              <span className="text-xs text-purple-400 group-hover:text-purple-600 transition-colors flex items-center gap-1">
                Cliquez pour voir les détails
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="flex gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={16} />
                </a>
                <button
                  onClick={(e) => handleDemoClick(project, e)}
                  className={`transition-colors ${
                    project.hasDemo
                      ? "text-gray-400 hover:text-purple-600"
                      : "text-gray-300 hover:text-purple-400 cursor-pointer"
                  }`}
                >
                  {project.hasDemo ? (
                    <ExternalLink size={16} />
                  ) : (
                    <Hourglass className="w-4 h-4 animate-spin-slow" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TabButton = ({ tab }) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`px-5 md:px-6 py-1 md:py-2 rounded-full transition-all duration-300 ${
        activeTab === tab.id
          ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {tab.label}
    </button>
  );

  const SectionHeader = () => (
    <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
      <div className="text-center mb-12 md:mb-16">
        <span className="inline-block text-sm font-medium text-purple-600 tracking-widest uppercase mb-3">
          Projets académiques et personnels
        </span>
        <h2 className="text-2xl md:text-5xl font-light text-gray-900">
          Mes <span className="text-neon-blue font-medium">Projets</span>
        </h2>
        <div className="w-16 h-0.5 bg-purple-600 mx-auto mt-4 rounded-full" />
      </div>
    </div>
  );

  // ===== Rendu principal =====
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-purple-50/30">
      <div className="section-container space-y-8 md:space-y-16">
        {/* En-tête */}
        <SectionHeader />

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* MODAL */}
      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />

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
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.15s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.15s ease-out;
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;