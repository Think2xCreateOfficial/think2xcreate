import { Link } from 'react-router-dom'

function DesktopNav({content, styles}) {
  const ctaButton = content.ctaButton;
  return (
    <>
        <nav className={styles.desktopNav}>
            {content.navLinks.map((link) => (
                <a 
                    key={link.id}
                    className={styles.navLink}
                    href={link.href}
                >
                    {link.label}
                </a>
            ))}
        </nav>

        <a
            href={ctaButton.href}
            className={styles.ctaButton}
        >
            {ctaButton.text}
        </a>
    </>
  )
}

export default DesktopNav