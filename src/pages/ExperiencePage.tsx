import React from 'react';
import Experience from '@/components/experience/components/Experience';
import ParticleBackground from '@/components/ui/ParticleBackground';

const ExperiencePage = () => {
    return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <main className="md:pl-64">
        <Experience />
      </main>
    </div>
  );
};

export default ExperiencePage;