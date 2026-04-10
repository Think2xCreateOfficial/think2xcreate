import { footerContent } from "../../utils/constant/footerContant";
import { footerStyles } from "../../utils/styles/footerStyle";
import FooterLogo from "./ui/FooterLogo";
import FooterLinks from "./ui/FooterLinks";
import FooterBottom from "./ui/FooterBottom";
import FooterSocial from "./ui/FooterSocial";

function Footer() {
  const content = footerContent;
  const styles = footerStyles;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <FooterLogo content={content} styles={styles} />
          
          {/* Link Columns */}
          {Object.entries(content.links).map(([heading, links]) => (
            <FooterLinks
              key={heading}
              heading={heading}
              links={links}
              styles={styles}
            />
          ))}
        </div>
        
        {/* Bottom Bar */}
        <FooterBottom content={content} styles={styles} />
      </div>
    </footer>
  );
}

export default Footer;