// features/about/components/About.tsx
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Calendar, MapPin, Mail, Phone, User } from 'lucide-react';
import AboutImage from './AboutImage';
import AboutInfoCard from './AboutInfoCard';
import AboutDescription from './AboutDescription';
import SectionHeader from '@/components/ui/SectionHeader';

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const profileAbout = import.meta.env.VITE_ProfileAbout;

  const infoData = [
    { icon: User, label: 'Nom', value: 'RASOANIRINA' },
    { icon: User, label: 'Prénom', value: 'Mialisoa Lisa' },
    { icon: Calendar, label: 'Date de naissance', value: '08 Mai 1995' },
    { icon: MapPin, label: 'Adresse', value: 'Lot 198 NJO Manandriana' },
    { icon: Mail, label: 'Email', value: 'rasoanirinamialisoa@gmail.com' },
    { icon: Phone, label: 'Téléphone', value: '+261 34 81 334 58' },
  ];

  const description = `Originaire de Madagascar, j'ai effectué une reconversion dans l'informatique après avoir obtenu un 
    Master 2 en Pharmacologie. Au fil du temps, le développement web et la programmation sont devenus une véritable passion. 
    Je cherche toujours à trouver un équilibre entre ces deux domaines qui me tiennent à cœur. 
    Actuellement, je souhaite mettre mes compétences en PHP et React au service des entreprises, 
    en apportant à la fois ma rigueur scientifique et ma créativité technique.`;

  // Classes dynamiques pour le fond
  const bgClasses = isDark
    ? 'bg-gray-900'
    : 'bg-gradient-to-b from-white to-purple-50/30';

  return (
    <section id="about" className={`relative min-h-screen pt-16 md:pt-20 py-20 md:py-28 ${bgClasses} transition-colors duration-300`}>
      <div className="section-container max-w-6xl mx-auto px-4 md:px-6">
        {/* En-tête - Le SectionHeader s'adapte automatiquement au thème */}
        <SectionHeader
          subtitle="A propos de moi"
          title="Qui suis-je"
          highlightedText="?"
          alignment="center"
        />

        {/* Contenu */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Image */}
          <AboutImage 
            imageUrl={profileAbout} 
            name="Mialisoa Lisa RASOANIRINA" 
          />

          {/* Infos + Description */}
          <div className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {infoData.map((item, index) => (
                <AboutInfoCard
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>

            <AboutDescription text={description} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;