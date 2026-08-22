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
    <motion.div variants={headerVariants} className="flex flex-col items-center justify-center text-center mb-6 md:mb-8">
      <div className="inline-block mb-3">
        <span className="text-xs font-bold tracking-wider text-black bg-yellow-400 px-4 py-1.5 rounded-full uppercase">
          OUR RECENT WORK
        </span>
      </div>
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 leading-tight">
        Real Work. Real Results.
      </h2>
    </motion.div>
  );
};

export default ShowcaseHeader;