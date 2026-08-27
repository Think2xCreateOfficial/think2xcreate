import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Sparkles, Compass, Lightbulb, Zap, Rocket } from 'lucide-react';

// Spotlight Bento Card Component
const BentoSpotlightCard = ({ item, index }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Maps index to a dynamic Lucide Icon
  const getStepIcon = (idx) => {
    switch (idx) {
      case 0: return <Compass className="w-6 h-6 text-yellow-600" />;
      case 1: return <Lightbulb className="w-6 h-6 text-yellow-600" />;
      case 2: return <Zap className="w-6 h-6 text-yellow-600" />;
      case 3: return <Rocket className="w-6 h-6 text-yellow-600" />;
      default: return <Sparkles className="w-6 h-6 text-yellow-600" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className={`relative rounded-3xl bg-white border border-gray-150 p-8 flex flex-col justify-between overflow-hidden group shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-200/80 hover:-translate-y-1 ${item.size || 'col-span-1'}`}
      style={{ cursor: 'default' }}
    >
      {/* Spotlight overlay effect */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(234, 179, 8, 0.11), transparent 80%)`
        }}
      />

      {/* Decorative subtle ambient border glow on hover */}
      <div 
        className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-yellow-400/20 rounded-3xl transition-all duration-500"
        style={{
          maskImage: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, black, transparent)`
        }}
      />

      <div className="relative z-10 flex flex-col gap-6">
        {/* Step Header */}
        <div className="flex justify-between items-center w-full">
          {/* Icon frame */}
          <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-gray-900 transition-colors duration-300">
            {getStepIcon(index)}
          </div>
          {/* Counter tag */}
          <span className="text-sm font-black text-gray-300 uppercase tracking-widest font-mono group-hover:text-yellow-600 transition-colors duration-300">
            {item.step}
          </span>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl md:text-2xl font-display font-black text-gray-900 mb-3 group-hover:text-yellow-950 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed font-medium group-hover:text-gray-600 transition-colors duration-300">
            {item.description}
          </p>
        </div>
      </div>

      {/* Bottom accent glow bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

export const ServiceProcess = ({ data }) => {
  return (
    <section className="py-6 relative overflow-hidden bg-[#FDFBF4]">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-[-15%] w-[400px] h-[400px] bg-yellow-200/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-6">
          <SectionHeading 
            title="How We Deliver 2x Impact" 
            subtitle="The Workflow" 
            align="left"
            className="!mb-0"
          />
          <p className="text-gray-400 text-sm font-bold max-w-sm border-l-2 border-yellow-400 pl-4 py-1 leading-snug">
            We operate in speed-optimized development, targeting research and high-tempo scaling cycles. No generic agency bloat.
          </p>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {data.process.map((item, index) => (
            <BentoSpotlightCard 
              key={index} 
              item={item} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
