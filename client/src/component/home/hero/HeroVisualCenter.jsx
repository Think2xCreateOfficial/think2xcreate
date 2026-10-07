import React from 'react';

/**
 * Central Human Visual Component for Think2xCreate Hero.
 * Features a real professional human seated cross-legged with laptop, thumbs up.
 * Optimized with high-priority above-the-fold WebP delivery and soft natural ground shadow.
 */
function HeroVisualCenter({ personRef }) {
  return (
    <div
      ref={personRef}
      className="relative z-10 flex flex-col items-center justify-end mx-auto w-full max-w-[270px] xs:max-w-[310px] sm:max-w-[380px] md:max-w-[430px] lg:max-w-[470px] xl:max-w-[500px] pointer-events-none select-none"
    >
      {/* Soft Ground Contact Ambient Shadow */}
      <div
        className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-slate-900/15 rounded-[100%] blur-xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Real Professional Human Centerpiece */}
      <picture className="w-full flex justify-center">
        <source srcSet="/images/hero-person.webp" type="image/webp" />
        <img
          src="/images/hero-person.png"
          alt="Professional Digital Marketing Expert at Think2xCreate"
          className="w-full h-auto object-contain object-bottom drop-shadow-md"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          width={1173}
          height={858}
        />
      </picture>
    </div>
  );
}

export default React.memo(HeroVisualCenter);
