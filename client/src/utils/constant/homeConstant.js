import { ArrowRight, TrendingUp, Users, Zap, 
         Globe, MapPin, Share2, Megaphone, BarChart2, 
         Store, UtensilsCrossed, Rocket, ShoppingCart, BriefcaseBusiness, UsersIcon, Target, ChartNoAxesCombined,
         Quote, Star, Heart,
         CalendarCheck, MessageCircle,
         Send, CheckCircle,
         Phone,
         Search,
         Smartphone,
         Camera,
         Pencil,
} from "lucide-react";

// hero section content
export const heroContent = {
  badge: {
    text: "Free Business Audit + Strategy Call (Limited Slots)",
    icon: false,
    color: "bg-yellow-50 border-yellow-200 text-yellow-700"
  },
  headline: {
    prefix: "Grow Your Business with ",
    highlight: "Smart Digital Solutions",
    highlightColor: "text-yellow-400"
  },
  subtext: {
    text: "Websites, Ads & Branding – Everything You Need to Get More Leads & Sales. Based in ",
    locations: ["Tirunelveli", "Tamil Nadu"],
    suffix: "."
  },
  ctaButtons: {
    primary: {
      text: "Get Free Consultation",
      href: "#contact",
      icon: ArrowRight
    },
    secondary: {
      text: "View Our Work",
      href: "#projects"
    }
  },
  trustStrip: {
    text: "Trusted by Growing Businesses | Based in Tamil Nadu | Results-Driven Marketing",
    color: "bg-gray-50 text-gray-600"
  },
  dashboard: {
    header: {
      label: "Revenue Growth",
      value: "340%",
      icon: TrendingUp
    },
    title: "T2C Dashboard",
    barData: [28, 38, 32, 45, 40, 55, 50, 65, 60, 75, 70, 90],
    months: ["Jan", "Jun", "Dec"],
    metrics: [
      { id: 1, label: "Conversions", value: "2,847", color: "text-gray-900" },
      { id: 2, label: "ROAS", value: "4.2x", color: "text-green-600", sub: "+18%" },
      { id: 3, label: "CPL", value: "₹120", color: "text-green-600", sub: "-31%" }
    ]
  },
  floatingCards: {
    leads: {
      icon: Users,
      label: "Leads Generated",
      value: "12K+"
    },
    campaigns: {
      icon: Zap,
      label: "Campaigns Run",
      value: "500+"
    }
  }
};

// Business audit section content
export const businessAuditContent = {
  badge: {
    text: "Free Business Audit",
    color: "bg-yellow-100 text-yellow-700"
  },
  headline: {
    prefix: "How Strong Is Your",
    highlight: "Business Online",
    suffix: "?",
    highlightColor: "text-yellow-500"
  },
  subtext: "Check in 30 seconds and find out why you're not getting leads.",
  questions: [
    { id: "website", icon: Globe, label: "Does your business have a website?" },
    { id: "maps", icon: MapPin, label: "Is your business listed on Google Maps?" },
    { id: "social", icon: Share2, label: "Do you post on social media at least 3 times a week?" },
    { id: "ads", icon: Megaphone, label: "Do you run any paid advertising campaigns?" },
    { id: "analytics", icon: BarChart2, label: "Do you track your website analytics regularly?" },
  ],
  ctaButton: {
    text: "Book a Free Audit Call",
    href: "#contact"
  },
  scoreLevels: [
    { max: 1, label: "Needs Work", color: "text-red-500", barColor: "bg-red-400", width: "w-1/5" },
    { max: 2, label: "Weak", color: "text-orange-500", barColor: "bg-orange-400", width: "w-2/5" },
    { max: 3, label: "Average", color: "text-yellow-600", barColor: "bg-yellow-400", width: "w-3/5" },
    { max: 4, label: "Good", color: "text-blue-500", barColor: "bg-blue-400", width: "w-4/5" },
    { max: 5, label: "Excellent", color: "text-green-500", barColor: "bg-green-400", width: "w-full" }
  ]
};

