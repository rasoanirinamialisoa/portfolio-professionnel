
import React from 'react';
import Skills from '@/components/Skills';
import ParticleBackground from '@/components/ParticleBackground';

const SkillsPage = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <main className="md:pl-64">
        <Skills />
      </main>
    </div>
  );
  
};

export default SkillsPage;