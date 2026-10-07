import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import HeroBrand from './hero/HeroBrand';
import HeroVisualCenter from './hero/HeroVisualCenter';
import HeroFloatingEcosystem from './hero/HeroFloatingEcosystem';
import { Code2, Megaphone, Share2, Video } from 'lucide-react';

/**
 * Enterprise-Grade Hero Section for Think2xCreate.
 * Orchestrated with GSAP Timeline, gsap.matchMedia, and responsive motion architecture.
 *
 * Layer 1: "Animate Anything" style character-split 3D masked typography + tagline + CTAs.
 * Layer 2: Real human visual centerpiece + 6 floating service cards & authentic platform ecosystem across desktop, tablet, AND mobile!
 */
function HeroSection() {
  const containerRef = useRef(null);

  // Animation Refs
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
  const wordThinkRef = useRef(null);
  const word2xRef = useRef(null);
  const wordCreateRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);
  const personRef = useRef(null);
  const leftCardsRef = useRef(null);
  const rightCardsRef = useRef(null);
  const badgesRef = useRef(null);
  const mobileServicesRef = useRef(null);

  useLayoutEffect(() => {
    // GSAP Responsive & Reduced Motion Context
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ──────────────────────────────────────────────────────────
      // 1. DESKTOP & LARGE SCREENS (min-width: 1024px)
      // ──────────────────────────────────────────────────────────
      mm.add('(min-width: 1024px)', () => {
        const tl = gsap.timeline({
          defaults: { ease: 'power3.out' },
          onComplete: () => {
            // Ambient Floating Loops (Phase 05: Starts only after master entrance settles)
            const cards = containerRef.current?.querySelectorAll('.hero-floating-card');
            const pills = containerRef.current?.querySelectorAll('.hero-badge-pill');

            if (cards && cards.length > 0) {
              cards.forEach((card, i) => {
                const dy = (i % 2 === 0 ? -1 : 1) * (6 + (i % 3) * 2.5);
                const dx = (i % 3 === 0 ? 1 : -1) * (3 + (i % 2) * 2);
                const rot = (i % 2 === 0 ? 1 : -1) * (1.0 + (i % 3) * 0.3);
                const duration = 4.2 + (i % 4) * 0.5;

                gsap.to(card, {
                  y: `+=${dy}`,
                  x: `+=${dx}`,
                  rotation: `+=${rot}`,
                  duration: duration,
                  repeat: -1,
                  yoyo: true,
                  ease: 'sine.inOut',
                  delay: i * 0.15,
                });
              });
            }

            if (pills && pills.length > 0) {
              pills.forEach((pill, i) => {
                const dy = (i % 2 === 0 ? 1 : -1) * (5 + (i % 2) * 2);
                gsap.to(pill, {
                  y: `+=${dy}`,
                  duration: 3.8 + (i % 3) * 0.4,
                  repeat: -1,
                  yoyo: true,
                  ease: 'sine.inOut',
                  delay: 0.2 + i * 0.1,
                });
              });
            }
          },
        });

        // Set 3D perspective on headline
        gsap.set(headlineRef.current, { perspective: 900 });

        // PHASE 01 -> 02: Authority Badge & GSAP "Animate Anything" Character Reveal
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -16, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.55 }
        )
          // 1. "Think" characters masked 3D slide-up with stagger
          .fromTo(
            '.gs-char-think',
            {
              yPercent: 125,
              rotateX: -45,
              opacity: 0,
              filter: 'blur(5px)',
            },
            {
              yPercent: 0,
              rotateX: 0,
              opacity: 1,
              filter: 'blur(0px)',
              duration: 0.8,
              stagger: 0.04,
              ease: 'power4.out',
            },
            '-=0.3'
          )
          // 2. "2x" characters masked 3D slide-up with punchy bounce
          .fromTo(
            '.gs-char-2x',
            {
              yPercent: 135,
              scale: 0.75,
              rotateX: -60,
              opacity: 0,
            },
            {
              yPercent: 0,
              scale: 1,
              rotateX: 0,
              opacity: 1,
              duration: 0.85,
              stagger: 0.07,
              ease: 'back.out(2)',
            },
            '-=0.55'
          )
          // Signature 2x brand glow & energy bloom
          .fromTo(
            word2xRef.current,
            {
              scale: 1,
              filter: 'drop-shadow(0 0 10px rgba(251,191,36,0.3))',
            },
            {
              scale: 1.1,
              filter: 'drop-shadow(0 0 35px rgba(251,191,36,0.85))',
              duration: 0.35,
              yoyo: true,
              repeat: 1,
              ease: 'power2.out',
            },
            '-=0.45'
          )
          // 3. "Create" characters masked 3D slide-up
          .fromTo(
            '.gs-char-create',
            {
              yPercent: 125,
              rotateX: -45,
              opacity: 0,
              filter: 'blur(5px)',
            },
            {
              yPercent: 0,
              rotateX: 0,
              opacity: 1,
              filter: 'blur(0px)',
              duration: 0.8,
              stagger: 0.04,
              ease: 'power4.out',
            },
            '-=0.65'
          )
          // Tagline Sequence: Ideas → Strategy → Digital Growth
          .fromTo(
            '.gs-tagline-item',
            {
              yPercent: 120,
              opacity: 0,
            },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.65,
              stagger: 0.07,
              ease: 'power3.out',
            },
            '-=0.45'
          )
          // CTAs Reveal
          .fromTo(
            ctaRef.current,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.55 },
            '-=0.35'
          )
          // PHASE 04: Central Human Visual Rises Smoothly
          .fromTo(
            personRef.current,
            { opacity: 0, y: 40, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out' },
            '-=0.55'
          )
          // Left Service Cards Stagger
          .fromTo(
            '.hidden.lg\\:block #hero-card-web, .hidden.lg\\:block #hero-card-meta, .hidden.lg\\:block #hero-card-social',
            { opacity: 0, x: -35, y: 10, scale: 0.94 },
            { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: 'power2.out' },
            '-=0.7'
          )
          // Right Service Cards Stagger
          .fromTo(
            '.hidden.lg\\:block #hero-card-video, .hidden.lg\\:block #hero-card-google, .hidden.lg\\:block #hero-card-seo',
            { opacity: 0, x: 35, y: 10, scale: 0.94 },
            { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: 'power2.out' },
            '-=0.7'
          )
          // Micro Badges Stagger
          .fromTo(
            '.hidden.lg\\:block .hero-badge-pill',
            { opacity: 0, scale: 0.65, rotation: -8 },
            { opacity: 1, scale: 1, rotation: 0, duration: 0.55, stagger: 0.08, ease: 'back.out(1.4)' },
            '-=0.5'
          );
      });

      // ──────────────────────────────────────────────────────────
      // 2. TABLET VIEWPORT (768px to 1023px)
      // ──────────────────────────────────────────────────────────
      mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
        const tl = gsap.timeline({
          defaults: { ease: 'power3.out' },
          onComplete: () => {
            const cards = containerRef.current?.querySelectorAll('.md\\:block .hero-floating-card');
            if (cards && cards.length > 0) {
              cards.forEach((card, i) => {
                const dy = (i % 2 === 0 ? -1 : 1) * 5;
                gsap.to(card, {
                  y: `+=${dy}`,
                  duration: 4.2 + i * 0.4,
                  repeat: -1,
                  yoyo: true,
                  ease: 'sine.inOut',
                });
              });
            }
          },
        });

        tl.fromTo(badgeRef.current, { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.5 })
          .fromTo(
            ['.gs-char-think', '.gs-char-2x', '.gs-char-create'],
            { yPercent: 120, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.03, ease: 'power4.out' },
            '-=0.25'
          )
          .fromTo('.gs-tagline-item', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.55, stagger: 0.06 }, '-=0.4')
          .fromTo(ctaRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
          .fromTo(personRef.current, { opacity: 0, y: 30, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.8 }, '-=0.5')
          .fromTo(
            '.md\\:block .hero-floating-card',
            { opacity: 0, scale: 0.9, y: 14 },
            { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1 },
            '-=0.55'
          );
      });

      // ──────────────────────────────────────────────────────────
      // 3. MOBILE VIEWPORT (< 768px): ALL SERVICES FLOATING
      // ──────────────────────────────────────────────────────────
      mm.add('(max-width: 767px)', () => {
        const tl = gsap.timeline({
          defaults: { ease: 'power2.out' },
          onComplete: () => {
            // Ambient Floating loops on mobile for all 6 floating pills!
            const mobilePills = containerRef.current?.querySelectorAll('.mobile-floating-pill');
            if (mobilePills && mobilePills.length > 0) {
              mobilePills.forEach((pill, i) => {
                const dy = (i % 2 === 0 ? -1 : 1) * (4 + (i % 3) * 1.5);
                const dx = (i % 3 === 0 ? 1 : -1) * (2 + (i % 2));
                gsap.to(pill, {
                  y: `+=${dy}`,
                  x: `+=${dx}`,
                  duration: 3.6 + (i % 3) * 0.4,
                  repeat: -1,
                  yoyo: true,
                  ease: 'sine.inOut',
                  delay: 0.1 + i * 0.12,
                });
              });
            }
          },
        });

        tl.fromTo(badgeRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.45 })
          .fromTo(
            ['.gs-char-think', '.gs-char-2x', '.gs-char-create'],
            { yPercent: 120, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.6, stagger: 0.025, ease: 'power4.out' },
            '-=0.25'
          )
          .fromTo('.gs-tagline-item', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5, stagger: 0.05 }, '-=0.35')
          .fromTo(ctaRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.3')
          .fromTo(personRef.current, { opacity: 0, y: 24, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.7 }, '-=0.35')
          // All 6 mobile floating service pills reveal with stagger
          .fromTo(
            '.mobile-floating-pill',
            { opacity: 0, scale: 0.75, y: 12 },
            { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(1.5)' },
            '-=0.45'
          )
          .fromTo(
            mobileServicesRef.current,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.5 },
            '-=0.25'
          );
      });

      // ──────────────────────────────────────────────────────────
      // 4. ACCESSIBILITY: PREFERS REDUCED MOTION
      // ──────────────────────────────────────────────────────────
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(
          [
            badgeRef.current,
            '.gs-char-think',
            '.gs-char-2x',
            '.gs-char-create',
            '.gs-tagline-item',
            ctaRef.current,
            personRef.current,
            '.mobile-floating-pill',
            mobileServicesRef.current,
          ],
          { opacity: 1, y: 0, x: 0, yPercent: 0, scale: 1, filter: 'none' }
        );
      });
    }, containerRef);

    // Guaranteed Clean Teardown
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full bg-[#FDFBF4] overflow-hidden min-h-[90vh] flex flex-col justify-between pt-20 pb-6 sm:pt-24 sm:pb-8 lg:pt-20 lg:pb-8"
      aria-label="Think2xCreate Hero"
    >
      {/* ─── Ambient Glow Atmosphere ────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Soft Gold / Amber Glow (Left Top) */}
        <div className="absolute top-[-5%] left-[-8%] w-[450px] h-[350px] rounded-full bg-amber-200/35 blur-[100px]" />
        {/* Soft Violet / Blue Ambient Aura (Far Left) */}
        <div className="absolute top-[35%] left-[-10%] w-[380px] h-[380px] rounded-full bg-indigo-200/20 blur-[110px]" />
        {/* Soft Gold / Amber Glow (Right Top) */}
        <div className="absolute top-[5%] right-[-6%] w-[420px] h-[360px] rounded-full bg-yellow-200/35 blur-[95px]" />
        {/* Soft Rose / Violet Ambient Aura (Far Right) */}
        <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full bg-rose-200/18 blur-[110px]" />
        {/* Subtle center warm glow */}
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[600px] h-[220px] rounded-full bg-amber-100/40 blur-[90px]" />
      </div>

      {/* ─── LAYER 1: BRAND HEADLINE & CONVERSION ACTIONS ───────── */}
      <HeroBrand
        badgeRef={badgeRef}
        headlineRef={headlineRef}
        wordThinkRef={wordThinkRef}
        word2xRef={word2xRef}
        wordCreateRef={wordCreateRef}
        taglineRef={taglineRef}
        ctaRef={ctaRef}
      />

      {/* ─── LAYER 2: HUMAN VISUAL CENTERPIECE & SERVICES SYSTEM ─ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-2 sm:mt-4 flex-1 flex flex-col justify-end min-h-[340px] sm:min-h-[400px] lg:min-h-[460px]">
        {/* Floating Service Ecosystem (Desktop, Tablet & Mobile Orbits) */}
        <HeroFloatingEcosystem
          leftCardsRef={leftCardsRef}
          rightCardsRef={rightCardsRef}
          badgesRef={badgesRef}
        />

        {/* Central Human Anchor */}
        <HeroVisualCenter personRef={personRef} />
      </div>

      {/* ─── MOBILE SERVICES STRIP (< 768px only) ──────────────── */}
      <div
        ref={mobileServicesRef}
        className="block md:hidden relative z-20 w-full px-4 mt-4 max-w-md mx-auto"
      >
        <div className="bg-white/95 backdrop-blur-sm p-3 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
            <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
              Core Digital Services
            </span>
            <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
              Full-Suite Growth
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-left">
            <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50/80">
              <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-slate-900 truncate">Web Development</p>
                <p className="text-[9px] text-slate-500 truncate">Fast • Modern</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50/80">
              <div className="w-6 h-6 rounded-md bg-sky-500 text-white flex items-center justify-center flex-shrink-0">
                <Megaphone className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-slate-900 truncate">Meta & Google Ads</p>
                <p className="text-[9px] text-slate-500 truncate">Target • Convert</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50/80">
              <div className="w-6 h-6 rounded-md bg-pink-500 text-white flex items-center justify-center flex-shrink-0">
                <Share2 className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-slate-900 truncate">Social Media</p>
                <p className="text-[9px] text-slate-500 truncate">Create • Connect</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50/80">
              <div className="w-6 h-6 rounded-md bg-rose-500 text-white flex items-center justify-center flex-shrink-0">
                <Video className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-slate-900 truncate">Video & Photo</p>
                <p className="text-[9px] text-slate-500 truncate">Reels • Shoots</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;