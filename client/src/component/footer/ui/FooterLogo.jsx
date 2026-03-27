import { Link } from "react-router-dom";

function FooterLogo({ content, styles }) {
  const isImageLogo = Boolean(content.image);
  const fullText = content.fullText?.split(content.highlight) || [];

  return (
    <div className={styles.brandColumn}>
      <Link to={content.href} className={styles.logoContainer}>
        
        {/* Logo Image */}
        {isImageLogo ? (
            <>
                <img
                src={content.image}
                alt={content.fullText || "Logo"}
                className={styles.image}
                loading="lazy"
                />
                <span className={styles.logoText}>
                    {fullText[0]}
                    <span className={styles.logoHighlight}>
                        {content.highlight}
                    </span>
                    {fullText[1]}
                </span>
          </>
        ) : (
          <>
            <div className={styles.logoBox}>
              <span className="font-black text-black text-xs tracking-tight">
                {content.text}
              </span>
            </div>

            <span className={styles.logoText}>
              {fullText[0]}
              <span className={styles.logoHighlight}>
                {content.highlight}
              </span>
              {fullText[1]}
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
    </div>
  );
}

export default FooterLogo;