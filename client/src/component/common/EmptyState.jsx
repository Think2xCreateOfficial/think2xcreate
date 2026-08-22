import React from 'react';
import { FolderSearch, RotateCcw } from 'lucide-react';

/**
 * Reusable Empty State Component
 * Renders when dynamic filter lists or search results yield 0 items.
 */
export const EmptyState = ({
  title = "No Projects Found",
  description = "We couldn't find any items matching your selected criteria.",
  onReset,
  resetLabel = "Reset Filters",
  icon: Icon = FolderSearch
}) => {
  return (
    <div className="bg-white border border-gray-200/80 rounded-3xl p-10 text-center my-6 shadow-2xs flex flex-col items-center justify-center max-w-lg mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-yellow-100 text-yellow-800 flex items-center justify-center mb-4 shadow-inner">
        <Icon className="w-8 h-8" />
      </div>
      
      <h3 className="text-lg font-black text-gray-900 mb-1 leading-tight">
        {title}
      </h3>
      
      <p className="text-xs text-gray-500 font-semibold mb-6 max-w-xs leading-relaxed">
        {description}
      </p>

      {onReset && (
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 bg-gray-900 hover:bg-yellow-400 hover:text-black text-white font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all duration-300 shadow-sm cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{resetLabel}</span>
        </button>
      )}
    </div>
  );
};

export default EmptyState;
