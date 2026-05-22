import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Shield, Sparkles, Award } from 'lucide-react';

export const ServiceTools = ({ data }) => {
  return (
    <section className="py-6 relative overflow-hidden bg-white border-y border-gray-150/45">
      {/* Background soft mesh orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] bg-yellow-200/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-yellow-100/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <SectionHeading 
          title="Our Premium Arsenal" 
          subtitle="Tech Stack & Tools" 
          align="center"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {data.tools.map((tool, index) => {
            const ToolIcon = tool.icon;
            
            return (
              <motion.div
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.04)",
                  borderColor: "rgba(234, 179, 8, 0.3)"
                }}
                className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-md border border-gray-150 p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 select-none shadow-sm"
              >
                {/* Floating white background reflection layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                
                {/* Icon box wrapper with radial yellow glow on hover */}
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/10 flex items-center justify-center text-yellow-600 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-gray-900 group-hover:rotate-6">
                  <ToolIcon className="w-8 h-8" />
                </div>
                
                {/* Label content */}
                <div>
                  <h4 className="font-display font-black text-gray-900 text-base mb-1 group-hover:text-yellow-900 transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-[150px] mx-auto">
                    {tool.description}
                  </p>
                </div>

                {/* Subtle top light highlight bar */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>

        {/* Small trust banner below stack */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center gap-2 mt-16 text-xs font-bold text-gray-400 uppercase tracking-widest text-center"
        >
          <Award className="w-4 h-4 text-yellow-500" />
          <span>Industry Standard Quality & Ultra Performance Optimized</span>
        </motion.div>
      </div>
    </section>
  );
};
