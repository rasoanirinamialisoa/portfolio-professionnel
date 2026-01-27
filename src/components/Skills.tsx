import React from "react";
import {
  Database,
  Server,
  Rocket,
  Layout,
  Cpu,
  Smartphone,
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
  SiApple,
} from "react-icons/si";

import { FaReact } from "react-icons/fa";

const Skills = () => {
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
        { icon: SiAndroid, label: "Android", color: "text-green-600" }
      ],
    },
  ];

  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="section-container space-y-12 md:space-y-16">
        {/* Titre */}
        <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Compétences</h2>
          <p className="text-gray-500">
            Technologies et outils que j’utilise au quotidien
          </p>
          <div className="relative w-32 mx-auto">
            <hr className="w-full border-t-2 border-gray-300" />
            <hr className="w-20 border-t-4 border-neon-purple absolute top-0 left-1/2 -translate-x-1/2" />
          </div>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-neon-purple transition-all duration-300 group w-full flex flex-col items-center"
            >
              {/* Icône catégorie */}
              <div className="p-3 rounded-lg bg-gray-50 text-neon-purple group-hover:text-white group-hover:bg-neon-purple transition mb-4">
                <skill.icon className="text-2xl md:text-3xl" />
              </div>

              {/* Contenu */}
              <div className="flex-1 text-center">
                <h4 className="text-lg md:text-xl font-semibold mb-3">
                  {skill.name}
                </h4>

                {/* Logos technos */}
                <div className="flex justify-center gap-3 flex-wrap">
                  {skill.techs.map((tech, i) => (
                    <div
                      key={i}
                      title={tech.label}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 hover:scale-110 transition"
                    >
                      <tech.icon className={`text-2xl ${tech.color}`} />
                    </div>
                  ))}
                </div>
                {/* Concepts d’architecture */}
<div className="flex justify-center gap-2 flex-wrap mt-3">
  {skill.concepts?.map((concept, i) => (
    <span
      key={i}
      className="text-xs px-3 py-1 rounded-full bg-neon-purple/10 text-neon-purple font-medium"
    >
      {concept}
    </span>
  ))}
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
