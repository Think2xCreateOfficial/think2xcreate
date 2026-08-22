import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';

function TestimonialCard({ quote, name, company, role, city, initials, rating = 5, metric, verified, tamil, featured, styles }) {
  return (
    <div className={styles.card(featured)}>
      {/* Top Bar: Stars + Metric Badge */}
      <div className="flex items-center justify-between gap-2 mb-1 z-10">
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {metric && (
          <span className="bg-yellow-400/20 text-yellow-800 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border border-yellow-400/30 tracking-wider">
            {metric}
          </span>
        )}
      </div>

      <Quote className="w-6 h-6 text-yellow-400/40 select-none -mb-2" />

      {/* Quote text */}
      <p className={styles.quoteText}>"{quote}"</p>

      {/* Author Details Footer */}
      <div className={styles.authorContainer}>
        <div className={styles.authorInfo}>
          <div className={styles.avatar(featured)}>{initials}</div>
          <div>
            <div className="flex items-center gap-1.5">
              <p className={styles.authorName}>{name}</p>
              {verified && (
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-500 flex-shrink-0" title="Verified Client" />
              )}
            </div>
            <p className={styles.authorRole}>
              {company ? `${company} • ` : ''}{role}, {city}
            </p>
          </div>
        </div>

        {tamil && (
          <span className={styles.tamilBadge}>தமிழ்</span>
        )}
      </div>
    </div>
  );
}

export default TestimonialCard;