// service section content
export const serviceContent = {
  badge: {
    text: "What We Do",
    color: "bg-yellow-100 text-yellow-700"
  },
  headline: {
    title: "Smart Digital Solutions",
    description: "Everything you need to generate leads and grow your business."
  },
  services: [
    {
      id: 1,
      icon: "Layout",
      title: "Website Development",
      tagline: "Your digital foundation.",
      description: "Modern, fast, mobile-friendly websites that convert visitors into leads",
    },
    {
      id: 2,
      icon: "Users",
      title: "Meta Ads",
      tagline: "Leads on demand.",
      description: "Highly targeted Facebook & Instagram ads that bring real customers",
    },
    {
      id: 3,
      icon: "Palette",
      title: "Branding & Design",
      tagline: "Stand out instantly.",
      description: "Posters, creatives, and brand identity that attracts attention",
    },
    {
      id: 4,
      icon: "Video",
      title: "Content Creation",
      tagline: "Content that sells.",
      description: "Reels, videos, and social content built for engagement & growth",
    },
  ]
};

// why choose us section content
export const whyChooseUsContent = {
  badge: {
    text: "Why Us",
    color: "bg-yellow-100 text-yellow-700"
  },
  headline: {
    title: "Why Choose Think2xCreate",
    description: "Simple, effective, and results-driven approach"
  },
  futures: [
    {
      id: 1,
      icon: "Target",
      title: "Strategy First Approach",
      description: "We don’t guess — we plan before we execute",
    },
    {
      id: 2,
      icon: "BadgeDollarSign",
      title: "Budget-Friendly",
      description: "Affordable solutions designed for growing businesses",
    },
    {
      id: 3,
      icon: "TrendingUp",
      title: "Results Focused",
      description: "Everything we do is focused on leads and sales",
    },
    {
      id: 4,
      icon: "UserCheck",
      title: "Personalized Support",
      description: "Direct communication and tailored strategies",
    },
    {
      id: 5,
      icon: "Settings2",
      title: "Customized Solutions",
      description: "No cookie-cutter approach — strategies tailored to your unique goals",
      highlight: false,
    },
  ],
}; 

// case studied section content
export const CATEGORIES = [
  { id: "all",       label: "All" },
  { id: "local",     label: "Local Business" },
  { id: "ecommerce", label: "Ecommerce" },
  { id: "service",   label: "Service" },
];

