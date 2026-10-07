// client/src/utils/data/portfolioData.js

export const SERVICES_MASTER = [
  {
    id: 'all-showcase',
    slug: 'all-showcase',
    title: 'All Showcase',
    categoryPill: 'ALL WORKS',
    navPill: 'All Showcase',
    tagline: 'Explore All Result-Driven Digital Work by Think2xCreate.',
    secondaryTabs: ['All Projects', 'Websites', 'Meta Ads', 'Social Media', 'Creative Production'],
    showcaseType: 'all'
  },
  {
    id: 'website-development',
    slug: 'website-development',
    title: 'Website Development',
    categoryPill: 'WEBSITE DEVELOPMENT',
    navPill: 'Websites',
    tagline: 'High-performance websites built to turn visitors into customers.',
    secondaryTabs: ['All Websites', 'Business Websites', 'E-commerce & Platforms'],
    showcaseType: 'website'
  },
  {
    id: 'meta-ads-management',
    slug: 'meta-ads-management',
    title: 'Meta & Google Ads',
    categoryPill: 'PERFORMANCE MARKETING',
    navPill: 'Meta & Google Ads',
    tagline: 'Data-driven ad campaigns built around measurable growth.',
    secondaryTabs: ['All Ads', 'Meta Ads Reports', 'Performance Analytics'],
    showcaseType: 'ads'
  },
  {
    id: 'social-media-management',
    slug: 'social-media-management',
    title: 'Social Media Management',
    categoryPill: 'SOCIAL MEDIA',
    navPill: 'Social Media',
    tagline: 'Building a stronger digital presence across the platforms that matter.',
    secondaryTabs: ['All Social', 'Instagram Profiles', 'Facebook Presence'],
    showcaseType: 'social'
  },
  {
    id: 'photo-video-editing',
    slug: 'photo-video-editing',
    title: 'Photo & Video Editing',
    categoryPill: 'CREATIVE PRODUCTION',
    navPill: 'Creative Production',
    tagline: 'Eye-catching poster designs and short-form videos built for attention.',
    secondaryTabs: ['All Creatives', 'Poster Designs', 'Reels & Video Editing'],
    showcaseType: 'creative'
  }
];

