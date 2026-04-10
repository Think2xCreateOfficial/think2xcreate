export const navbarStyles = {
  header: (scrolled) => `
    py-1 fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${scrolled ? "bg-white backdrop-blur-sm shadow-sm" : "transparent"}
  `,
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  wrapper: "flex items-center justify-between h-16",
  logoContainer: "flex items-center gap-2 group outline-none",
  logoBox: "w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-black text-black text-sm leading-none group-hover:bg-yellow-500 transition-colors",
  logoText: "font-bold text-gray-900 text-lg hidden sm:block",
  logoHighlight: "text-yellow-500",
  image: "h-12 w-auto object-contain",
  desktopNav: "hidden md:flex items-center gap-1",
  mobileNav: "flex items-center gap-3",
  navLink: "px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200",
  ctaButton: "cursor-pointer hidden md:flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5",
  mobileMenuButton: "md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors",
  mobileMenu: (isOpen) => `
    md:hidden transition-all duration-300 overflow-hidden
    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
  `,
  mobileMenuContent: "bg-white border-t border-gray-100 px-4 py-3 space-y-1",
  mobileNavLink: "block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 rounded-lg transition-colors",
  mobileCta: "flex items-center justify-center gap-2 mt-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
};