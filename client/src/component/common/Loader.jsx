import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ fullScreen = false }) => {
  const containerClasses = fullScreen 
    ? "fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
    : "w-full h-full min-h-[300px] flex items-center justify-center bg-transparent";

  return (
    <div className={containerClasses}>
      <div className="relative flex items-center justify-center">
        {/* Outer rotating ring */}
        <motion.div
          className="absolute w-16 h-16 rounded-full border-4 border-t-yellow-400 border-r-transparent border-b-yellow-400 border-l-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        {/* Inner rotating ring */}
        <motion.div
          className="absolute w-10 h-10 rounded-full border-4 border-t-transparent border-r-yellow-500 border-b-transparent border-l-yellow-500"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        {/* Center dot */}
        <motion.div
          className="w-3 h-3 bg-yellow-600 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Loader;
