import React from 'react';

interface ScrollIndicatorProps {
  label?: string;
  position?: 'left' | 'right';
  className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  label = 'SCROLL',
  position = 'right',
  className = ''
}) => {
  const positionClasses = {
    left: 'left-8',
    right: 'right-8'
  };

  return (
    <div className={`fixed bottom-8 ${positionClasses[position]} hidden lg:flex z-50 ${className}`}>
      <div className="flex flex-col items-center gap-3 text-gray-500">
        <span className="text-xs tracking-widest font-medium">{label}</span>
        <div className="relative w-6 h-10 rounded-full border-2 border-gray-300 overflow-hidden">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;