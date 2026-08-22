import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiMeta,
  SiGoogleanalytics,
  SiGooglesheets,
  SiHootsuite,
  SiBitly,
  SiDavinciresolve
} from 'react-icons/si';

/**
 * Brand SVG Icon Component mapping exact tool names to flat authentic icons
 */
const ToolBrandIcon = ({ name }) => {
  switch (name) {
    case 'React':
      return <SiReact className="w-7 h-7 text-[#61DAFB]" />;
    case 'Next.js':
      return <SiNextdotjs className="w-7 h-7 text-black" />;
    case 'Tailwind CSS':
      return <SiTailwindcss className="w-7 h-7 text-[#38BDF8]" />;
    case 'Node.js':
      return <SiNodedotjs className="w-7 h-7 text-[#5FA04E]" />;
    case 'Python':
      return <SiPython className="w-7 h-7 text-[#3776AB]" />;
    case 'MongoDB':
      return <SiMongodb className="w-7 h-7 text-[#47A248]" />;
    case 'Firebase':
      return <SiFirebase className="w-7 h-7 text-[#FFCA28]" />;
    case 'MySQL':
      return <SiMysql className="w-7 h-7 text-[#00758F]" />;
    case 'Meta Ads Manager':
    case 'Meta Business Suite':
    case 'Meta Pixel':
      return <SiMeta className="w-7 h-7 text-[#0668E1]" />;
    case 'Google Analytics':
      return <SiGoogleanalytics className="w-7 h-7 text-[#E37400]" />;
    case 'Google Sheets':
      return <SiGooglesheets className="w-7 h-7 text-[#0F9D58]" />;
    case 'Hootsuite':
      return <SiHootsuite className="w-7 h-7 text-[#111827]" />;
    case 'Bitly':
      return <SiBitly className="w-7 h-7 text-[#EE6123]" />;
    case 'DaVinci Resolve':
      return <SiDavinciresolve className="w-7 h-7 text-[#EF4444]" />;
    case 'Photoshop':
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#001E36" />
          <path d="M6 17V7h4c1.8 0 3 1.1 3 2.6S11.8 12 10 12H8v5H6zm2-7h2c.8 0 1.3-.4 1.3-1s-.5-1-1.3-1H8v2zm8.5 7.2c-1.5 0-2.4-.8-2.4-1.9h1.4c0 .5.4.8 1 .8.5 0 .9-.3.9-.7 0-.4-.3-.6-1.1-.8-1.3-.4-2-.9-2-2 0-1.2 1-1.9 2.3-1.9 1.4 0 2.2.7 2.2 1.8h-1.4c0-.4-.3-.7-.8-.7s-.8.2-.8.6c0 .3.2.5 1 .7 1.4.4 2.1 1 2.1 2.1-.1 1.2-1 2-2.4 2z" fill="#31A8FF" />
        </svg>
      );
    case 'CapCut':
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#000000" />
          <path d="M6 6l6 6-6 6M18 6l-6 6 6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'Canva':
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="url(#canvaGrad)" />
          <path d="M14.8 14.4c-.8.8-2 1.2-3.4 1.2-2.7 0-4.6-1.8-4.6-4.8 0-3.1 2.1-4.8 4.8-4.8 1.4 0 2.4.4 3.1 1.1l-1.1 1.3c-.5-.5-1.2-.8-2-.8-1.7 0-2.8 1.2-2.8 3.2 0 1.9 1.1 3.1 2.7 3.1.9 0 1.6-.3 2.1-.8l1.2 1.3z" fill="white" />
          <defs>
            <linearGradient id="canvaGrad" x1="0" y1="0" x2="24" y2="24">
              <stop stopColor="#00C4CC" />
              <stop offset="1" stopColor="#7D2AE8" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'Later':
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#FF5A5F">
          <rect x="3" y="4" width="18" height="17" rx="3" fill="#FF5A5F" />
          <path d="M8 2v4M16 2v4M3 9h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="8" cy="13" r="1.5" fill="white" />
          <circle cx="12" cy="13" r="1.5" fill="white" />
          <circle cx="16" cy="13" r="1.5" fill="white" />
        </svg>
      );
    case 'Premiere Pro':
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#00005B" />
          <path d="M6 17V7h4c1.8 0 3 1.1 3 2.6S11.8 12 10 12H8v5H6zm2-7h2c.8 0 1.3-.4 1.3-1s-.5-1-1.3-1H8v2zm7 7v-6.5h1.5v1c.4-.7 1.1-1.1 1.9-1.1v1.6h-.3c-1 0-1.6.7-1.6 1.8V17H15z" fill="#9999FF" />
        </svg>
      );
    case 'After Effects':
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#00005B" />
          <path d="M5.5 17l2.8-10h1.8l2.8 10h-1.8l-.7-2.6H7.7L7 17H5.5zm2.6-4.1h2L9.1 9.7l-1 3.2zm6.7 4.3c-1.6 0-2.7-1.1-2.7-2.7 0-1.7 1.2-2.8 2.8-2.8 1.5 0 2.4.9 2.4 2.3v.4h-3.6c.1.8.7 1.3 1.5 1.3.6 0 1.1-.3 1.4-.7l1.1.9c-.6.8-1.5 1.3-2.9 1.3zm1.1-3.6c0-.6-.4-1.1-1.1-1.1-.7 0-1.2.4-1.3 1.1h2.4z" fill="#9999FF" />
        </svg>
      );
    case 'Lightroom':
    case 'Lightroom Classic':
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#001E36" />
          <path d="M6 17V7h2v8h4v2H6zm7.5 0v-6.5H15v1c.4-.7 1.1-1.1 1.9-1.1v1.6h-.3c-1 0-1.6.7-1.6 1.8V17h-1.5z" fill="#31A8FF" />
        </svg>
      );
    default:
      return <SiReact className="w-7 h-7 text-[#61DAFB]" />;
  }
};

