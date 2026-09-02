// features/contact/components/ContactInfo.tsx
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "hei.lisa.30@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=hei.lisa.30@gmail.com",
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
      value: "Sabotsy Namehana Avaradrano Madagascar",
      href: "https://maps.google.com/?q=-18.821788,47.575319",
    },
  ];

  return (
    <div className="space-y-3 md:space-y-4">
      {contactItems.map((item, index) => {
        const content = (
          <div
            className={`flex items-start gap-3 md:gap-4 p-3 rounded-xl border transition-all duration-300 cursor-pointer hover:-translate-y-0.5 hover:shadow-lg ${
  isDark
    ? 'bg-gray-700/50 border-gray-600 hover:bg-gradient-to-r hover:from-neon-blue/5 hover:to-neon-purple/10 hover:border-neon-purple/20'
    : 'bg-gray-50 border-transparent hover:bg-gradient-to-r hover:from-neon-blue/5 hover:to-neon-purple/10 hover:border-neon-purple/20'
}`}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0 transition-colors duration-300 ${
                isDark
                  ? "bg-gray-600"
                  : "bg-gradient-to-r from-neon-purple/10 to-neon-blue/10"
              }`}
            >
              <item.icon
                size={16}
                className={`md:w-5 md:h-5 font-bold transition-colors duration-300 ${
                  isDark ? "text-blue-400" : "text-neon-blue"
                }`}
              />
            </div>

            <div className="flex-1 min-w-0">
              <h4
                className={`font-semibold text-sm md:text-base transition-colors duration-300 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {item.label}
              </h4>

              <p
                className={`text-sm md:text-base break-all transition-colors duration-300 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {item.value}
              </p>
            </div>
          </div>
        );

        return item.href ? (
          <a
            key={index}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={
              item.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="block"
          >
            {content}
          </a>
        ) : (
          <div key={index}>{content}</div>
        );
      })}
    </div>
  );
};

export default ContactInfo;
