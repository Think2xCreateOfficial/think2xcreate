import { Link } from "react-router-dom";

function MobileNav({content, isOpen, onClose, styles}) {
  const ctaButton = content.ctaButton;
  if (!isOpen) return null;

  return (
    <div className={styles.mobileMenu(isOpen)}>
      <div className={styles.mobileMenuContent}>
        {content.navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className={styles.mobileNavLink}
          >
            {link.label}
          </a>
        ))}
        <a
          href={ctaButton.href}
          onClick={onClose}
          className={styles.mobileCta}
        >
          <ctaButton.icon size={15} />
          {ctaButton.text}
        </a>
      </div>
    </div>
  )
}

export default MobileNav