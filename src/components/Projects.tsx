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
  },

  {
    id: 2,
    title: "Facebak - Réseau Social",
    category: "web",
    tags: ["React", "Hooks", "JSX", "Components"],
    image: env.projectFacebak,
    description:
      "Application développée pour apprendre React.",

    longDescription:
      "Facebak est mon premier projet réalisé avec React. L'objectif était de reproduire les fonctionnalités principales d'un réseau social afin de comprendre l'architecture des composants, la gestion d'état et le fonctionnement des hooks React. Ce projet m'a permis de découvrir la logique de développement moderne basée sur les composants réutilisables.",

    features: [
      "Architecture basée sur les composants",
      "Utilisation de useState",
      "Utilisation de useEffect",
      "Gestion des événements utilisateur",
      "Rendu dynamique avec JSX",
      "Communication entre composants via les props"
    ],

    githubUrl: "https://github.com/rasoanirinamialisoa/facebak",
    demoUrl: "https://github.com/rasoanirinamialisoa/facebak",
  },

  {
    id: 3,
    title: "AKORY-HOTEL - Gestion d'Hôtel",
    category: "web",
    tags: ["Node.js", "Express", "PostgreSQL", "HTML", "CSS"],
    image: env.projectAkoryHotel,
    description:
      "Application de gestion hôtelière avec base de données.",

    longDescription:
      "AKORY-HOTEL est une application de gestion permettant d'administrer les chambres, les clients et les réservations d'un hôtel. Ce projet représente ma première expérience avec les bases de données relationnelles et le développement back-end. J'ai pu apprendre à créer des opérations CRUD complètes et à connecter une application à PostgreSQL.",

    features: [
      "Gestion des réservations",
      "Gestion des chambres",
      "Gestion des clients",
      "CRUD complet",
      "Connexion PostgreSQL",
      "API Node.js / Express"
    ],

    githubUrl:
      "https://github.com/rasoanirinamialisoa/Gestion_Hotel",
    demoUrl:
      "https://github.com/rasoanirinamialisoa/Gestion_Hotel",
  },

  {
    id: 4,
    title: "Blog Article",
    category: "web",
    tags: ["Symfony", "PHP", "Bootstrap", "MySQL"],
    image: env.projectBlogArticle,
    description:
      "Plateforme de publication et gestion d'articles.",

    longDescription:
      "Projet réalisé durant ma formation PHP/Symfony. L'application permet de créer, modifier, consulter et supprimer des articles. Ce projet m'a permis de comprendre le fonctionnement du framework Symfony, l'architecture MVC, la gestion des routes, les contrôleurs ainsi que les interactions avec une base de données.",

    features: [
      "Gestion des articles",
      "Architecture MVC",
      "Utilisation de Symfony",
      "Gestion des formulaires",
      "Connexion base de données",
      "Interface Bootstrap responsive"
    ],

    githubUrl:
      "https://github.com/TECHLAB-ETECH-MAI-2025/BLOG-Lisa",
    demoUrl:
      "https://github.com/TECHLAB-ETECH-MAI-2025/BLOG-Lisa",
  },

  {
    id: 5,
    title: "Music App",
    category: "mobile",
    tags: ["React Native", "Mobile"],
    image: env.projectMusicApp,
    description:
      "Application mobile de lecture audio.",

    longDescription:
      "Application mobile développée avec React Native permettant d'écouter de la musique depuis une interface simple et intuitive. Ce projet m'a permis de découvrir le développement mobile multiplateforme ainsi que la création d'interfaces adaptées aux smartphones Android et iOS.",

    features: [
      "Lecture audio",
      "Contrôle Play / Pause",
      "Navigation mobile",
      "Gestion des composants React Native",
      "Interface responsive",
      "Découverte du développement mobile"
    ],

    githubUrl:
      "https://github.com/rasoanirinamialisoa/Music-Player",
    demoUrl:
      "https://github.com/rasoanirinamialisoa/Music-Player",
  },

  {
    id: 6,
    title: "PostNova AI",
    category: "web",
    tags: [
      "Laravel",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "SaaS"
    ],
    image: env.projectPostnova,
    description:
      "Plateforme SaaS basée sur l'intelligence artificielle.",

    longDescription:
      "PostNova AI est une plateforme SaaS permettant de générer automatiquement du contenu digital grâce à l'intelligence artificielle. J'ai participé au développement du front-end et du back-end ainsi qu'à la création d'interfaces modernes pour les utilisateurs et les administrateurs. Ce projet m'a permis d'approfondir mes compétences Full Stack et de travailler sur une architecture proche d'un projet professionnel.",

    features: [
      "Authentification des utilisateurs",
      "Dashboard administrateur",
      "Gestion des contenus",
      "API REST Laravel",
      "Interface React + Tailwind CSS",
      "Base de données PostgreSQL"
    ],

    githubUrl:
      "https://github.com/rasoanirinamialisoa/PostNova.AI-server",
    demoUrl:
      "https://prod-postnova-web.netlify.app",
  }
];

  // ===== Configuration des onglets =====
  const tabs = [
    { id: "all", label: "Tous" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
  ];

  // ===== Filtrage des projets =====
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  // ===== Composants =====
  const ProjectCard = ({ project }) => (
  <div className="group h-[420px] perspective">
    <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

      {/* FACE AVANT */}
      <div className="absolute inset-0 bg-white rounded-xl overflow-hidden shadow-md [backface-visibility:hidden]">

        <div className="h-60 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-5 space-y-3">
          <h3 className="text-xl font-bold">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-600 text-sm">
            {project.description}
          </p>

          <p className="text-xs text-neon-purple font-medium">
            Voir plus →
          </p>
        </div>
      </div>

      {/* FACE ARRIÈRE */}
      <div className="absolute inset-0 rounded-xl bg-neon-blue to-neon-pink text-white p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto">

        <h3 className="text-xl font-bold mb-3">
          {project.title}
        </h3>

        <p className="text-lg leading-relaxed mb-4">
          {project.longDescription}
        </p>

        <div className="space-y-2 mb-5">
          {project.features.slice(0, 4).map((feature, index) => (
            <div
              key={index}
              className="text-sm flex items-start gap-2"
            >
              <span>✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-auto">
          <ProjectLink
            href={project.githubUrl}
            icon={<Github size={16} />}
            label="Code"
            hoverColor="hover:text-white"
          />

          <ProjectLink
            href={project.demoUrl}
            icon={<ExternalLink size={16} />}
            label="Demo"
            hoverColor="hover:text-white"
          />
        </div>
      </div>

    </div>
  </div>
);

  const ProjectLink = ({ href, icon, label, hoverColor }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-1 text-gray-300 ${hoverColor} transition-colors`}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
