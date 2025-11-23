import React from "react";

function ProjectCard({
  title,
  description,
  href = "#",
  external = false,
  ctaLabel = "View",
  className = "",
  children,
}) {
  const content = (
    <div
      className={` rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-200 h-60 md:h-[25vh] flex flex-col ${className}`}
      style={{ backgroundColor: "var(--contact-form-input-bg)" }}
    >
      <h3 className="text-lg font-semibold text-[var(--text-color)] mb-2">
        {title}
      </h3>
      {description && (
        <div className="no-scrollbar text-sm text-[var(--text-color)] mb-4 overflow-auto pr-1 flex-1">
          {description}
        </div>
      )}
      {children}
      <div className="mt-4">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--btn-color)] text-[var(--contact-btn-text)] font-medium hover:brightness-110 transition">
          {ctaLabel}
        </span>
      </div>
    </div>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        aria-label={`${title} - ${ctaLabel}`}
      >
        {content}
      </a>
    );
  }

  return (
    <a
      href={href}
      className="block h-full"
      aria-label={`${title} - ${ctaLabel}`}
    >
      {content}
    </a>
  );
}

export default ProjectCard;
