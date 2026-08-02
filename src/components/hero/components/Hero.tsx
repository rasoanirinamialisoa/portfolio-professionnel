import React from "react";
import { motion } from "motion/react";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ui/ThemeToggle";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";
import { Star } from "lucide-react";

const ProfileHero = import.meta.env.VITE_ProfileHero;
const ProfileHeroMobile = import.meta.env.VITE_ProfileHeroMobile;

const Hero = () => {
  const { theme } = useTheme();

  const handleProjectsClick = () => {
    const element = document.getElementById("projects");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const handleCVClick = () => {
    const link = document.createElement("a");

    link.href = "/cv.pdf";
    link.download = "CV_RASOANIRINA_Mialisoa_Lisa.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const bgClasses =
    theme === "dark"
      ? "bg-gray-900"
      : "bg-gradient-to-b from-white via-blue-50/30 to-white";

  const bubbleColor =
    theme === "dark"
      ? "from-gray-700/20 to-gray-700/20"
      : "from-neon-blue/10 to-neon-blue/10";

  const blobColor =
    theme === "dark"
      ? "from-gray-700/10 to-gray-700/10"
      : "from-neon-blue/5 to-neon-blue/5";

  const starColor =
    theme === "dark" ? "text-gray-500/40" : "text-neon-purple/40";

  return (
    <section
      id="hero"
      className={`relative min-h-screen pt-0 overflow-hidden ${bgClasses} transition-colors duration-300`}
    >
      {/* Bouton thème */}
      <div className="fixed top-2 right-5 md:right-14 z-50">
        <ThemeToggle />
      </div>

      {/* Fond animé */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute pointer-events-none rounded-full bg-gradient-to-r ${bubbleColor}`}
            style={{
              width: Math.random() * 100 + 50 + "px",
              height: Math.random() * 100 + 50 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Blobs */}
        <motion.div
          className={`absolute top-0 -left-48 w-96 h-96 bg-gradient-to-br ${blobColor} rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className={`absolute bottom-0 -right-48 w-96 h-96 bg-gradient-to-tr ${blobColor} rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Étoiles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
            }}
          >
            <Star className={`w-2 h-2 ${starColor}`} />
          </motion.div>
        ))}
      </div>

      {/* Desktop */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <HeroDesktop
          onCVClick={handleCVClick}
          onProjectsClick={handleProjectsClick}
          ProfileHero={ProfileHero}
        />
      </motion.div>

      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <HeroMobile
          onCVClick={handleCVClick}
          onProjectsClick={handleProjectsClick}
          ProfileHeroMobile={ProfileHeroMobile}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
