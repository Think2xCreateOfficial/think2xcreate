import { ArrowRight } from "lucide-react";

function AuditCta({ content, styles, isComplete }) {
  return (
    <div className="mt-5">
      
      {/* CTA Button */}
      <a
        href={isComplete ? content.href : "#"}
        aria-disabled={!isComplete} 
        className={`
          ${styles.ctaButton}
          flex items-center justify-center gap-2
          ${!isComplete 
            ? "opacity-50 pointer-events-none cursor-not-allowed" 
            : "hover:scale-[1.02]"
          }
        `}
      >
        <span>{content.text}</span>
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </a>

      {/* Helper Message */}
      {!isComplete && (
        <p className="text-sm md:text-md text-gray-600 mt-4 text-center animate-bounce">
          Answer all questions to continue
        </p>
      )}

    </div>
  );
}

export default AuditCta;