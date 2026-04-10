import { privacyContent } from "../../utils/constant/policyContent";
import { privacyStyles } from "../../utils/styles/policyStyles";
import PolicyHero from "./privacy/PolicyHero";
import PolicySection from "./privacy/PolicySection";
import PolicyTOC from "./privacy/PolicyTOC";

function PrivacyPolicySection() {
  const content = privacyContent;
  const styles = privacyStyles;

  // Get current date for last updated
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
            Last updated: {formattedDate}
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
          </main>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicySection;