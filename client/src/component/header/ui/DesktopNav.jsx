import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Globe, Megaphone, Share2, Video } from 'lucide-react';

function DesktopNav({ content, styles }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const ctaButton = content.ctaButton;

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown when location changes
  useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  // Maps labels to Lucide icons for dropdown
  const getSubLinkIcon = (label) => {
    if (label.includes('Web')) return <Globe className="w-4 h-4 text-yellow-600" />;
    if (label.includes('Meta')) return <Megaphone className="w-4 h-4 text-yellow-600" />;
    if (label.includes('Social')) return <Share2 className="w-4 h-4 text-yellow-600" />;
    return <Video className="w-4 h-4 text-yellow-600" />;
  };

  const handleNavLinkClick = (e, link) => {
    if (link.subLinks) {
      e.preventDefault();
      setDropdownOpen(!dropdownOpen);
    }
  };

  return (
    <>
      <nav className={styles.desktopNav}>
        {content.navLinks.map((link) => {
          const hasSubLinks = !!link.subLinks;
          
          if (hasSubLinks) {
            return (
              <div key={link.id} className="relative" ref={dropdownRef}>
                <button
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className={`${styles.navLink} flex items-center gap-1.5 focus:outline-none cursor-pointer`}
                  aria-expanded={dropdownOpen}
                >
                  <span>{link.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-yellow-500' : 'text-gray-400'}`} />
                </button>

                {/* Sleek Light Glassmorphism Dropdown */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <div className="absolute top-[calc(100%+8px)] left-0 w-64 bg-white/95 backdrop-blur-md border border-gray-150/70 rounded-2xl shadow-xl p-2.5 z-50 flex flex-col gap-1.5 transform origin-top-left">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none rounded-2xl" />
                      
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.id}
                          to={subLink.href}
                          className="flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-700 hover:text-yellow-950 hover:bg-yellow-500/10 rounded-xl transition-all duration-200"
                        >
                          <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                            {getSubLinkIcon(subLink.label)}
                          </div>
                          <span>{subLink.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          // Normal navigation link
          const isHash = link.href.startsWith('#') || link.href.startsWith('/#');
          if (isHash) {
            return (
              <a
                key={link.id}
                className={styles.navLink}
                href={link.href}
                onClick={() => {
                  const hash = link.href.replace('/', '');
                  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
              </a>
            );
          }

          return (
            <Link
              key={link.id}
              className={styles.navLink}
              to={link.href}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <a
        href={ctaButton.href}
        className={styles.ctaButton}
        onClick={(e) => {
          if (ctaButton.href.startsWith('#') || ctaButton.href.startsWith('/#')) {
            e.preventDefault();
            const hash = ctaButton.href.replace('/', '');
            document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        {ctaButton.text}
      </a>
    </>
  );
}

// Minimal AnimatePresence mock in case framer-motion AnimatePresence is not active
const AnimatePresence = ({ children }) => <>{children}</>;

export default DesktopNav;