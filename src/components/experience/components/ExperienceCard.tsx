import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Building, Calendar } from 'lucide-react';

const ExperienceCard = ({ experience, onClick }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const { title, company, period, type, description, technologies, image } = experience;

  return (
    <div 
      className={`group w-full transition-all duration-300 cursor-pointer hover:shadow-xl ${
        isDark ? 'hover:shadow-gray-800/30' : ''
      }`}
      onClick={onClick}
    >
      <div className={`relative w-full rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        isDark 
          ? 'bg-gray-800 hover:shadow-gray-800/50' 
          : 'bg-white'
      }`}>
        <div className="h-32 md:h-36 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="p-3 md:p-5 space-y-2">
          <div className="flex items-start justify-between">
            <h3 className={`text-base md:text-lg font-bold line-clamp-1 ${
              isDark ? 'text-gray-100' : 'text-gray-800'
            }`}>
              {title}
            </h3>
            <span className={`px-2 py-0.5 text-xs font-medium rounded-full flex-shrink-0 ml-2 ${
              isDark 
                ? 'bg-purple-900/50 text-purple-300 border border-purple-700' 
                : 'bg-purple-100 text-purple-700'
            }`}>
              {type}
            </span>
          </div>

          <div className={`flex items-center gap-1.5 text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <Building className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-neon-blue'}`} />
            <span className="truncate">{company}</span>
          </div>

          <div className={`flex items-center gap-1.5 text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <Calendar className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-neon-blue'}`} />
            <span>{period}</span>
          </div>

          <div className="flex flex-wrap gap-1">
            {technologies.slice(0, 4).map((tech, i) => (
              <span key={i} className={`px-2 py-0.5 text-xs rounded-full ${
                isDark 
                  ? 'bg-gray-700 text-gray-300' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className={`px-2 py-0.5 text-xs rounded-full ${
                isDark 
                  ? 'bg-gray-700 text-gray-400' 
                  : 'bg-gray-100 text-gray-400'
              }`}>
                +{technologies.length - 4}
              </span>
            )}
          </div>

          <p className={`text-sm line-clamp-2 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {description}
          </p>

          <div className="text-center pt-1">
            <span className={`text-sm transition-colors ${
              isDark 
                ? 'text-blue-400 group-hover:text-blue-300' 
                : 'text-neon-blue group-hover:text-neon-dark'
            }`}>
              Cliquez pour voir tous les détails →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;