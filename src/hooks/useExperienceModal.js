// features/experience/hooks/useExperienceModal.js
import { useState } from 'react';

export const useExperienceModal = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const openModal = (exp) => {
    setSelectedExp(exp);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedExp(null);
    document.body.style.overflow = 'unset';
  };

  return {
    selectedExp,
    openModal,
    closeModal,
  };
};