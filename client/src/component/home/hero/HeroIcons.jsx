import React from 'react';

/**
 * Authentic, precision-engineered brand and visual icons for Think2xCreate Hero.
 * Crisp rendering on standard and Retina displays.
 */

// Authentic Official Meta Infinity Icon
export const MetaIcon = ({ className = "w-5 h-5 text-white" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 14.717c-1.47 2.215-3.324 3.783-5.59 3.783-3.616 0-6.41-3.053-6.41-7.106C0 6.945 2.894 3.5 6.81 3.5c2.476 0 4.417 1.488 5.19 3.308.773-1.82 2.714-3.308 5.19-3.308 3.916 0 6.81 3.445 6.81 7.894 0 4.053-2.794 7.106-6.41 7.106-2.266 0-4.12-1.568-5.59-3.783zm-1.776-3.323c-.567-2.385-2.072-4.223-3.814-4.223-2.223 0-3.91 2.256-3.91 5.22 0 2.748 1.583 4.887 3.655 4.887 1.879 0 3.324-1.996 4.069-4.884zm3.552 0c.745 2.888 2.19 4.884 4.069 4.884 2.072 0 3.655-2.139 3.655-4.887 0-2.964-1.687-5.22-3.91-5.22-1.742 0-3.247 1.838-3.814 4.223z"/>
  </svg>
);

// Authentic Google Ads Triangle Icon
export const GoogleAdsIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M3.28 17.44l7.16-12.4a2.92 2.92 0 0 1 4 4l-7.16 12.4a2.92 2.92 0 0 1-4-4z"
      fill="#FBBC04"
    />
    <path
      d="M20.72 17.44l-7.16-12.4a2.92 2.92 0 0 0-4 4l7.16 12.4a2.92 2.92 0 0 0 4-4z"
      fill="#4285F4"
    />
    <circle cx="5.28" cy="19.44" r="2.92" fill="#34A853" />
  </svg>
);

// Authentic Instagram Gradient Icon
export const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6.5" fill="url(#hero-ig-grad)" />
    <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="white" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3.2" stroke="white" strokeWidth="1.8" />
    <circle cx="15.8" cy="8.2" r="1" fill="white" />
    <defs>
      <linearGradient id="hero-ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFD521" />
        <stop offset="0.38" stopColor="#F50000" />
        <stop offset="0.75" stopColor="#B900B4" />
      </linearGradient>
    </defs>
  </svg>
);

// Authentic Facebook Brand Icon
export const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect width="24" height="24" rx="6.5" fill="#1877F2" />
    <path
      d="M16.5 12.073h-2.585v8.385h-3.47v-8.385H8.398v-2.953h2.047V7.106c0-1.706.812-4.356 4.356-4.356l3.2.013v2.866h-2.321c-.378 0-.909.189-.909.992v2.497h3.298l-.569 2.955z"
      fill="white"
    />
  </svg>
);

// Clapperboard / Video Slate Icon
export const ClapperIcon = ({ className = "w-5 h-5 text-slate-800" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4z" fill="currentColor" fillOpacity="0.12" />
    <path d="m4 11 2.3-4.6A2 2 0 0 1 8.1 5h9.8a2 2 0 0 1 1.8 1.4L22 11H4z" fill="currentColor" fillOpacity="0.9" />
    <path d="m7 5 3 6" stroke="white" strokeWidth="1.6" />
    <path d="m12 5 3 6" stroke="white" strokeWidth="1.6" />
    <path d="m17 5 3 6" stroke="white" strokeWidth="1.6" />
  </svg>
);

// Trend Growth Indicator Icon
export const TrendGrowthIcon = ({ className = "w-5 h-5 text-emerald-500" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

// Delicate Curved Arrow Doodles (connecting ideas to growth)
export const CurvedArrowDoodle = ({ className = "w-8 h-8 text-amber-400", flipped = false }) => (
  <svg
    className={`${className} ${flipped ? '-scale-x-100' : ''}`}
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
  >
    <path d="M6 32 C12 20, 26 12, 34 16" strokeDasharray="3 3" />
    <polyline points="28 12 35 16 31 22" />
  </svg>
);

// Subtle Golden Spark / Burst Doodle
export const SparkDoodle = ({ className = "w-4 h-4 text-amber-400" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" opacity="0.85" />
  </svg>
);
