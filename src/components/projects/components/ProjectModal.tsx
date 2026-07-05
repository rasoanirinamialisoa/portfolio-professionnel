import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { X, Code, Award, Github, ExternalLink, Hourglass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectModal = ({ project, onClose }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (!project) return null;

  const handleDemoClick = () => {
    if (project.hasDemo && project.demoUrl) {
      window.open(project.demoUrl, "_blank");
    } else {
      navigate("/video-coming-soon");
      onClose();
    }
  };

  const getCategoryEmoji = (category) => {
    if (category === "web") return "🌐";
    if (category === "Database & Backend") return "🗄️";
    if (category === "mobile") return "📱";
    return "";
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div className={`rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto  pl-6 pr-6  pb-6 md:pl-8 md:pr-8 md:pb-8 shadow-2xl animate-scaleIn transition-colors duration-300 ${
        isDark 
          ? 'bg-gray-800 border border-gray-700' 
          : 'bg-blue-50'
      }`}>
        
        {/* Header */}
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
                {project.title}
              </h3>
              <div className={`flex flex-wrap items-center gap-2 text-sm mt-1 transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-black'
              }`}>
                <span className={`px-2 py-0.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isDark 
                    ? 'bg-blue-900/50 text-blue-300 border border-blue-700' 
                    : 'bg-blue-600/30 text-neon-dark'
                }`}>
                  {getCategoryEmoji(project.category)} {project.category}
                </span>
                <span className={isDark ? 'text-gray-600' : 'text-black'}>•</span>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className={`text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-black'
                    }`}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className={`p-2 rounded-full transition-colors flex-shrink-0 ${
                isDark 
                  ? 'hover:bg-gray-700 text-gray-400 hover:text-gray-200' 
                  : 'hover:bg-white/10 text-black'
              }`}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className={`space-y-4 pt-10 transition-colors duration-300 ${
          isDark ? 'text-gray-300' : 'text-black'
        }`}>
          {/* Image */}
          <div className="rounded-xl overflow-hidden mb-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 md:h-64 object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-2 transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-neon-dark'
            }`}>
              Description
            </h4>
            <p className={`text-base md:text-lg leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-black'
            }`}>
              {project.longDescription}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-wider flex items-center gap-2 mb-2 transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-neon-dark'
            }`}>
              <Code className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-neon-blue'}`} />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 text-sm rounded-full font-medium border transition-colors duration-300 ${
                    isDark 
                      ? 'bg-gray-700/50 text-gray-300 border-gray-600' 
                      : 'bg-blue-500/30 text-neon-dark border-blue-500/30'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Fonctionnalités */}
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-wider flex items-center gap-2 mb-2 transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-neon-blue'
            }`}>
              <Award className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-neon-blue'}`} />
              Fonctionnalités
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.features.map((feature, i) => (
                <div key={i} className={`text-sm flex items-start gap-2 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-black'
                }`}>
                  <span className={isDark ? 'text-blue-400 font-bold' : 'text-neon-dark font-bold'}>✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Liens */}
          <div className={`flex flex-wrap gap-4 pt-4 border-t transition-colors duration-300 ${
            isDark ? 'border-gray-700' : 'border-white/10'
          }`}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-white bg-gray-800 hover:bg-gray-700"
            >
              <Github size={18} />
              <span>Code Source</span>
            </a>
            
            {project.hasDemo && project.demoUrl && (
              <button
                onClick={handleDemoClick}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-white bg-blue-600 hover:bg-blue-700"
              >
                <ExternalLink size={18} />
                <span>Voir la démo</span>
              </button>
            )}
          </div>

          {/* Message "Vidéo à venir" */}
          {!project.hasDemo && (
            <div className={`rounded-lg p-3 text-center transition-colors duration-300 ${
              isDark 
                ? 'bg-blue-900/20 border border-blue-800' 
                : 'bg-blue-600/10 border border-blue-500/30'
            }`}>
              <p className={`text-sm transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-black/80'
              }`}>
                ⏳ Une démonstration vidéo est en cours de préparation pour ce projet. 
                Revenez bientôt !
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;