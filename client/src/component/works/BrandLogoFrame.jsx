import React from 'react';
import { BrandLogo } from '../../utils/helpers/brandLogoHelper';

/**
 * Normalized Circular Brand Logo Frame Component
 * Ensures every brand logo maintains perfect circular geometry, aspect ratio,
 * and reference-accurate active glow/border treatment without background fill distortion.
 */
export const BrandLogoFrame = ({
  project,
  isActive = false,
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  className = '',
  onClick = null,
}) => {
  // Dimension mappings
  const sizeClasses = {
    sm: isActive ? 'w-12 h-12' : 'w-10 h-10',
    md: isActive ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-12 h-12 sm:w-14 sm:h-14',
    lg: isActive ? 'w-20 h-20 sm:w-24 sm:h-24' : 'w-14 h-14 sm:w-16 sm:h-16',
    xl: isActive ? 'w-24 h-24 sm:w-28 sm:h-28' : 'w-16 h-16 sm:w-20 sm:h-20',
  };

  const containerSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`relative flex items-center justify-center flex-shrink-0 ${className}`}>
      {/* Reference-accurate Golden Glow Overlay for Active State */}
      {isActive && (
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-yellow-400 via-yellow-300 to-yellow-500 blur-[3px] opacity-80 animate-pulse pointer-events-none" />
      )}

      <div
        onClick={onClick}
        className={`relative rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden select-none ${containerSize} ${
          isActive
            ? 'bg-gray-50 border-4 border-yellow-400 shadow-2xl scale-105 z-10'
            : 'bg-white border border-gray-200 shadow-sm hover:border-yellow-300 hover:shadow-md'
        }`}
      >
        <BrandLogo project={project} isLarge={isActive} />
      </div>
    </div>
  );
};

export default BrandLogoFrame;
