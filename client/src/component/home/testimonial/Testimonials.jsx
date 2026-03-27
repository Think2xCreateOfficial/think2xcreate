import { testimonialContent } from "../../../utils/constant/homeConstant";
import { testimonialStyles } from "../../../utils/styles/homeStyle";
import { useTestimonials } from "../../../hooks/useTestimonials";
import TestimonialHeader from "./TestimonialHeader";
import MarqueeRow from "./MarqueeRow";

function Testimonials() {
  const content = testimonialContent;
  const styles = testimonialStyles;
  const { topRow, bottomRow } = useTestimonials();

  return (
    <section id="results" className={styles.section}>
      <div className={styles.container}>
        <TestimonialHeader content={content} styles={styles} />
        
        <div className={styles.marqueeContainer}>
          <MarqueeRow 
            testimonials={topRow} 
            direction="normal" 
            styles={styles} 
          />
          <MarqueeRow 
            testimonials={bottomRow} 
            direction="reverse" 
            styles={styles} 
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;