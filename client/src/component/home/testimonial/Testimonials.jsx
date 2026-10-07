import { testimonialContent } from "../../../utils/constant/homeConstant";
import { testimonialStyles } from "../../../utils/styles/homeStyle";
import { useTestimonials } from "../../../hooks/useTestimonials";
import TestimonialHeader from "./TestimonialHeader";
import MarqueeRow from "./MarqueeRow";
import { MessageSquare } from 'lucide-react';

function Testimonials() {
  const content = testimonialContent;
  const styles = testimonialStyles;
  const { topRow } = useTestimonials();

  const hasTestimonials = topRow && topRow.length > 0;

  return (
    <section id="results" className={styles.section}>
      {/* Low-opacity subtle background dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#000000_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

      <div className={styles.container}>
        <TestimonialHeader content={content} styles={styles} />
        
        {hasTestimonials ? (
          <div className={styles.marqueeContainer}>
            <MarqueeRow 
              testimonials={topRow} 
              direction="normal" 
              styles={styles} 
            />
          </div>
        ) : (
          /* Graceful Empty State — No fabricated reviews */
          <div className="text-center py-12 sm:py-16 px-4">
            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-5">
              <MessageSquare className="w-6 h-6 text-yellow-600" />
            </div>
            <p className="text-lg sm:text-xl font-black text-gray-900 mb-2">
              Client feedback coming soon.
            </p>
            <p className="text-sm text-gray-500 font-medium max-w-md mx-auto leading-relaxed mb-6">
              We're collecting genuine reviews from our clients. In the meantime, explore our portfolio to see real results.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-sm active:scale-95"
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;