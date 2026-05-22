import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Globe, Megaphone, Share2, Video } from "lucide-react";

function MobileNav({ content, isOpen, onClose, styles }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const ctaButton = content.ctaButton;

  if (!isOpen) return null;

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
      setServicesOpen(!servicesOpen);
    } else {
      // Normal click: close menu
      onClose();
      if (link.href.startsWith('#') || link.href.startsWith('/#')) {
        const hash = link.href.replace('/', '');
        setTimeout(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <div className={styles.mobileMenu(isOpen)}>
      <div className={styles.mobileMenuContent}>
        {content.navLinks.map((link) => {
          const hasSubLinks = !!link.subLinks;

          if (hasSubLinks) {
            return (
              <div key={link.id} className="flex flex-col">
                <button
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className={`${styles.mobileNavLink} flex items-center justify-between w-full text-left font-medium`}
                >
                  <span>{link.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180 text-yellow-600' : 'text-gray-400'}`} />
                </button>

                {/* Indented mobile services list */}
                <div 
                  className={`pl-4 flex flex-col gap-1.5 transition-all duration-300 overflow-hidden ${
                    servicesOpen ? 'max-h-64 mt-1 mb-2 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.id}
                      to={subLink.href}
                      onClick={onClose}
                      className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold text-gray-600 hover:text-gray-900 bg-gray-50/50 hover:bg-yellow-50 rounded-xl"
                    >
                      <div className="w-7 h-7 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                        {getSubLinkIcon(subLink.label)}
                      </div>
                      <span>{subLink.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          const isHash = link.href.startsWith('#') || link.href.startsWith('/#');
          if (isHash) {
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link)}
                className={styles.mobileNavLink}
              >
                {link.label}
              </a>
            );
          }

          return (
            <Link
              key={link.id}
              to={link.href}
              onClick={onClose}
              className={styles.mobileNavLink}
            >
              {link.label}
            </Link>
          );
        })}

        <a
          href={ctaButton.href}
          onClick={(e) => {
            onClose();
            if (ctaButton.href.startsWith('#') || ctaButton.href.startsWith('/#')) {
              e.preventDefault();
              const hash = ctaButton.href.replace('/', '');
              setTimeout(() => {
                document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }
          }}
          className={styles.mobileCta}
        >
          <ctaButton.icon size={15} />
          {ctaButton.text}
        </a>
      </div>
    </div>
  );
}

export default MobileNav;