import { 
  Code, Megaphone, Share2, Video, PenTool, Layout, Smartphone, 
  Globe, BarChart3, TrendingUp, Users, Target, Camera, 
  Image as ImageIcon, Film, Scissors, Sparkles, Zap, 
  MousePointerClick, Monitor, PlayCircle, Eye, ShoppingBag, 
  Heart, HeartIcon, EyeIcon, Share, MessageSquare, ArrowUpRight
} from 'lucide-react';

export const serviceData = {
  "website-development": {
    id: "website-development",
    title: "Website Development",
    seo: {
      title: "Website Development for Interior Brands | Think2xCreate",
      description: "Premium website development and design for interior design businesses and retail stores."
    },
    subtitle: "High-Performance Websites That Double Conversions.",
    description: "We merge breathtaking bespoke aesthetics with blazing-fast React engineering. Our websites don't just look stunning — they are customized sales funnels optimized to load in milliseconds and turn casual traffic into paying clients.",
    theme: "amber",
    icon: Globe,
    trustMetrics: [
      { label: "Average Speed Score", value: "98/100" },
      { label: "Average Conversion Lift", value: "+120%" },
      { label: "Projects Completed", value: "45+" }
    ],
    heroVisuals: [
      { type: "metric", label: "Monthly Conversions", value: "4,820", trend: "+34.5%", color: "text-amber-500" },
      { type: "tech", label: "Next.js + React", loadTime: "0.4s", score: "99" }
    ],
    process: [
      { step: "01", title: "Funnel Strategy & Architecture", description: "We map out the exact user flow and conversion loops required to capture leads and drive actions based on competitor research.", size: "" },
      { step: "02", title: "Bespoke Dribbble-Grade UI Design", description: "Creating custom, premium Figma designs with smooth micro-interactions, custom styling tokens, and flawless high-end typography.", size: "" },
      { step: "03", title: "Cutting-Edge Development", description: "Writing hyper-optimized, responsive React code with framer-motion and Tailwind CSS for fluid 60fps animations.", size: "" },
      { step: "04", title: "Rigorous Core Web Vitals Polish", description: "Perfecting mobile layouts, optimizing media lazy loading, setting SEO tags, and ensuring a fast load speed under 1.2s.", size: "" }
    ],
    tools: [
      { name: "React & Vite", icon: Code, description: "Dynamic reactive interfaces" },
      { name: "Tailwind CSS", icon: PenTool, description: "Stunning utility utility styling" },
      { name: "Figma", icon: Layout, description: "Pixel-perfect visual prototypes" },
      { name: "Framer Motion", icon: Sparkles, description: "Sleek 60fps animations" }
    ],
    proof: [
      {
        id: "web-1",
        title: "Aksha Interior Showcase Website",
        type: "Premium Portfolio",
        stats: "3x More Inquiries",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
        mobileImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600",
        tech: ["React", "Tailwind", "Vite", "Node.js",],
        url: "https://akshainteriortvl.vercel.app/"
      },
      {
        id: "web-2",
        title: "Gifty Passion POS Dashboard",
        type: "Custom Web Application",
        stats: "99.9% Uptime",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
        mobileImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        tech: ["React", "Firebase"],
        url: "https://giftypassion-pos.vercel.app/"
      }
    ]
  },
  "meta-ads": {
    id: "meta-ads",
    title: "Meta Ads Management",
    seo: {
      title: "Meta Ads Campaigns for Local Businesses | Think2xCreate",
      description: "Data-driven Facebook and Instagram ad campaigns that return 4x+ ROI for local businesses."
    },
    subtitle: "Data-Driven Facebook & Instagram Campaigns That Return 4x+ ROI.",
    description: "Stop wasting money on 'boosted posts'. We build full-funnel ad campaigns structured for efficiency, led by scroll-stopping creative copies and audience target maps that drive direct sales, calls, and qualified high-ticket leads.",
    theme: "amber",
    icon: Megaphone,
    trustMetrics: [
      { label: "Average Account ROAS", value: "4.2x" },
      { label: "Cost Per Lead Slash", value: "-45%" },
      { label: "Ad Spend Managed", value: "₹40L+" }
    ],
    heroVisuals: [
      { type: "metric", label: "Campaign ROAS", value: "5.42x", trend: "+12%", color: "text-emerald-500" },
      { type: "pie", label: "Cost Per Sale", before: "₹920", after: "₹340" }
    ],
    process: [
      { step: "01", title: "Deep Competitor & Audience Mining", description: "Extracting targeting hooks and analyzing what creatives are successfully printing money in your niche.", size: "" },
      { step: "02", title: "Scroll-Stopping Creative Direction", description: "Writing hooks and designing graphics / static ads that capture thumbs within the first 1.5 seconds.", size: "" },
      { step: "03", title: "Pixel Setup & Clean Funnel Tracking", description: "Deploying Meta Pixel, Custom Conversions, and CAPI to ensure ads algorithm is trained on active buyers.", size: "" },
      { step: "04", title: "CBO/ABO Scaling & Campaign Pruning", description: "Killing underperforming ad sets daily and feeding high-performing assets to scale budgets safely.", size: "" }
    ],
    tools: [
      { name: "Meta Business Suite", icon: BarChart3, description: "Advanced advertising terminal" },
      { name: "Audience Insights", icon: Users, description: "Demographic and psychographic mining" },
      { name: "Google Analytics", icon: TrendingUp, description: "Multi-touch attribution check" },
      { name: "Meta Pixel & CAPI", icon: Target, description: "Server-side event optimization" }
    ],
    proof: [
      {
        id: "ads-1",
        title: "Aksha Interior High-Ticket Lead Gen",
        stats: "180+ Leads Achieved",
        adCopy: "🏡 Looking to transform your home in Tirunelveli? Get premium, customized interior design solutions that match your lifestyle. Click below to book a free design consultation! (Limited spots available this month)",
        adImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
        adHeadline: "Premium Interior Design Consultation | Tirunelveli",
        adCta: "Book Now",
        campaignStats: { spend: "₹15,000", leads: "180", costPerLead: "₹85.00", ctr: "3.2%", roas: "N/A (Lead Gen)" }
      },
      {
        id: "ads-2",
        title: "Aksha Interior Retargeting Campaign",
        stats: "Cost Per Lead Slashed -40%",
        adCopy: "✨ Still thinking about that dream living room? Don't settle for less. Our expert team at Aksha Interior brings your vision to life. Download our latest design portfolio for inspiration.",
        adImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
        adHeadline: "Download Our 2026 Design Portfolio",
        adCta: "Download",
        campaignStats: { spend: "₹8,000", leads: "95", costPerLead: "₹84.00", ctr: "4.1%", roas: "N/A (Lead Gen)" }
      }
    ]
  },
  "social-media": {
    id: "social-media",
    title: "Social Media Management",
    seo: {
      title: "Social Media Marketing Portfolio | Think2xCreate",
      description: "Organic profiles turned into highly engaging communities for brands like Aksha Interior and Gifty Passion."
    },
    subtitle: "Turn Your Organic Profiles Into Highly Engaging Communities.",
    description: "We don't just dump random posts. We structure custom content pillars, design ultra-premium aesthetic grids, and script highly viral short-form reels that build trust, authority, and organic traffic that converts.",
    theme: "amber",
    icon: Share2,
    trustMetrics: [
      { label: "Organic Reach Growth", value: "350%" },
      { label: "Viral Reels Scripted", value: "18+" },
      { label: "Followers Gained", value: "15k+" }
    ],
    heroVisuals: [
      { type: "metric", label: "Profile Impressions", value: "480k+", trend: "+242%", color: "text-amber-500" },
      { type: "reel-metric", label: "Views", value: "1.2M", duration: "30 Days" }
    ],
    process: [
      { step: "01", title: "Content Pillar Blueprinting", description: "Mapping out exactly what your brand should post to educate, entertain, and close sales organically.", size: "" },
      { step: "02", title: "Aesthetic Design & Scripting", description: "Scripting high-retention hook reels and designing clean, unified post carousels with distinct typography.", size: "" },
      { step: "03", title: "Publishing & Strategic Hashtags", description: "Scheduling posts at peak target times and deploying low-competition local/industry search terms.", size: "" },
      { step: "04", title: "Community Bonding & Inbound Closing", description: "Replying to comments instantly to satisfy the algorithm and capturing direct message inquiries.", size: "" }
    ],
    tools: [
      { name: "Instagram Core", icon: Smartphone, description: "Grid aesthetic management" },
      { name: "CapCut & Filmora", icon: Film, description: "Short-form dynamic storytelling" },
      { name: "Canva & Illustrator", icon: ImageIcon, description: "High-end post assets" },
      { name: "Meta Analytics", icon: TrendingUp, description: "Viewer retention checkpoints" }
    ],
    proof: [
      { id: 1, title: "Gifty Passion Instagram Reel Strategy", type: "Reel", stats: "150k Views", likes: "12.5k", comments: "282", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800", url: "https://www.instagram.com/giftypassion/",},
      { id: 2, title: "Aksha Interior Project Reveal", type: "Carousel", stats: "45k Reach", likes: "3.8k", comments: "142", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800", url: "https://www.instagram.com/akshainterior/", },
      { id: 3, title: "Gifty Passion Product Showcase", type: "Reel", stats: "85k Views", likes: "8.2k", comments: "110", image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=800", url: "https://www.instagram.com/giftypassion/", }
    ]
  },
  "video-editing": {
    id: "video-editing",
    title: "Photo & Video Editing",
    seo: {
      title: "Photo & Video Editing Showcase | Think2xCreate",
      description: "Cinematic visuals, dynamic short-form edits, and premium photo retouching for interior and retail brands."
    },
    subtitle: "Cinematic Visuals That Commands Instant Attention.",
    description: "In the attention economy, poor visuals are fatal. We deliver elite-level post-production, high-tempo social editing, cinematic grading, and precise commercial product photography designed to make your items look hyper-luxurious.",
    theme: "amber",
    icon: Video,
    trustMetrics: [
      { label: "Reels Paced & Edited", value: "300+" },
      { label: "Average Retention Boost", value: "+45%" },
      { label: "Cinematic Projects", value: "80+" }
    ],
    heroVisuals: [
      { type: "metric", label: "Average View Duration", value: "85%", trend: "+28%", color: "text-amber-500" }
    ],
    process: [
      { step: "01", title: "Narrative Pacing & Selects", description: "Reviewing raw footage, selecting the best frames, and structuring the emotional curve of the edit.", size: "" },
      { step: "02", title: "Dynamic Sound Design & Cuts", description: "Syncing high-impact sound design, transition swooshes, and modern SFX to keep interest extremely high.", size: "" },
      { step: "03", title: "Color Grading & Depth Layers", description: "Applying customized LUTs, skin-tone matching, and premium contrast maps for a cinematic look.", size: "" },
      { step: "04", title: "Motion Captions & Polish", description: "Adding custom dynamic captions, tracking highlights, overlay graphics, and finalizing optimized renders.", size: "" }
    ],
    tools: [
      { name: "Premiere Pro", icon: Film, description: "Professional dynamic timelines" },
      { name: "After Effects", icon: Video, description: "Advanced custom motion assets" },
      { name: "DaVinci Resolve", icon: Camera, description: "High-end cinematic color grading" },
      { name: "Lightroom Classic", icon: ImageIcon, description: "Flawless photo color maps" }
    ],
    proof: [
      {
        id: "slider-1",
        category: "photo",
        isSlider: true,
        title: "Aksha Interior Room Enhancement",
        rawImage: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800",
        editedImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
        stats: "Color & Depth Grade"
      },
      {
        id: "slider-2",
        category: "photo",
        isSlider: true,
        title: "Gifty Passion Product Retouching",
        rawImage: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800&sat=-100",
        editedImage: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800",
        stats: "Dynamic Lighting Match"
      },
      {
        id: "photo-1",
        category: "photo",
        isSlider: false,
        title: "Interior Design Social Creative",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
        stats: "Social Creative"
      },
      {
        id: "photo-2",
        category: "photo",
        isSlider: false,
        title: "Gift Collection Promo Poster",
        image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=800",
        stats: "Commercial Retouch"
      },
      {
        id: "vid-1",
        category: "video",
        title: "Aksha Interior TVL Setup Showcase",
        ytUrl: "https://www.youtube.com/embed/lkNVTyiQhC0",
        image: "https://img.youtube.com/vi/lkNVTyiQhC0/maxresdefault.jpg",
        stats: "Project Walkthrough",
        length: "1:45"
      },
      {
        "id": "vid-2",
        "category": "video",
        "title": "Wood vs UPVC – AKSHA INTERIOR Comparison",
        "ytUrl": "https://www.youtube.com/embed/c4RzCVQ1OQM",
        "image": "https://img.youtube.com/vi/c4RzCVQ1OQM/hqdefault.jpg",
        "stats": "Product Explainer",
        "length": "2:10"
      },
      {
        id: "vid-3",
        category: "video",
        title: "Gifty Passion Promo Shoot",
        ytUrl: "https://www.youtube.com/embed/ePjK4j8Vm28",
        image: "https://img.youtube.com/vi/ePjK4j8Vm28/hqdefault.jpg",
        stats: "Product Explainer",
        length: "1:15"
      }
    ]
  }
};
