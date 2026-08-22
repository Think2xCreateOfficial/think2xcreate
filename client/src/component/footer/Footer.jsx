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
    <footer className={`${styles.footer} relative overflow-hidden`}>
      {/* Tamil Nadu Map Decoration */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/images/city1.png')" }}
      />
      
      <div className={`${styles.container} relative z-10`}>
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