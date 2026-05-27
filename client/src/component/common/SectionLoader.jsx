import React from 'react';
import { motion } from 'framer-motion';

const SectionLoader = ({ height = "min-h-[300px]" }) => {
  return (
    <div className={`w-full flex items-center justify-center bg-gray-50 rounded-2xl ${height}`}>
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-8 h-8 border-2 border-gray-200 border-t-yellow-400 rounded-full"
      />
    </div>
  );
};

export default SectionLoader;