export const caseStudies = [
  {
    id: 1,
    category: "local",
    business: "Beauty Salon",
    city: "Chennai",
    tagline: "Struggling to get walk-in customers",
    platforms: ["Google Ads", "Instagram"],
    highlight: "+120 Leads in 30 Days",
    problem: "Zero online visibility, relying only on word-of-mouth",
    solution: "Ran hyper-local Google Ads + Instagram stories targeting women 22–45",
    result: "120+ appointment bookings in the first month",
    metrics: { leads: "120+", roi: "5.1x", reach: "18K" },
    gradient: ["#FFD600", "#FF8C00"],
    icon: "✂️",
    timeline: "30 days",
  },
  {
    id: 2,
    category: "ecommerce",
    business: "Ethnic Wear Store",
    city: "Coimbatore",
    tagline: "Website traffic but zero sales",
    platforms: ["Meta Ads", "Google Shopping"],
    highlight: "₹3.2L Revenue in 45 Days",
    problem: "High traffic but poor conversion — only 0.4% sale rate",
    solution: "Rebuilt product ads with regional targeting + retargeting funnel",
    result: "Conversion rate jumped to 3.8%, revenue grew 8x",
    metrics: { leads: "840+", roi: "8.0x", reach: "42K" },
    gradient: ["#7C3AED", "#C084FC"],
    icon: "👗",
    timeline: "45 days",
  },
  {
    id: 3,
    category: "service",
    business: "Dental Clinic",
    city: "Madurai",
    tagline: "Low patient inquiries on slow weeks",
    platforms: ["Google Ads", "SEO"],
    highlight: "+180% More Inquiries",
    problem: "Clinic had 5–6 inquiries/week, 3 chairs always empty",
    solution: "Local SEO + Google Ads targeting high-intent searches",
    result: "25+ inquiries per week, all chairs booked 2 weeks ahead",
    metrics: { leads: "25+/wk", roi: "6.3x", reach: "12K" },
    gradient: ["#0EA5E9", "#38BDF8"],
    icon: "🦷",
    timeline: "60 days",
  },
  {
    id: 4,
    category: "ecommerce",
    business: "Handicraft Shop",
    city: "Trichy",
    tagline: "Only selling locally, wanted to go national",
    platforms: ["Instagram", "Meta Ads"],
    highlight: "50K Followers + ₹1.8L/Month Online",
    problem: "No digital presence, all sales were in-store only",
    solution: "Instagram content strategy + product reels + paid ads",
    result: "Built 50K followers, now gets 60% revenue from online orders",
    metrics: { leads: "600+", roi: "4.5x", reach: "90K" },
    gradient: ["#D97706", "#FDE68A"],
    icon: "🏺",
    timeline: "90 days",
  },
  {
    id: 5,
    category: "local",
    business: "Restaurant & Catering",
    city: "Salem",
    tagline: "Empty tables on weekdays",
    platforms: ["Google Ads", "Meta Ads"],
    highlight: "+300 Bookings in 60 Days",
    problem: "Weekend rush but weekdays completely dead",
    solution: "Weekday-specific offers with location-based ads + GMB optimization",
    result: "80% weekday occupancy, 300 new bookings in 2 months",
    metrics: { leads: "300+", roi: "4.2x", reach: "25K" },
    gradient: ["#DC2626", "#FCA5A5"],
    icon: "🍛",
    timeline: "60 days",
  },
  {
    id: 6,
    category: "service",
    business: "CA Firm",
    city: "Chennai",
    tagline: "Needed quality client leads, not just traffic",
    platforms: ["Google Ads", "LinkedIn"],
    highlight: "₹12L Worth of Contracts in 90 Days",
    problem: "Website getting traffic but wrong audience — no conversions",
    solution: "Niche keyword targeting + LinkedIn B2B campaigns for SME owners",
    result: "32 high-value client inquiries, 18 converted to paid contracts",
    metrics: { leads: "32", roi: "11x", reach: "8K" },
    gradient: ["#059669", "#6EE7B7"],
    icon: "📊",
    timeline: "90 days",
  },
];

export const featuredCase = {
  id: "featured",
  business: "pooja Textiles",
  city: "Tirupur",
  industry: "Wholesale Textile Ecommerce",
  tagline: "From local supplier to statewide brand",
  platforms: ["Google Shopping", "Meta Ads", "SEO"],
  timeline: "90 days",
  before: {
    leads:    "12/month",
    revenue:  "₹45,000/mo",
    roas:     "1.2x",
    traffic:  "800 visits/mo",
    cpl:      "₹680",
  },
  after: {
    leads:    "180/month",
    revenue:  "₹3,80,000/mo",
    roas:     "8.4x",
    traffic:  "22,000 visits/mo",
    cpl:      "₹120",
  },
  growth:   "744%",
  story: "Velmurugan Textiles had a working website but no strategy. We rebuilt their ad funnel from scratch — starting with Google Shopping for high-intent buyers, then adding Meta retargeting for warm audiences. SEO handled long-term organic growth. By month 3, they had a predictable pipeline of 180+ orders per month.",
  steps: [
    { phase: "Month 1", action: "Google Shopping ads + product feed fix", result: "4x traffic" },
    { phase: "Month 2", action: "Meta retargeting + WhatsApp catalog", result: "60 leads/mo" },
    { phase: "Month 3", action: "SEO content + review strategy", result: "180 leads/mo" },
  ],
};

// ─── Budget thresholds ────────────────────────────────────────────────────────
export const MIN_BUDGET  = 5_000;   // Minimum valid budget in ₹
export const MAX_BUDGET  = 200_000; // Slider ceiling
export const BUDGET_STEP = 1_000;   // Slider granularity

