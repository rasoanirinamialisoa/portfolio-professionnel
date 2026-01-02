
import React from 'react';
import Hero from '@/components/Hero';
import ParticleBackground from '@/components/ParticleBackground';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <main className="pl-20 md:pl-64">
        <Hero />
      </main>
    </div>
  );
};

export default Home;
