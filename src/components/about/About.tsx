import React from "react";
import { motion } from "motion/react";
import { useTheme } from "@/context/ThemeContext";
import { Calendar, MapPin, Mail, Phone, User } from "lucide-react";

import AboutImage from "./AboutImage";
import AboutInfoCard from "./AboutInfoCard";
import AboutDescription from "./AboutDescription";
import SectionHeader from "@/components/ui/SectionHeader";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const profileAbout = import.meta.env.VITE_ProfileAbout;

  const infoData = [
    { icon: User, label: "Nom", value: "RASOANIRINA" },
    { icon: User, label: "Prénom", value: "Mialisoa Lisa" },
    { icon: Calendar, label: "Date de naissance", value: "08 Mai 1995" },
    { icon: MapPin, label: "Adresse", value: "Lot 198 NJO Manandriana" },
    { icon: Mail, label: "Email", value: "rasoanirinamialisoa@gmail.com" },
    { icon: Phone, label: "Téléphone", value: "+261 34 81 334 58" },
  ];

  const description = `Développeuse web junior, j'ai effectué une reconversion dans l'informatique après avoir obtenu un Master 2 en Pharmacologie. Au fil du temps, le développement web et la programmation sont devenus une véritable passion.

Je cherche toujours à trouver un équilibre entre ces deux domaines qui me tiennent à cœur. Actuellement, je souhaite mettre mes compétences en PHP, Laravel, Symfony et React au service des entreprises, en apportant à la fois ma rigueur scientifique et ma créativité technique.`;

  const bgClasses = isDark
    ? "bg-gray-900"
    : "bg-gradient-to-b from-white to-purple-50/30";

  return (
    <section
      id="about"
      className={`relative min-h-screen pt-16 md:pt-20 py-20 md:py-28 ${bgClasses} transition-colors duration-300`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <SectionHeader
          subtitle="A propos de moi"
          title="Qui suis-je"
          highlightedText="?"
          alignment="center"
        />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            <AboutImage
              imageUrl={profileAbout}
              name="Mialisoa Lisa RASOANIRINA"
            />

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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
