
import React from 'react';
import About from '@/components/About';
import ParticleBackground from '@/components/ParticleBackground';

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
