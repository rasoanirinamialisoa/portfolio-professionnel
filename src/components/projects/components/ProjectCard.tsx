import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Github, ExternalLink, Hourglass, ChevronRight } from 'lucide-react';

const ProjectCard = ({ project, onCardClick, onDemoClick }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getCategoryLabel = (category) => {
    if (category === "web") return "Web";
    if (category === "Database & Backend") return "Database & Backend";
    if (category === "mobile") return "Mobile";
    return category;
  };

  return (
    <div 
      className={`group h-[420px] cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
        isDark ? 'hover:shadow-gray-800/30' : ''
      }`}
      onClick={() => onCardClick(project)}
    >
      <div className={`relative h-full w-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
        isDark 
          ? 'bg-gray-800 hover:shadow-gray-800/50' 
          : 'bg-white'
      }`}>
        
        {/* Image */}
        <div className="h-60 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Contenu */}
        <div className="p-5 space-y-3">
          <div className="flex items-start justify-between">
            <h3 className={`text-xl font-bold line-clamp-1 ${
              isDark ? 'text-gray-100' : 'text-gray-800'
            }`}>
              {project.title}
            </h3>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ml-2 transition-colors duration-300 ${
              isDark 
                ? 'bg-blue-900/50 text-blue-300 border border-blue-700' 
                : 'bg-blue-600/30 text-neon-dark'
            }`}>
              {getCategoryLabel(project.category)}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className={`px-2 py-1 text-xs rounded-full transition-colors duration-300 ${
                isDark 
                  ? 'bg-gray-700 text-gray-300' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className={`px-2 py-1 text-xs rounded-full transition-colors duration-300 ${
                isDark 
                  ? 'bg-gray-700 text-gray-400' 
                  : 'bg-gray-100 text-gray-500'
              }`}>
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          <p className={`text-sm line-clamp-2 transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {project.description}
          </p>

          {/* Indicateur de clic et actions */}
          <div className={`flex items-center justify-between pt-1 border-t transition-colors duration-300 ${
            isDark ? 'border-gray-700' : 'border-gray-100'
          }`}>
            <span className={`text-sm font-bold transition-colors flex items-center gap-1 ${
              isDark 
                ? 'text-blue-400 group-hover:text-blue-300' 
                : 'text-blue-500 group-hover:text-neon-blue'
            }`}>
              Cliquez pour voir les détails
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="flex gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} />
              </a>
              <button
                onClick={(e) => onDemoClick(project, e)}
                className={`transition-colors ${
                  project.hasDemo
                    ? isDark 
                      ? 'text-gray-500 hover:text-blue-400' 
                      : 'text-gray-400 hover:text-blue-600'
                    : isDark
                      ? 'text-gray-600 hover:text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                } cursor-pointer`}
              >
                {project.hasDemo ? (
                  <ExternalLink size={16} />
                ) : (
                  <Hourglass className="w-4 h-4 animate-spin-slow" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;