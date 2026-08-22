import React from 'react';

/**
 * Secondary Category Filter Pills
 * Displays sub-categories specific to the selected primary service.
 */
export const SecondaryCategoryTabs = ({
  tabs = [],
  activeTab = '',
  onSelectTab = () => {},
  className = '',
}) => {
  if (!tabs || tabs.length <= 1) return null;

  return (
    <div className={`flex items-center justify-center gap-2 overflow-x-auto scrollbar-none py-3 px-2 ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab || (activeTab === '' && tab.startsWith('All'));

        return (
          <button
            key={tab}
            onClick={() => onSelectTab(tab)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap focus:outline-none ${
              isActive
                ? 'bg-gray-900 text-white shadow-xs'
                : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300'
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default SecondaryCategoryTabs;
