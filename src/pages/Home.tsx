
import React from 'react';
import Hero from '@/components/hero/components/Hero';
import ParticleBackground from '@/components/ui/ParticleBackground';
const Home = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <main className="md:pl-64">
        <Hero />
      </main>
    </div>
  );
};

export default Home;
