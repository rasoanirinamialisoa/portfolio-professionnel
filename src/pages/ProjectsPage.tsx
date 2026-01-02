
import React from 'react';
import Projects from '@/components/Projects';
import ParticleBackground from '@/components/ParticleBackground';

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <main className="pl-20 md:pl-64">
        <Projects />
      </main>
    </div>
  );
};

export default ProjectsPage;
