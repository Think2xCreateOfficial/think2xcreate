import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SparkDoodle } from './HeroIcons';

/**
 * Hero Brand & Primary Typography Layer.
 * Engineered following official GSAP "Animate Anything" character-split masking architecture.
 *
 * Each character is individually nested in an overflow-hidden mask with 3D perspective,
 * enabling staggered character reveals, dimensional rotation, and the signature "2x" brand bloom.
 */
function HeroBrand({
  badgeRef,
  headlineRef,
  wordThinkRef,
  word2xRef,
  wordCreateRef,
  taglineRef,
  ctaRef,
}) {
  const thinkChars = ['T', 'h', 'i', 'n', 'k'];
  const twoXChars = ['2', 'x'];
  const createChars = ['C', 'r', 'e', 'a', 't', 'e'];

  return (
    <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto w-full pt-1 sm:pt-2">
      {/* Decorative Brand Sparkle Accent */}
      <div className="absolute -top-2 right-8 sm:right-20 hidden sm:block pointer-events-none opacity-80 animate-pulse">
        <SparkDoodle className="w-5 h-5 text-amber-400" />
      </div>

      {/* Agency Authority Pill Badge */}
      <div
        ref={badgeRef}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-amber-50/90 border border-amber-200/70 shadow-xs text-[10px] sm:text-xs font-bold text-amber-900 tracking-wider uppercase mb-2 sm:mb-3 select-none backdrop-blur-xs"
      >
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
        <span>DIGITAL MARKETING AGENCY</span>
      </div>

      {/* Primary Semantic H1: Think2xCreate (GSAP Masked Character Stage) */}
      <h1
        ref={headlineRef}
        className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-[-0.035em] leading-[0.98] flex items-baseline justify-center select-none font-display drop-shadow-xs"
        style={{ perspective: '900px' }}
        aria-label="Think2xCreate — Digital Marketing Agency"
      >
        {/* Word: Think (Character-by-Character Masking) */}
        <span
          ref={wordThinkRef}
          className="inline-flex text-slate-900 relative"
          style={{
            textShadow: '0 2px 8px rgba(15, 23, 42, 0.10)',
          }}
        >
          {thinkChars.map((char, index) => (
            <span
              key={`think-${index}`}
              className="inline-block overflow-hidden pb-1 align-baseline"
            >
              <span className="inline-block gs-char-think transform-gpu origin-bottom will-change-transform">
                {char}
              </span>
            </span>
          ))}
        </span>

        {/* Word: 2x (Signature Brand Accent with Glow Bloom) */}
        <span
          ref={word2xRef}
          className="inline-flex relative text-amber-400 mx-0.5 sm:mx-1 font-black"
          style={{
            textShadow:
              '0 0 50px rgba(251, 191, 36, 0.5), 0 3px 12px rgba(245, 158, 11, 0.35)',
          }}
        >
          {twoXChars.map((char, index) => (
            <span
              key={`twox-${index}`}
              className="inline-block overflow-hidden pb-1 align-baseline"
            >
              <span className="inline-block gs-char-2x transform-gpu origin-bottom will-change-transform">
                {char}
              </span>
            </span>
          ))}
        </span>

        {/* Word: Create (Character-by-Character Masking) */}
        <span
          ref={wordCreateRef}
          className="inline-flex text-slate-900 relative"
          style={{
            textShadow: '0 2px 8px rgba(15, 23, 42, 0.10)',
          }}
        >
          {createChars.map((char, index) => (
            <span
              key={`create-${index}`}
              className="inline-block overflow-hidden pb-1 align-baseline"
            >
              <span className="inline-block gs-char-create transform-gpu origin-bottom will-change-transform">
                {char}
              </span>
            </span>
          ))}
        </span>
      </h1>

      {/* Strategic Sequence: Ideas → Strategy → Digital Growth */}
      <div
        ref={taglineRef}
        className="mt-2.5 sm:mt-3 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 text-xs sm:text-sm md:text-base font-bold text-slate-700 tracking-wide select-none"
      >
        <span className="inline-block overflow-hidden">
          <span className="inline-block gs-tagline-item text-slate-800">Ideas</span>
        </span>
        <span className="inline-block overflow-hidden">
          <span className="inline-block gs-tagline-item text-amber-500 font-black text-xs sm:text-lg">→</span>
        </span>
        <span className="inline-block overflow-hidden">
          <span className="inline-block gs-tagline-item text-slate-800">Strategy</span>
        </span>
        <span className="inline-block overflow-hidden">
          <span className="inline-block gs-tagline-item text-amber-500 font-black text-xs sm:text-lg">→</span>
        </span>
        <span className="inline-block overflow-hidden">
          <span className="inline-block gs-tagline-item text-slate-950 font-extrabold bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 bg-clip-text text-transparent">
            Digital Growth
          </span>
        </span>
      </div>

      {/* Strategic Conversion CTAs */}
      <div
        ref={ctaRef}
        className="mt-3.5 sm:mt-4 flex flex-row items-center justify-center gap-2.5 sm:gap-4 z-20 w-full"
      >
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
        >
          <span>Get My Growth Plan</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>

        <Link
          to="/our-work"
          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-amber-400 text-slate-800 font-bold text-xs sm:text-sm shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          <span>See Our Work</span>
        </Link>
      </div>
    </div>
  );
}

export default React.memo(HeroBrand);
