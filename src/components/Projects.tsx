import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import natecolo from "../../assets/natecolo.png";
import facebak from "../../assets/facebak.png";
import gestion from "../../assets/gestion.png";
import blog from "../../assets/blog-article.png";
import music from "../../assets/music.png";
import postnova from "../../assets/postnova-ai.png";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Boutique Écolo Natecolo (Projet d'apprentissage)",
      category: "web",
      tags: ["HTML", "CSS", "Site statique", "Écologie"],
      image: natecolo,
      description:
        "Mon tout premier site web développé avec HTML et CSS. Une boutique e-commerce écologique fictive présentant des produits durables et respectueux de l'environnement. Ce projet statique m'a permis de découvrir les bases du développement front-end.",
      features: [
        "Design responsive adapté mobile et desktop",
        "Catalogue de produits écoresponsables fictifs",
        "Maquette de panier d'achat (front-end uniquement)",
        "Navigation entre différentes pages HTML",
        "Formulaire de contact statique",
        "Mise en pratique des concepts CSS (flexbox, grid)",
      ],
      githubUrl: "https://github.com/votre-username/natecolo",
      demoUrl: "https://votre-username.github.io/natecolo",
    },
    {
      id: 2,
      title: "Facebak - Réseau social (Projet d'apprentissage React)",
      category: "web",
      tags: ["React", "Hooks", "Components", "JSX"],
      image: facebak,
      description:
        "Mon premier projet React : une simulation de réseau social développée pour apprendre les concepts fondamentaux de React comme les composants, les hooks et le cycle de vie des composants.",
      features: [
        "Structure en composants réutilisables",
        "Utilisation des hooks useState et useEffect",
        "Gestion d'état local des composants",
        "Gestion des événements utilisateur",
        "Rendu conditionnel avec JSX",
        "Props et communication entre composants",
      ],
      githubUrl: "https://github.com/rasoanirinamialisoa/facebak",
      demoUrl: "https://github.com/rasoanirinamialisoa/facebak",
    },
    {
      id: 3,
      title: "AKORY-HOTEL Gestion d'hôtel - Dashboard Admin",
      category: "Base de données | WEB",
      tags: ["HTML", "CSS", "PostgreSQL", "Node.js", "Express"],
      image: gestion,
      description:
        "Mon premier gestion de base de données: application web de gestion hôtelière avec interface admin pour gérer les réservations, les clients et les chambres. Utilisation de PostgreSQL pour la gestion des données et Node.js/Express pour le backend.",
      features: [
        "Interface admin pour gérer les réservations, clients et chambres",
        "Connexion à une base de données PostgreSQL",
        "CRUD complet pour les entités principales",
        "Formulaires de saisie avec validation",
        "Authentification simple pour l'accès admin",
        "Utilisation de Node.js et Express pour le backend",
      ],
      githubUrl: "https://github.com/rasoanirinamialisoa/Gestion_Hotel",
      demoUrl: "https://github.com/rasoanirinamialisoa/Gestion_Hotel",
    },
    {
      id: 4,
      title: "Blog article",
      category: "web",
      tags: ["HTML/CSS", "Bootstrap", "Symfony", "PHP"],
      image: blog,
      description:
        "Conception de blog d'articles avec système de gestion de contenu simple",
      githubUrl: "https://github.com/TECHLAB-ETECH-MAI-2025/BLOG-Lisa",
      demoUrl: "https://github.com/TECHLAB-ETECH-MAI-2025/BLOG-Lisa",
    },
    {
      id: 5,
      title: "Music App",
      category: "mobile",
      tags: ["React Native"],
      image: music,
      description:
        "Application pour lire de la musique avec plusieurs options",
      githubUrl: "https://github.com/rasoanirinamialisoa/Music-Player",
      demoUrl: "https://github.com/rasoanirinamialisoa/Music-Player",
    },
    {
      id: 6,
      title: "Développement d'une plateforme SaaS d'IA pour la création automatisée de contenu digitaux",
      category: "web",
      tags: ["PHP", "Laravel", "React" , "Tailwind CSS", "PostgreSQL"],
      image: postnova,
      description:
        "Interface d'administration complète pour la gestion des utilisateurs et des contenus.",
      githubUrl: "https://github.com/rasoanirinamialisoa/PostNova.AI-server",
      demoUrl: "https://prod-postnova-web.netlify.app",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const tabs = [
    { id: "all", label: "Tous" },
    { id: "web", label: "Web" },
    { id: "ui", label: "UI/UX" },
    { id: "mobile", label: "Mobile" },
  ];

  return (
    <section id="projects" className="py-24 ">
      <div className="section-container space-y-8 md:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto px-4"> {/* Ajout de padding horizontal */}
          <h2 className="text-3xl md:text-4xl font-bold">Mes projets</h2> {/* Taille de texte réduite sur mobile */}
          <div className="relative w-32 mx-auto">
            <hr className="w-full border-t-2 border-gray-300" />
            <hr className="w-20 border-t-4 border-neon-purple absolute top-0 left-1/2 -translate-x-1/2 font-bold" />
          </div>
          <p className="text-lg text-gray-600">
            Une sélection de mes récents travaux en développement web et mobile.
          </p>
        </div>
        {/* Filter Tabs */}
        <div className="flex justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 md:px-6 py-1 md:py-2 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-neon-purple text-white shadow-neon-purple"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-neon-purple transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold">{project.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 line-clamp-3">
                  {project.description}
                </p>

                <div className="pt-3 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 hover:text-neon-purple transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 hover:text-neon-pink transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple to-neon-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
