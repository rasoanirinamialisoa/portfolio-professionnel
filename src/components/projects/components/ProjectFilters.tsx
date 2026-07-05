// features/projects/components/ProjectFilters.tsx
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { categories } from '../constants/projectsData';

const ProjectFilters = ({ activeTab, setActiveTab, projectsCount }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Fonction pour compter les projets par catégorie
  const getCount = (categoryId) => {
    if (categoryId === 'all') return projectsCount?.total || 0;
    return projectsCount?.[categoryId] || 0;
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {categories.map((category) => {
        const isActive = activeTab === category.id;
        const count = getCount(category.id);
        
        return (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`
              px-4 md:px-6 py-1.5 md:py-2 
              rounded-full 
              transition-all duration-300 
              text-sm md:text-base 
              font-medium
              flex items-center gap-2
              ${isActive 
                ? isDark
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700"
                  : "bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700"
                : isDark
                  ? "bg-gray-700/50 text-gray-400 hover:bg-gray-600 hover:text-gray-100"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }
            `}
          >
            <span>{category.label}</span>
            {count > 0 && (
              <span className={`
                text-xs px-1.5 py-0.5 rounded-full
                ${isActive 
                  ? 'bg-white/20 text-white' 
                  : isDark 
                    ? 'bg-gray-600 text-gray-400' 
                    : 'bg-gray-200 text-gray-500'
                }
              `}>
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilters;