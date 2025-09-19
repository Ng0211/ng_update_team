import React, { useState } from "react";

function ClubCard({ 
  href, 
  imageSrc, 
  imageAlt, 
  title, 
  description, 
  external = false,
  className = ""
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  const cardContent = (
    <div 
      className={`bg-[#322323] p-4 rounded-lg w-48 h-48 flex items-center justify-center hover:transform hover:scale-105 transition-transform duration-300 relative ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        className="w-auto h-full object-contain" 
      />
      
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-10">
          <div className="font-semibold">{title}</div>
          {description && (
            <div className="text-xs opacity-80 mt-1">{description}</div>
          )}
          {/* Tooltip arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
        </div>
      )}
    </div>
  );

  if (external) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
        title={title}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <a href={href} className="block" title={title}>
      {cardContent}
    </a>
  );
}

export default ClubCard;