// ─── Allocation step (used by +/− buttons in manual mode) ────────────────────
export const ALLOC_STEP    = 5;   // percent per click
export const ALLOC_FLOOR   = 5;   // minimum percent any service can hold

// ─── UI content strings (all copy lives here, never in JSX) ──────────────────
export const budgetCalculatorContent = {
  badge: { text: "Marketing Tools" },
  headline: {
    prefix:      "How Should You",
    highlight:   "Spend Your",
    suffix:      "Marketing Budget?",
    description: "Set your monthly budget, pick your business type, and choose the services you need — we'll build your plan instantly.",
  },
  steps: [
    { number: 1, label: "Budget",        hint: "Set monthly spend" },
    { number: 2, label: "Business Type", hint: "What kind of business?" },
    { number: 3, label: "Services",      hint: "Choose what you need" },
    { number: 4, label: "Your Plan",     hint: "See allocation & results" },
  ],
  emptyState: {
    title:       "Your marketing plan will appear here",
    description: "Complete the steps above to see a tailored budget breakdown and projected outcomes.",
  },
};

// ─── Business types ───────────────────────────────────────────────────────────
export const businessTypes = [
  { id: "retail",     label: "Retail Shop",     icon: Store },
  { id: "restaurant", label: "Restaurant",       icon: UtensilsCrossed },
  { id: "ecommerce",  label: "E-commerce",       icon: ShoppingCart },
  { id: "service",    label: "Service Business", icon: BriefcaseBusiness },
  { id: "startup",    label: "Startup",          icon: Rocket },
];

// ─── Services list ────────────────────────────────────────────────────────────
export const servicesList = [
  {
    id:          "Meta Ads",
    label:       "Meta Ads",
    icon:        Smartphone,
    description: "Facebook & Instagram ads",
    minBudget:   3_000,
  },
  {
    id:          "SEO",
    label:       "SEO",
    icon:        Search,
    description: "Rank higher on Google",
    minBudget:   2_000,
  },
  {
    id:          "Social Media",
    label:       "Social Media",
    icon:        Camera,
    description: "Reels, posts & stories",
    minBudget:   2_000,
  },
  {
    id:          "Content",
    label:       "Content",
    icon:        Pencil,
    description: "Blogs & brand writing",
    minBudget:   1_500,
  },
];

// ─── Budget allocations (proportional weights per business type) ──────────────
export const allocations = {
  retail:     { "Meta Ads": 40, SEO: 20, "Social Media": 30, Content: 10 },
  restaurant: { "Meta Ads": 25, SEO: 15, "Social Media": 45, Content: 15 },
  ecommerce:  { "Meta Ads": 45, SEO: 30, "Social Media": 15, Content: 10 },
  service:    { "Meta Ads": 30, SEO: 40, "Social Media": 10, Content: 20 },
  startup:    { "Meta Ads": 20, SEO: 20, "Social Media": 35, Content: 25 },
};

// ─── Projected outcomes at ₹5,000/month baseline (scaled linearly) ────────────
export const outcomes = {
  retail:     { reach: [3_000,  7_000], leads: [15,  45], roi: "2× – 4×" },
  restaurant: { reach: [4_000,  9_000], leads: [20,  55], roi: "2× – 4×" },
  ecommerce:  { reach: [7_000, 16_000], leads: [35, 100], roi: "3× – 7×" },
  service:    { reach: [2_500,  6_000], leads: [12,  40], roi: "3× – 6×" },
  startup:    { reach: [5_000, 13_000], leads: [20,  65], roi: "2× – 5×" },
};

// ─── Tailwind colour classes for each service (bar / dot) ────────────────────
export const barColors = {
  "Meta Ads":     "bg-blue-500",
  SEO:            "bg-yellow-400",
  "Social Media": "bg-gray-800",
  Content:        "bg-green-500",
};
 
