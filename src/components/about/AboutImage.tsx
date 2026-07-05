// features/about/components/AboutImage.tsx
import React from 'react';
import { useTheme } from '@/context/ThemeContext';

interface AboutImageProps {
  imageUrl: string;
  name: string;
  title?: string;
}

const AboutImage = ({ imageUrl, name, title = 'Fullstack' }: AboutImageProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="lg:col-span-2 flex flex-col items-center">
      {/* Image */}
      <div className="relative">
        <div className={`absolute -inset-1 rounded-2xl blur-xl opacity-20 transition-colors duration-300 ${
          isDark ? 'bg-gray-600' : 'bg-gradient-to-r from-purple-600 to-purple-400'
        }`} />
        <div className={`relative p-1 rounded-2xl shadow-xl transition-colors duration-300 ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-xl"
          />
        </div>
        {/* Badge */}
        <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-lg">
          {title}
        </div>
      </div>

      {/* Nom et titre */}
      <div className="text-center mt-6">
        <h3 className={`text-2xl md:text-3xl font-light transition-colors duration-300 ${
          isDark ? 'text-gray-200' : 'text-gray-800'
        }`}>
          Mialisoa Lisa <span className="text-neon-blue font-medium">RASOANIRINA</span>
        </h3>
        <p className={`font-medium text-sm tracking-wide mt-1 transition-colors duration-300 ${
          isDark ? 'text-gray-400' : 'text-black'
        }`}>
          Développeuse Fullstack · Passionnée par l'innovation
        </p>
      </div>
    </div>
  );
};

export default AboutImage;