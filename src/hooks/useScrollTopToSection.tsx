import react from "react";
import { useState, useEffect } from "react";
import useClick from "@/hooks/useClick";

const [activeSection, setActiveSection] = useState('hero');
const { clicked, handleClick } = useClick();


// Fonction pour scroller vers une section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 0;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
      handleClick();
    }
  };

export default scrollToSection;