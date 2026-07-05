import { useState } from 'react';

export const useProjectFilters = (projects) => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter((project) => project.category === activeTab);

  return {
    activeTab,
    setActiveTab,
    filteredProjects,
  };
};