// ─── Result cards ─────────────────────────────────────────────────────────────
export const resultCards = [
  { label: "Estimated Reach", unit: "people / month", icon: UsersIcon },
  { label: "Estimated Leads", unit: "leads / month",  icon: Target },
  { label: "Expected ROI",    unit: "return",          icon: ChartNoAxesCombined },
];

// testimonial section content
export const testimonialContent = {
  badge: {
    text: "Client Stories",
    color: "bg-yellow-100 text-yellow-700"
  },
  headline: {
    prefix: "What Our",
    highlight: "Clients Say",
    suffix: "",
    description: "Real feedback from real Tamil Nadu businesses."
  },
  marquee: {
    speed: 25,
    mobileSpeed: 35
  }
};

export const testimonials = [
  {
    id: 1,
    quote: "DigiSpark tripled our online orders in just 3 months. Their Google Ads strategy is phenomenal!",
    name: "Rajesh Kumar",
    role: "Restaurant Owner",
    city: "Chennai",
    initials: "R",
    tamil: true,
    featured: false,
  },
  {
    id: 2,
    quote: "Our patient inquiries increased 180%. Best investment we made for our practice.",
    name: "Dr. Suresh",
    role: "Clinic Director",
    city: "Madurai",
    initials: "D",
    tamil: false,
    featured: true,
  },
  {
    id: 3,
    quote: "Our website traffic grew 5x. DigiSpark made digital marketing simple for us.",
    name: "Meena Lakshmi",
    role: "Boutique Owner",
    city: "Salem",
    initials: "M",
    tamil: false,
    featured: false,
  },
  {
    id: 4,
    quote: "From zero social media presence to 50K followers. The team truly understands Tamil Nadu's market.",
    name: "Priya Venkatesh",
    role: "Textile Brand Founder",
    city: "Coimbatore",
    initials: "P",
    tamil: true,
    featured: false,
  },
  {
    id: 5,
    quote: "Professional, responsive, and results-oriented. They delivered beyond our expectations.",
    name: "Karthik S.",
    role: "SaaS Founder",
    city: "Trichy",
    initials: "K",
    tamil: true,
    featured: false,
  },
  {
    id: 6,
    quote: "The ROI from their campaigns has been incredible. Highly recommend for any business.",
    name: "Arun Prakash",
    role: "Auto Dealer",
    city: "Chennai",
    initials: "A",
    tamil: false,
    featured: false,
  },
];

// Faq section content
export const faqContent = {
  badge: {
    text: "Got Questions?",
    color: "bg-yellow-100 text-yellow-700"
  },
  headline: {
    title: "Frequently Asked Questions",
    description: "Everything you need to know about working with us"
  }
};

export const faqs = [
  {
    id: 1,
    question: "How long does it take to see results?",
    answer: "Most clients start seeing measurable results within 30–60 days. Google Ads can generate leads within the first week, while SEO typically shows significant growth within 3–6 months. We set clear KPIs from day one so you always know how your campaigns are performing.",
  },
  {
    id: 2,
    question: "Do you work with small businesses and startups?",
    answer: "Absolutely. We specialize in helping small businesses, startups, and growing brands in Tamil Nadu compete online. Our flexible pricing and customized strategies are designed to deliver real ROI regardless of your budget size.",
  },
  {
    id: 3,
    question: "What platforms do you manage?",
    answer: "We manage all major platforms including Google Ads, Facebook, Instagram, LinkedIn, YouTube, and more. We recommend platforms based on where your target customers are most active.",
  },
  {
    id: 4,
    question: "Do you provide performance reports?",
    answer: "Yes — every client receives weekly performance summaries and detailed monthly reports with metrics like impressions, clicks, leads, ROAS, and more. We also offer a live dashboard so you can track progress anytime.",
  },
  {
    id: 5,
    question: "What is your pricing model?",
    answer: "We offer transparent, project-based and monthly retainer packages starting from ₹5,000/month. After a free audit call, we recommend the most cost-effective package based on your goals and industry.",
  },
  {
    id: 6,
    question: "Can I cancel anytime?",
    answer: "Yes. We work on month-to-month agreements for most services. There are no long-term lock-ins. We believe our results should speak for themselves — and our 90%+ client retention rate reflects that.",
  },
];

