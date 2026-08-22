// components/Footer/ui/FooterLinks.jsx (Improved version with navigation types and left-side icons)
import { Link, useLocation } from "react-router-dom";

function FooterLinks({ heading, links, styles }) {
  const location = useLocation();
  
  // Navigation type detection
  const getNavType = (href) => {
    if (href === "/") return "home";
    if (href.startsWith("/#")) return "hash";
    if (href.startsWith("#")) return "hash";
    return "route";
  };

  // Active link checker
  const isActiveLink = (href) => {
    const navType = getNavType(href);
    
    switch(navType) {
      case "home":
        return location.pathname === "/";
      
      case "hash": {
        const hash = href.replace("/", "");
        const isHomePage = location.pathname === "/";
        const currentHash = location.hash || "";
        return isHomePage && currentHash === hash;
      }
      
      case "route":
        if (href === "/") return location.pathname === href;
        return location.pathname.startsWith(href);
      
      default:
        return false;
    }
  };

  // Handle navigation click
  const handleNavigation = (e, href) => {
    const navType = getNavType(href);
    
    if (navType === "hash") {
      e.preventDefault();
      const hash = href.replace("/", "");
      const element = document.querySelector(hash);
      
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", hash);
      }
    }
  };

  return (
    <div className={styles.linkColumn}>
      <h4 className={styles.linkHeading}>{heading}</h4>
      <ul className={styles.linkList}>
        {links.map((link) => {
          const IconComp = link.icon;

          return (
            <li key={link.name}>
              <Link
                to={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className={`${styles.linkItem} flex items-center gap-2.5 ${
                  isActiveLink(link.href) ? styles.linkActive : ""
                }`}
              >
                {IconComp && (
                  <IconComp className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                )}
                <span>{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      {heading === "Contact" && (
        <div className="w-full max-w-sm mt-6 overflow-hidden rounded-xl border border-gray-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2930087789264!2d77.597278!3d8.6636591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5b4d333b1e3c959%3A0x1320b72a2c22ab55!2sThink2xCreate!5e0!3m2!1sen!2sin!4v1786524011320!5m2!1sen!2sin"
            className="w-full h-[180px] md:h-[150px] lg:h-[180px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Think2xCreate Location"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default FooterLinks;