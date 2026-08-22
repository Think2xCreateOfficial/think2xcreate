import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Play, X, Clock, Video, Eye, Award, ArrowLeft, ArrowRight } from 'lucide-react';
import { BeforeAfterSlider } from './ProofShowcase';

// Local Reusable Horizontal Scroll Carousel Wrapper
const HorizontalCarousel = ({ children }) => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.75;
    scrollRef.current.scrollTo({
      left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative group/carousel w-full">
      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>

      {/* Glass navigation arrows */}
      <div className="flex justify-center md:justify-end gap-3 mt-4">
        <button
          onClick={() => scroll('left')}
          type="button"
          aria-label="Scroll left"
          className="w-12 h-12 rounded-full border border-gray-200 bg-white/60 hover:bg-yellow-500 hover:border-yellow-500 hover:text-gray-900 backdrop-blur-md flex items-center justify-center text-gray-700 shadow-sm transition-all duration-300 active:scale-95"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          type="button"
          aria-label="Scroll right"
          className="w-12 h-12 rounded-full border border-gray-200 bg-white/60 hover:bg-yellow-500 hover:border-yellow-500 hover:text-gray-900 backdrop-blur-md flex items-center justify-center text-gray-700 shadow-sm transition-all duration-300 active:scale-95"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export const VideoProof = ({ data }) => {
  // Only render for video editing
  if (data.id !== 'video-editing') return null;

  const [activeTab, setActiveTab] = useState('photo'); // 'photo' or 'video'
  const [activeVideo, setActiveVideo] = useState(null);

  // Group photos vs videos
  const photoItems = data.proof.filter(item => item.category === 'photo');
  const videoItems = data.proof.filter(item => item.category === 'video');

  const beforeAfterSliders = photoItems.filter(item => item.isSlider);
  const staticPhotos = photoItems.filter(item => !item.isSlider);

  return (
    <section className="py-12 bg-white border-t border-gray-150 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-yellow-200/10 rounded-full blur-[85px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading
          title="Photo & Video Editing"
          subtitle="Creative Verification"
          align="center"
        />

        {/* Animated Filter Tabs */}
        <div className="flex justify-center gap-4 mt-8 mb-6">
          <button
            onClick={() => setActiveTab('photo')}
            type="button"
            className={`relative px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 border ${activeTab === 'photo'
                ? 'bg-yellow-500 text-gray-900 border-yellow-500 shadow-[0_4px_20px_rgba(234,179,8,0.35)]'
                : 'bg-white/60 text-gray-500 border-gray-200 hover:text-gray-900 hover:border-gray-300'
              }`}
          >
            Photo Editing
          </button>
          <button
            onClick={() => setActiveTab('video')}
            type="button"
            className={`relative px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 border ${activeTab === 'video'
                ? 'bg-yellow-500 text-gray-900 border-yellow-500 shadow-[0_4px_20px_rgba(234,179,8,0.35)]'
                : 'bg-white/60 text-gray-500 border-gray-200 hover:text-gray-900 hover:border-gray-300'
              }`}
          >
            Video Editing
          </button>
        </div>

        {/* Tab Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === 'photo' ? (
            <motion.div
              key="photo-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-12"
            >
              {/* Before/After Sliders Grid */}
              {beforeAfterSliders.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                    Interactive Color Grading (Before vs After)
                  </h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    {beforeAfterSliders.map(item => (
                      <div key={item.id} className="bg-gray-50/50 p-4 rounded-3xl border border-gray-100 shadow-sm">
                        <BeforeAfterSlider item={item} />
                        <div className="mt-4 px-2">
                          <h5 className="text-sm font-black text-gray-800">{item.title}</h5>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">{item.stats}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Static Graphics Showcase Slider */}
              {staticPhotos.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                    Commercial Graphic Designs
                  </h4>
                  <HorizontalCarousel>
                    {staticPhotos.map((item) => (
                      <div
                        key={item.id}
                        className="w-[70vw] sm:w-[320px] flex-shrink-0 snap-start bg-white border border-gray-150/70 rounded-3xl overflow-hidden shadow-sm relative group/photo aspect-[4/5]"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/photo:scale-105"
                          draggable="false"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85" />
                        <div className="absolute top-4 left-4">
                          <span className="text-[9px] font-black uppercase bg-yellow-505 bg-yellow-500 text-gray-900 px-2.5 py-1 rounded-md shadow">
                            {item.stats}
                          </span>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex flex-col gap-1 pointer-events-none">
                          <span className="text-[8px] font-bold text-yellow-400 uppercase tracking-widest leading-none">Studio Retouch</span>
                          <h3 className="text-sm font-display font-black text-white truncate leading-tight">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </HorizontalCarousel>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="video-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Videos Slider */}
              <HorizontalCarousel>
                {videoItems.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveVideo(item)}
                    className="w-[80vw] sm:w-[450px] aspect-video flex-shrink-0 snap-start group relative rounded-3xl overflow-hidden bg-gray-900 border border-gray-150 cursor-pointer shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 select-none"
                  >
                    {/* Thumbnail Image Cover */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-103"
                      draggable="false"
                    />

                    {/* Cinematic Shadow overlay fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />

                    {/* Glassmorphic Play button container */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 flex items-center justify-center transition-all duration-300 transform scale-100 group-hover:scale-110 shadow-[0_10_25_rgba(234,179,8,0.4)] border-4 border-white">
                        <Play className="w-5 h-5 fill-gray-900 ml-1 text-gray-900" />
                      </div>
                    </div>

                    {/* Floating metrics & video specifications */}
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <span className="text-[9px] font-black uppercase bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-yellow-400" /> {item.length}
                      </span>
                    </div>

                    <div className="absolute top-4 left-4">
                      <span className="text-[9px] font-black uppercase bg-yellow-500 text-gray-900 px-2.5 py-1 rounded-md shadow">
                        {item.stats}
                      </span>
                    </div>

                    {/* Bottom Label description */}
                    <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col gap-1.5 z-15">
                      <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest leading-none">Edited by Think2xCreate</span>
                      <h3 className="text-base md:text-lg font-display font-black text-white truncate leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </HorizontalCarousel>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox YouTube Player Modal (Framer Motion popup) */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            {/* Close button at top-right corner */}
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15"
              onClick={() => setActiveVideo(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full max-w-4xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src={`${activeVideo.ytUrl}?autoplay=1&controls=1&rel=0&modestbranding=1`}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
