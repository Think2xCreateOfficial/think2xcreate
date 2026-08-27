import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Globe, Megaphone, Share2, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function DesktopNav({ content, styles }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const ctaButton = content.ctaButton;

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown when location changes
  useEffect(() => {
    setActiveDropdown(null);
  }, [location]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveDropdown(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

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
      setActiveDropdown(prev => (prev === link.id ? null : link.id));
    } else {
      setActiveDropdown(null);
    }
  };

  return (
    <>
      <nav className={styles.desktopNav} ref={dropdownRef}>
        {content.navLinks.map((link) => {
          const hasSubLinks = !!link.subLinks;
          const isDropdownOpen = activeDropdown === link.id;
          
          if (hasSubLinks) {
            return (
              <div 
                key={link.id} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className={`${styles.navLink} flex items-center gap-1.5 focus:outline-none cursor-pointer`}
                  aria-expanded={isDropdownOpen}
                >
                  <span>{link.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-yellow-500' : 'text-gray-400'}`} />
                </button>

                {/* Sleek Light Glassmorphism Dropdown */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-[calc(100%+8px)] left-0 w-64 bg-white/95 backdrop-blur-md border border-gray-150/70 rounded-2xl shadow-xl p-2.5 z-50 flex flex-col gap-1.5 transform origin-top-left"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none rounded-2xl" />
                      
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.id}
                          to={subLink.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-700 hover:text-yellow-950 hover:bg-yellow-500/10 rounded-xl transition-all duration-200 outline-none"
                        >
                          <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                            {getSubLinkIcon(subLink.label)}
                          </div>
                          <span>{subLink.label}</span>
                        </Link>
                      ))}
                    </motion.div>
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
                  setActiveDropdown(null);
                  const hash = link.href.replace('/', '');
                  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
              </a>
            );
          }

          const isActive = location.pathname === link.href;

          return (
            <Link
              key={link.id}
              className={`${styles.navLink} ${isActive ? 'border-b-2 border-yellow-400 rounded-none text-gray-900 pb-1.5' : ''}`}
              to={link.href}
              onMouseEnter={() => {
                if (link.href === '/our-work') {
                  import('../../../page/OurWorkPage');
                }
              }}
              onTouchStart={() => {
                if (link.href === '/our-work') {
                  import('../../../page/OurWorkPage');
                }
              }}
              onClick={() => setActiveDropdown(null)}
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
          setActiveDropdown(null);
          if (ctaButton.href.startsWith('#') || ctaButton.href.startsWith('/#')) {
            e.preventDefault();
            const hash = ctaButton.href.replace('/', '');
            document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        {ctaButton.icon && <ctaButton.icon className="w-4 h-4" />}
        {ctaButton.text}
      </a>
    </>
  );
}

export default DesktopNav;