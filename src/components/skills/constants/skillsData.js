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
  SiTailwindcss,
} from "react-icons/si";

import { FaReact } from "react-icons/fa";

// Données des compétences avec niveaux
export const skillsData = [
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
export const mainStackData = [
  { icon: SiPhp, label: "PHP", color: "text-purple-400", level: 80 },
  { icon: SiLaravel, label: "Laravel", color: "text-red-400", level: 78 },
  { icon: SiSymfony, label: "Symfony", color: "text-white", level: 72 },
  { icon: SiReact, label: "React", color: "text-cyan-400", level: 75 },
  { icon: SiTailwindcss, label: "Tailwind", color: "text-sky-400", level: 80 },
  { icon: SiPostgresql, label: "PostgreSQL", color: "text-blue-400", level: 72 },
];