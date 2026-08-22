import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

/**
 * Individual Project Card for Completed Projects Grid
 */
export const WorksProjectCard = ({ project }) => {
  const navigate = useNavigate();

  if (!project) return null;

  const handleClick = () => {
    navigate(`/case-studies/${project.slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded border border-gray-100 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col h-full"
    >
      {/* Media Aspect Ratio Container - Full View Uncropped */}
      <div className="aspect-[16/7.5] overflow-hidden relative bg-[#0D0E12] flex items-center justify-center flex-shrink-0">
        <img
          src={project.backgroundImage}
          alt={project.brandName}
          className="w-full h-full object-contain object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Corner Hover Icon */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Card Info Section */}
      <div className="p-5 flex flex-col justify-between flex-1 bg-white">
        <div>
          <h4 className="text-base font-extrabold text-gray-900 group-hover:text-yellow-600 transition-colors leading-snug mb-1">
            {project.brandName}
          </h4>
          <p className="text-gray-400 text-xs font-semibold">
            {project.logoSubLabel || project.category}
          </p>
        </div>

        {/* Optional Tagline or Service Summary */}
        {project.tagline && (
          <p className="text-gray-500 text-xs mt-3 line-clamp-2 font-medium leading-relaxed">
            {project.tagline}
          </p>
        )}
      </div>
    </div>
  );
};

export default WorksProjectCard;
