// src/components/brand/showcase/BrandCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BrandBackContent from './BrandBackContent';

const BrandCard = ({ brand, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = React.useRef(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleTouchFlip = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleFlip();
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsFlipped(false);
    }
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setIsFlipped(true);
    }
    setIsHovering(true);
  };

  // Check if element is interactive
  const isInteractiveElement = (target) => {
    return target.closest('button') ||
      target.closest('a') ||
      target.closest('[role="button"]') ||
      target.closest('.no-flip'); // Add class to prevent flip
  };

  // Handle card click for mobile flip
  const handleCardClick = (e) => {
    // Check if clicked on interactive element
    const isInteractive = isInteractiveElement(e.target);

    // Only flip on non-interactive elements and on mobile
    if (!isInteractive && window.innerWidth < 768) {
      if (!isFlipped) {
        e.stopPropagation();
        handleTouchFlip(e);
      }
    }
  };

  // Handle back side content click - prevent flip
  const handleBackSideClick = (e) => {
    e.stopPropagation();
  };

  // Helper to extract a main service/label for the bottom half
  const mainService = brand.services && brand.services.length > 0 ? brand.services[0] : brand.category;

  // Custom split for a two line heading if possible, else just normal
  const serviceWords = mainService.split(' ');
  const serviceLine1 = serviceWords[0];
  const serviceLine2 = serviceWords.slice(1).join(' ');

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full h-[430px] lg:h-[420px] cursor-pointer group"
      style={{ perspective: '2000px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.6
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-white shadow-xl z-10"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Subtle Glowing Rotating Border effect */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 w-[200%] h-[200%] pointer-events-none"
              style={{
                background: `conic-gradient(from 0deg, transparent 0%, transparent 60%, ${brand.colors?.primary || '#f5d20b'} 80%, transparent 100%)`,
                animation: 'spinCard 4s linear infinite',
                willChange: 'transform'
              }}
            />
          </div>

          {/* Inner Card Layer */}
          <div
            className="absolute inset-[3px] rounded-[22px] overflow-hidden flex flex-col items-center justify-between p-8 z-50"
            style={{
              background: `linear-gradient(to bottom, #fcfcfcff 10%, #fcfcfbff 20%, ${brand.colors?.primary || '#b31b53'} 100%)`
            }}
          >
            {/* Top Content: Logo and Brand Name */}
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-52 h-52 flex items-center justify-center">
                  {brand.logo?.includes('.webp') || brand.logo?.includes('.png') || brand.logo?.includes('.jpg') || brand.logo?.includes('.svg') ? (
                    <img src={brand.logo} alt={`${brand.brandName} logo`} className="w-full h-full object-contain drop-shadow-md" />
                  ) : (
                    <span className="text-5xl font-black" style={{ color: brand.colors?.primary || '#b31b53' }}>
                      {brand.logo}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Content: Service Name */}
            <div className="mb-6 text-center w-full">
              <h4 className="text-[28px] leading-[1.2] font-semibold text-black tracking-tight mix-blend-color-burn opacity-90">
                {serviceLine1} <br /> {serviceLine2}
              </h4>
            </div>
          </div>
        </div>

        {/* Back Side - Enhanced touch handling */}
        <div
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-white shadow-xl z-10"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            pointerEvents: isFlipped ? 'auto' : 'none' // Only enable pointer events when flipped
          }}
          onClick={handleBackSideClick}
          onTouchStart={handleBackSideClick}
        >
          {/* Back side rotating outline */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 w-[200%] h-[200%] pointer-events-none"
              style={{
                background: `conic-gradient(from 0deg, transparent 0%, transparent 60%, ${brand.colors?.primary || '#f5d20b'} 80%, transparent 100%)`,
                animation: 'spinCard 4s linear infinite',
                willChange: 'transform'
              }}
            />
          </div>
          <div className="absolute inset-[3px] rounded-[22px] overflow-hidden z-10">
            <BrandBackContent brand={brand} onClose={() => setIsFlipped(false)} />
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes spinCard {
          0% {
            transform: translate3d(-50%, -50%, 0) rotate(0deg);
          }
          100% {
            transform: translate3d(-50%, -50%, 0) rotate(360deg);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default BrandCard;