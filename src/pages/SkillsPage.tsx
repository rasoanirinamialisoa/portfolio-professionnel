
import React from 'react';
import Skills from '@/components/Skills';
import ParticleBackground from '@/components/ui/ParticleBackground';
import AnimatedSection from '@/components/ui/AnimatedSection';

const SkillsPage = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <main className="md:pl-64">
         <AnimatedSection>
          <Skills />
        </AnimatedSection>
      </main>
    </div>
  );
  
};

export default SkillsPage;