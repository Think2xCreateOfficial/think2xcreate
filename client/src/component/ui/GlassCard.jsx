import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({ children, className = "", delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      className={`relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
