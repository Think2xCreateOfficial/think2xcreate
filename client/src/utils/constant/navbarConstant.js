import { CalendarCheck } from "lucide-react";

export const navbarContent = {
    navLinks: [
        { id: 1, label: "Services", href: "#services" },
        { id: 2, label: "Results", href: "#results" },
        { id: 3, label: "Pricing", href: "#pricing" },
        { id: 4, label: "FAQ", href: "#faq" },
        { id: 5, label: "Contact", href: "#contact" },
    ],
    ctaButton: {
        text: "Book Consultation",
        icon: CalendarCheck,
        href: "#contact"
    },
    logo: {
        text: "T2C",
        fullText: "Think2xCreate",
        highlight: "2x",
        href: "/",
        image: "/image.png"
    },
}