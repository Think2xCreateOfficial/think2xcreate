import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Image as ImageIcon, FileSpreadsheet, Video, Share2, ArrowRight, Instagram, Facebook, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { CLIENTS_MASTER, PROJECTS_MASTER } from '../../../utils/data/portfolioData';

/**
 * Manual Arrow-Based Home Page "Our Recent Work" Showcase Component
 * Features Left & Right controls + category step indicators with a stable min-height layout.
 * Prevents layout jumping when cycling through portfolio categories.
 */
export const RecentWorks = () => {
  const navigate = useNavigate();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slidesMeta = [
    { id: 'website-development', title: 'Website Development', icon: Globe, pill: 'Live Websites Showcase' },
    { id: 'photo-video-editing', title: 'Poster & Logo Design', icon: ImageIcon, pill: 'Branding & Graphic Artworks' },
    { id: 'meta-ads-management', title: 'Meta Ads Reports', icon: FileSpreadsheet, pill: 'Performance Campaign Analytics' },
    { id: 'reels-video-editing', title: 'Reels & Video Editing', icon: Video, pill: 'Shorts & Reels Production' },
    { id: 'social-media-management', title: 'Social Media Management', icon: Share2, pill: 'Managed Brand Profiles' },
  ];

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slidesMeta.length) % slidesMeta.length);
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slidesMeta.length);
  };

  // Data synced directly from central portfolioData.js
  const websiteProjects = PROJECTS_MASTER.filter((p) => p.serviceId === 'website-development').slice(0, 3);
  const posterProjects = PROJECTS_MASTER.filter((p) => p.serviceId === 'photo-video-editing' && p.category === 'Poster Designs').slice(0, 3);
  const videoProjects = PROJECTS_MASTER.filter((p) => p.serviceId === 'photo-video-editing' && p.category === 'Reels & Video Editing').slice(0, 3);
  const akshaClient = CLIENTS_MASTER.find((c) => c.id === 'aksha-interior') || CLIENTS_MASTER[0];

  const currentSlide = slidesMeta[currentSlideIndex];
  const CurrentIcon = currentSlide.icon;

  const renderCurrentSlideContent = () => {
    switch (currentSlide.id) {
      case 'photo-video-editing':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posterProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate('/our-work')}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-gray-800 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="aspect-square w-full overflow-hidden relative bg-black">
                  <img
                    src={item.bannerImage || item.media?.desktopImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                </div>
                <div className="p-4 bg-gray-900 border-t border-gray-800 text-white">
                  <h4 className="text-sm font-black text-white group-hover:text-yellow-400 transition-colors leading-tight line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] font-semibold text-gray-400 mt-0.5 line-clamp-1">
                    {item.headline || item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'meta-ads-management':
        return (
          <div
            onClick={() => navigate('/our-work')}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-gray-50/80 p-6 rounded-2xl border border-gray-200/80 cursor-pointer hover:border-yellow-400 transition-colors"
          >
            <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-gray-900 leading-tight">Meta Ads Performance Report</h4>
                </div>
              </div>
              <p className="text-xs text-gray-600 font-medium">Data-driven campaign metrics tracking conversions, CPC, CTR and ROAS.</p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white p-4 rounded-xl border border-gray-200/80 text-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Total Reach</span>
                <div className="text-lg font-black text-gray-900">453,792</div>
                <span className="text-[10px] font-bold text-emerald-600">+28.4%</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200/80 text-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Conversions</span>
                <div className="text-lg font-black text-emerald-700">712</div>
                <span className="text-[10px] font-bold text-emerald-600">+14.2%</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200/80 text-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Amount Spent</span>
                <div className="text-lg font-black text-gray-900">₹67,350</div>
                <span className="text-[10px] font-bold text-emerald-600">-2.4%</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200/80 text-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase">ROAS</span>
                <div className="text-lg font-black text-yellow-600">3.58x</div>
                <span className="text-[10px] font-bold text-emerald-600">+18.7%</span>
              </div>
            </div>
          </div>
        );

      case 'reels-video-editing':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate('/our-work')}
                className="bg-gray-950 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-gray-800 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="relative aspect-[9/14] bg-black overflow-hidden group">
                  <img
                    src={item.media?.thumbnail || `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                    alt={item.category || "Shorts Reel"}
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
                  <span className="absolute top-3 left-3 bg-red-600 text-white font-black text-[10px] uppercase px-2.5 py-1 rounded-md tracking-wider shadow-md">
                    Shorts
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-gray-900 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-yellow-400 transition-all duration-300">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'social-media-management': {
        const akshaSocial = akshaClient?.socialProfiles || {};
        const insta = akshaSocial.instagram;
        const yt = akshaSocial.youtube;

        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Instagram Card */}
            {insta && (
              <div
                onClick={() => navigate('/our-work')}
                className="bg-gray-50 border border-gray-200/80 rounded-2xl p-6 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 p-[2px]">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <img src={akshaClient.logo} alt="Aksha Instagram" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <Instagram className="w-4 h-4 text-pink-600" />
                      <h4 className="text-base font-black text-gray-900 group-hover:text-yellow-600 transition-colors">{insta.name}</h4>
                    </div>
                    <span className="text-xs text-gray-500 font-semibold">{insta.handle} • {insta.category}</span>
                  </div>
                </div>
              </div>
            )}

            {/* YouTube Card */}
            {yt && (
              <div
                onClick={() => navigate('/our-work')}
                className="bg-gray-50 border border-gray-200/80 rounded-2xl p-6 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                        fill="#FF0000"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-base font-black text-gray-900 group-hover:text-yellow-600 transition-colors">{yt.name}</h4>
                    </div>
                    <span className="text-xs text-gray-500 font-semibold">{yt.handle} • YouTube Channel</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      }

      case 'website-development':
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {websiteProjects.map((project) => {
              const client = CLIENTS_MASTER.find((c) => c.id === project.clientId) || {};
              const desktopImg = project.media?.desktopImage || client.backgroundImage;
              const mobileImg = project.media?.mobileImage || client.mobileImage;

              return (
                <div
                  key={project.id}
                  onClick={() => navigate('/our-work')}
                  className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="bg-gray-100 p-4 relative min-h-[180px] flex items-center justify-center border-b border-gray-100">
                    <div className="relative w-full max-w-[220px] aspect-[16/9.5] bg-gray-950 rounded-lg p-[2%] shadow-lg border border-gray-800">
                      <div className="w-full h-full rounded overflow-hidden bg-gray-900">
                        <img
                          src={desktopImg}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-[30%] aspect-[9/19] bg-gray-950 rounded-xl p-[2%] shadow-xl border border-gray-800 z-10">
                        <div className="w-full h-full rounded-lg overflow-hidden bg-gray-900">
                          <img
                            src={mobileImg || desktopImg}
                            alt={`${project.title} mobile`}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="text-sm font-black text-gray-900 group-hover:text-yellow-600 transition-colors leading-tight mb-1">
                      {client.brandName || project.title}
                    </h4>
                    <p className="text-xs font-semibold text-gray-500 line-clamp-2 leading-relaxed">
                      {project.headline || client.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        );
    }
  };

  return (
    <section
      className="py-6 bg-[#FAFAFA] border-t border-gray-100 select-none overflow-hidden"
      id="recent-works"
      aria-label="Our Recent Work"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 1. Section Header ───────────────────────────────────────── */}
        <div className="text-center mb-8">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-black uppercase px-4 py-1.5 rounded-full mb-3 tracking-widest border border-yellow-300">
            OUR RECENT WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-3 leading-tight">
            Real Work. Real{' '}
            <span className="text-yellow-500">Impact.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
            Explore our featured digital work categories using the navigation controls below.
          </p>
        </div>

        {/* ── 2. Showcase Box with Arrow Controls & Stable Layout Height ───── */}
        <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs mb-8 transition-all duration-300 min-h-[420px] flex flex-col justify-between">

          {/* Header Bar with Slide Title & Manual Arrow Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-4 mb-6 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-800 flex items-center justify-center font-black">
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-black text-gray-900 uppercase tracking-tight">
                  {currentSlide.title}
                </h3>
                <span className="text-[10px] font-extrabold text-yellow-800 uppercase tracking-wider">
                  {currentSlide.pill}
                </span>
              </div>
            </div>

            {/* Manual Arrow Controls & Step Dots */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevSlide}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-yellow-400 hover:text-gray-950 text-gray-700 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                title="Previous Category"
                aria-label="Previous Category"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5 mx-2">
                {slidesMeta.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlideIndex
                      ? 'w-6 bg-yellow-400 shadow-xs'
                      : 'w-2 bg-gray-200 hover:bg-gray-300'
                      }`}
                    aria-label={`Go to ${slide.title}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNextSlide}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-yellow-400 hover:text-gray-950 text-gray-700 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                title="Next Category"
                aria-label="Next Category"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dynamic Content Container with Smooth Slide Crossfade */}
          <div key={currentSlide.id} className="flex-1 flex flex-col justify-center slide-crossfade">
            {renderCurrentSlideContent()}
          </div>

        </div>

        {/* ── 3. Primary CTA Redirecting to Our Works ─────────────────── */}
        <div className="text-center">
          <button
            onClick={() => navigate('/our-work')}
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-bg-yellow-500 text-black font-extrabold px-8 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm"
          >
            <span>View Full Details in Our Works</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default RecentWorks;
