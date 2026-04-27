import { Link } from "react-router-dom";
import FooterSocial from "./FooterSocial";

function FooterLogo({ content, styles }) {
  const isImageLogo = Boolean(content.logo.image);
  const fullText = content.logo.fullText?.split(content.logo.highlight) || [];

  return (
    <div className={styles.brandColumn}>
      <Link to={content.logo.href} className={styles.logoContainer}>
        
        {/* Logo with no empty space - compact layout */}
        {isImageLogo ? (
          <div className="flex items-center gap-2">
            <div className={styles.logoBox + " !bg-transparent !p-0"}>
              <img
                src={content.logo.image}
                alt={content.logo.fullText || "Logo"}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <span className={styles.logoText}>
              {fullText[0]}
              <span className={styles.logoHighlight}>
                {content.logo.highlight}
              </span>
              {fullText[1]}
            </span>
          </div>
        ) : (
          <>
            <div className={styles.logoBox}>
              <span className="font-black text-black text-xs tracking-tight">
                {content.logo.text}
              </span>
            </div>
            <span className={styles.logoText}>
              {fullText[0] || content.logo.fullText}
            </span>
          </>
        )}
      </Link>

      {/* Description */}
      {content.description && (
        <p className={styles.description}>
          {content.description} 
        </p>
      )}

      <FooterSocial content={content} styles={styles} />
    </div>
  );
}

export default FooterLogo;