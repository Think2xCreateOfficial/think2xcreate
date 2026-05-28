// src/components/brand/showcase/BrandShowcase.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import ShowcaseHeader from './ShowcaseHeader';
import BrandCard from './BrandCard';
import CarouselControls from './CarouselControls';
import { brands } from '../../utils/data/brandShowcaseData';
import useHorizontalScroll from '../../hooks/useHorizontalScroll';

const BrandShowcase = () => {
  const scrollContainerRef = useRef(null);
  const { scrollLeft, scrollRight, canScrollLeft, canScrollRight } = useHorizontalScroll(scrollContainerRef);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.section
      id='brandshowcase'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className="relative bg-[#FDFBF4] overflow-hidden py-4 md:py-8 lg:py-10"
    >
      {/* Ambient Glow Elements */}
      <div className="absolute top-24 left-1/4 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl pointer-events-none" style={{ willChange: 'transform' }} />
      <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-yellow-100/60 rounded-full blur-2xl pointer-events-none" style={{ willChange: 'transform' }} />
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <ShowcaseHeader />
        
        <div className="relative mt-2 md:mt-4 lg:mt-6">
          {/* Carousel Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth hide-scrollbar gap-5 md:gap-6 lg:gap-8 pb-4 md:pb-6"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              cursor: 'grab'
            }}
          >
            {brands.map((brand, index) => (
              <div
                key={brand.id}
                className="flex-shrink-0 w-[300px] md:w-[320px] lg:w-[380px] scroll-snap-align-start"
                style={{ scrollSnapAlign: 'start' }}
              >
                <BrandCard brand={brand} index={index} />
              </div>
            ))}
          </div>
          
          <CarouselControls
            onLeftClick={scrollLeft}
            onRightClick={scrollRight}
            canScrollLeft={canScrollLeft}
            canScrollRight={canScrollRight}
          />
        </div>
      </div>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.section>
  );
};

export default BrandShowcase;