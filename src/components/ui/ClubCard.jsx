import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

function ClubCard({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
  external = false,
  className = "",
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const { theme } = useTheme();
  const tooltipTextClass =
    theme === "light"
      ? "text-[var(--text-color-secondary)]"
      : "text-[var(--text-color)]";

  const cardContent = (
    <div
      className={`bg-[var(--activities-club-card-bg)] p-2 sm:p-3 md:p-4 rounded-lg w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 max-w-full flex items-center justify-center hover:transform hover:scale-105 transition-transform duration-300 relative ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="max-w-full max-h-full object-contain"
      />

      {/* Tooltip */}
      {showTooltip && (
        <div
          className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs sm:text-sm rounded-lg shadow-lg whitespace-nowrap z-10 bg-[var(--card-bg)] ${tooltipTextClass}`}
        >
          <div className="font-semibold">{title}</div>
          {description && (
            <div className="text-[0.7rem] sm:text-xs opacity-90 mt-1">
              {description}
            </div>
          )}
          {/* Tooltip arrow */}
          <div
            className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent"
            style={{ borderTopColor: "var(--card-bg)" }}
          ></div>
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
