// components/ui/SectionHeader.tsx
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@/context/ThemeContext';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  highlightedText?: string;
  alignment?: 'center' | 'left' | 'right';
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  underline?: boolean;
  // Props supplémentaires pour personnaliser les couleurs
  subtitleColor?: string;
  titleColor?: string;
  highlightedColor?: string;
  underlineColor?: string;
}

const SectionHeader = ({
  subtitle,
  title,
  highlightedText,
  alignment = 'center',
  className = '',
  subtitleClassName = '',
  titleClassName = '',
  underline = true,
  subtitleColor,
  titleColor,
  highlightedColor,
  underlineColor,
}: SectionHeaderProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const alignmentClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  };

  // Couleurs par défaut adaptées au thème
  const defaultSubtitleColor = isDark ? 'text-blue-400' : 'text-neon-blue';
  const defaultTitleColor = isDark ? 'text-gray-100' : 'text-gray-900';
  const defaultHighlightedColor = isDark ? 'text-blue-400' : 'text-neon-dark';
  const defaultUnderlineColor = isDark ? 'bg-blue-500' : 'bg-neon-blue';

  return (
    <div className={`${alignmentClasses[alignment]} mb-8 md:mb-10 ${className}`}>
      {subtitle && (
        <span className={`inline-block text-xs md:text-sm font-medium tracking-widest uppercase mb-2 md:mb-3 transition-colors duration-300 ${subtitleColor || defaultSubtitleColor} ${subtitleClassName}`}>
          {subtitle}
        </span>
      )}
      
      <h2 className={`text-2xl md:text-4xl lg:text-5xl font-light transition-colors duration-300 ${titleColor || defaultTitleColor} ${titleClassName}`}>
        {title}
        {highlightedText && (
          <span className={`font-medium transition-colors duration-300 ${highlightedColor || defaultHighlightedColor}`}> {highlightedText}</span>
        )}
      </h2>
      
      {underline && (
        <div className={`w-12 md:w-16 h-0.5 transition-colors duration-300 ${underlineColor || defaultUnderlineColor} ${alignment === 'center' ? 'mx-auto' : alignment === 'left' ? 'ml-0' : 'ml-auto'} mt-3 md:mt-4 rounded-full`} />
      )}
    </div>
  );
};

SectionHeader.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  highlightedText: PropTypes.string,
  alignment: PropTypes.oneOf(['center', 'left', 'right']),
  className: PropTypes.string,
  subtitleClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  underline: PropTypes.bool,
  subtitleColor: PropTypes.string,
  titleColor: PropTypes.string,
  highlightedColor: PropTypes.string,
  underlineColor: PropTypes.string,
};

export default SectionHeader;