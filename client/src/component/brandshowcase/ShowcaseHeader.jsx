// src/components/brand/showcase/ShowcaseHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ShowcaseHeader = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <motion.div variants={headerVariants} className="text-center md:text-left mb-4">
      <div className="inline-block mb-2">
        <span className="text-xs md:text-sm font-semibold tracking-wider text-amber-600 bg-amber-50/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200/50">
          PORTFOLIO
        </span>
      </div>
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 md:mb-6 leading-[1.1]">
        Brands We
        <span className="block mt-2 bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
          Helped Grow
        </span>
      </h2>
      
      <p className="text-base md:text-md text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
        Real businesses. Real transformation. Real digital impact.
        <span className="text-sm text-gray-500 mt-2">Trusted by industry leaders worldwide</span>
      </p>
    </motion.div>
  );
};

export default ShowcaseHeader;