// Lead form section content
export const leadformContent = {
  header: {
    badge: {
      text: "Get In Touch",
      color: "bg-yellow-100 text-yellow-700"
    },
    title: "Let's Grow Your Business Together",
    description: "Fill out the form below and we'll get back to you within 24 hours"
  },
  success: {
    title: "Thanks! We Got Your Message",
    message: "Our team will review your request and reach out soon.",
    endMessage: "Expect a call or WhatsApp message within 24 hours.",
    icon: CheckCircle
  },
  form: {
    fields: {
      name: {
        label: "Your Name",
        required: true,
        placeholder: "Enter your name",
        type: "text"
      },
      phone: {
        label: "Phone Number",
        required: true,
        placeholder: "+91 98765 43210",
        type: "tel"
      },
      email: {
        label: "Email Address",
        required: true,
        placeholder: "your@email.com",
        type: "email"
      },
      businessType: {
        label: "Business Type",
        required: true,
        placeholder: "Select business type"
      },
      service: {
        label: "Service Interested In",
        required: true,
        placeholder: "Select a service"
      },
      message: {
        label: "Tell Us About Your Goals",
        required: false,
        placeholder: "What are you looking to achieve with digital marketing?",
        type: "textarea"
      }
    },
    submitButton: {
      text: "Send Message",
      icon: Send
    },
    privacyText: "We respect your privacy. Your information will never be shared."
  }
};

export const businessOptions = ["Retail Shop", "Restaurant", "Ecommerce", "Service Business", "Startup", "Other"];
export const serviceOptions = ["Meta Ads", "Social Media Marketing", "SEO", "Content", "Video & Photo Editing", "Full Digital Package", "Website Development"];

export const initialForm = {
  name: "",
  phone: "",
  email: "",
  businessType: "",
  service: "",
  message: "",
};

// Cta section content
export const ctaContent = {
  badge: {
    text: "Get Started Today",
    color: "bg-yellow-400 text-black"
  },
  headline: {
    prefix: "Ready to Dominate",
    highlight: "Your Market Online?",
    highlightColor: "text-yellow-600"
  },
  description: "Let's build a digital strategy that puts your business ahead of the competition.",
  buttons: {
    primary: {
      text: "Book Free Call",
      href: "tel:+91 7825962962",
      icon: CalendarCheck,
      color: "bg-yellow-400 hover:bg-yellow-500 text-black"
    },
    secondary: {
      text: "WhatsApp Us",
      href: "https://wa.me/917825962962?text=Hi%20Think2xCreate%2C%20I%20want%20more%20leads%20for%20my%20business.%20Can%20you%20help%3F",
      icon: MessageCircle,
      color: "bg-white hover:bg-green-50 text-green-600 border-2 border-green-400"
    }
  },
  footerText: "உங்கள் வணிகத்தை ஆன்லைனில் வளர்க்க நாங்கள் உதவுவோம்"
};

export const chatButton = {
  href: "https://wa.me/917825962962?text=Hi%20Think2xCreate%2C%20I%20want%20more%20leads%20for%20my%20business.%20Can%20you%20help%3F",
  text: "Chat With Us",
}

// bottom navbar 
export const bottomNavItems = [
  {
    icon: Phone,
    label: "Call",
    href: "tel:+91 7825962962",
    style: "text-gray-600 hover:text-gray-900",
    bg: "hover:bg-gray-50",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/917825962962?text=Hi%20Think2xCreate%2C%20I%20want%20more%20leads%20for%20my%20business.%20Can%20you%20help%3F",
    style: "text-gray-600 hover:text-green-600",
    bg: "hover:bg-green-50",
  },
  {
    icon: CalendarCheck,
    label: "Book Call",
    href: "#contact",
    style: "text-black",
    bg: "bg-yellow-400 hover:bg-yellow-500",
    isPrimary: true,
  },
];