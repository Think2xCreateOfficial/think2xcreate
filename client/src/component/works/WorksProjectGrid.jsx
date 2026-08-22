import React from 'react';
import WorksProjectCard from './WorksProjectCard';

/**
 * Responsive CSS Grid Component for Completed Projects (Reference 2)
 * Mandated Grid topology: 3 columns on Desktop, 2 on Tablet, 1 on Mobile.
 * Replaces horizontal slider/carousel.
 */
export const WorksProjectGrid = ({ projects = [], title = "MORE PROJECTS WE'VE LOVED BUILDING", className = '' }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <section className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ${className}`}>
      {/* Section Sub-header */}
      <div className="flex items-center gap-3 mb-8">
        <h3 className="text-base sm:text-lg font-black text-gray-900 uppercase tracking-tight">
          {title}
        </h3>
        <div className="flex-1 h-0.5 bg-gray-200/80 rounded-full max-w-[120px]" />
      </div>

      {/* Mandatory Responsive CSS Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-4">
        {projects.map((project) => (
          <WorksProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default WorksProjectGrid;
