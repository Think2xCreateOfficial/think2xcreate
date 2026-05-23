import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import {
  ExternalLink, ThumbsUp, MessageCircle,
  Send, ArrowLeft, ArrowRight, Activity,
  ArrowLeftRight, HeartIcon, EyeIcon, MessageSquare
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   1. BEFORE/AFTER SLIDER COMPONENT (Exported — used by VideoProof.jsx)
   ────────────────────────────────────────────────────────────────────────── */
export const BeforeAfterSlider = ({ item }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp   = () => { isDragging.current = false; };

  useEffect(() => {
    const handleGlobalMouseUp = () => { isDragging.current = false; };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Draggable comparison container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-gray-200 cursor-ew-resize select-none"
      >
        {/* Edited Image — Base Layer (right side visible) */}
        <img
          src={item.editedImage}
          alt="Edited"
          className="absolute inset-0 w-full h-full object-cover"
          draggable="false"
        />
        <div className="absolute right-4 bottom-4 bg-yellow-500 text-gray-900 text-xs font-black uppercase px-3 py-1.5 rounded-lg z-10 border border-yellow-400/20 shadow">
          Cinematic Grade
        </div>

        {/* Raw Image — Clip Layer (left side, width controlled by slider) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={item.rawImage}
            alt="Raw"
            className="absolute inset-y-0 left-0 h-full object-cover"
            style={{
              width: containerRef.current ? containerRef.current.offsetWidth : '100%',
              maxWidth: 'none',
            }}
            draggable="false"
          />
          <div className="absolute left-4 bottom-4 bg-gray-900/80 text-white text-xs font-bold uppercase px-3 py-1.5 rounded-lg z-10 border border-white/10 shadow">
            Raw Camera Log
          </div>
        </div>

        {/* Vertical Divider Handle */}
        <div
          className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 flex items-center justify-center shadow-2xl border-4 border-white transition-all active:scale-90">
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Drag hint label */}
      <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest select-none">
        ← Drag to Compare →
      </p>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
   2. HORIZONTAL DRAG-TO-SCROLL CAROUSEL (Internal — not exported)
   ────────────────────────────────────────────────────────────────────────── */
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

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp    = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({
      left: direction === 'left'
        ? scrollLeft - clientWidth * 0.75
        : scrollLeft + clientWidth * 0.75,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative group/carousel w-full">
      {/* Scrollable strip */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
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

/* ──────────────────────────────────────────────────────────────────────────
   3. MAIN ProofShowcase COMPONENT
   ────────────────────────────────────────────────────────────────────────── */
export const ProofShowcase = ({ data }) => {
  // video-editing proof is handled entirely by VideoProof.jsx
  if (data.id === 'video-editing') return null;

  const renderContent = () => {
    switch (data.id) {

      /* ── A. WEBSITE DEVELOPMENT — staggered browser + mobile frames ── */
      case 'website-development':
        return (
          <div className="mt-8">
            <HorizontalCarousel>
              {data.proof.map((item) => (
                <div
                  key={item.id}
                  className="w-[85vw] md:w-[750px] lg:w-[950px] flex-shrink-0 snap-start grid lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] relative overflow-hidden group/card"
                >
                  {/* Left: Browser + overlapping mobile mockup */}
                  <div className="lg:col-span-7 relative flex items-center justify-center">
                    <motion.div className="relative w-full max-w-[500px] bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden group/browser">
                      {/* Browser address bar */}
                      <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        <div className="bg-white border border-gray-200 rounded px-2 py-0.5 text-[8px] text-gray-400 w-32 text-center mx-auto">
                          {item.url ? new URL(item.url).hostname : 'client-preview.com'}
                        </div>
                      </div>

                      {/* Page mockup with hover zoom */}
                      <div className="relative overflow-hidden aspect-[16/10]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                          draggable="false"
                        />
                        {item.url && (
                          <a href={item.url} target='_blank' className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover/browser:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="bg-white/90 text-gray-900 text-xs font-black px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-lg">
                              View Live Site <ExternalLink className="w-3.5 h-3.5" />
                            </span>
                          </a>
                        )}
                      </div>
                    </motion.div>

                    {/* Overlapping mobile device frame */}
                    <motion.div className="absolute bottom-[-10px] right-[2%] sm:right-[5%] w-[150px] aspect-[9/18] bg-gray-900 rounded-[28px] p-2 shadow-2xl border-4 border-gray-800 overflow-hidden hidden sm:block group-hover/card:translate-y-[-5px] transition-transform duration-500">
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-gray-800 rounded-full z-20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                      </div>
                      <div className="w-full h-full rounded-[20px] overflow-hidden bg-white">
                        <img
                          src={item.mobileImage}
                          alt="Mobile Mock"
                          className="w-full h-full object-cover"
                          draggable="false"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Right: Text + stats */}
                  <div className="lg:col-span-5 flex flex-col gap-5">
                    <div>
                      <span className="text-xs font-bold text-yellow-600 bg-yellow-500/10 px-3 py-1 rounded-full uppercase tracking-widest border border-yellow-500/20 mb-3 inline-block">
                        {item.type}
                      </span>
                      <h3 className="text-2xl font-display font-black text-gray-900 leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                      We designed this layout with bespoke interactive animations, lightweight vector visuals, and streamlined React page code. Mobile views load instantly under 1s.
                    </p>

                    <div className="bg-yellow-500/5 border border-yellow-500/15 rounded-2xl p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-yellow-500/15 flex items-center justify-center text-yellow-700">
                        <Activity className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Performance Result</p>
                        <p className="text-base font-black text-yellow-950">{item.stats}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-bold text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg">
                          {t}
                        </span>
                      ))}
                    </div>

                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs font-bold text-gray-800 hover:text-yellow-600 transition-colors gap-2 w-fit pt-2 border-b-2 border-transparent hover:border-yellow-400"
                      >
                        Explore Active Website <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </HorizontalCarousel>
          </div>
        );

      /* ── B. META ADS — feed ad preview + live stats card ── */
      case 'meta-ads':
        return (
          <div className="mt-8">
            <HorizontalCarousel>
              {data.proof.map((item) => (
                <div
                  key={item.id}
                  className="w-[90vw] md:w-[750px] lg:w-[950px] flex-shrink-0 snap-start grid md:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] relative overflow-hidden group/card"
                >
                  {/* Left: Simulated Meta Ad Feed */}
                  <div className="md:col-span-6 flex justify-center">
                    <div className="w-full max-w-[340px] bg-white rounded-2xl border border-gray-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.03)] overflow-hidden">
                      {/* Ad header */}
                      <div className="p-3.5 flex items-center gap-3 border-b border-gray-50">
                        <div className="w-9 h-9 rounded-full bg-yellow-500 flex items-center justify-center font-black text-gray-900 text-[10px]">
                          T2XC
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xs font-black text-gray-900 flex items-center gap-1">
                            Think2xCreate
                            <span className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center text-[6px] text-white font-bold">✓</span>
                          </h4>
                          <p className="text-[8px] text-gray-400 font-semibold uppercase">Sponsored</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600 font-bold select-none text-xs">•••</button>
                      </div>

                      {/* Ad copy */}
                      <div className="px-3.5 py-2 text-[11px] text-gray-800 font-medium leading-relaxed">
                        {item.adCopy}
                      </div>

                      {/* Ad image */}
                      <div className="aspect-[4/3] bg-gray-50 overflow-hidden border-y border-gray-50 select-none relative">
                        <img
                          src={item.adImage}
                          alt="Ad mockup visual"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                          draggable="false"
                        />
                        <div className="absolute top-3 right-3">
                          <span className="text-[9px] font-black uppercase bg-yellow-500/90 text-gray-900 px-2.5 py-1 rounded-full shadow backdrop-blur-sm">
                            Live Ad Preview
                          </span>
                        </div>
                      </div>

                      {/* Ad link frame */}
                      <div className="bg-gray-50 px-3.5 py-2.5 flex items-center justify-between border-b border-gray-100">
                        <div className="flex-1 min-w-0 pr-2">
                          <p className="text-[7px] text-gray-400 font-bold uppercase tracking-wider">THINK2XCREATE.COM</p>
                          <h4 className="text-xs font-black text-gray-900 truncate">{item.adHeadline}</h4>
                        </div>
                        <button className="bg-white border border-gray-200 hover:bg-gray-100 text-[9px] font-bold text-gray-800 px-3 py-1.5 rounded-lg select-none">
                          {item.adCta}
                        </button>
                      </div>

                      {/* Feed interactions */}
                      <div className="px-3.5 py-2.5 flex items-center justify-between text-[9px] text-gray-400 bg-white select-none">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
                            <ThumbsUp className="w-3 h-3" /> 142
                          </span>
                          <span className="flex items-center gap-1 hover:text-yellow-600 cursor-pointer">
                            <MessageCircle className="w-3 h-3" /> 28 Comments
                          </span>
                        </div>
                        <span className="hover:text-gray-600 cursor-pointer flex items-center gap-1">
                          <Send className="w-3 h-3" /> Share
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Live campaign results */}
                  <div className="md:col-span-6 flex flex-col gap-5">
                    <div>
                      <span className="text-xs font-bold text-yellow-600 bg-yellow-500/10 px-3 py-1 rounded-full uppercase tracking-widest border border-yellow-500/20 mb-3 inline-block">
                        Case Performance
                      </span>
                      <h3 className="text-2xl font-display font-black text-gray-900 leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                      This account was scaled with creative A/B testing and local interest targeting. The CTR jumped immediately by 2.5x compared to standard industry averages.
                    </p>

                    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 shadow-sm">
                      <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                        <Activity className="w-3.5 h-3.5 text-yellow-500" />
                        <h4 className="text-[10px] font-black uppercase text-gray-800">Verified Campaign Dashboard</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 border border-gray-100 rounded-lg p-2.5">
                          <p className="text-[8px] font-bold text-gray-400 uppercase">Total Spend</p>
                          <p className="text-sm font-black text-gray-800">{item.campaignStats.spend}</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-100 rounded-lg p-2.5">
                          <p className="text-[8px] font-bold text-gray-400 uppercase">Leads Captured</p>
                          <p className="text-sm font-black text-gray-800">{item.campaignStats.leads}</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-100 rounded-lg p-2.5">
                          <p className="text-[8px] font-bold text-gray-400 uppercase">Cost Per Lead (CPL)</p>
                          <p className="text-sm font-black text-amber-700">{item.campaignStats.costPerLead}</p>
                        </div>
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-2.5">
                          <p className="text-[8px] font-bold text-yellow-800 uppercase">ROAS Performance</p>
                          <p className="text-sm font-black text-yellow-950">{item.campaignStats.roas}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </HorizontalCarousel>
          </div>
        );

      /* ── C. SOCIAL MEDIA — Dribbble-style engagement cards ── */
      case 'social-media':
        return (
          <div className="mt-8">
            <HorizontalCarousel>
              {data.proof.map((item) => (
                <a
                  href={item.url}
                  target='_blank'
                  key={item.id}
                  className="w-[75vw] sm:w-[320px] flex-shrink-0 snap-start bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm relative group/card aspect-[4/5]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80" />

                  {/* Media type badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] font-black uppercase bg-yellow-500 text-gray-900 px-3 py-1 rounded-full shadow">
                      {item.type}
                    </span>
                  </div>

                  {/* Glassmorphic hover interaction counts */}
                  <div className="absolute inset-0 bg-black/45 backdrop-blur-sm opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white z-10 pointer-events-none">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                        <HeartIcon className="w-4 h-4 text-red-400 fill-red-400" />
                      </div>
                      <span className="text-[10px] font-bold">{item.likes}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                        <EyeIcon className="w-4 h-4 text-yellow-400" />
                      </div>
                      <span className="text-[10px] font-bold">{item.stats}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                        <MessageSquare className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="text-[10px] font-bold">{item.comments}</span>
                    </div>
                  </div>

                  {/* Bottom info frame */}
                  <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex flex-col gap-1.5 pointer-events-none">
                    <span className="text-[9px] font-bold text-yellow-400 uppercase tracking-widest leading-none">Organic Campaign</span>
                    <h3 className="text-base font-display font-black text-white leading-tight truncate">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[9px] text-gray-300 font-bold">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span>Engagement: {item.stats}</span>
                    </div>
                  </div>
                </a>
              ))}
            </HorizontalCarousel>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="featured-work" className="py-12 bg-[#FDFBF4] border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading
          title="Creative Verification"
          subtitle="Case Proofs"
          align="center"
        />
        {renderContent()}
      </div>
    </section>
  );
};
