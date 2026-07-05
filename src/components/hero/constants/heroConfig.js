import {
  Star,
  Layout,
  Server,
  Database,
  Rocket,
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

export const skills = [
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

export const featuredProject = {
  title: "PostNova AI",
  description: "Plateforme SaaS d'IA pour création et génération de post pour les réseaux sociaux",
  technologies: ["Laravel", "React", "OpenAI", "Swagger", "PostgreSQL", "Docker"],
  github: "https://github.com/rasoanirinamialisoa/PostNova.AI-server",
  demo: "https://prod-postnova-web.netlify.app",
};