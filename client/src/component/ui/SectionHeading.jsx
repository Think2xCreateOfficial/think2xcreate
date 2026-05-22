import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({ title, subtitle, align = "center", className = "" }) => {
  const alignments = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto"
  };

  return (
    <div className={`max-w-3xl mb-4 ${alignments[align]} ${className}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-yellow-500 font-medium tracking-wider uppercase text-sm md:text-lg mb-4 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-900 text-3xl md:text-4xl font-display font-bold tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
};
