import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  // ===== État =====
  const [activeTab, setActiveTab] = useState("all");

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
      title: "Boutique Écolo Natecolo (Projet d'apprentissage)",
      category: "web",
      tags: ["HTML", "CSS", "Site statique", "Écologie"],
      image: env.projectNatecolo,
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
      image: env.projectFacebak,
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
      category: "web",
      tags: ["HTML", "CSS", "PostgreSQL", "Node.js", "Express"],
      image: env.projectAkoryHotel,
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
      image: env.projectBlogArticle,
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
      image: env.projectMusicApp,
      description: "Application pour lire de la musique avec plusieurs options",
      githubUrl: "https://github.com/rasoanirinamialisoa/Music-Player",
      demoUrl: "https://github.com/rasoanirinamialisoa/Music-Player",
    },
    {
      id: 6,
      title:
        "Développement d'une plateforme SaaS d'IA pour la création automatisée de contenu digitaux",
      category: "web",
      tags: ["PHP", "Laravel", "React", "Tailwind CSS", "PostgreSQL"],
      image: env.projectPostnova,
      description:
        "Interface d'administration complète pour la gestion des utilisateurs et des contenus.",
      githubUrl: "https://github.com/rasoanirinamialisoa/PostNova.AI-server",
      demoUrl: "https://prod-postnova-web.netlify.app",
    },
  ];

  // ===== Configuration des onglets =====
  const tabs = [
    { id: "all", label: "Tous" },
    { id: "web", label: "Web" },
    { id: "ui", label: "UI/UX" },
    { id: "mobile", label: "Mobile" },
  ];

  // ===== Filtrage des projets =====
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  // ===== Composants =====
  const ProjectCard = ({ project }) => (
    <div
      key={project.id}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-neon-purple transition-all duration-500"
    >
      {/* Image du projet */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Informations du projet */}
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

        <p className="text-gray-600 line-clamp-3">{project.description}</p>

        <div className="pt-3 flex items-center justify-between">
          <ProjectLink
            href={project.githubUrl}
            icon={<Github size={16} />}
            label="Code"
            hoverColor="hover:text-neon-purple"
          />
          <ProjectLink
            href={project.demoUrl}
            icon={<ExternalLink size={16} />}
            label="Demo"
            hoverColor="hover:text-neon-pink"
          />
        </div>
      </div>

      {/* Barre de survol */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple to-neon-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );

  const ProjectLink = ({ href, icon, label, hoverColor }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-1 text-gray-700 ${hoverColor} transition-colors`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );

  const TabButton = ({ tab }) => (
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
  );

  const SectionHeader = () => (
    <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold">Mes projets</h2>
      <div className="relative w-32 mx-auto">
        <hr className="w-full border-t-2 border-gray-300" />
        <hr className="w-20 border-t-4 border-neon-purple absolute top-0 left-1/2 -translate-x-1/2 font-bold" />
      </div>
      <p className="text-lg text-gray-600">
        Une sélection de mes récents travaux en développement web et mobile.
      </p>
    </div>
  );

  // ===== Rendu principal =====
  return (
    <section id="projects" className="py-24">
      <div className="section-container space-y-8 md:space-y-16">
        {/* En-tête */}
        <SectionHeader />

        {/* Filtres */}
        <div className="flex justify-center gap-2 flex-wrap">
          {tabs.map((tab) => (
            <TabButton key={tab.id} tab={tab} />
          ))}
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
