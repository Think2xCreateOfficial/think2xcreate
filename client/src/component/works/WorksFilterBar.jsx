import React from 'react';
import { Filter } from 'lucide-react';

export const FILTER_CATEGORIES = [
  'All Works',
  'Website Design',
  'eCommerce',
  'Digital Marketing',
  'Branding',
  'SEO',
  'Social Media',
];

/**
 * Category Filter Bar Component (Reference 2)
 * Clean, mobile-friendly horizontal pill selector for filtering projects.
 */
export const WorksFilterBar = ({
  selectedCategory = 'All Works',
  onSelectCategory = () => { },
  className = '',
}) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ${className}`}>
      <div className="flex items-center justify-between gap-3 border-t border-gray-100 pt-6">
        {/* Scrollable Pill Container */}
        <div
          className="flex items-center gap-2 overflow-x-auto py-1 w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          role="tablist"
          aria-label="Filter projects by category"
        >
          {FILTER_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                role="tab"
                aria-selected={isActive}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex-shrink-0 focus:outline-none ${isActive
                    ? 'bg-yellow-400 text-black shadow-xs font-extrabold scale-105'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-yellow-300 hover:text-gray-900'
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Filter Label Icon (Desktop) */}
        <div className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-white text-gray-500 border border-gray-200 flex-shrink-0">
          <span>Filter</span>
          <Filter className="w-3.5 h-3.5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default WorksFilterBar;
