import React from 'react';
import { getMetricIcon } from '../../utils/helpers/metricsHelper';

/**
 * Standardized 4-Metric / Business Highlight Summary Grid Component
 * Displays factual business information in a stable 4-column topology matching Reference 1.
 */
export const WorksMetricsGrid = ({ metrics = [], className = '' }) => {
  if (!metrics || metrics.length === 0) return null;

  // Ensure exactly 4 metric slots for visual balance and height stability
  const displayMetrics = metrics.slice(0, 4);

  return (
    <div>
      <span className="block text-[10px] font-extrabold uppercase tracking-widest text-yellow-600 mb-2">
        BUSINESS HIGHLIGHTS
      </span>
      <div
        className={`bg-white border border-gray-100 rounded-2xl p-4 shadow-2xs grid grid-cols-2 sm:grid-cols-4 gap-y-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 min-h-[104px] items-center ${className}`}
      >
        {displayMetrics.map((metric, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center text-center px-2 ${
              idx > 1 ? 'pt-3 sm:pt-0' : ''
            } ${idx > 0 ? 'sm:pl-3' : ''}`}
          >
            {/* Icon Badge */}
            <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center mb-1 flex-shrink-0">
              {getMetricIcon(metric.label)}
            </div>

            {/* Metric / Fact Value */}
            <span className="text-lg sm:text-xl font-black text-gray-900 leading-none mb-0.5 tracking-tight">
              {metric.value}
            </span>

            {/* Metric / Fact Label */}
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider leading-snug line-clamp-1">
              {metric.label}
            </span>

            {/* Verified Badge */}
            <span className="inline-flex items-center px-2 py-0.5 mt-1 rounded-full bg-yellow-50 text-yellow-800 text-[9px] font-extrabold leading-none">
              {metric.subValue || 'Verified'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksMetricsGrid;
