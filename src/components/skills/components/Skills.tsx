// features/skills/components/Skills.tsx
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { skillsData, mainStackData } from '../constants/skillsData';
import SkillsHeader from './SkillsHeader';
import MainStack from './MainStack';
import SkillCard from './SkillCard';
import SectionHeader from '@/components/ui/SectionHeader';

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Classes dynamiques pour le fond
  const bgClasses = isDark
    ? 'bg-gray'
    : 'bg-gradient-to-b from-white to-purple-50/30';

  return (
    <section id="skills" className={`min-h-screen py-12 md:py-16 ${bgClasses} transition-colors duration-300`}>
      <div className="section-container max-w-6xl mx-auto px-4 md:px-6">
        {/* En-tête */}
        <SectionHeader
          title="Mes"
          subtitle="STACK TECHNIQUE"
          highlightedText="compétences"
          alignment="center"
          underline={true}
        />  

        {/* Bannière Stack Principale */}
        <MainStack stack={mainStackData} />

        {/* Grille des compétences */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;