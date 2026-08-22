// client/src/utils/constant/serviceData.js
import {
  Code, Megaphone, Share2, Video, PenTool, Layout, Smartphone,
  Globe, BarChart3, TrendingUp, Users, Target, Camera,
  Image as ImageIcon, Film, Scissors, Sparkles, Zap,
  MousePointerClick, Monitor, PlayCircle, Eye, ShoppingBag,
  Heart, Share, MessageSquare, ArrowUpRight, Search, FileText,
  Rocket, Headphones, Database, Server
} from 'lucide-react';
import { getProjectsByService } from '../data/portfolioData';

export const serviceData = {
  "website-development": {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    highlightedTitle: "Website Development",
    seo: {
      title: "Website Development Services | Think2xCreate",
      description: "High-performance websites that not only look stunning but also convert visitors into loyal customers."
    },
    subtitle: "High-Performance Websites That Drive Real Business Growth.",
    description: "We merge breathtaking bespoke aesthetics with blazing-fast React engineering. Our websites don't just look stunning — they are customized sales funnels optimized to load in milliseconds and turn casual traffic into paying clients.",
    theme: "amber",
    icon: Globe,
    features: ["SEO-Optimized", "Lightning Fast", "Mobile Responsive", "Conversion Focused"],
    bestWorkTitle: "Websites We're Proud Of",
    categories: ["All Works", "Business"],
    heroImages: {
      desktop: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop",
      mobile: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=900&fit=crop"
    },
    trustMetrics: [
      { label: "Completed Projects", value: "3+ Real" },
      { label: "Client Satisfaction", value: "4.9/5" },
      { label: "Mobile Performance", value: "100%" }
    ],
    workflowSteps: [
      { step: "01", title: "Discover", description: "We understand your business, target audience and conversion goals.", icon: Search },
      { step: "02", title: "Plan", description: "We create a tailored website architecture & content roadmap.", icon: FileText },
      { step: "03", title: "Design", description: "We design engaging UI/UX that presents your brand with elegance.", icon: Layout },
      { step: "04", title: "Develop", description: "We build a fast, secure & SEO-friendly website.", icon: Code },
      { step: "05", title: "Test & Launch", description: "We test mobile responsiveness thoroughly and launch your site.", icon: Rocket },
      { step: "06", title: "Support & Grow", description: "We provide ongoing support, maintenance, and SEO optimization.", icon: Headphones }
    ],
    tools: [
      { name: "React", desc: "Dynamic UI Framework" },
      { name: "Next.js", desc: "Fullstack React Framework" },
      { name: "Tailwind CSS", desc: "Utility-first CSS Engine" },
      { name: "Node.js", desc: "Scalable Backend Runtime" },
      { name: "Python", desc: "AI & High Performance Logic" },
      { name: "MongoDB", desc: "Flexible NoSQL Database" },
      { name: "Firebase", desc: "Realtime Cloud Database" },
      { name: "MySQL", desc: "Reliable Relational Database" }
    ],
    faqs: [
      { q: "How long does it take to build a website?", a: "A standard business website takes 2–4 weeks from initial discovery and design to final testing and launch." },
      { q: "Will my website be mobile-friendly?", a: "Yes, 100%! All our websites are built mobile-first, ensuring pixel-perfect layouts and fast loading speeds across smartphones, tablets, and desktops." },
      { q: "Do you provide domain and hosting support?", a: "Yes, we assist you in purchasing domain names, setting up SSL certificates, and deploying your site on cloud servers like Cloudflare, Vercel, or Hostinger." },
      { q: "Can I update my website content later on my own?", a: "Yes! We build easy-to-use administrative CMS dashboards so you can edit text, upload images, and manage services effortlessly." },
      { q: "Do you provide ongoing Google SEO support?", a: "Yes, we implement complete technical On-Page SEO (meta tags, fast loading schemas, sitemaps) during development and offer ongoing monthly SEO support." }
    ],
    get proof() {
      return getProjectsByService('website-development');
    }
  },

  "meta-ads-management": {
    id: "meta-ads-management",
    slug: "meta-ads-management",
    title: "Meta Ads Management",
    highlightedTitle: "Meta Ads Management",
    seo: {
      title: "Meta Ads Management Services | Think2xCreate",
      description: "Smarter Ads. Better Results. Real Growth. Data-driven Facebook and Instagram ad campaigns that return high ROAS."
    },
    subtitle: "Smarter Ads. Better Results. Real Growth.",
    description: "We create, manage and optimize high-performing Meta ad campaigns that generate quality leads, increase sales and maximize return on investment for your business.",
    theme: "amber",
    icon: Megaphone,
    features: ["High ROI Campaigns", "Audience Targeting", "Ad Creative That Converts", "Data Driven Optimization"],
    bestWorkTitle: "Meta Ads Campaigns That Deliver Results.",
    categories: ["All Works", "Meta Ads", "Google Ads"],
    heroImages: {
      desktop: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      mobile: "https://images.unsplash.com/photo-1542744094-3a3172720224?w=600&h=900&fit=crop"
    },
    trustMetrics: [
      { label: "Ad Accounts Managed", value: "15+" },
      { label: "Audience Optimization", value: "Daily" },
      { label: "Creative Testing", value: "A/B Tested" }
    ],
    workflowSteps: [
      { step: "01", title: "Research", description: "We analyze your business, target audience & competitors.", icon: Search },
      { step: "02", title: "Strategy", description: "We create a winning ad strategy tailored to your business goals.", icon: FileText },
      { step: "03", title: "Ad Creation", description: "We design high-converting ad creatives that grab attention.", icon: PenTool },
      { step: "04", title: "Campaign Launch", description: "We launch & monitor campaigns for optimal performance.", icon: Rocket },
      { step: "05", title: "Optimization", description: "We optimize ads to reduce cost & increase lead conversions.", icon: BarChart3 },
      { step: "06", title: "Scale & Grow", description: "We scale successful ad sets to grow your business revenues.", icon: TrendingUp }
    ],
    tools: [
      { name: "Meta Ads Manager", desc: "Campaign Management", icon: Megaphone, color: "text-blue-600" },
      { name: "Meta Pixel", desc: "Conversion Tracking", icon: Target, color: "text-blue-500" },
      { name: "Lookalike Audience", desc: "Smart Buyer Targeting", icon: Users, color: "text-yellow-600" },
      { name: "Google Analytics", desc: "Data Insights", icon: BarChart3, color: "text-yellow-600" },
      { name: "Canva", desc: "Ad Creative Design", icon: Layout, color: "text-cyan-600" },
      { name: "UTM Tracking", desc: "Performance Tracking", icon: Target, color: "text-purple-600" },
      { name: "Google Sheets", desc: "Reporting & Analysis", icon: FileText, color: "text-emerald-600" }
    ],
    faqs: [
      { q: "How do Meta Ads help my business?", a: "Meta Ads help you reach high-intent customers on Facebook & Instagram, generate qualified inquiries, and drive sales through targeted campaigns." },
      { q: "What types of businesses do you work with?", a: "We work with local service businesses, interior designers, retail stores, clinics, education academies, and B2B companies." },
      { q: "How do you measure campaign performance?", a: "We track Return On Ad Spend (ROAS), Cost Per Lead (CPL), Click-Through Rates (CTR), conversion volume, and customer acquisition costs." },
      { q: "What is the recommended ad budget?", a: "We recommend starting with an ad spend of ₹500 to ₹1,000 per day to test creative hooks and allow Meta's AI algorithm to optimize targeting." },
      { q: "How long before campaigns generate results?", a: "Ad campaigns typically begin generating lead inquiries within 24 to 48 hours after going live." }
    ],
    get proof() {
      return getProjectsByService('meta-ads-management');
    }
  },

  "social-media-management": {
    id: "social-media-management",
    slug: "social-media-management",
    title: "Social Media Management",
    highlightedTitle: "Social Media Management",
    seo: {
      title: "Social Media Management Services | Think2xCreate",
      description: "Build Engagement. Grow Community. Drive Real Results. Turn your social media into a powerful growth engine."
    },
    subtitle: "Build Engagement. Grow Community. Drive Real Results.",
    description: "We create scroll-stopping content, build meaningful connections, and turn your social media into a powerful growth engine for your brand.",
    theme: "yellow",
    icon: Share2,
    features: ["Engaging Content", "Community Building", "Brand Awareness", "Consistent Growth"],
    bestWorkTitle: "Social Media That Creates Impact.",
    categories: ["All Works", "Content Creation", "Social Media", "Camera Shoot"],
    heroImages: {
      desktop: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop",
      mobile: "https://images.unsplash.com/photo-1611162616075-472988289838?w=600&h=900&fit=crop"
    },
    trustMetrics: [
      { label: "Content Published", value: "500+ Posts" },
      { label: "Reels Scripted", value: "50+ Reels" },
      { label: "Consistency", value: "100%" }
    ],
    workflowSteps: [
      { step: "01", title: "Research", description: "We analyze your brand, audience & competitors.", icon: Search },
      { step: "02", title: "Strategy", description: "We create a custom social media strategy aligned with your goals.", icon: FileText },
      { step: "03", title: "Content Creation", description: "We design eye-catching content that connects and engages.", icon: PenTool },
      { step: "04", title: "Scheduling & Posting", description: "We post consistently across all major social channels.", icon: Rocket },
      { step: "05", title: "Monitor & Engage", description: "We monitor inquiries and engage with your audience.", icon: Headphones },
      { step: "06", title: "Analyze & Grow", description: "We track performance and optimize content strategy.", icon: TrendingUp }
    ],
    tools: [
      { name: "Meta Business Suite", desc: "Manage & Analyze", icon: Smartphone, color: "text-blue-600" },
      { name: "Hootsuite", desc: "Schedule & Monitor", icon: Users, color: "text-yellow-600" },
      { name: "Canva", desc: "Design & Create", icon: Layout, color: "text-cyan-500" },
      { name: "Later", desc: "Plan & Schedule", icon: Layout, color: "text-pink-500" },
      { name: "Google Analytics", desc: "Analytics & Insights", icon: BarChart3, color: "text-yellow-600" },
      { name: "Iconosquare", desc: "Analytics & Insights", icon: BarChart3, color: "text-indigo-500" },
      { name: "Bitly", desc: "Link Tracking", icon: Target, color: "text-orange-500" }
    ],
    faqs: [
      { q: "What social media platforms do you manage?", a: "We manage Instagram, Facebook, and Google Business profiles tailored to your target audience." },
      { q: "How often will you post on my profiles?", a: "We post 3 to 5 times per week including high-retention video reels, graphic carousels, and story updates." },
      { q: "Do you create the content?", a: "Yes, we handle content planning, scriptwriting, photo/video editing, graphic design, copywriting, and hashtag research." },
      { q: "Can you shoot photos/videos?", a: "Yes, we coordinate brand photography and Reels shoot directly at your local business or site." },
      { q: "Can you reply to comments/messages?", a: "Yes, we monitor comments and DMs during business hours to forward qualified inquiries to your team." }
    ],
    get proof() {
      return getProjectsByService('social-media-management');
    }
  },

  "photo-video-editing": {
    id: "photo-video-editing",
    slug: "photo-video-editing",
    title: "Photo & Video Editing",
    highlightedTitle: "Photo & Video Editing",
    seo: {
      title: "Photo & Video Editing Services | Think2xCreate",
      description: "Cinematic Visuals That Command Instant Attention. Elite post-production and high-tempo edits."
    },
    subtitle: "Cinematic Visuals That Command Instant Attention.",
    description: "In the attention economy, poor visuals are fatal. We deliver elite-level post-production, high-tempo social editing, cinematic grading, and commercial retouching designed to make your brand hyper-luxurious.",
    theme: "yellow",
    icon: Video,
    features: ["High-Res Retouching", "Reels & Shorts Editing", "Brand Aesthetics", "Fast Turnaround"],
    bestWorkTitle: "Cinematic Visuals & Visual Proof.",
    categories: ["All Works", "Poster Design", "Video Editing"],
    heroImages: {
      desktop: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=800&fit=crop",
      mobile: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=900&fit=crop"
    },
    trustMetrics: [
      { label: "Videos Edited", value: "200+" },
      { label: "Turnaround Time", value: "24-48 Hours" },
      { label: "Render Quality", value: "4K Ultra HD" }
    ],
    workflowSteps: [
      { step: "01", title: "Raw Media Mining", description: "We review raw footage & photos to outline the storyline.", icon: Search },
      { step: "02", title: "Narrative Pacing", description: "We select key moments and structure high-retention cuts.", icon: FileText },
      { step: "03", title: "Color Grading", description: "We apply custom LUTs and skin-tone matching for depth.", icon: PenTool },
      { step: "04", title: "Sound Design", description: "We layer crisp swooshes, ambient tracks, and sound effects.", icon: Rocket },
      { step: "05", title: "Motion Graphics", description: "We insert dynamic animated captions, tracking, and overlays.", icon: BarChart3 },
      { step: "06", title: "Final Export", description: "We export ultra-sharp multi-ratio videos for all platforms.", icon: TrendingUp }
    ],
    tools: [
      { name: "Premiere Pro", desc: "Professional Dynamic Timelines", icon: Film, color: "text-purple-600" },
      { name: "After Effects", desc: "Advanced Custom Motion Assets", icon: Sparkles, color: "text-indigo-600" },
      { name: "DaVinci Resolve", desc: "High-end Color Grading", icon: Camera, color: "text-yellow-600" },
      { name: "Lightroom Classic", desc: "Flawless Photo Color Maps", icon: ImageIcon, color: "text-sky-600" },
      { name: "Photoshop", desc: "High-Res Retouching", icon: Layout, color: "text-blue-600" },
      { name: "CapCut", desc: "Short-Form Social Reels", icon: Smartphone, color: "text-black" }
    ],
    faqs: [
      { q: "Do you design promotional posters?", a: "Yes, we design digital graphics, social media poster ads, and trade show banner creatives." },
      { q: "Can you edit Instagram Reels?", a: "Yes, we specialize in pacing vertical Reels with transitions, subtitles, sound design, and color grading." },
      { q: "Can you edit YouTube videos?", a: "Yes, we edit horizontal corporate stories, vlogs, and YouTube explainer clips." },
      { q: "Can you work with footage provided by us?", a: "Yes, you can upload raw video clips directly via Google Drive or Dropbox." },
      { q: "What formats do you deliver?", a: "We export optimized files in 9:16 vertical reels (MP4), 16:9 horizontal videos, and print-ready high-res designs." }
    ],
    get proof() {
      return getProjectsByService('photo-video-editing');
    }
  }
};

// Map alias keys safely
serviceData["meta-ads"] = serviceData["meta-ads-management"];
serviceData["social-media"] = serviceData["social-media-management"];
serviceData["video-editing"] = serviceData["photo-video-editing"];

export default serviceData;
