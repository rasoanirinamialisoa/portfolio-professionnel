// features/contact/components/Contact.tsx
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import ContactInfo from './ContactInfo';
import ContactSocial from './ContactSocial';
import ContactForm from './ContactForm';
import { useContactForm } from '../../hooks/useContactForm';
import SectionHeader from '@/components/ui/SectionHeader';

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const {
    formState,
    handleChange,
    handleSubmit,
    isSubmitting,
    isSubmitted,
    error,
  } = useContactForm();

  // Classes dynamiques pour le fond
  const bgClasses = isDark ? 'bg-gray-900' : 'bg-white';

  return (
    <section id="contact" className={`min-h-screen py-12 md:py-16 ${bgClasses} transition-colors duration-300`}>
      <div className="section-container max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          subtitle="Restons en contact"
          title="Contactez-moi"
          highlightedText="!"
          alignment="center"
        />

        <div className="grid md:grid-cols-2 gap-5 md:gap-7 lg:gap-10 mt-4 md:mt-6">
          {/* Carte des contacts */}
          <div className={`rounded-2xl shadow-lg p-5 md:p-7 transition-colors duration-300 ${
            isDark 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white neon-border'
          }`}>
            <h3 className={`text-xl md:text-2xl font-bold mb-4 md:mb-5 transition-colors duration-300 ${
              isDark ? 'text-gray-100' : 'text-gray-800'
            }`}>
              Coordonnées
            </h3>
            <ContactInfo />
            <ContactSocial />
          </div>

          {/* Carte du formulaire */}
          <div className={`rounded-2xl shadow-lg p-5 md:p-7 transition-colors duration-300 ${
            isDark 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white neon-border'
          }`}>
            <h3 className={`text-xl md:text-2xl font-bold mb-4 md:mb-5 transition-colors duration-300 ${
              isDark ? 'text-gray-100' : 'text-gray-800'
            }`}>
              Envoyez un message
            </h3>
            <ContactForm
              formState={formState}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              isSubmitted={isSubmitted}
              error={error}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;