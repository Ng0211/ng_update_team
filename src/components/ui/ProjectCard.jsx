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
      className={`bg-[var(--card-bg)]/70 backdrop-blur rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-200 ${className}`}
      style={{ border: "1px solid rgba(0,0,0,0)" }}
    >
      <h3 className="text-lg font-semibold text-[var(--text-color)] mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-[var(--text-color-sub)] mb-4">
          {description}
        </p>
      )}
      {children}
      <div className="mt-4">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--btn-color)] text-[var(--text-color-secondary)] font-medium hover:brightness-110 transition">
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
        className="block"
        aria-label={`${title} - ${ctaLabel}`}
      >
        {content}
      </a>
    );
  }

  return (
    <a href={href} className="block" aria-label={`${title} - ${ctaLabel}`}>
      {content}
    </a>
  );
}

export default ProjectCard;
