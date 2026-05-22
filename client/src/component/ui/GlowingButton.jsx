import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const GlowingButton = ({ children, href, onClick, className = "", variant = "primary" }) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full group overflow-hidden";
  
  const variants = {
    primary: "bg-primary hover:bg-blue-600",
    secondary: "bg-surfaceLight border border-white/10 hover:border-white/30",
    accent: "bg-accent hover:bg-teal-600"
  };

  const Content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      )}
      <div className="absolute -inset-1 rounded-full blur-md bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </>
  );

  if (href) {
    return (
      <Link to={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {Content}
      </Link>
    );
  }

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {Content}
    </motion.button>
  );
};
