// features/about/components/AboutInfoCard.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';

interface AboutInfoCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  className?: string;
}

const AboutInfoCard = ({ icon: Icon, label, value, className }: AboutInfoCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={cn(
      'flex items-start space-x-3 p-3 rounded-xl transition-all duration-300',
      isDark 
        ? 'bg-gray-800/60 hover:bg-gray-800 border border-gray-700' 
        : 'bg-white/60 hover:bg-white',
      className
    )}>
      <Icon className={cn(
        'w-4 h-4 mt-0.5 flex-shrink-0 transition-colors duration-300',
        isDark ? 'text-neon-blue/70' : 'text-neon-blue'
      )} />
      <div>
        <p className={cn(
          'text-xs font-medium uppercase tracking-wider transition-colors duration-300',
          isDark ? 'text-gray-500' : 'text-gray-400'
        )}>
          {label}
        </p>
        <p className={cn(
          'text-sm lg:text-base font-medium transition-colors duration-300',
          isDark ? 'text-gray-200' : 'text-gray-700'
        )}>
          {value}
        </p>
      </div>
    </div>
  );
};

export default AboutInfoCard;