import React from 'react';
import SocialLinks from "./SocialLinks";

import {
  ArrowRight,
  Download,
  Star,
  Layout,
  Server,
  Database,
  Rocket,
  Cpu,
  Smartphone,
  Github,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Target,
  Mail,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiPhp,
  SiSymfony,
  SiLaravel,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiSwagger,
  SiPostman,
  SiAndroid,
} from "react-icons/si";

import { FaReact } from "react-icons/fa";

const ProfileHero = import.meta.env.VITE_ProfileHero;
const ProfileHeroMobile = import.meta.env.VITE_ProfileHeroMobile;

const skills = [
  {
    name: "Frontend",
    icon: Layout,
    techs: [
      { icon: SiReact, label: "React", color: "text-cyan-500" },
      { icon: SiNextdotjs, label: "Next.js", color: "text-black" },
      { icon: SiHtml5, label: "HTML5", color: "text-orange-500" },
      { icon: SiCss3, label: "CSS3", color: "text-blue-500" },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    techs: [
      { icon: SiNodedotjs, label: "Node.js", color: "text-green-500" },
      { icon: SiExpress, label: "Express", color: "text-gray-600" },
      { icon: SiSpringboot, label: "Spring Boot", color: "text-green-700" },
      { icon: SiPhp, label: "PHP", color: "text-purple-600" },
      { icon: SiSymfony, label: "Symfony", color: "text-black" },
      { icon: SiLaravel, label: "Laravel", color: "text-red-500" },
    ],
  },
  {
    name: "Database",
    icon: Database,
    techs: [
      { icon: SiPostgresql, label: "PostgreSQL", color: "text-blue-700" },
      { icon: SiMysql, label: "MySQL", color: "text-sky-600" },
    ],
  },
  {
    name: "DevOps & Outils",
    icon: Rocket,
    techs: [
      { icon: SiGit, label: "Git", color: "text-orange-600" },
      { icon: SiGithub, label: "GitHub", color: "text-black" },
      { icon: SiDocker, label: "Docker", color: "text-blue-500" },
    ],
  },
  {
    name: "Architecture & API Design",
    icon: Cpu,
    techs: [
      { icon: SiSwagger, label: "Swagger", color: "text-green-600" },
      { icon: SiPostman, label: "Postman", color: "text-orange-500" },
    ],
    concepts: ["REST API", "MVC", "Monolithe", "Clean Architecture"],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    techs: [
      { icon: FaReact, label: "React Native", color: "text-cyan-500" },
      { icon: SiAndroid, label: "Android", color: "text-green-600" },
    ],
  },
];

// ===== PROJET MIS EN AVANT =====
const featuredProject = {
  title: "PostNova AI",
  description: "Plateforme SaaS d'IA pour création et génération de post pour les réseaux sociaux",
  technologies: ["Laravel", "React", "OpenAI", "Swagger", "PostgreSQL", "Docker"],
  github: "https://github.com/ton-projet",
  demo: "https://ton-projet.com",
};

const Hero = () => {
  // Fonction pour scroller vers la section projets
  const handleProjectsClick = () => {
    console.log("Bouton projets cliqué !");
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.log("Section projects non trouvée");
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  // Fonction pour télécharger le CV
  const handleCVClick = () => {
    console.log("Bouton CV cliqué !");
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'CV_RASOANIRINA_Mialisoa_Lisa.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-0 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white"
    >
      {/* ===== EFFETS DE FOND ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute pointer-events-none rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-blue/10"
            style={{
              width: Math.random() * 100 + 50 + "px",
              height: Math.random() * 100 + 50 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 20 + 20}s infinite linear`,
              animationDelay: Math.random() * 5 + "s",
            }}
          />
        ))}
      </div>
      <div className="absolute top-0 -left-48 w-96 h-96 bg-gradient-to-br from-neon-blue/5 to-neon-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-48 w-96 h-96 bg-gradient-to-tr from-neon-blue/5 to-neon-blue/5 rounded-full blur-3xl"></div>
      {[...Array(8)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
          }}
        >
          <Star className="w-2 h-2 text-neon-purple/40" />
        </div>
      ))}

      {/* ============================================= */}
      {/* ===== VERSION DESKTOP ===== */}
      {/* ============================================= */}
      <div className="hidden min-h-screen pt-0 lg:block relative">
        {/* IMAGE à gauche */}
        <div className="hidden lg:block absolute inset-0 z-10">
          <div className="absolute top-1/2 left-[28%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-neon-blue/20 via-neon-pink/20 to-neon-blue/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative">
                <img
                  src={ProfileHero}
                  alt="RASOANIRINA Mialisoa Lisa"
                  className="h-screen w-auto object-contain max-w-[2000px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* PROJET EN VEDETTE - Desktop */}
        <div className="absolute z-30 bottom-[8%] left-[25%] -translate-x-1/2 w-full max-w-lg">
          <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-neon-purple/30">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-gray-900">
                  {featuredProject.title}
                </h4>
                <span className="px-3 py-1 bg-gradient-to-r from-neon-purple to-neon-blue text-white text-xs font-medium rounded-full">
                  ★ Projet en vedette
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-xs font-medium text-gray-700 rounded-full border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-2">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-neon-purple transition-colors font-medium"
                >
                  <Github className="w-4 h-4" />
                  Voir le code
                </a>
                <a
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-neon-purple transition-colors font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Voir la démo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* TEXTE - Desktop à droite */}
        <div className="section-container px-4 sm:px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-screen">
            <div className="space-y-5 md:space-y-7 text-center lg:text-left lg:col-start-2">
              
              <h2 className="text-base md:text-lg font-medium text-gray-600 tracking-wider uppercase">
                Bonjour, je suis
              </h2>

              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-tight text-center sm:text-left font-bold text-gray-900">
                <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent block sm:inline">
                  RASOANIRINA
                </span>
                <span className="hidden md:block"></span>
                <span className="block sm:inline text-gray-900">
                  Mialisoa Lisa
                </span>
              </h1>

              {/* ===== NOUVEAU TEXTE - DEVELOPPEUSE FULLSTACK ===== */}
              <div className="flex flex-row justify-center md:justify-start items-center gap-2 mt-2 flex-wrap">
                <div className="relative">
                  <span className="font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent text-lg md:text-xl">
                    DÉVELOPPEUSE FULLSTACK
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full" />
                </div>
              </div>

              {/* ===== NOUVELLE DESCRIPTION ===== */}
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 md:p-6 shadow-lg max-w-lg mx-auto lg:mx-0 group hover:shadow-xl hover:border-neon-purple/30 transition-all duration-300 relative">
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-3 h-3 bg-neon-purple rounded-full animate-ping"></div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">

                    fraîchement diplômée en informatique, passionnée par la conception 
                    et le développement d'applications web performantes et intuitives.
                  </p>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Compétente en{" "}
                    <span className="text-neon-blue font-medium">
                      développement frontend (ReactJS)
                    </span>
                    ,{" "}
                    <span className="text-neon-purple font-medium">
                      backend (PHP, Laravel, Symfony, Node.js)
                    </span>
                    , et{" "}
                    <span className="text-neon-pink font-medium">
                      gestion de bases de données (PostgreSQL)
                    </span>
                    .
                  </p>
                  <div className="flex items-center gap-2 pt-1 border-t border-gray-100">
                    <Briefcase className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700">
                      🚀 À la recherche d'un poste de développeuse Fullstack
                    </span>
                  </div>
                </div>
              </div>

              {/* BOUTONS DESKTOP */}
              <div className="flex flex-row flex-wrap gap-3 justify-center lg:justify-start">
                <button
                  onClick={handleCVClick}
                  className="z-50 pointer-events-auto group relative overflow-hidden bg-gradient-to-r from-neon-blue to-neon-purple text-white px-4 py-2.5 md:px-6 md:py-3 rounded-xl border-0 shadow-lg hover:shadow-2xl hover:shadow-neon-blue/40 transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-2 font-semibold">
                    <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
                    Voir mon CV
                  </span>
                </button>
                
                <button
                  onClick={handleProjectsClick}
                  className="z-50 pointer-events-auto group relative overflow-hidden bg-gradient-to-r from-neon-blue to-neon-purple text-white px-4 py-2.5 md:px-6 md:py-3 rounded-xl border-0 shadow-lg hover:shadow-2xl hover:shadow-neon-blue/40 transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-2 font-semibold">
                    Voir mes projets
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
              </div>
              
              <div className="pt-0">
                <div className="inline-flex flex-row sm:flex-row items-center gap-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <span className="text-sm font-semibold text-gray-700">
                    Suivez-moi
                  </span>
                  <div className="h-px w-8 bg-gradient-to-r from-neon-purple to-neon-blue sm:h-8 sm:w-px sm:bg-gradient-to-b"></div>
                  <SocialLinks
                    className="flex gap-4"
                    variant="light"
                    iconSize={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================= */}
      {/* ===== VERSION MOBILE ===== */}
      {/* ============================================= */}
      <div className="lg:hidden px-4 py-6 relative z-20">
        {/* 1. IMAGE EN PREMIER */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-purple/15 to-neon-blue/15 rounded-2xl blur-lg"></div>
            <div className="relative bg-white/80 backdrop-blur-md border-2 border-white rounded-full p-2 shadow-xl">
              <img
                src={ProfileHeroMobile}
                alt="RASOANIRINA Mialisoa Lisa"
                className="w-56 sm:w-64 object-contain animate-float rounded-full"
              />
            </div>
          </div>
        </div>

        {/* 2. DESCRIPTION AU MILIEU */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 px-3 py-1 rounded-full mx-auto">
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-green-400/50"></div>
              <div className="relative w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs font-semibold text-green-700">
              🚀 Disponible pour un poste
            </span>
          </div>

          <h2 className="text-sm font-medium text-gray-600 tracking-wider uppercase">
            Bonjour, je suis
          </h2>

          <h1 className="text-2xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              RASOANIRINA
            </span>
            <br />
            <span className="text-gray-900">Mialisoa Lisa</span>
          </h1>

          {/* ===== NOUVEAU TEXTE MOBILE - DEVELOPPEUSE FULLSTACK ===== */}
          <div className="flex justify-center items-center gap-2">
            <p className="text-base text-gray-700 font-light">
              Je suis
            </p>
            <span className="font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent text-base">
              DÉVELOPPEUSE FULLSTACK
            </span>
          </div>

          {/* ===== NOUVELLE DESCRIPTION MOBILE ===== */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg text-left">
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-semibold text-neon-purple">
                Développeuse Fullstack
              </span>{" "}
              fraîchement diplômée en informatique, passionnée par la conception 
              et le développement d'applications web performantes.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mt-2">
              Compétente en{" "}
              <span className="text-neon-blue font-medium">
                frontend (React, Next.js)
              </span>
              ,{" "}
              <span className="text-neon-purple font-medium">
                backend (PHP, Laravel, Symfony, Node.js)
              </span>
              , et{" "}
              <span className="text-neon-pink font-medium">
                bases de données (PostgreSQL, MySQL)
              </span>
              .
            </p>
            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-100">
              <Briefcase className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span className="text-xs font-medium text-green-700">
                🚀 À la recherche d'un poste Fullstack
              </span>
            </div>
          </div>

          {/* BOUTONS MOBILE */}
          <div className="flex flex-wrap gap-2 justify-center relative z-30">
            <button
              onClick={handleCVClick}
              className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Voir mon CV
              </span>
            </button>
            
            <button
              onClick={handleProjectsClick}
              className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <span className="flex items-center gap-2">
                Voir mes projets
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          <div className="flex justify-center pt-2">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl px-4 py-2.5 shadow-md">
              <span className="text-xs font-semibold text-gray-700">
                Suivez-moi
              </span>
              <div className="h-5 w-px bg-gradient-to-b from-neon-purple to-neon-blue"></div>
              <SocialLinks
                className="flex gap-3"
                variant="light"
                iconSize={18}
              />
            </div>
          </div>
        </div>

        {/* 3. PROJET EN DERNIER */}
        <div className="mt-6">
          <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-gray-900">
                {featuredProject.title}
              </h4>
              <span className="px-2.5 py-0.5 bg-gradient-to-r from-neon-purple to-neon-blue text-white text-[10px] font-medium rounded-full">
                ★ En vedette
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              {featuredProject.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {featuredProject.technologies.slice(0, 4).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-[10px] font-medium text-gray-700 rounded-full border border-gray-200"
                >
                  {tech}
                </span>
              ))}
              {featuredProject.technologies.length > 4 && (
                <span className="px-2 py-0.5 text-[10px] font-medium text-gray-500 rounded-full border border-gray-200">
                  +{featuredProject.technologies.length - 4}
                </span>
              )}
            </div>
            <div className="flex gap-3 mt-2 pt-2 border-t border-gray-100">
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-neon-purple transition-colors font-medium"
              >
                <Github className="w-3.5 h-3.5" />
                Code
              </a>
              <a
                href={featuredProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-neon-purple transition-colors font-medium"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Démo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Styles animation ===== */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;