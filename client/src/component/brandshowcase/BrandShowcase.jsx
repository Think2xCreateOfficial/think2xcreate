import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShowcaseHeader from './ShowcaseHeader';
import BrandCard from './BrandCard';
import { brands } from '../../utils/data/brandShowcaseData';

const filters = ['All', 'Websites', 'Meta Ads', 'Social Media', 'Branding', 'Photo & Video', 'SEO'];

const BrandShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredBrands = brands.filter(brand => {
    if (activeFilter === 'All') return true;
    const s = brand.services.join(' ').toLowerCase();
    if (activeFilter === 'Websites') return s.includes('web') || s.includes('e-commerce');
    if (activeFilter === 'Meta Ads') return s.includes('meta') || s.includes('performance');
    if (activeFilter === 'Social Media') return s.includes('social media');
    if (activeFilter === 'Branding') return s.includes('brand');
    if (activeFilter === 'Photo & Video') return s.includes('video') || s.includes('photo') || s.includes('3d');
    if (activeFilter === 'SEO') return s.includes('seo');
    return false;
  });

  return (
    <section
      id='brandshowcase'
      className="relative bg-[#fafafa] overflow-hidden py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ShowcaseHeader />

        {/* Filters */}
        <div className="flex justify-center mb-6 lg:mb-16">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-3 max-w-3xl">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === filter
                    ? 'bg-yellow-400 text-black shadow-sm'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-900'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project List (Timeline Motif) */}
        <div className="relative flex flex-col gap-16 md:gap-24 mt-8">

          {/* Vertical Connecting Line (hidden on small mobile for clean stack) */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-gray-200 -translate-x-1/2 z-0 border-l-2 border-dashed border-gray-300"></div>

          <AnimatePresence mode="popLayout">
            {filteredBrands.map((brand, index) => (
              <motion.div
                key={brand.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10"
              >
                <BrandCard brand={brand} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredBrands.length === 0 && (
            <div className="text-center py-12 text-gray-500 relative z-10">
              No projects found for this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;