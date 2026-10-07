import React from 'react';

/**
 * Data-driven Service Card Component for Think2xCreate Hero Ecosystem.
 * Engineered for clean white surfaces, micro-borders, soft shadows, and crisp typography.
 */
function HeroServiceCard({
  icon: Icon,
  iconGradient = 'from-blue-600 to-indigo-600',
  title,
  subtitle,
  className = '',
  id,
}) {
  return (
    <div
      id={id}
      className={`hero-floating-card group flex items-center gap-3 bg-white/95 backdrop-blur-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-slate-100 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.07),0_4px_10px_-2px_rgba(15,23,42,0.03)] hover:shadow-[0_18px_35px_-8px_rgba(15,23,42,0.12)] hover:border-amber-300/80 transition-all duration-300 cursor-default select-none pointer-events-auto ${className}`}
    >
      {/* Icon Badge */}
      <div
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${iconGradient} flex items-center justify-center flex-shrink-0 shadow-sm text-white group-hover:scale-105 transition-transform duration-300`}
      >
        {React.isValidElement(Icon) ? (
          Icon
        ) : Icon ? (
          <Icon className="w-5 h-5" />
        ) : null}
      </div>

      {/* Text Details */}
      <div className="flex flex-col text-left min-w-0 pr-1">
        <h2 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight tracking-tight whitespace-nowrap group-hover:text-amber-600 transition-colors duration-200">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium tracking-normal whitespace-nowrap mt-0.5 flex items-center gap-1">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export default React.memo(HeroServiceCard);
