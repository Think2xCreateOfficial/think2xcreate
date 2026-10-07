export const navbarStyles = {
  header: (scrolled) => `
    py-1 fixed top-0 left-0 right-0 z-[100] transition-all duration-300
    ${scrolled ? "py-0 bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-100/80" : "bg-transparent"}
  `,
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  wrapper: "flex items-center justify-between h-16",
  logoContainer: "flex items-center gap-2 group outline-none",
  logoBox: "w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-black text-black text-sm leading-none group-hover:bg-yellow-500 transition-colors duration-200",
  logoText: "font-bold text-gray-900 text-lg hidden sm:block",
  logoHighlight: "text-yellow-500",
  image: "h-16 w-auto object-contain",
  desktopNav: "hidden md:flex items-center gap-1",
  mobileNav: "flex items-center gap-3",
  navLink: "px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-950 hover:bg-gray-100/70 rounded-lg transition-all duration-200 outline-none",
  ctaButton: "cursor-pointer hidden md:flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
  mobileMenuButton: "md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200",
  mobileMenu: (isOpen) => `
    md:hidden transition-all duration-300 overflow-hidden
    ${isOpen ? "min-h-screen bg-white/98 backdrop-blur-lg opacity-100" : "max-h-0 opacity-0 transition-opacity duration-150"}
  `,
  mobileMenuContent: "bg-white border-t border-gray-100 px-4 py-3 space-y-4 overflow-y-auto",
  mobileNavLink: "block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 rounded-lg transition-colors duration-150",
  mobileCta: "flex items-center justify-center gap-2 mt-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm px-5 py-3 rounded-xl transition-colors duration-150"
};