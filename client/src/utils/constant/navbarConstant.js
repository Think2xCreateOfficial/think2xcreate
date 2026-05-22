import { CalendarCheck } from "lucide-react";

export const navbarContent = {
    navLinks: [
        { id: 1, label: "Home", href: "/" },
        { 
          id: 2, 
          label: "Services", 
          href: "#services",
          subLinks: [
            { id: 21, label: "Website Development", href: "/services/website-development" },
            { id: 22, label: "Meta Ads Management", href: "/services/meta-ads" },
            { id: 23, label: "Social Media Management", href: "/services/social-media" },
            { id: 24, label: "Photo & Video Editing", href: "/services/video-editing" }
          ]
        },
        { id: 3, label: "Projects", href: "#projects" },
        { id: 4, label: "Calculator", href: "#pricing" },
        
    ],
    ctaButton: {
        text: "Book Consultation",
        icon: CalendarCheck,
        href: "#contact"
    },
    logo: {
        text: "T2XC",
        fullText: "Think2xCreate",
        highlight: "2x",
        href: "/",
        image: "/image.png"
    },
}