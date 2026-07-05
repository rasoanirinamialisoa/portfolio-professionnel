// features/about/components/AboutDescription.tsx
import React from 'react';
import { Briefcase } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';

interface AboutDescriptionProps {
  text: string;
  className?: string;
}

const AboutDescription = ({ text, className }: AboutDescriptionProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={cn(
      'rounded-xl p-5 border transition-all duration-300',
      isDark 
        ? 'bg-gray-800/60 border-gray-700' 
        : 'bg-white/60 border-purple-100/50',
      className
    )}>
      <div className="flex items-center space-x-2 mb-3">
        <Briefcase className={cn(
          'w-4 h-4 transition-colors duration-300',
          isDark ? 'text-neon-blue/70' : 'text-neon-blue'
        )} />
        <span className={cn(
          'text-xs font-medium uppercase tracking-wider transition-colors duration-300',
          isDark ? 'text-gray-500' : 'text-gray-400'
        )}>
          Parcours
        </span>
      </div>
      <p className={cn(
        'text-sm md:text-base leading-relaxed transition-colors duration-300',
        isDark ? 'text-gray-300' : 'text-gray-600'
      )}>
        {text}
      </p>
    </div>
  );
};

export default AboutDescription;