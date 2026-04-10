// components/Footer/ui/FooterLinks.jsx (Improved version with navigation types)
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
      
      case "hash":
        const hash = href.replace("/", "");
        const isHomePage = location.pathname === "/";
        const currentHash = location.hash || "";
        return isHomePage && currentHash === hash;
      
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
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              onClick={(e) => handleNavigation(e, link.href)}
              className={`${styles.linkItem} ${
                isActiveLink(link.href) ? styles.linkActive : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;