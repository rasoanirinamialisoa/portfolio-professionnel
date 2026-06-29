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
  // Fonction pour obtenir le niveau
  const getLevel = (level) => {
    if (level >= 85) return { label: "Expert", color: "text-purple-700", bg: "bg-purple-100", border: "border-purple-200" };
    if (level >= 70) return { label: "Avancé", color: "text-blue-700", bg: "bg-blue-100", border: "border-blue-200" };
    if (level >= 50) return { label: "Intermédiaire", color: "text-green-700", bg: "bg-green-100", border: "border-green-200" };
    return { label: "Débutant", color: "text-gray-600", bg: "bg-gray-100", border: "border-gray-200" };
  };

  // Niveaux de compétences avec pourcentages
  const skills = [
    {
      name: "Frontend",
      icon: Layout,
      techs: [
        { icon: SiReact, label: "React", color: "text-cyan-500", level: 50 },
        { icon: SiNextdotjs, label: "Next.js", color: "text-black", level: 40 },
        { icon: SiTailwindcss, label: "Tailwind", color: "text-sky-500", level: 50 },
        { icon: SiHtml5, label: "HTML5", color: "text-orange-500", level: 75 },
        { icon: SiCss3, label: "CSS3", color: "text-blue-500", level: 75 },
      ],
    },
    {
      name: "Backend",
      icon: Server,
      techs: [
        { icon: SiPhp, label: "PHP", color: "text-purple-600", level: 80 },
        { icon: SiLaravel, label: "Laravel", color: "text-red-500", level: 78 },
        { icon: SiSymfony, label: "Symfony", color: "text-black", level: 72 },
        { icon: SiNodedotjs, label: "Node.js", color: "text-green-500", level: 50 },
        { icon: SiExpress, label: "Express", color: "text-gray-600", level: 45 },
        { icon: SiSpringboot, label: "Spring Boot", color: "text-green-700", level: 40 },
      ],
    },
    {
      name: "API & Architecture",
      icon: Cpu,
      techs: [
        { icon: SiSwagger, label: "Swagger", color: "text-green-600", level: 50 },
        { icon: SiPostman, label: "Postman", color: "text-orange-500", level: 50 },
      ],
      concepts: ["REST API", "API Design", "MVC", "Clean Architecture"],
    },
    {
      name: "Database",
      icon: Database,
      techs: [
        { icon: SiPostgresql, label: "PostgreSQL", color: "text-blue-700", level: 72 },
        { icon: SiMysql, label: "MySQL", color: "text-sky-600", level: 40 },
      ],
    },
    {
      name: "DevOps & Outils",
      icon: Rocket,
      techs: [
        { icon: SiGit, label: "Git", color: "text-orange-600", level: 80 },
        { icon: SiGithub, label: "GitHub", color: "text-black", level: 75 },
        { icon: SiDocker, label: "Docker", color: "text-blue-500", level: 50 },
      ],
    },
    {
      name: "Mobile",
      icon: Smartphone,
      techs: [
        { icon: FaReact, label: "React Native", color: "text-cyan-500", level: 45 },
        { icon: SiAndroid, label: "Android", color: "text-green-600", level: 35 },
      ],
    },
  ];

  // Stack principale
  const mainStack = [
    { icon: SiPhp, label: "PHP", color: "text-purple-400", level: 80 },
    { icon: SiLaravel, label: "Laravel", color: "text-red-400", level: 78 },
    { icon: SiSymfony, label: "Symfony", color: "text-white", level: 72 },
    { icon: SiReact, label: "React", color: "text-cyan-400", level: 75 },
    { icon: SiTailwindcss, label: "Tailwind", color: "text-sky-400", level: 80 },
    { icon: SiPostgresql, label: "PostgreSQL", color: "text-blue-400", level: 72 },
  ];

  return (
    <section id="skills" className="min-h-screen py-12 md:py-16 bg-white">
      <div className="section-container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-block text-xs md:text-sm font-medium text-purple-600 tracking-widest uppercase mb-2">
            Stack Technique
          </span>
          <h2 className="text-2xl md:text-4xl font-light text-gray-900">
            Mes <span className="text-neon-blue font-medium">Compétences</span>
          </h2>
          <div className="w-12 md:w-16 h-0.5 bg-purple-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Bannière Stack Principale */}
        <div className="mb-10 p-4 md:p-6 rounded-2xl bg-neon-blue shadow-lg">
          <div className="text-center text-white mb-4">
            <h3 className="text-sm md:text-base font-light">
              Stack Technique <span className="font-semibold">Principale</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {mainStack.map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 p-2 md:p-3 rounded-xl border border-white/10"
              >
                <div className="flex flex-col items-center gap-0.5">
                  <tech.icon className={`text-4xl md:text-5xl ${tech.color}`} />
                  <span className="font-medium text-xs text-white">
                    {tech.label}
                  </span>
                 
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grille - Minimaliste */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-5 rounded-xl border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all duration-300"
            >
              {/* En-tête */}
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-purple-50">
                  <skill.icon className="w-4 h-4 text-purple-600" />
                </div>
                <h4 className="text-sm md:text-lg font-semibold text-gray-800">
                  {skill.name}
                </h4>
              </div>

              {/* Technologies avec niveau */}
              <div className="space-y-2">
                {skill.techs.map((tech, i) => {
                  const levelInfo = getLevel(tech.level);
                  return (
                    <div key={i} className="flex items-center justify-between py-1 border-b border-gray-50 last:border-0">
                      <div className="flex items-center gap-2">
                        <tech.icon className={`text-base ${tech.color}`} />
                        <span className="text-xs md:text-lg font-medium text-gray-700">
                          {tech.label}
                        </span>
                      </div>
                      <span className={`text-[12px] font-semibold px-2 py-0.5 rounded-full ${levelInfo.bg} ${levelInfo.color} ${levelInfo.border} border`}>
                        {levelInfo.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Concepts */}
              {skill.concepts && (
                <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-gray-100">
                  {skill.concepts.map((concept, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 font-medium"
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