/**
 * Service Page Tech Stack & Tools Component (Reference C)
 * Displays tool cards featuring recognizable brand/tech flat icons.
 */
export const ServiceTools = ({ data }) => {
  if (!data) return null;

  const defaultToolsMap = {
    'website-development': [
      { name: 'React', desc: 'Dynamic UI Framework', bgColor: 'bg-sky-50' },
      { name: 'Next.js', desc: 'Fullstack React Framework', bgColor: 'bg-gray-100' },
      { name: 'Tailwind CSS', desc: 'Utility-first CSS Engine', bgColor: 'bg-cyan-50' },
      { name: 'Node.js', desc: 'Scalable Backend Runtime', bgColor: 'bg-emerald-50' },
      { name: 'Python', desc: 'AI & High Performance Logic', bgColor: 'bg-blue-50' },
      { name: 'MongoDB', desc: 'Flexible NoSQL Database', bgColor: 'bg-green-50' },
      { name: 'Firebase', desc: 'Realtime Cloud Database', bgColor: 'bg-yellow-50' },
      { name: 'MySQL', desc: 'Reliable Relational DB', bgColor: 'bg-sky-50' },
    ],
    'meta-ads-management': [
      { name: 'Meta Ads Manager', desc: 'Campaign Management', bgColor: 'bg-blue-50' },
      { name: 'Meta Pixel', desc: 'Conversion Tracking', bgColor: 'bg-blue-50' },
      { name: 'Lookalike Audience', desc: 'Smart Buyer Targeting', bgColor: 'bg-yellow-50' },
      { name: 'Google Analytics', desc: 'Multi-touch Attribution', bgColor: 'bg-yellow-50' },
      { name: 'Canva', desc: 'Ad Creative Direction', bgColor: 'bg-teal-50' },
      { name: 'UTM Tracking', desc: 'Precision Analytics', bgColor: 'bg-purple-50' },
      { name: 'Google Sheets', desc: 'Reporting & Analysis', bgColor: 'bg-emerald-50' },
    ],
    'social-media-management': [
      { name: 'Meta Business Suite', desc: 'Content Scheduling & DM', bgColor: 'bg-blue-50' },
      { name: 'Hootsuite', desc: 'Multi-Platform Sync', bgColor: 'bg-gray-100' },
      { name: 'Canva', desc: 'Graphic Design', bgColor: 'bg-teal-50' },
      { name: 'Later', desc: 'Visual Grid Planning', bgColor: 'bg-rose-50' },
      { name: 'Google Analytics', desc: 'Traffic Insights', bgColor: 'bg-yellow-50' },
      { name: 'Bitly', desc: 'Link Performance', bgColor: 'bg-orange-50' },
    ],
    'photo-video-editing': [
      { name: 'Premiere Pro', desc: 'Dynamic Video Edit', bgColor: 'bg-indigo-50' },
      { name: 'After Effects', desc: 'Motion Graphics', bgColor: 'bg-indigo-50' },
      { name: 'DaVinci Resolve', desc: 'Color Grading', bgColor: 'bg-red-50' },
      { name: 'Lightroom', desc: 'Commercial Photo Tone', bgColor: 'bg-sky-50' },
      { name: 'Photoshop', desc: 'High-Res Retouching', bgColor: 'bg-blue-50' },
      { name: 'CapCut', desc: 'Short-Form Reels', bgColor: 'bg-gray-100' },
    ],
  };

  const toolsList = defaultToolsMap[data.id] || defaultToolsMap['website-development'];

  return (
    <section className="py-16 bg-white border-t border-gray-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-6">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-black uppercase px-4 py-1 rounded-full tracking-widest border border-yellow-300 mb-3">
            TECH STACK & TOOLS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-2">
            Modern Technologies. Better Results.
          </h2>
          <p className="text-gray-500 text-sm font-medium">
            We leverage industry-leading software and frameworks for maximum efficiency and growth.
          </p>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          {toolsList.map((tool, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-2xl p-4 text-center flex flex-col items-center justify-between shadow-2xs hover:shadow-md hover:border-yellow-400/80 transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-2xl ${tool.bgColor || 'bg-gray-50'} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-2xs`}>
                <ToolBrandIcon name={tool.name} />
              </div>
              <h3 className="text-xs font-extrabold text-gray-900 mb-0.5 leading-tight group-hover:text-yellow-600 transition-colors">
                {tool.name}
              </h3>
              <p className="text-[9px] font-semibold text-gray-400 leading-tight">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Sub-text Tagline Line */}
        <div className="flex items-center justify-center gap-2 text-center text-[10px] font-extrabold uppercase tracking-widest text-gray-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-yellow-500" />
          <span>INDUSTRY STANDARD QUALITY & ULTRA PERFORMANCE OPTIMIZED</span>
        </div>

      </div>
    </section>
  );
};

export default ServiceTools;

