import TestimonialCard from "./TestimonialCard";

function MarqueeRow({ testimonials, direction, styles }) {
  const isReverse = direction === "reverse";
  const marqueeClass = isReverse ? styles.marqueeReverse : styles.marquee;
  
  return (
    <div className={styles.marqueeWrapper}>
      <div className={marqueeClass}>
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            {...testimonial}
            styles={styles}
          />
        ))}
      </div>
    </div>
  );
}

export default MarqueeRow;