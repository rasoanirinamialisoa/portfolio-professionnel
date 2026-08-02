import React from "react";
import { Briefcase } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import SectionHeader from "@/components/ui/SectionHeader";
import { experiencesData } from "../constants/experiencesData";
import { useExperienceModal } from "../../../hooks/useExperienceModal";
import TimelineDot from "./TimelineDot";
import ExperienceCard from "./ExperienceCard";
import ExperienceStats from "./ExperienceStats";
import ExperienceModal from "./ExperienceModal";
import { motion } from "motion/react";

const Experience = () => {
  const { selectedExp, openModal, closeModal } = useExperienceModal();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bgClasses = isDark
    ? "bg-gray-900"
    : "bg-gradient-to-b from-white to-purple-50/30";

  const timelineColor = isDark ? "bg-gray-600" : "bg-neon-dark";

  return (
    <section
      id="experience"
      className={`relative py-16 md:py-24 ${bgClasses} transition-colors duration-300`}
    >
      <div className="section-container max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <SectionHeader
            subtitle="Parcours Professionnel"
            title="Mon"
            highlightedText="Expérience"
            alignment="center"
            underline={true}
          />

          {/* TOUTE LA TIMELINE ICI */}
          <div className="relative z-10 mt-8 md:mt-12">
            {/* Ligne centrale */}
            <div
              className={`absolute left-6 md:left-1/2 top-0 h-full w-0.5 -translate-x-1/2 hidden md:block transition-colors duration-300 ${timelineColor}`}
            ></div>

            <div
              className={`absolute left-6 top-0 h-full w-0.5 block md:hidden transition-colors duration-300 ${timelineColor}`}
            ></div>

            {experiencesData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.98,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
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
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%] md:pr-0"
                }`}
              >
                <TimelineDot onClick={() => openModal(exp)} />

                <motion.div
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className={`ml-14 md:ml-0 relative ${
                    index % 2 === 0 ? "md:pr-6" : "md:pl-6"
                  }`}
                >
                  <ExperienceCard
                    experience={exp}
                    onClick={() => openModal(exp)}
                  />
                </motion.div>

                <ExperienceStats
                  stats={exp.stats}
                  summary={exp.summary}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <ExperienceModal experience={selectedExp} onClose={closeModal} />
    </section>
  );
};

export default Experience;