export const CLIENTS_MASTER = [
  {
    id: 'aksha-interior',
    slug: 'aksha-interior',
    brandName: 'Aksha Interior',
    logo: '/brandlogo/akshainterior.webp',
    logoSubLabel: 'Interiors',
    category: 'Interior Design',
    categoryPill: 'INTERIOR DESIGN',
    industry: 'Interior Design',
    location: 'Tirunelveli, Tamil Nadu',
    website: 'https://www.akshainteriors.in/',
    backgroundImage: '/projects/akshainterior_desktopview.png',
    mobileImage: '/projects/akshainterior_mobileview.png',
    tagline: 'Modern Interior Solutions & Home Improvements',
    description: 'A modern, responsive business website built to showcase Aksha Interior\'s home interior solutions, modular kitchens, UPVC windows/doors, and related services across Tirunelveli and nearby cities.',
    shortDescription: 'Modern Interior Solutions & Home Improvements tailored for Tirunelveli homeowners.',
    primaryService: 'Website Development',
    services: ['Website Development', 'Social Media Management', 'Photo & Video Editing', 'Meta & Google Ads'],
    categories: ['Website Design', 'Business'],
    status: 'completed',
    displayOrder: 1,
    socialProfiles: {
      instagram: {
        handle: '@akshainterior',
        name: 'Aksha Interior',
        category: 'Interior Design Studio',
        url: 'https://www.instagram.com/akshainterior?igsh=MTFwYm80aDBybTE0eQ%3D%3D'
      },
      youtube: {
        name: 'Aksha Interior',
        handle: '@akshainterior1752',
        url: 'https://www.youtube.com/@akshainterior1752'
      }
    },
    snapshot: [
      { label: 'Industry', value: 'Interior Design', icon: 'Building2' },
      { label: 'Location', value: 'Tirunelveli, Tamil Nadu', icon: 'Clock' },
      { label: 'Platform', value: 'Website Development', icon: 'Monitor' },
      { label: 'Project Type', value: 'Business Website', icon: 'Briefcase' }
    ],
    businessHighlights: [
      { label: 'Homes Designed', value: '100+' },
      { label: 'Industry Experience', value: '8+ Years' },
      { label: 'Client Rating', value: '4.9/5' },
      { label: 'Service Coverage', value: 'Tirunelveli' }
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'Understood Aksha Interior\'s brand philosophy, service offerings, and regional customer persona.' },
      { step: '02', title: 'UX & Layout', description: 'Mapped out clean service discovery and consultation inquiry flows.' },
      { step: '03', title: 'Development', description: 'Built a lightning-fast Website Development site optimized for high-res portfolio showcase.' },
      { step: '04', title: 'SEO & Launch', description: 'Implemented technical local SEO protocols and deployed fast cloud hosting.' }
    ],
    colors: {
      primary: '#F59E0B',
      secondary: '#1E293B'
    }
  },
  {
    id: 'yes-yes-asian-link',
    slug: 'yes-yes-asian-link',
    brandName: 'YES YES ASIAN LINK',
    logo: '/brandlogo/yesyesasianlink.png',
    logoSubLabel: 'China Sourcing',
    category: 'China Sourcing & B2B',
    categoryPill: 'B2B SOURCING PLATFORM',
    industry: 'China Import B2B Sourcing',
    location: 'Tiruppur, Tamil Nadu',
    website: 'https://www.yesyesasianlink.com/',
    backgroundImage: '/projects/yesyesasianlink_desktopview.png',
    mobileImage: '/projects/yesyesasianlink_mobileview.png',
    tagline: 'China Sourcing & Business Partner',
    description: 'A professional B2B website designed to showcase China sourcing, supplier verification, product sourcing, import consulting, and logistics support services.',
    shortDescription: 'China Sourcing & Business Partner connecting Indian businesses to verified factories.',
    primaryService: 'Website Development',
    services: ['Website Development', 'Meta & Google Ads', 'Social Media Management'],
    categories: ['Website Design', 'Business'],
    status: 'completed',
    displayOrder: 2,
    socialProfiles: {
      instagram: {
        handle: '@yesyesasianlink',
        name: 'YES YES ASIAN LINK',
        category: 'China Sourcing & B2B',
        url: 'https://www.instagram.com/yesyesasianlink/'
      },
      facebook: {
        name: 'YES YES ASIAN LINK',
        url: 'https://www.facebook.com/yesyesasianlink/'
      }
    },
    snapshot: [
      { label: 'Industry', value: 'China Import B2B Sourcing', icon: 'Globe' },
      { label: 'Location', value: 'Tiruppur, Tamil Nadu', icon: 'Clock' },
      { label: 'Platform', value: 'Website Development', icon: 'Monitor' },
      { label: 'Project Type', value: 'B2B Sourcing Website', icon: 'Briefcase' }
    ],
    businessHighlights: [
      { label: 'Experience in China', value: '10+ Years' },
      { label: 'Audited Factories', value: '100+' },
      { label: 'Sourced Value', value: '$50M+' },
      { label: 'Quality Assurance', value: '100%' }
    ],
    process: [
      { step: '01', title: 'Audit & Blueprint', description: 'Mapped out product categories and sourcing workflows.' },
      { step: '02', title: 'B2B Architecture', description: 'Designed a trustworthy corporate layout emphasizing audit credentials.' },
      { step: '03', title: 'Development', description: 'Built an organized multi-category platform with clear lead capture forms.' },
      { step: '04', title: 'Deployment', description: 'Optimized speed and search visibility for B2B import consulting keywords.' }
    ],
    colors: {
      primary: '#2563EB',
      secondary: '#1E293B'
    }
  },
  {
    id: 'rudra-dharun-packers-movers',
    slug: 'rudra-dharun-packers-movers',
    brandName: 'Rudra Dharun Packers & Movers',
    logo: '/brandlogo/rudradharunpackersandmovers.webp',
    logoSubLabel: 'Packers & Movers',
    category: 'Relocation Services',
    categoryPill: 'RELOCATION WEBSITE',
    industry: 'Packers & Movers',
    location: 'Coimbatore, Tamil Nadu',
    website: 'https://www.rudradharunpackers.com/',
    backgroundImage: '/projects/rudradharunpackersandmovers_desktopview.png',
    mobileImage: '/projects/rudradharunpackersandmovers_mobileview.png',
    tagline: 'Fast & Reliable Relocation at Your Doorstep',
    description: 'A high-conversion relocation website built for household shifting, office moving, vehicle transport, and warehousing.',
    shortDescription: 'Fast & Reliable Relocation at Your Doorstep.',
    primaryService: 'Website Development',
    services: ['Website Development', 'Social Media Management', 'Local SEO'],
    categories: ['Website Design', 'Business'],
    status: 'completed',
    displayOrder: 3,
    
    snapshot: [
      { label: 'Industry', value: 'Packers & Movers', icon: 'Truck' },
      { label: 'Location', value: 'Coimbatore, Tamil Nadu', icon: 'Clock' },
      { label: 'Platform', value: 'Website Development', icon: 'Monitor' },
      { label: 'Project Type', value: 'Lead Generation Website', icon: 'Briefcase' }
    ],
    businessHighlights: [
      { label: 'Families Served', value: '100+' },
      { label: 'Relocation Support', value: '24×7' },
      { label: 'Service Region', value: 'Tamil Nadu' },
      { label: 'Packing Quality', value: 'Damage-Free' }
    ],
    process: [
      { step: '01', title: 'Requirement Audit', description: 'Identified key customer needs: quick moving estimates and transparent rates.' },
      { step: '02', title: 'Quote Funnel Design', description: 'Created an intuitive inquiry flow.' },
      { step: '03', title: 'Mobile Build', description: 'Engineered a lightweight website for instant WhatsApp calls.' },
      { step: '04', title: 'SEO & Verification', description: 'Configured local service area schemas and launched the portal.' }
    ],
    colors: {
      primary: '#D97706',
      secondary: '#1E293B'
    }
  },
  {
    id: 'kings-platter',
    slug: 'kings-platter',
    brandName: "King's Platter",
    logo: '/brandlogo/kingsplatter.png',
    logoSubLabel: 'Restaurant',
    category: 'Restaurant & Dining',
    categoryPill: 'RESTAURANT & FOOD SERVICE',
    industry: 'Restaurant & Hospitality',
    location: 'Tirunelveli, Tamil Nadu',
    website: 'https://kingsplatter.in/',
    backgroundImage: '/projects/kingsplatter_desktopview.png',
    mobileImage: '/projects/kingsplatter_mobileview.png',
    tagline: 'Delicious Moments, Memorable Dining Experience',
    description: 'A vibrant restaurant website showcasing delicious menu specials, customer reviews, dynamic food presentation, and direct table reservation inquiries in Tirunelveli.',
    shortDescription: 'Delicious Moments, Memorable Dining Experience in Tirunelveli.',
    primaryService: 'Website Development',
    services: ['Website Development', 'Social Media Management', 'Photo & Video Editing'],
    categories: ['Website Design', 'Food & Dining'],
    status: 'completed',
    displayOrder: 4,
    socialProfiles: {
      instagram: {
        handle: '@kings.platter',
        name: "King's Platter",
        category: 'Restaurant & Cafe',
        url: 'https://www.instagram.com/kings.platter'
      },
      facebook: {
        name: "King's Platter",
        url: 'https://www.facebook.com/kingsplatterofficial'
      },
      youtube: {
        name: "King's Platter",
        handle: '@KINGSPLATTERS',
        url: 'https://www.youtube.com/@KINGSPLATTERS'
      }
    },
    snapshot: [
      { label: 'Industry', value: 'Food & Dining', icon: 'Utensils' },
      { label: 'Location', value: 'Tirunelveli, Tamil Nadu', icon: 'Clock' },
      { label: 'Platform', value: 'Website Development', icon: 'Monitor' },
      { label: 'Project Type', value: 'Restaurant Website', icon: 'Briefcase' }
    ],
    businessHighlights: [
      { label: 'Signature Dishes', value: '50+' },
      { label: 'Happy Diners', value: '10,000+' },
      { label: 'Customer Rating', value: '4.8/5' },
      { label: 'Table Booking', value: 'Instant' }
    ],
    process: [
      { step: '01', title: 'Food Brand Study', description: 'Captured unique platter items, ambiance vibes, and target diner demographics.' },
      { step: '02', title: 'Menu UX Layout', description: 'Structured an enticing visual menu with clear pricing and chef specials.' },
      { step: '03', title: 'Mobile First Build', description: 'Designed for fast mobile browsing with instant WhatsApp reservation action.' },
      { step: '04', title: 'Local Search SEO', description: 'Optimized local restaurant keywords and Google business integration.' }
    ],
    colors: {
      primary: '#EF4444',
      secondary: '#1E293B'
    }
  },
  {
    id: 'rvp-anna-construction-transport',
    slug: 'rvp-anna-construction-transport',
    brandName: 'RVP Anna Construction & Transport',
    logo: '/brandlogo/rvpannaconstructionandtransport.png',
    logoSubLabel: 'Construction & Transport',
    category: 'Construction & Logistics',
    categoryPill: 'CIVIL & TRANSPORT SOLUTIONS',
    industry: 'Construction & Heavy Transport',
    location: 'Tirunelveli, Tamil Nadu',
    website: 'https://rvpannaconstruction.com/',
    backgroundImage: '/projects/rvpannaconstructionandtransport_desktopview.png',
    mobileImage: '/projects/rvpannaconstructionandtransport_mobileview.png',
    tagline: 'Building Foundations, Driving Progress',
    description: 'A robust corporate portal highlighting heavy infrastructure construction, fleet logistics, civil contracting projects, and heavy transport equipment.',
    shortDescription: 'Building Foundations, Driving Progress with Quality Civil Engineering & Fleet Logistics.',
    primaryService: 'Website Development',
    services: ['Website Development', 'Corporate Branding', 'Lead Generation'],
    categories: ['Website Design', 'Construction'],
    status: 'completed',
    displayOrder: 5,
    snapshot: [
      { label: 'Industry', value: 'Construction & Transport', icon: 'Building2' },
      { label: 'Location', value: 'Tirunelveli, Tamil Nadu', icon: 'Clock' },
      { label: 'Platform', value: 'Website Development', icon: 'Monitor' },
      { label: 'Project Type', value: 'Corporate Website', icon: 'Briefcase' }
    ],
    businessHighlights: [
      { label: 'Completed Projects', value: '75+' },
      { label: 'Heavy Fleet Vehicles', value: '30+' },
      { label: 'Years of Trust', value: '12+' },
      { label: 'Client Satisfaction', value: '100%' }
    ],
    process: [
      { step: '01', title: 'Industrial Scoping', description: 'Outlined key construction machinery, transport routes, and client requirements.' },
      { step: '02', title: 'Corporate Layout', description: 'Created an authoritative layout showcasing completed infrastructure works.' },
      { step: '03', title: 'Engineered Web Build', description: 'Developed high-speed showcase pages with quick quotation request forms.' },
      { step: '04', title: 'SEO Verification', description: 'Implemented structured data for regional civil and heavy haulage queries.' }
    ],
    colors: {
      primary: '#10B981',
      secondary: '#1E293B'
    }
  }
];

