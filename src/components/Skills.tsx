import React from "react";
import {
  Database,
  Server,
  Rocket,
  Layout,
  Cpu,
  Smartphone,
  Star,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiSymfony,
  SiLaravel,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiSwagger,
  SiPostman,
  SiGit,
  SiGithub,
  SiAndroid,
  SiTailwindcss,
} from "react-icons/si";

import { FaReact } from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      name: "Frontend",
      icon: Layout,
      techs: [
        {
          icon: SiReact,
          label: "React",
          color: "text-cyan-500",
          mastered: true,
          level: 75,
        },
        { icon: SiNextdotjs, label: "Next.js", color: "text-black", level: 55 },
        {
          icon: SiTailwindcss,
          label: "Tailwind",
          color: "text-sky-500",
          mastered: true,
          level: 80,
        },
        { icon: SiHtml5, label: "HTML5", color: "text-orange-500", level: 85 },
        { icon: SiCss3, label: "CSS3", color: "text-blue-500", level: 75 },
      ],
    },
    {
      name: "Backend",
      icon: Server,
      techs: [
        {
          icon: SiPhp,
          label: "PHP",
          color: "text-purple-600",
          mastered: true,
          level: 80,
        },
        {
          icon: SiLaravel,
          label: "Laravel",
          color: "text-red-500",
          mastered: true,
          level: 78,
        },
        {
          icon: SiSymfony,
          label: "Symfony",
          color: "text-black",
          mastered: true,
          level: 72,
        },
        {
          icon: SiNodedotjs,
          label: "Node.js",
          color: "text-green-500",
          level: 50,
        },
        {
          icon: SiExpress,
          label: "Express",
          color: "text-gray-600",
          level: 45,
        },
        {
          icon: SiSpringboot,
          label: "Spring Boot",
          color: "text-green-700",
          level: 40,
        },
      ],
    },
    {
      name: "API & Architecture",
      icon: Cpu,
      techs: [
        {
          icon: SiSwagger,
          label: "Swagger",
          color: "text-green-600",
          mastered: true,
          level: 75,
        },
        {
          icon: SiPostman,
          label: "Postman",
          color: "text-orange-500",
          mastered: true,
          level: 78,
        },
      ],
      concepts: ["REST API", "API Design", "MVC", "Clean Architecture"],
    },
    {
      name: "Database",
      icon: Database,
      techs: [
        {
          icon: SiPostgresql,
          label: "PostgreSQL",
          color: "text-blue-700",
          mastered: true,
          level: 72,
        },
        {
          icon: SiMysql,
          label: "MySQL",
          color: "text-sky-600",
          mastered: true,
          level: 70,
        },
      ],
    },
    {
      name: "DevOps & Outils",
      icon: Rocket,
      techs: [
        {
          icon: SiGit,
          label: "Git",
          color: "text-orange-600",
          mastered: true,
          level: 80,
        },
        {
          icon: SiGithub,
          label: "GitHub",
          color: "text-black",
          mastered: true,
          level: 75,
        },
        { icon: SiDocker, label: "Docker", color: "text-blue-500", level: 50 },
      ],
    },
    {
      name: "Mobile",
      icon: Smartphone,
      techs: [
        {
          icon: FaReact,
          label: "React Native",
          color: "text-cyan-500",
          level: 45,
        },
        {
          icon: SiAndroid,
          label: "Android",
          color: "text-green-600",
          level: 35,
        },
      ],
    },
  ];

  // Stack principale pour la bannière
  const mainStack = [
    { icon: SiPhp, label: "PHP", color: "text-purple-400", level: 80 },
    { icon: SiLaravel, label: "Laravel", color: "text-red-400", level: 78 },
    { icon: SiSymfony, label: "Symfony", color: "text-white", level: 72 },
    { icon: SiReact, label: "React", color: "text-cyan-400", level: 75 },
    {
      icon: SiTailwindcss,
      label: "Tailwind",
      color: "text-sky-400",
      level: 80,
    },
    {
      icon: SiPostgresql,
      label: "PostgreSQL",
      color: "text-blue-400",
      level: 72,
    },
  ];

  // Fonction pour obtenir la couleur en fonction du niveau
  const getLevelColor = (level) => {
    if (level >= 80) return "from-green-400 to-green-500";
    if (level >= 65) return "from-blue-400 to-blue-500";
    if (level >= 50) return "from-yellow-400 to-yellow-500";
    return "from-gray-400 to-gray-500";
  };

  // Fonction pour obtenir la couleur du texte
  const getLevelTextColor = (level) => {
    if (level >= 80) return "text-green-600";
    if (level >= 65) return "text-blue-600";
    if (level >= 50) return "text-yellow-600";
    return "text-gray-500";
  };

  return (
    <section
      id="skills"
      className="relative py-16 md:py-24 bg-gradient-to-b from-purple-50/30 to-white"
    >
      <div className="section-container max-w-6xl mx-auto px-4 md:px-6">
        {/* Titre */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-medium text-purple-600 tracking-widest uppercase mb-3">
            Stack Technique
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Mes <span className="text-neon-blue font-medium">Compétences</span>
          </h2>
          <div className="w-16 h-0.5 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Bannière Stack Principale */}
        <div className="mb-12 p-6 md:p-8 rounded-2xl shadow-lg relative overflow-hidden">
          {/* Fond avec flou */}
          <div className="absolute inset-0 bg-neon-blue via-purple-600 to-purple-800" />
          <div className="absolute inset-0 backdrop-blur-sm bg-white/5" />

          {/* Contenu */}
          <div className="relative z-10 text-center text-white">
            <h3 className="text-xl md:text-2xl font-light mb-4">
              Stack Technique <span className="font-semibold">Principale</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {mainStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 p-3 rounded-xl border border-white/10 hover:border-white/20"
                >
                  <div className="flex flex-col items-center gap-1">
                    <tech.icon className={`text-3xl ${tech.color}`} />
                    <span className="font-medium text-sm text-white">
                      {tech.label}
                    </span>
                    <span className="text-xs text-white/70">{tech.level}%</span>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100/50 hover:border-purple-200 transition-all duration-300 group"
            >
              {/* En-tête avec icône */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50 group-hover:from-purple-500 group-hover:to-purple-600 transition-colors duration-300">
                  <skill.icon className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {skill.name}
                </h4>
              </div>

              {/* Technologies avec logo + nom + pourcentage */}
              <div className="space-y-3">
                {skill.techs.map((tech, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <tech.icon className={`text-lg ${tech.color}`} />
                        <span className="text-sm font-medium text-gray-700">
                          {tech.label}
                        </span>
                        {tech.mastered && (
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        )}
                      </div>
                      <span
                        className={`text-sm font-semibold ${getLevelTextColor(
                          tech.level
                        )}`}
                      >
                        {tech.level}%
                      </span>
                    </div>
                    {/* Barre de progression */}
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getLevelColor(
                          tech.level
                        )} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Concepts */}
              {skill.concepts && (
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-gray-100">
                  {skill.concepts.map((concept, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 font-medium border border-purple-100/50"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
