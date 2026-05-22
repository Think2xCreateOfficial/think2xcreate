import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Play, CheckCircle2, TrendingUp, DollarSign, Users, Award, ShieldCheck, X } from 'lucide-react';

export const ServiceHero = ({ data }) => {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const IconComponent = data.icon;

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Render high-fidelity custom SaaS/agency mockup based on service ID
  const renderInteractiveMockup = () => {
    switch (data.id) {
      case "website-development":
        return (
          <div className="relative w-full max-w-[480px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
            {/* Browser top bar */}
            <div className="bg-gray-50 border-b border-gray-100 px-4 py-3.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="bg-white border border-gray-200/60 rounded-lg px-3 py-1 text-[10px] text-gray-400 flex items-center gap-1.5 w-44 mx-auto select-none">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                <span>vanguard-retail.com</span>
              </div>
            </div>

            {/* Browser mock content */}
            <div className="p-6 bg-white flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="h-5 w-24 bg-gray-100 rounded" />
                <div className="h-6 w-16 bg-yellow-400 rounded-lg" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100/60 flex flex-col gap-1">
                  <span className="text-[9px] font-bold text-gray-400 uppercase">Load Time</span>
                  <span className="text-sm font-black text-gray-800">0.4s</span>
                </div>
                <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100/60 flex flex-col gap-1">
                  <span className="text-[9px] font-bold text-gray-400 uppercase">Core Web Vitals</span>
                  <span className="text-sm font-black text-emerald-600">Passed</span>
                </div>
                <div className="bg-yellow-50 rounded-2xl p-3 border border-yellow-100 flex flex-col gap-1">
                  <span className="text-[9px] font-bold text-yellow-700 uppercase">Growth</span>
                  <span className="text-sm font-black text-yellow-800">+185%</span>
                </div>
              </div>

              {/* Dynamic Simulated chart */}
              <div className="border border-gray-100 rounded-2xl p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-600">Conversion Rate Over Time</span>
                  <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">+6.2% Max</span>
                </div>
                <div className="flex items-end gap-2 h-20 pt-4">
                  {[20, 35, 48, 62, 55, 78, 92, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.05) }}
                      className={`flex-1 rounded-t-sm ${i === 7 ? 'bg-yellow-500' : 'bg-gray-200'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Absolute floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-gray-900 text-white rounded-2xl p-4 shadow-xl border border-white/10 flex items-center gap-3 select-none"
            >
              <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-gray-900">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">Average SEO Score</p>
                <p className="text-base font-black text-yellow-400">99 / 100</p>
              </div>
            </motion.div>
          </div>
        );

      case "meta-ads":
        return (
          <div className="relative w-full max-w-[480px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 p-6 flex flex-col gap-5">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold">M</div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800">Campaign Manager</h4>
                  <p className="text-[9px] text-gray-400">Active Ad Sets</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live delivery
              </span>
            </div>

            {/* ROAS Indicator */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 flex flex-col gap-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Average Campaign ROAS</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black text-gray-800">4.82x</span>
                  <span className="text-xs font-bold text-emerald-500">+12%</span>
                </div>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4 flex flex-col gap-1">
                <span className="text-[10px] font-bold text-yellow-800 uppercase">CPL (Average Cost)</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black text-yellow-950">₹84.50</span>
                  <span className="text-xs font-bold text-emerald-600">-45%</span>
                </div>
              </div>
            </div>

            {/* Campaign results preview */}
            <div className="border border-gray-100 rounded-2xl p-4 flex flex-col gap-3">
              <span className="text-[10px] font-bold text-gray-600">Weekly Lead Stream</span>
              <div className="flex items-center justify-between text-xs py-1 border-b border-gray-50">
                <span className="text-gray-500">Facebook Feed Static</span>
                <span className="font-bold text-gray-800">452 leads</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1 border-b border-gray-50">
                <span className="text-gray-500">Instagram Reels Video</span>
                <span className="font-bold text-gray-800">628 leads</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1">
                <span className="text-gray-500">Stories Carousel Hook</span>
                <span className="font-bold text-gray-800">340 leads</span>
              </div>
            </div>

            {/* Absolute floating tag */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 bg-gray-900 text-white rounded-2xl px-4 py-3 shadow-xl border border-white/10 flex items-center gap-2 select-none"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400">Total Value Generated</p>
                <p className="text-sm font-black text-emerald-400">₹14,52,000</p>
              </div>
            </motion.div>
          </div>
        );

      case "social-media":
        return (
          <div className="relative w-full max-w-[420px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 p-5 flex flex-col gap-4 mx-auto">
            {/* Smartphone style profile header */}
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-12 h-12 rounded-full border-2 border-yellow-400 p-0.5">
                <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-gray-800 flex items-center gap-1">
                  Think2xCreate
                  <div className="w-3.5 h-3.5 bg-yellow-400 rounded-full flex items-center justify-center text-[8px] font-bold">✓</div>
                </h4>
                <p className="text-[9px] text-gray-400">Creative Digital Agency</p>
              </div>
            </div>

            {/* Profile stats */}
            <div className="grid grid-cols-3 text-center py-1">
              <div>
                <p className="text-xs font-black text-gray-800">142</p>
                <p className="text-[9px] text-gray-400 uppercase font-semibold">Posts</p>
              </div>
              <div>
                <p className="text-xs font-black text-gray-800">15.4k</p>
                <p className="text-[9px] text-gray-400 uppercase font-semibold">Followers</p>
              </div>
              <div>
                <p className="text-xs font-black text-gray-800">+350%</p>
                <p className="text-[9px] text-gray-400 uppercase font-semibold">Reach</p>
              </div>
            </div>

            {/* Dynamic Grid preview */}
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&auto=format&fit=crop" alt="grid" className="w-full h-full object-cover" />
                <span className="absolute bottom-1 right-1 text-[8px] font-bold px-1 py-0.5 rounded bg-black/60 text-white">Reel</span>
              </div>
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=200&auto=format&fit=crop" alt="grid" className="w-full h-full object-cover" />
                <span className="absolute bottom-1 right-1 text-[8px] font-bold px-1 py-0.5 rounded bg-black/60 text-white">Slide</span>
              </div>
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1700049041375-05d91de1a4fd?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="grid" className="w-full h-full object-cover" />
                <span className="absolute bottom-1 right-1 text-[8px] font-bold px-1 py-0.5 rounded bg-black/60 text-white">Reel</span>
              </div>
            </div>

            {/* Engagement overlay box */}
            <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-yellow-600" />
                <div>
                  <p className="text-[9px] font-bold text-yellow-800">Monthly Viral Views</p>
                  <p className="text-sm font-black text-yellow-950">1.2M+ Reach</p>
                </div>
              </div>
              <span className="text-[9px] font-bold bg-yellow-400 text-yellow-950 px-2 py-1 rounded-lg">Active pillars</span>
            </div>
          </div>
        );

      case "video-editing":
        return (
          <div className="relative w-full max-w-[480px] bg-gray-900 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-gray-800 overflow-hidden text-white">
            {/* Editor Top Bar */}
            <div className="bg-gray-950 px-4 py-3 flex items-center justify-between border-b border-gray-800 select-none">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded bg-yellow-500 flex items-center justify-center text-[9px] text-gray-950 font-black">Pr</div>
                <span className="text-[10px] font-bold text-gray-400">Post-Production Timeline</span>
              </div>
              <span className="text-[9px] font-bold bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-2 py-0.5 rounded">60 FPS</span>
            </div>

            {/* Video preview monitor */}
            <div className="aspect-video relative bg-black flex items-center justify-center">
              <img src="https://img.youtube.com/vi/KEnSD4Xx7Ig/hqdefault.jpg" alt="Monitor preview" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <button
                onClick={() => setShowreelOpen(true)}
                type="button"
                aria-label="Play showreel"
                className="absolute w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-white/30 transition-all shadow-lg"
              >
                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
              </button>
              <span className="absolute bottom-3 left-3 text-[10px] font-mono text-yellow-400">00:01:20:00</span>
              <span className="absolute bottom-3 right-3 text-[10px] font-mono text-gray-400">Cinema 4K</span>
            </div>

            {/* Audio Waveform/Timeline tracks */}
            <div className="p-4 bg-gray-950 flex flex-col gap-3">
              {/* Video Track */}
              <div className="flex items-center gap-2">
                <span className="text-[8px] font-mono text-gray-400 w-4">V1</span>
                <div className="flex-1 bg-yellow-500/20 border border-yellow-500/30 rounded px-2.5 py-1 text-[9px] font-bold text-yellow-400 flex items-center justify-between">
                  <span>Resort_Anthem_Final_Grade.mp4</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Audio Track */}
              <div className="flex items-center gap-2">
                <span className="text-[8px] font-mono text-gray-400 w-4">A1</span>
                <div className="flex-1 bg-cyan-500/20 border border-cyan-500/30 rounded px-2.5 py-1 text-[9px] font-bold text-cyan-400 flex items-center justify-between">
                  <span>Immersive_Sound_Design_Reverb.wav</span>
                  <div className="flex gap-0.5 items-end h-3">
                    {[2, 8, 4, 10, 6, 3, 7].map((h, i) => (
                      <div key={i} className="w-0.5 bg-cyan-400" style={{ height: `${h * 10}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <section className="relative pt-24 md:pt-30 pb-6 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Text Block */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              {/* Service Category Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4"
              >
                <IconComponent className="w-4 h-4 text-yellow-600" />
                <span className="text-xs font-bold tracking-wider text-yellow-800 uppercase">{data.title}</span>
              </motion.div>

              {/* Subtitle - Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl xl:text-5xl font-display font-black text-gray-900 leading-[1.08] tracking-tight mb-6"
              >
                {data.subtitle}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-md text-gray-500 mb-8 leading-relaxed max-w-xl"
              >
                {data.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 mb-10"
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-2xl shadow-[0_8px_25px_rgba(234,179,8,0.25)] hover:shadow-[0_12px_30px_rgba(234,179,8,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Start Your Project <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#featured-work"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#featured-work')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center bg-white border-2 border-gray-200 hover:border-yellow-400 text-gray-700 hover:text-gray-900 font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-md"
                >
                  View Case Studies
                </a>
              </motion.div>

              {/* Horizontal Trust Metrics Strip */}
              <motion.div
                variants={itemVariants}
                className="hidden grid grid-cols-3 gap-4 border-t border-gray-150 pt-8"
              >
                {data.trustMetrics.map((m, index) => (
                  <div key={index} className="flex flex-col gap-1 border-r border-gray-200/60 last:border-0 pr-2">
                    <span className="text-xl md:text-2xl font-black text-gray-900 leading-none">{m.value}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide leading-tight">{m.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual Block */}
            <div className="relative flex justify-center items-center">
              {/* Soft glowing mesh background */}
              <div className="absolute inset-0 bg-radial-gradient-yellow w-[350px] h-[350px] bg-yellow-300/10 rounded-full blur-[80px] pointer-events-none -z-10" />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                className="relative"
              >
                {renderInteractiveMockup()}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Showreel Modal */}
      <AnimatePresence>
        {showreelOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setShowreelOpen(false)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15"
              onClick={() => setShowreelOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex justify-center w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe 
                width="315" 
                height="576" 
                src="https://www.youtube.com/embed/KEnSD4Xx7Ig?autoplay=1&controls=1&rel=0&modestbranding=1" 
                title="Your new video title" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