export const PROJECTS_MASTER = [
  // ── 1. WEBSITE PROJECTS (Reference Image 01) ──────────────────────────────
  {
    id: 'web-aksha',
    clientId: 'aksha-interior',
    serviceId: 'website-development',
    title: 'Aksha Interior',
    category: 'Business Websites',
    categoryPill: 'INTERIOR SHOWCASE WEBSITE',
    headline: 'Modern Interior Solutions & Home Improvements',
    description: 'A responsive business website built to showcase Aksha Interior\'s home interior solutions, modular kitchens, UPVC windows/doors, and related services across Tirunelveli.',
    deliverables: ['Custom UI/UX Design', 'Local SEO Optimization', 'Consultation Inquiry Form', 'Blazing Fast Mobile Load'],
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Node.js'],
    externalUrl: 'https://www.akshainteriors.in/',
    media: {
      type: 'website',
      desktopImage: '/projects/akshainterior_desktopview.png',
      mobileImage: '/projects/akshainterior_mobileview.png'
    }
  },
  {
    id: 'web-kings',
    clientId: 'kings-platter',
    serviceId: 'website-development',
    title: "King's Platter",
    category: 'Business Websites',
    categoryPill: 'RESTAURANT WEBSITE',
    headline: 'Delicious Moments, Memorable Dining Experience',
    description: 'A vibrant culinary portal showcasing food delicacies, dining ambiance, special platters, and online booking inquiries.',
    deliverables: ['Interactive Menu Showcase', 'Table Reservation Booking', 'Mobile-First Responsive Layout', 'Local Google Maps SEO'],
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Modern UI'],
    externalUrl: 'https://kingsplatter.in/',
    media: {
      type: 'website',
      desktopImage: '/projects/kingsplatter_desktopview.png',
      mobileImage: '/projects/kingsplatter_mobileview.png'
    }
  },
  {
    id: 'web-yyal',
    clientId: 'yes-yes-asian-link',
    serviceId: 'website-development',
    title: 'YES YES ASIAN LINK',
    category: 'Business Websites',
    categoryPill: 'B2B SOURCING PLATFORM',
    headline: 'China Sourcing & Business Partner',
    description: 'A structured corporate B2B portal built to present China supplier verification, product sourcing, factory audits, import consulting, and business tour bookings.',
    deliverables: ['B2B Product Category Hub', 'Factory Audit Credentials Display', 'Corporate Lead Funnel', 'SEO Optimization'],
    techStack: ['React', 'Tailwind CSS', 'Vite', 'B2B Architecture'],
    externalUrl: 'https://www.yesyesasianlink.com/',
    media: {
      type: 'website',
      desktopImage: '/projects/yesyesasianlink_desktopview.png',
      mobileImage: '/projects/yesyesasianlink_mobileview.png'
    }
  },
  {
    id: 'web-rvp',
    clientId: 'rvp-anna-construction-transport',
    serviceId: 'website-development',
    title: 'RVP Anna Construction & Transport',
    category: 'Business Websites',
    categoryPill: 'CONSTRUCTION & TRANSPORT',
    headline: 'Building Foundations, Driving Progress',
    description: 'An industrial corporate website highlighting civil construction capabilities, fleet machinery transport services, and project request management.',
    deliverables: ['Industrial Machinery Showcase', 'Service Quote Inquiry Form', 'High-Impact Mobile UI', 'Fast Page Load Engine'],
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Node.js'],
    externalUrl: 'https://rvpannaconstruction.com/',
    media: {
      type: 'website',
      desktopImage: '/projects/rvpannaconstructionandtransport_desktopview.png',
      mobileImage: '/projects/rvpannaconstructionandtransport_mobileview.png'
    }
  },
  {
    id: 'web-rudra',
    clientId: 'rudra-dharun-packers-movers',
    serviceId: 'website-development',
    title: 'Rudra Dharun Packers & Movers',
    category: 'Business Websites',
    categoryPill: 'RELOCATION WEBSITE',
    headline: 'Fast & Reliable Relocation at Your Doorstep',
    description: 'A high-conversion relocation website built for household shifting, office moving, vehicle transport, and warehousing with instant quote estimation and WhatsApp support.',
    deliverables: ['5-Field Shifting Quote Form', 'One-Tap WhatsApp Call Action', 'Service Area Local SEO', 'Mobile-First Architecture'],
    techStack: ['React', 'Tailwind CSS', 'Vite', 'WhatsApp API'],
    externalUrl: 'https://www.rudradharunpackers.com/',
    media: {
      type: 'website',
      desktopImage: '/projects/rudradharunpackersandmovers_desktopview.png',
      mobileImage: '/projects/rudradharunpackersandmovers_mobileview.png'
    }
  },

  // ── 2. CREATIVE & POSTER WORK (Reference Image 02) ─────────────────────────
  {
    id: 'poster-kings-platter',
    clientId: 'kings-platter',
    serviceId: 'photo-video-editing',
    title: 'King\'s Platter – Food Poster Design',
    category: 'Poster Designs',
    categoryPill: 'CREATIVE & POSTER WORK',
    headline: 'Good Food, Good Vibes',
    description: 'Eye-catching social media poster design created for King\'s Platter, featuring vibrant food visuals, special deals, and direct order callout.',
    deliverables: ['High-Res Graphic Composition', 'Color Grading & Lighting Retouch', 'Social Media Banner Format'],
    bannerImage: '/projects/Kings_Platter_poster_design.jpeg',
    media: {
      type: 'poster',
      desktopImage: '/projects/Kings_Platter_poster_design.jpeg'
    }
  },
  {
    id: 'poster-aksha-interior-1',
    clientId: 'aksha-interior',
    serviceId: 'photo-video-editing',
    title: 'Aksha Interior – Brand Poster Design',
    category: 'Poster Designs',
    categoryPill: 'CREATIVE & POSTER WORK',
    headline: 'Modern Home Makeover & Luxury Interior',
    description: 'Bespoke social media promotional poster design for Aksha Interior, highlighting elegant interior design concepts and premium aesthetic appeal.',
    deliverables: ['High-Res Graphic Composition', 'Color Grading & Lighting Retouch', 'Social Media Banner Format'],
    bannerImage: '/projects/akshainterior_poster_design.png',
    media: {
      type: 'poster',
      desktopImage: '/projects/akshainterior_poster_design.png'
    }
  },
  {
    id: 'poster-aksha-interior-2',
    clientId: 'aksha-interior',
    serviceId: 'photo-video-editing',
    title: 'Aksha Interior – Concept Showcase Poster',
    category: 'Poster Designs',
    categoryPill: 'CREATIVE & POSTER WORK',
    headline: 'Crafted Luxury Living Spaces',
    description: 'Promotional visual showcase poster created for Aksha Interior, featuring modern lighting, space planning, and premium finish visuals.',
    deliverables: ['High-Res Graphic Composition', 'Color Grading & Lighting Retouch', 'Social Media Banner Format'],
    bannerImage: '/projects/akshainterior_poster_design1.png',
    media: {
      type: 'poster',
      desktopImage: '/projects/akshainterior_poster_design1.png'
    }
  },

  // ── 3. META ADS PERFORMANCE REPORT (Reference Image 03) ───────────────────
  {
    id: 'ads-report-may',
    clientId: 'aksha-interior',
    serviceId: 'meta-ads-management',
    title: 'Meta Ads Performance Report',
    category: 'Meta Ads Reports',
    categoryPill: 'META ADS PERFORMANCE REPORTS',
    headline: 'Data-driven campaigns. Measurable results. Real business growth.',
    description: 'We plan, launch, monitor and optimize Meta Ads campaigns focused on generating leads, reach, engagement and conversions for growing businesses.',
    reportTitle: 'Meta Ads Performance Report',
    summaryMetrics: {
      reach: '70,000+',
      reachChange: '+24.8%',
      leads: '200+',
      leadsChange: '+18.6%',
      amountSpent: '₹32,500',
      spentChange: '-8.4%',
      roas: '3.58x',
      roasChange: '+21.4%'
    },
    tableRows: [
      { campaign: 'AKSHA-INTERIORS-LEAD', impressions: '24,850', reach: '18,420', clicks: '1,126', ctr: '4.53%', cpc: '₹8.40', conversions: '86', cpr: '₹109', roas: '3.82x' },
      { campaign: 'LOCAL-BUSINESS-LEAD', impressions: '15,920', reach: '12,540', clicks: '698', ctr: '4.38%', cpc: '₹7.80', conversions: '52', cpr: '₹105', roas: '3.47x' },
      { campaign: 'REELS-AWARENESS', impressions: '32,480', reach: '25,760', clicks: '1,284', ctr: '3.95%', cpc: '₹2.40', conversions: '—', cpr: '—', roas: '2.68x' }
    ],
    highlights: [
      'Impressions, Reach & Frequency',
      'Clicks, CTR & CPC',
      'Leads & Cost Per Lead',
      'Conversions & Campaign Performance',
      'Budget & Ad Spend Analysis',
      'ROAS & Optimization Insights'
    ],
    externalUrl: '#'
  },

  // ── 4. REELS & VIDEO EDITING (Reference Image 04) ──────────────────────────
  {
    id: 'reel-1',
    clientId: 'aksha-interior',
    serviceId: 'photo-video-editing',
    category: 'Reels & Video Editing',
    categoryPill: 'REELS & VIDEO EDITING',
    youtubeUrl: 'https://www.youtube.com/shorts/a5avet3CjJs',
    youtubeId: 'a5avet3CjJs',
    media: {
      type: 'video',
      thumbnail: '/images/defualt_thumbnail.png'
    }
  },
  {
    id: 'reel-2',
    clientId: 'aksha-interior',
    serviceId: 'photo-video-editing',
    category: 'Reels & Video Editing',
    categoryPill: 'REELS & VIDEO EDITING',
    youtubeUrl: 'https://youtube.com/shorts/ZgbqqIzUbCM?si=5zLHXUYGqRw7obde',
    youtubeId: 'ZgbqqIzUbCM',
    media: {
      type: 'video',
      thumbnail: '/images/defualt_thumbnail.png'
    }
  },
  {
    id: 'reel-3',
    clientId: 'aksha-interior',
    serviceId: 'photo-video-editing',
    category: 'Reels & Video Editing',
    categoryPill: 'REELS & VIDEO EDITING',
    youtubeUrl: 'https://youtube.com/shorts/Scz-kkg6WRY?si=q1FKmb5-dqzSH747',
    youtubeId: 'Scz-kkg6WRY',
    media: {
      type: 'video',
      thumbnail: '/images/defualt_thumbnail.png'
    }
  },

  // ── 5. SOCIAL MEDIA MANAGEMENT (Reference Image 05) ────────────────────────
  {
    id: 'social-profile-aksha',
    clientId: 'aksha-interior',
    serviceId: 'social-media-management',
    title: 'Aksha Interior Social Ecosystem',
    category: 'Social Media',
    categoryPill: 'SOCIAL MEDIA MANAGEMENT',
    headline: 'Complete social media management to build your brand and grow audience',
    description: 'Complete social media management to build your brand, engage audience & grow your business.',
  },
  {
    id: 'social-profile-kings-platter',
    clientId: 'kings-platter',
    serviceId: 'social-media-management',
    title: "King's Platter Social Ecosystem",
    category: 'Social Media',
    categoryPill: 'SOCIAL MEDIA MANAGEMENT',
    headline: 'Strategic social media presence for restaurant brand growth',
    description: 'Social media management to build restaurant brand visibility, audience engagement and customer loyalty.',
  },
  {
    id: 'social-profile-yyal',
    clientId: 'yes-yes-asian-link',
    serviceId: 'social-media-management',
    title: 'YES YES ASIAN LINK Social Ecosystem',
    category: 'Social Media',
    categoryPill: 'SOCIAL MEDIA MANAGEMENT',
    headline: 'Building digital presence for B2B sourcing brand',
    description: 'Social media management to establish and grow brand awareness for China sourcing & B2B services.',
  }
];

export const getClientBySlug = (slug) => {
  return CLIENTS_MASTER.find((c) => c.slug === slug) || CLIENTS_MASTER[0];
};

export const getProjectsByService = (serviceId) => {
  if (serviceId === 'all-showcase') return PROJECTS_MASTER;
  return PROJECTS_MASTER.filter((p) => p.serviceId === serviceId);
};

export const getProjectsByClient = (clientId) => {
  return PROJECTS_MASTER.filter((p) => p.clientId === clientId);
};

export const getServiceBySlug = (slug) => {
  return SERVICES_MASTER.find((s) => s.slug === slug || s.id === slug) || SERVICES_MASTER[0];
};

export default {
  SERVICES_MASTER,
  CLIENTS_MASTER,
  PROJECTS_MASTER,
  getClientBySlug,
  getProjectsByService,
  getProjectsByClient,
  getServiceBySlug
};
