export const useSkillLevel = () => {
  const getLevel = (level) => {
    if (level >= 85) {
      return { 
        label: "Expert", 
        color: "text-purple-700", 
        bg: "bg-purple-100", 
        border: "border-purple-200" 
      };
    }
    if (level >= 70) {
      return { 
        label: "Avancé", 
        color: "text-blue-700", 
        bg: "bg-blue-100", 
        border: "border-blue-200" 
      };
    }
    if (level >= 50) {
      return { 
        label: "Intermédiaire", 
        color: "text-green-700", 
        bg: "bg-green-100", 
        border: "border-green-200" 
      };
    }
    return { 
      label: "Débutant", 
      color: "text-gray-600", 
      bg: "bg-gray-100", 
      border: "border-gray-200" 
    };
  };

  return { getLevel };
};