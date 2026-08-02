import React from "react";
import { motion } from "motion/react";
import { useTheme } from "@/context/ThemeContext";
import { skillsData, mainStackData } from "../constants/skillsData";
import MainStack from "./MainStack";
import SkillCard from "./SkillCard";
import SectionHeader from "@/components/ui/SectionHeader";

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bgClasses = isDark
    ? "bg-gray"
    : "bg-gradient-to-b from-white to-purple-50/30";

  return (
    <section
      id="skills"
      className={`min-h-screen py-12 md:py-16 ${bgClasses} transition-colors duration-300`}
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
            title="Mes"
            subtitle="STACK TECHNIQUE"
            highlightedText="compétences"
            alignment="center"
            underline={true}
          />

          <MainStack stack={mainStackData} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;