import React from 'react';
import { categories } from '../constants/projectsData';

const ProjectFilters = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveTab(category.id)}
          className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
            activeTab === category.id
              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;