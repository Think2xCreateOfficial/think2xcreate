import { whyChooseUsContent } from '../../utils/constant/homeConstant';
import { whyChooseUsStyles } from "../../utils/styles/homeStyle";
import WhyChooseUsHeader from './whychooseus/WhyChooseUsHeader';
import FeaturesGrid from './whychooseus/FeaturesGrid';

function WhyChooseUsSection() {
  const content = whyChooseUsContent;
  const styles = whyChooseUsStyles;
  const features = whyChooseUsContent.futures;

  return (
    <section id="results" className={styles.section}>
      <div className={styles.container}>
        <WhyChooseUsHeader content={content} styles={styles} />
        <FeaturesGrid features={features} styles={styles} />
      </div>
    </section>
  );
}

export default WhyChooseUsSection;