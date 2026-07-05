// features/contact/components/ContactInfo.tsx
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "hei.lisa.30@gmail.com",
      href: "mailto:hei.lisa.30@gmail.com",
    },
    {
      icon: Phone,
      label: "Téléphone / Whatsapp",
      value: "+261 34 81 334 58",
      href: "https://wa.me/+261348133458",
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "Lot 198 NJO Mahatsinjo Avaradrano",
      href: null,
    },
  ];

  return (
    <div className="space-y-3 md:space-y-4">
      {contactItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-start gap-3 md:gap-4 p-3 md:p-3 rounded-xl transition-colors duration-300 ${
            isDark 
              ? 'bg-gray-700/50 hover:bg-gray-700' 
              : 'bg-gray-50 hover:bg-gray-100'
          }`}
        >
          <div className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0 transition-colors duration-300 ${
            isDark 
              ? 'bg-gray-600' 
              : 'bg-gradient-to-r from-neon-purple/10 to-neon-blue/10'
          }`}>
            <item.icon size={16} className={`md:w-5 md:h-5 font-bold transition-colors duration-300 ${
              isDark ? 'text-blue-400' : 'text-neon-blue'
            }`} />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className={`font-semibold text-sm md:text-base transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {item.label}
            </h4>
            {item.href ? (
              <a
                href={item.href}
                className={`text-sm md:text-base transition-colors duration-300 break-all ${
                  isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-neon-blue'
                }`}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {item.value}
              </a>
            ) : (
              <p className={`text-sm md:text-base truncate transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {item.value}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;