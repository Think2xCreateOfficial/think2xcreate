import { CalendarCheck } from "lucide-react";

export const navbarContent = {
    navLinks: [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Services", href: "#services" },
        { id: 3, label: "Projects", href: "#projects" },
        { id: 4, label: "Results", href: "#results" },
        
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