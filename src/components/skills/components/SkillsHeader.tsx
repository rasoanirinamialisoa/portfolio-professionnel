
import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { Code2 } from 'lucide-react';

const SkillsHeader = () => {
  return (
    <SectionHeader
      subtitle="Stack Technique"
      title="Mes"
      highlightedText="Compétences"
      alignment="center"
      size="lg"
      icon={Code2}
      iconPosition="top"
    />
  );
};

export default SkillsHeader;