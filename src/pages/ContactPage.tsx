
import React from 'react';
import Contact from '@/components/Contact';
import ParticleBackground from '@/components/ParticleBackground';

const ContactPage = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <main className="md:pl-64">
        <Contact />
      </main>
    </div>
  );
};

export default ContactPage;
