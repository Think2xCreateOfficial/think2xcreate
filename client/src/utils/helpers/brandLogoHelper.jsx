import React from 'react';

/**
 * BrandLogo Component
 * Renders high-fidelity logos matching Reference 1 & Reference 2.
 * Supports image files or custom SVG logo illustrations for every brand.
 */
export const BrandLogo = ({ project, className = '', isLarge = false }) => {
  const logo = project?.logo;
  const brandName = project?.brandName || '';
  const colors = project?.colors || { primary: '#1a1a1a' };

  // If logo is an image path (e.g. /brandlogo/akshainterior.webp)
  if (typeof logo === 'string' && logo.includes('/')) {
    return (
      <img
        src={logo}
        alt={`${brandName} logo`}
        className={`object-contain transition-all duration-300 ${
          className || (isLarge ? 'max-w-[75%] max-h-[75%]' : 'max-w-[70%] max-h-[70%]')
        }`}
        onError={(e) => {
          // Fallback if image path fail
          e.currentTarget.style.display = 'none';
        }}
      />
    );
  }

  // Custom SVG Vector Logos matching Reference 1 & Reference 2
  const name = brandName.toLowerCase();

  if (name.includes('buildmac')) {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${className}`}>
        <svg viewBox="0 0 40 40" className={isLarge ? 'w-8 h-8' : 'w-6 h-6'} fill="none">
          <path d="M20 6L32 15V32H8V15L20 6Z" stroke="#EAB308" strokeWidth="3.5" strokeLinejoin="round" />
          <path d="M15 22L20 18L25 22V32H15V22Z" fill="#EAB308" />
        </svg>
        <span className="font-extrabold text-[9px] sm:text-[10px] text-gray-900 leading-none mt-0.5 tracking-tight">
          BuildMac
        </span>
      </div>
    );
  }

  if (name.includes('eduwise')) {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${className}`}>
        <svg viewBox="0 0 40 30" className={isLarge ? 'w-8 h-8' : 'w-6 h-6'} fill="#1E293B">
          <path d="M20 2L2 11L20 20L38 11L20 2Z" />
          <path d="M8 15.5V23.5C8 23.5 13 27 20 27C27 27 32 23.5 32 23.5V15.5" stroke="#1E293B" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M34 13V24" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <span className="font-extrabold text-[8px] sm:text-[9px] text-gray-900 leading-none mt-0.5 tracking-tighter uppercase">
          EduWise
        </span>
      </div>
    );
  }

  if (name.includes('footwear')) {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${className}`}>
        <div className="bg-[#DC2626] px-1.5 py-0.5 rounded text-white flex flex-col items-center justify-center">
          <span className="font-black text-[7px] leading-none tracking-widest uppercase">FOOTWEAR</span>
          <span className="font-black text-[8px] leading-none tracking-widest uppercase mt-0.5 bg-black px-1 py-0.2 rounded-xs">ZONE</span>
        </div>
      </div>
    );
  }

  if (name.includes('organic')) {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${className}`}>
        <svg viewBox="0 0 32 24" className={isLarge ? 'w-7 h-7' : 'w-5 h-5'} fill="#16A34A">
          <path d="M16 2C10 2 4 8 4 16C12 16 18 10 18 4C18 3.3 17.9 2.6 17.8 2C17.2 2 16.6 2 16 2Z" />
          <path d="M16 2C22 2 28 8 28 16C20 16 14 10 14 4C14 3.3 14.1 2.6 14.2 2C14.8 2 15.4 2 16 2Z" fill="#22C55E" opacity="0.8" />
        </svg>
        <span className="font-serif italic font-extrabold text-[9px] sm:text-[10px] text-emerald-700 leading-none mt-0.5">
          Organic
        </span>
      </div>
    );
  }

  if (name.includes('travelista')) {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${className}`}>
        <span className="font-serif italic font-extrabold text-[11px] sm:text-[12px] text-slate-800 tracking-tight leading-none">
          Travelista
        </span>
      </div>
    );
  }

  if (name.includes('medicare')) {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${className}`}>
        <div className="w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center mb-0.5">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white stroke-current stroke-[3]" fill="none">
            <path d="M12 5V19M5 12H19" strokeLinecap="round" />
          </svg>
        </div>
        <span className="font-extrabold text-[8px] sm:text-[9px] text-sky-900 leading-none">
          Medicare
        </span>
      </div>
    );
  }

  // Fallback monogram circle
  return (
    <div
      className={`rounded-full flex items-center justify-center font-black select-none ${
        isLarge ? 'w-12 h-12 text-base' : 'w-8 h-8 text-xs'
      } ${className}`}
      style={{
        backgroundColor: colors.primary + '18',
        color: colors.primary,
      }}
    >
      {logo || brandName.slice(0, 2).toUpperCase()}
    </div>
  );
};
