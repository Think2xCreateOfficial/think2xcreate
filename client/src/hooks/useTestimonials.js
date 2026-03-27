import { useMemo } from "react";
import { testimonials } from "../utils/constant/homeConstant";

export function useTestimonials() {
  const splitTestimonials = useMemo(() => {
    const mid = Math.ceil(testimonials.length / 2);
    return {
      topRow: testimonials.slice(0, mid),
      bottomRow: testimonials.slice(mid)
    };
  }, []);

  return splitTestimonials;
}