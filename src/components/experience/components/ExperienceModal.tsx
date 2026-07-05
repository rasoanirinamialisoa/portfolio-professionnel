// features/experience/components/ExperienceModal.tsx
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { 
  X, Building, Calendar, Code, CheckCircle, Award, Users, Users2 
} from 'lucide-react';

const ExperienceModal = ({ experience, onClose }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div className={`rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto pl-6 pr-6  pb-6 md:pl-8 md:pr-8 md:pb-8 shadow-2xl animate-scaleIn transition-colors duration-300 ${
        isDark 
          ? 'bg-gray-800 border border-gray-700' 
          : 'bg-blue-50'
      }`}>
        
        {/* Header - Sticky en haut */}
        <div className={`sticky top-0 z-10 -mx-6 md:-mx-8 px-6 md:px-8 py-4 -mt-6 md:-mt-8 rounded-t-2xl transition-colors duration-300 ${
          isDark 
            ? 'bg-gray-800/95 backdrop-blur-sm border-b border-gray-700' 
            : 'bg-blue-50/95 backdrop-blur-sm border-b border-white/20'
        }`}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                isDark ? 'text-gray-100' : 'text-neon-dark'
              }`}>
                {experience.title}
              </h3>
              <div className={`flex flex-wrap items-center gap-2 text-sm mt-1 transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-black'
              }`}>
                <Building className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-neon-dark'}`} />
                <span>{experience.company}</span>
                <span className={isDark ? 'text-gray-600' : 'text-black'}>•</span>
                <Calendar className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-neon-dark'}`} />
                <span>{experience.period}</span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className={`p-2 rounded-full transition-colors flex-shrink-0 ${
                isDark 
                  ? 'hover:bg-gray-700 text-gray-400 hover:text-gray-200' 
                  : 'hover:bg-white/20 text-neon-dark'
              }`}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content - avec padding top pour compenser le header sticky */}
        <div className={`space-y-4 pt-10 transition-colors duration-300 ${
          isDark ? 'text-gray-300' : 'text-neon-dark'
        }`}>
          {/* Description */}
          <p className={`text-base md:text-lg leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-black'
          }`}>
            {experience.longDescription}
          </p>

          {/* Stack Technique */}
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-wider flex items-center gap-2 mb-2 transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-black'
            }`}>
              <Code className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-neon-blue'}`} />
              Stack Technique
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 text-sm rounded-full font-medium border transition-colors duration-300 ${
                    isDark 
                      ? 'bg-gray-700/50 text-gray-300 border-gray-600' 
                      : 'bg-white/20 text-neon-dark border-white/10'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Réalisations & Compétences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Réalisations */}
            <div>
              <h4 className={`text-sm font-semibold uppercase tracking-wider flex items-center gap-2 mb-2 transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-black'
              }`}>
                <Award className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-neon-blue'}`} />
                Réalisations
              </h4>
              <ul className="space-y-1.5">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className={`text-sm flex items-start gap-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-black'
                  }`}>
                    <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 transition-colors duration-300 ${
                      isDark ? 'text-blue-400' : 'text-neon-blue'
                    }`} />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compétences Requises */}
            <div>
              <h4 className={`text-sm font-semibold uppercase tracking-wider flex items-center gap-2 mb-2 transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-black'
              }`}>
                <Users className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-neon-blue'}`} />
                Compétences Requises
              </h4>
              <ul className="space-y-1.5">
                {experience.requis.map((req, i) => (
                  <li key={i} className={`text-sm flex items-start gap-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-black'
                  }`}>
                    <span className={isDark ? 'text-blue-400' : 'text-neon-blue'}>▹</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Soft Skills */}
          {experience.softSkills && (
            <div>
              <h4 className={`text-sm font-semibold uppercase tracking-wider flex items-center gap-2 mb-2 transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-black'
              }`}>
                <Users2 className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-neon-blue'}`} />
                Compétences Transversales Acquises
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {experience.softSkills.map((skill, i) => (
                  <div key={i} className={`flex items-start gap-2 rounded-lg p-2 transition-colors duration-300 ${
                    isDark 
                      ? 'bg-gray-700/50' 
                      : 'bg-white/10'
                  }`}>
                    <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 transition-colors duration-300 ${
                      isDark ? 'text-green-400' : 'text-green-800'
                    }`} />
                    <span className={`text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-black'
                    }`}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2 border-t transition-colors duration-300 ${
            isDark ? 'border-gray-700' : 'border-white/10'
          }">
            {experience.stats.map((stat, i) => (
              <div key={i} className={`text-center rounded-xl p-3 transition-colors duration-300 ${
                isDark 
                  ? 'bg-gray-700/50' 
                  : 'bg-white/10'
              }`}>
                <h4 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                  isDark ? 'text-gray-100' : 'text-neon-dark'
                }`}>
                  {stat.value}
                </h4>
                <p className={`text-xs transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-neon-dark'
                }`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Summary */}
          <p className={`text-sm text-center italic pt-2 transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-neon-dark'
          }`}>
            "{experience.summary}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;