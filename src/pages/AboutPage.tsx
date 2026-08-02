
import React from 'react';
import About from '@/components/about/About';
import ParticleBackground from '@/components/ui/ParticleBackground';
import AnimatedSection from '@/components/ui/AnimatedSection';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
       <AnimatedSection>
           <About />
        </AnimatedSection>
    </div>
  );
};

export default AboutPage;
