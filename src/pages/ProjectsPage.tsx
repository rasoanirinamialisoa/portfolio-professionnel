
import React from 'react';
import Projects from '@/components/projects/components/Projects';
import ParticleBackground from '@/components/ui/ParticleBackground';

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <main className="md:pl-64">
        <Projects />
      </main>
    </div>
  );
};

export default ProjectsPage;
