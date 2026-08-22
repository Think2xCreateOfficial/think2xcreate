import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Headphones, ArrowRight } from 'lucide-react';

/**
 * Service Page FAQ Component (Reference C)
 * Accordion component addressing 5 real business-owner focused questions per service.
 */
export const ServiceFAQ = ({ data }) => {
  const navigate = useNavigate();
  const [openIdx, setOpenIdx] = useState(0);

  if (!data) return null;

  const defaultFaqsMap = {
    'website-development': [
      {
        q: 'How long does it take to build a website?',
        a: 'A standard custom business website takes 2–4 weeks, while complex eCommerce platforms or web apps take 4–6 weeks from discovery to launch.',
      },
      {
        q: 'Will my website be mobile-friendly?',
        a: 'Yes, 100%! All our websites are built mobile-first, ensuring pixel-perfect layout and lightning-fast loading speeds across smartphones, tablets, and desktops.',
      },
      {
        q: 'Do you provide domain and hosting support?',
        a: 'Yes, we assist you in purchasing domain names, setting up SSL certificates, and deploying your site on ultra-fast cloud servers like Cloudflare, Vercel, or Hostinger.',
      },
      {
        q: 'Can I update my website content later?',
        a: 'Absolutely! We build easy-to-use CMS administrative dashboards (or Sanity CMS) so you can edit text, upload images, and manage products effortlessly.',
      },
      {
        q: 'Do you provide ongoing Google SEO support?',
        a: 'Yes, we implement complete technical On-Page SEO (meta tags, fast loading schemas, sitemaps) during development and offer ongoing monthly SEO packages to rank on Google.',
      },
    ],
    'meta-ads-management': [
      {
        q: 'How Meta Ads help my business?',
        a: 'Meta Ads target high-intent users on Facebook and Instagram using interest, demographic, and lookalike parameters, delivering instant leads, calls, and online sales.',
      },
      {
        q: 'What types of businesses do you work with?',
        a: 'We specialize in local service providers (interior design, real estate), retail/eCommerce stores, clinics, education academies, and high-ticket service brands.',
      },
      {
        q: 'How do you measure campaign success?',
        a: 'We track key metrics including ROAS (Return On Ad Spend), Cost Per Lead (CPL), Click-Through Rates (CTR), and total net conversions daily via Meta Pixel and CAPI.',
      },
      {
        q: 'What is the minimum budget required?',
        a: 'We recommend a starting ad spend budget of ₹500–₹1,000 per day to allow Meta’s AI algorithm to test ad sets and optimize for high-performing buyers.',
      },
      {
        q: 'How long does it take to see results?',
        a: 'Initial ad leads and website inquiries typically start coming in within 24 to 48 hours after campaign launch.',
      },
    ],
    'social-media-management': [
      {
        q: 'What social media platforms do you manage?',
        a: 'We manage Instagram, Facebook, LinkedIn, YouTube Shorts, and Google Business profiles tailored to where your target customers hang out.',
      },
      {
        q: 'How often will you post on my profiles?',
        a: 'Depending on your package, we post 3 to 6 times per week, including high-retention video reels, graphic carousels, and engaging story updates.',
      },
      {
        q: 'Do you create photos, videos, and captions?',
        a: 'Yes, we handle the full production lifecycle: content planning, scriptwriting, photo/video editing, graphic design, copywriting, and hashtag research.',
      },
      {
        q: 'Can you handle comments and direct messages?',
        a: 'Yes, we monitor comments and DMs during business hours to answer basic inquiries and forward qualified leads to your sales team.',
      },
      {
        q: 'How do you measure social media growth?',
        a: 'We deliver monthly analytics reports highlighting reach, profile visits, follower growth, engagement rates, and direct lead generation.',
      },
    ],
    'photo-video-editing': [
      {
        q: 'Can you edit product photos for online stores?',
        a: 'Yes, we provide high-resolution photo retouching, background removal, lighting correction, and lifestyle product composition for Shopify & Amazon.',
      },
      {
        q: 'Can you create short reels and video ads?',
        a: 'Yes! We specialize in editing high-retention Instagram Reels, Shorts, and Meta video ads complete with sound design, dynamic captions, and color grading.',
      },
      {
        q: 'What type of footage can I provide?',
        a: 'You can send raw phone videos, DSLR footage, or product images via Google Drive, Dropbox, or WhatsApp.',
      },
      {
        q: 'How many revisions are included?',
        a: 'All our editing packages include up to 2 rounds of free revisions to ensure the final output matches your exact vision.',
      },
      {
        q: 'How quickly can edited content be delivered?',
        a: 'Short reels and social photos are delivered within 24 to 48 hours. Comprehensive video projects take 3 to 5 business days.',
      },
    ],
  };

  const faqsList = defaultFaqsMap[data.id] || defaultFaqsMap['website-development'];

  return (
    <section className="py-6 bg-[#FAF9F6] border-t border-gray-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-6">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-black uppercase px-4 py-1 rounded-full tracking-widest border border-yellow-300 mb-3">
            FAQS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Common Questions. Clear Answers.
          </h2>
        </div>

        {/* 2-Column Accordion & CTA Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Accordion List (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {faqsList.map((faq, idx) => {
              const isOpen = openIdx === idx;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-gray-900 cursor-pointer focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <div
                      className={`w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-transform ${isOpen ? 'rotate-180 bg-yellow-100 text-yellow-800' : ''
                        }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-gray-500 font-medium leading-relaxed border-t border-gray-50 mt-1">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Highlight Card (4 Cols) */}
          <div className="lg:col-span-4 bg-yellow-50/60 border border-yellow-200/80 rounded-3xl p-8 text-center flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-yellow-400 text-black flex items-center justify-center mb-4 shadow-md">
              <Headphones className="w-7 h-7 stroke-[2.2]" />
            </div>

            <h3 className="text-xl font-extrabold text-gray-900 mb-2">
              Have More Questions?
            </h3>

            <p className="text-xs text-gray-600 font-medium mb-6 leading-relaxed max-w-xs">
              Our experts are here to help you build the perfect strategy for your business.
            </p>

            <button
              onClick={() => navigate('/contact')}
              className="bg-yellow-400 hover:bg-bg-yellow-500 text-black px-6 py-3 rounded-xl font-extrabold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md active:scale-95"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceFAQ;
