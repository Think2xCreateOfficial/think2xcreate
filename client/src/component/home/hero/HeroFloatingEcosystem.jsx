import React from 'react';
import { Code2, Megaphone, Video, Search, Share2 } from 'lucide-react';
import HeroServiceCard from './HeroServiceCard';
import {
  MetaIcon,
  GoogleAdsIcon,
  InstagramIcon,
  FacebookIcon,
  ClapperIcon,
  TrendGrowthIcon,
  CurvedArrowDoodle,
} from './HeroIcons';
import { RealYoutubeIcon } from '../../ui/SocialIcons';

/**
 * Floating Service Ecosystem Component.
 * Positions the 6 Think2xCreate core services and authentic platform badges around the human visual.
 * Responsive:
 * - Desktop: Full orchestrated orbit of all 6 services + brand badges.
 * - Tablet: Balanced 4-card layout + badges.
 * - Mobile: All 6 core services float in a refined, touch-safe orbit around the human visual.
 */
function HeroFloatingEcosystem({
  leftCardsRef,
  rightCardsRef,
  badgesRef,
}) {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 w-full h-full overflow-visible">
      {/* ============================================================ */}
      {/* DESKTOP & LARGE SCREEN ORBIT (lg:block hidden)               */}
      {/* ============================================================ */}
      <div className="hidden lg:block w-full h-full relative max-w-7xl mx-auto">
        {/* ─── LEFT FLANK ───────────────────────────────────────────── */}
        <div ref={leftCardsRef} className="contents">
          {/* 1. Website Development (Top-Left) */}
          <div className="absolute top-[4%] left-[1%] xl:left-[3%] z-20">
            <HeroServiceCard
              id="hero-card-web"
              icon={Code2}
              iconGradient="from-blue-600 via-indigo-600 to-violet-600"
              title="Website Development"
              subtitle="Fast • Modern • SEO Ready"
            />
          </div>

          {/* 2. Floating Meta Badge (Mid-Left Upper) */}
          <div
            id="hero-badge-meta"
            className="hero-badge-pill absolute top-[26%] left-[23%] xl:left-[25%] z-20 p-2.5 rounded-2xl bg-gradient-to-tr from-[#0081FB] to-[#0064e0] shadow-md hover:shadow-lg transition-transform duration-300 pointer-events-auto hover:scale-105"
            title="Meta Certified Ads Management"
          >
            <MetaIcon className="w-5 h-5 text-white" />
          </div>

          {/* 3. Meta Ads Management (Mid-Left) */}
          <div className="absolute top-[40%] left-[0%] xl:left-[2%] z-20">
            <HeroServiceCard
              id="hero-card-meta"
              icon={Megaphone}
              iconGradient="from-sky-500 to-blue-600"
              title="Meta Ads Management"
              subtitle="Target • Engage • Convert"
            />
          </div>

          {/* 4. Social Media Platform Cluster Badge (Lower Left) */}
          <div
            id="hero-badge-social"
            className="hero-badge-pill absolute bottom-[28%] left-[5%] xl:left-[8%] z-20 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-100 shadow-md pointer-events-auto hover:shadow-lg transition-all duration-300"
          >
            <InstagramIcon className="w-4 h-4" />
            <FacebookIcon className="w-4 h-4" />
            <RealYoutubeIcon className="w-4 h-4" />
          </div>

          {/* 5. Social Media Management (Bottom-Left) */}
          <div className="absolute bottom-[4%] left-[1%] xl:left-[3%] z-20">
            <HeroServiceCard
              id="hero-card-social"
              icon={Share2}
              iconGradient="from-pink-500 via-rose-500 to-amber-500"
              title="Social Media Management"
              subtitle="Create • Connect • Grow"
            />
          </div>

          {/* Delicate Arrow Doodle (Left) */}
          <div className="absolute top-[34%] left-[18%] pointer-events-none opacity-60">
            <CurvedArrowDoodle className="w-6 h-6 text-amber-400" />
          </div>
        </div>

        {/* ─── RIGHT FLANK ──────────────────────────────────────────── */}
        <div ref={rightCardsRef} className="contents">
          {/* 1. Photo & Video Editing (Top-Right) */}
          <div className="absolute top-[4%] right-[1%] xl:right-[3%] z-20">
            <HeroServiceCard
              id="hero-card-video"
              icon={Video}
              iconGradient="from-rose-500 via-pink-600 to-purple-600"
              title="Photo & Video Editing"
              subtitle="Creative • Professional • Impactful"
            />
          </div>

          {/* 2. Floating Clapperboard Badge (Mid-Right Upper) */}
          <div
            id="hero-badge-clapper"
            className="hero-badge-pill absolute top-[24%] right-[23%] xl:right-[25%] z-20 p-2.5 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-100 shadow-md hover:shadow-lg transition-transform duration-300 pointer-events-auto hover:scale-105"
            title="Short-Form Video & Reel Production"
          >
            <ClapperIcon className="w-5 h-5 text-slate-800" />
          </div>

          {/* 3. Google Ads Management (Mid-Right) */}
          <div className="absolute top-[40%] right-[0%] xl:right-[2%] z-20">
            <HeroServiceCard
              id="hero-card-google"
              icon={GoogleAdsIcon}
              iconGradient="from-slate-50 to-white border border-slate-200"
              title="Google Ads Management"
              subtitle="Reach • Click • Sales"
            />
          </div>

          {/* 4. Floating SEO Trend Growth Badge (Lower Right) */}
          <div
            id="hero-badge-growth"
            className="hero-badge-pill absolute bottom-[28%] right-[5%] xl:right-[8%] z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-100 shadow-md pointer-events-auto hover:shadow-lg transition-all duration-300"
          >
            <TrendGrowthIcon className="w-4 h-4 text-emerald-500" />
            <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Growth</span>
          </div>

          {/* 5. SEO Optimization (Bottom-Right) */}
          <div className="absolute bottom-[4%] right-[1%] xl:right-[3%] z-20">
            <HeroServiceCard
              id="hero-card-seo"
              icon={Search}
              iconGradient="from-emerald-500 via-teal-600 to-cyan-600"
              title="SEO Optimization"
              subtitle="Rank • Visibility • Growth"
            />
          </div>

          {/* Delicate Arrow Doodle (Right) */}
          <div className="absolute bottom-[18%] right-[20%] pointer-events-none opacity-60">
            <CurvedArrowDoodle className="w-6 h-6 text-amber-400" flipped />
          </div>
        </div>

        {/* Floating Golden Micro-Coins / Accents */}
        <div ref={badgesRef} className="contents">
          <div className="hero-badge-pill absolute top-[16%] left-[16%] w-2.5 h-2.5 rounded-full bg-amber-400/80 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
          <div className="hero-badge-pill absolute bottom-[14%] right-[16%] w-3 h-3 rounded-full bg-amber-400/80 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
        </div>
      </div>

      {/* ============================================================ */}
      {/* TABLET VIEWPORT (md:block lg:hidden hidden)                   */}
      {/* ============================================================ */}
      <div className="hidden md:block lg:hidden w-full h-full relative max-w-3xl mx-auto px-4">
        {/* Left Side Tablet Priority Cards */}
        <div className="absolute top-[8%] left-1 z-20">
          <HeroServiceCard
            icon={Code2}
            iconGradient="from-blue-600 to-indigo-600"
            title="Website Development"
            subtitle="Fast • SEO Ready"
            className="scale-90 origin-left"
          />
        </div>
        <div className="absolute bottom-[8%] left-1 z-20">
          <HeroServiceCard
            icon={Megaphone}
            iconGradient="from-sky-500 to-blue-600"
            title="Meta Ads"
            subtitle="Target • Convert"
            className="scale-90 origin-left"
          />
        </div>

        {/* Right Side Tablet Priority Cards */}
        <div className="absolute top-[8%] right-1 z-20">
          <HeroServiceCard
            icon={GoogleAdsIcon}
            iconGradient="from-slate-50 to-white border border-slate-200"
            title="Google Ads"
            subtitle="Reach • Sales"
            className="scale-90 origin-right"
          />
        </div>
        <div className="absolute bottom-[8%] right-1 z-20">
          <HeroServiceCard
            icon={Video}
            iconGradient="from-rose-500 to-pink-600"
            title="Video & Photo"
            subtitle="Creative • Impactful"
            className="scale-90 origin-right"
          />
        </div>

        {/* Small floating platform badges on tablet */}
        <div className="absolute top-[38%] left-4 z-20 p-2 rounded-xl bg-blue-600 shadow-sm pointer-events-auto">
          <MetaIcon className="w-4 h-4 text-white" />
        </div>
        <div className="absolute top-[38%] right-4 z-20 flex items-center gap-1 bg-white/95 px-2.5 py-1 rounded-full border border-slate-100 shadow-sm pointer-events-auto">
          <TrendGrowthIcon className="w-3.5 h-3.5 text-emerald-500" />
          <span className="text-[9px] font-bold text-slate-700">Growth</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE VIEWPORT (< 768px): ALL 6 SERVICES FLOATING IN ORBIT  */}
      {/* ============================================================ */}
      <div className="block md:hidden w-full h-full relative px-2">
        {/* 1. Website Development (Top-Left beside shoulders) */}
        <div
          id="mobile-pill-web"
          className="mobile-floating-pill absolute top-[8%] left-1 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-100 shadow-sm"
        >
          <div className="w-4 h-4 rounded-md bg-blue-600 text-white flex items-center justify-center">
            <Code2 className="w-2.5 h-2.5" />
          </div>
          <span className="text-[10px] font-bold text-slate-800">Web Dev</span>
        </div>

        {/* 2. Meta Ads Management (Mid-Left beside elbow) */}
        <div
          id="mobile-pill-meta"
          className="mobile-floating-pill absolute top-[30%] left-0.5 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-100 shadow-sm"
        >
          <div className="w-4 h-4 rounded-md bg-sky-500 text-white flex items-center justify-center">
            <Megaphone className="w-2.5 h-2.5" />
          </div>
          <span className="text-[10px] font-bold text-slate-800">Meta Ads</span>
        </div>

        {/* 3. Social Media Management (Lower-Left beside knees) */}
        <div
          id="mobile-pill-social"
          className="mobile-floating-pill absolute bottom-[14%] left-1 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-100 shadow-sm"
        >
          <div className="flex items-center gap-1">
            <InstagramIcon className="w-3.5 h-3.5" />
            <FacebookIcon className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-bold text-slate-800">Social</span>
        </div>

        {/* 4. Video & Photo Editing (Top-Right beside shoulders) */}
        <div
          id="mobile-pill-video"
          className="mobile-floating-pill absolute top-[8%] right-1 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-100 shadow-sm"
        >
          <div className="w-4 h-4 rounded-md bg-rose-500 text-white flex items-center justify-center">
            <Video className="w-2.5 h-2.5" />
          </div>
          <span className="text-[10px] font-bold text-slate-800">Reels & Video</span>
        </div>

        {/* 5. Google Ads Management (Mid-Right beside elbow) */}
        <div
          id="mobile-pill-google"
          className="mobile-floating-pill absolute top-[30%] right-0.5 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-100 shadow-sm"
        >
          <GoogleAdsIcon className="w-3.5 h-3.5" />
          <span className="text-[10px] font-bold text-slate-800">Google Ads</span>
        </div>

        {/* 6. SEO Optimization (Lower-Right beside knees) */}
        <div
          id="mobile-pill-seo"
          className="mobile-floating-pill absolute bottom-[14%] right-1 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-100 shadow-sm"
        >
          <TrendGrowthIcon className="w-3.5 h-3.5 text-emerald-500" />
          <span className="text-[10px] font-bold text-slate-800">SEO Growth</span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(HeroFloatingEcosystem);
