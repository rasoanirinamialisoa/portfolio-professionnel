import React from 'react';
import { Linkedin, Github, Mail, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  variant?: 'default' | 'outline';
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = '', 
  iconSize = 24,
  variant = 'default'
}) => {
  const socials = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mialisoa-lisa-rasoanirina-0028b3148/',
      color: 'hover:text-[#0077B5] hover:border-[#0077B5]'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/rasoanirinamialisoa',
      color: 'hover:text-[#A76726] hover:border-[#A76726]'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/261348133458',
      color: 'hover:text-green-500 hover:border-green-500'
    },
  
  ];

  return (
    <div className={cn("flex space-x-0 md:space-x-4", className)}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "transition-all duration-300", 
            social.color,
            variant === 'outline' 
              ? 'w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-300' 
              : 'block'
          )}
          aria-label={social.name}
        >
          <social.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
