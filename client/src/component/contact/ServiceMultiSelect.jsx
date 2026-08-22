import React from 'react';
import { Check } from 'lucide-react';

/**
 * Clean Multi-Select Chip Component for Services
 * Allows selecting one or multiple services easily on mobile and desktop.
 */
export const ServiceMultiSelect = ({ options, selectedValues = [], onChange, error }) => {
  const handleToggle = (option) => {
    const isSelected = selectedValues.includes(option);
    let updated;
    if (isSelected) {
      updated = selectedValues.filter((item) => item !== option);
    } else {
      updated = [...selectedValues, option];
    }
    onChange(updated);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-black text-gray-700 uppercase tracking-wider">
          Services Needed <span className="text-yellow-500">*</span>
        </label>
        <span className="text-[10px] font-bold text-gray-400">
          (Select one or multiple)
        </span>
      </div>

      <div className="flex flex-wrap gap-2 pt-1" role="group" aria-label="Services Selection">
        {options.map((option) => {
          const isSelected = selectedValues.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => handleToggle(option)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border select-none ${
                isSelected
                  ? 'bg-yellow-400 text-black border-yellow-400 shadow-xs scale-[1.02]'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-300'
              }`}
              aria-pressed={isSelected}
            >
              <div
                className={`w-3.5 h-3.5 rounded flex items-center justify-center transition-colors ${
                  isSelected ? 'bg-black text-yellow-400' : 'border border-gray-300 bg-white'
                }`}
              >
                {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
              </div>
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      {error && (
        <p className="text-xs font-bold text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
};

export default ServiceMultiSelect;
