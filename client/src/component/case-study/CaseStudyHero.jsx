import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Instagram, Facebook, Mail, MapPin, TrendingUp, Users } from 'lucide-react';

const CaseStudyHero = ({ brand }) => {
  return (
    <section className="relative min-h-[75vh] bg-yellow-300 overflow-hidden mt-[4.5rem] pb-2 lg:pb-4 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 gap-12 lg:gap-20 items-center">

          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Logo */}
            <div className="flex items-center gap-6 mb-8">
              <div
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-xl border border-white bg-white"
              >
                {brand.logo?.includes('.webp') || brand.logo?.includes('.png') || brand.logo?.includes('.jpg') || brand.logo?.includes('.svg') ? (
                  <img src={brand.logo} alt={`${brand.brandName} logo`} className="w-full h-full object-contain drop-shadow-md" />
                ) : (
                  <span className="text-5xl font-black" style={{ color: brand.colors?.primary || '#ffea00ff' }}>
                    {brand.logo}
                  </span>
                )}
              </div>
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-gray-200 mb-2 text-gray-600"
                >
                  {brand.category}
                </motion.span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  {brand.brandName}
                </h1>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
            >
              {brand.description || brand.tagline}
            </motion.p>

            {/* Contact / Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 items-center"
            >
              {/* Website Link */}
              {brand.website && (
                <a 
                  href={brand.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-sm font-medium text-gray-700 hover:shadow-md transition-all hover:scale-105"
                >
                  <Globe size={16} style={{ color: brand.colors?.primary }} />
                  Website
                </a>
              )}
              {/* Instagram Link */}
              {brand.instagram && (
                <a 
                  href={brand.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-sm font-medium text-gray-700 hover:shadow-md transition-all hover:scale-105"
                >
                  <Instagram size={16} style={{ color: brand.colors?.primary }} />
                  Instagram
                </a>
              )}

              {/* Facebook Link */}
              {brand.facebook && (
                <a 
                  href={brand.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-sm font-medium text-gray-700 hover:shadow-md transition-all hover:scale-105"
                >
                  <Facebook size={16} style={{ color: brand.colors?.primary }} />
                  Facebook
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
