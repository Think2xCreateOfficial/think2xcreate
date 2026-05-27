import React from 'react';
import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white backdrop-blur-sm bg-opacity-95">
      <div className="relative flex flex-col items-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="w-16 h-16 border-[3px] border-gray-100 border-t-yellow-400 rounded-full mb-6"
        />
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
          className="text-gray-900 font-extrabold tracking-[0.2em] uppercase text-xs"
        >
          Loading
        </motion.div>
      </div>
    </div>
  );
};

export default PageLoader;
