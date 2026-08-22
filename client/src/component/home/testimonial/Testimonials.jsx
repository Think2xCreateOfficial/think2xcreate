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
      {/* Low-opacity subtle background dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#000000_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

      <div className={styles.container}>
        <TestimonialHeader content={content} styles={styles} />
        
        <div className={styles.marqueeContainer}>
          <MarqueeRow 
            testimonials={topRow} 
            direction="normal" 
            styles={styles} 
          />
          {/* <MarqueeRow 
            testimonials={bottomRow} 
            direction="reverse" 
            styles={styles} 
          /> */}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;