
import React from 'react';
import About from '@/components/about/About';
import ParticleBackground from '@/components/ui/ParticleBackground';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <main className="md:pl-64">
        <About />
      </main>
    </div>
  );
};

export default AboutPage;
