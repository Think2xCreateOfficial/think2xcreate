import React from 'react';
import { motion } from 'framer-motion';

export const BentoCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`rounded-3xl bg-surfaceLight border border-white/5 p-8 flex flex-col ${className}`}
    >
      {children}
    </motion.div>
  );
};
