import { Phone } from "lucide-react";

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
        // { 
        //   id: 3, 
        //   label: "Industries", 
        //   href: "#industries",
        //   subLinks: [
        //     { id: 31, label: "Real Estate", href: "#" },
        //     { id: 32, label: "Healthcare", href: "#" }
        //   ]
        // },
        { id: 4, label: "Our Work", href: "/our-work" },
        // { id: 5, label: "About Us", href: "#about" },
        // { 
        //   id: 6, 
        //   label: "Resources", 
        //   href: "#resources",
        //   subLinks: [
        //     { id: 61, label: "Blog", href: "#" }
        //   ]
        // },
    ],
    ctaButton: {
        text: "Contact Us",
        icon: Phone,
        href: "/contact"
    },
    logo: {
        text: "T2XC",
        fullText: "Think2xCreate",
        highlight: "2x",
        subtitle: "",
        href: "/",
        image: "/image.webp"
    },
};