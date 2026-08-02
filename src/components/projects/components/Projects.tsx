import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { projectsData } from "../constants/projectsData";
import { useProjectModal } from "../../../hooks/useProjectModal";
import { useProjectFilters } from "../../../hooks/useProjectFilters";

import ProjectFilters from "./ProjectFilters";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHeader from "@/components/ui/SectionHeader";

const Projects = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { selectedProject, openModal, closeModal } = useProjectModal();

  const {
    activeTab,
    setActiveTab,
    filteredProjects,
  } = useProjectFilters(projectsData);


  // Gestion du clic sur "Voir la démo"
  const handleDemoClick = (project, e) => {
    e.stopPropagation();

    if (project.hasDemo && project.demoUrl) {
      window.open(project.demoUrl, "_blank");
    } else {
      navigate("/video-coming-soon");
    }
  };


  const bgClasses = isDark
    ? "bg-gray"
    : "bg-gradient-to-b from-white to-blue-50/30";


  return (
    <section
      id="projects"
      className={`py-24 ${bgClasses} transition-colors duration-300`}
    >

      <div className="section-container space-y-8 md:space-y-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          {/* En-tête */}
          <SectionHeader
            subtitle="Projets Réalisés"
            title="Mes"
            highlightedText="Projets"
            alignment="center"
            size="lg"
          />


          {/* Filtres */}
          <ProjectFilters
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />


          {/* Grille des projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

            {filteredProjects.map((project, index) => (

              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
              >

                <ProjectCard
                  project={project}
                  onCardClick={openModal}
                  onDemoClick={handleDemoClick}
                />

              </motion.div>

            ))}

          </div>


          {/* Aucun projet */}
          {filteredProjects.length === 0 && (

            <div className="text-center py-12">

              <p
                className={`text-lg transition-colors duration-300 ${
                  isDark
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                Aucun projet trouvé dans cette catégorie.
              </p>

            </div>

          )}

        </motion.div>

      </div>


      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={closeModal}
      />


      <style>{`
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
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
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