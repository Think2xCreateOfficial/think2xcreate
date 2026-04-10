import { termsContent } from "../../utils/constant/policyContent";
import { termsStyles } from "../../utils/styles/policyStyles";
import PolicyHero from "./terms/PolicyHero";
import PolicySection from "./terms/PolicySection";
import PolicyTOC from "./terms/PolicyTOC";

function TermsandpolicySection() {
  const content = termsContent;
  const styles = termsStyles;

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Hero Section */}
        <PolicyHero content={content.hero} styles={styles} />
        
        {/* Last Updated */}
        <div className={styles.lastUpdated}>
          <p className={styles.lastUpdatedText}>
            {content.lastUpdated.text} {formattedDate}
          </p>
        </div>

        {/* Layout with TOC */}
        <div className={styles.layoutGrid}>
          {/* Left Column - Sticky TOC (Desktop only) */}
          <aside className={styles.tocColumn}>
            <div className={styles.tocWrapper}>
              <PolicyTOC sections={content.sections} styles={styles} />
            </div>
          </aside>

          {/* Right Column - Content */}
          <main className={styles.contentColumn}>
            <div className={styles.sectionsContainer}>
              {content.sections.map((section) => (
                <PolicySection
                  key={section.id}
                  section={section}
                  styles={styles}
                />
              ))}
            </div>
            
            {/* Additional Legal Note */}
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-400">
                By using our services, you acknowledge that you have read and understood these Terms & Conditions.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default TermsandpolicySection;