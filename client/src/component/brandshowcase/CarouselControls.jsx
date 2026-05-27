// src/components/brand/showcase/CarouselControls.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselControls = ({ onLeftClick, onRightClick, canScrollLeft, canScrollRight }) => {
  const buttonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { scale: 1.1, backgroundColor: 'rgba(245, 158, 11, 0.2)' },
    tap: { scale: 0.95 }
  };

  return (
    <div className="flex absolute -left-4 lg:-left-8 right-0 top-1/2 -translate-y-1/2 justify-between pointer-events-none z-20">
      <motion.button
        variants={buttonVariants}
        initial="initial"
        animate={canScrollLeft ? "animate" : "initial"}
        whileHover={canScrollLeft ? "hover" : undefined}
        whileTap={canScrollLeft ? "tap" : undefined}
        onClick={onLeftClick}
        disabled={!canScrollLeft}
        className={`pointer-events-auto w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center border border-gray-200 transition-all duration-300 ${
          canScrollLeft ? 'text-gray-800 hover:shadow-xl' : 'text-gray-300 cursor-not-allowed'
        }`}
      >
        <ChevronLeft size={20} className="lg:w-5 lg:h-5" />
      </motion.button>

      <motion.button
        variants={buttonVariants}
        initial="initial"
        animate={canScrollRight ? "animate" : "initial"}
        whileHover={canScrollRight ? "hover" : undefined}
        whileTap={canScrollRight ? "tap" : undefined}
        onClick={onRightClick}
        disabled={!canScrollRight}
        className={`pointer-events-auto w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center border border-gray-200 transition-all duration-300 ${
          canScrollRight ? 'text-gray-800 hover:shadow-xl' : 'text-gray-300 cursor-not-allowed'
        }`}
      >
        <ChevronRight size={20} className="lg:w-5 lg:h-5" />
      </motion.button>
    </div>
  );
};

export default CarouselControls;