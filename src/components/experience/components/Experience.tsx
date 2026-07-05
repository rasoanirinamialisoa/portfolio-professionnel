import React from 'react';
import { Briefcase } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import SectionHeader from '@/components/ui/SectionHeader';
import { experiencesData } from '../constants/experiencesData';
import { useExperienceModal } from '../../../hooks/useExperienceModal';
import TimelineDot from './TimelineDot';
import ExperienceCard from './ExperienceCard';
import ExperienceStats from './ExperienceStats';
import ExperienceModal from './ExperienceModal';

const Experience = () => {
  const { selectedExp, openModal, closeModal } = useExperienceModal();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Classes dynamiques pour le fond
  const bgClasses = isDark
    ? 'bg-gray-900'
    : 'bg-gradient-to-b from-white to-purple-50/30';

  // Classes dynamiques pour la ligne de timeline
  const timelineColor = isDark ? 'bg-gray-600' : 'bg-neon-dark';

  return (
    <section id="experience" className={`relative py-16 md:py-24 ${bgClasses} transition-colors duration-300`}>
      <div className="section-container max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <SectionHeader
          subtitle="Parcours Professionnel"
          title="Mon"
          highlightedText="Expérience"
          alignment="center"
          underline={true}
        />

        {/* Timeline */}
        <div className="relative z-10 mt-8 md:mt-12">
          {/* Ligne centrale - Adaptée au thème */}
          <div className={`absolute left-6 md:left-1/2 top-0 h-full w-0.5 -translate-x-1/2 hidden md:block transition-colors duration-300 ${timelineColor}`}></div>
          <div className={`absolute left-6 top-0 h-full w-0.5 block md:hidden transition-colors duration-300 ${timelineColor}`}></div>
          
          {experiencesData.map((exp, index) => (
            <div key={exp.id} className={`relative mb-12 last:mb-0 ${
              index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%] md:pr-0'
            }`}>
              {/* Point sur la timeline */}
              <TimelineDot onClick={() => openModal(exp)} />

              {/* Carte principale */}
              <div className={`ml-14 md:ml-0 relative ${index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'}`}>
                <ExperienceCard 
                  experience={exp} 
                  onClick={() => openModal(exp)} 
                />
              </div>

              {/* Statistiques avec flèche */}
              <ExperienceStats 
                stats={exp.stats} 
                summary={exp.summary} 
                index={index} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ExperienceModal 
        experience={selectedExp} 
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
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.98); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.08s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.08s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Experience;