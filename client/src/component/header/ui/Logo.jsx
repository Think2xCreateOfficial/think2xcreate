import { NavLink } from "react-router-dom";

function Logo({ content, styles }) {
  const isImageLogo = Boolean(content.image);

  const fullText = content.fullText?.split(content.highlight) || [];

  return (
    <NavLink to={content.href} className={styles.logoContainer}>
      
      {/* Logo Image (Primary) */}
      {isImageLogo ? (
        
        <>
          <img
            src={content.image}
            alt={content.fullText || "Logo"}
            className={styles.image}
            loading="lazy"
          />
          <div className="flex flex-col justify-center">
            <span className={styles.logoText}>
              {fullText[0]}
              <span className={styles.logoHighlight}>
                {content.highlight}
              </span>
              {fullText[1]}
            </span>
            {content.subtitle && (
              <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium leading-none hidden sm:block">
                {content.subtitle}
              </span>
            )}
          </div>
        </>
      ) : (
        <>
          {/* Logo Box */}
          <div className={styles.logoBox}>
            <span className="text-xs font-black tracking-tight">
              {content.text}
            </span>
          </div>

          {/* Logo Text */}
          <span className={styles.logoText}>
            {fullText[0]}
            <span className="text-yellow-500">
              {content.highlight}
            </span>
            {fullText[1]}
          </span>
        </>
      )}
    </NavLink>
  );
}

export default Logo;