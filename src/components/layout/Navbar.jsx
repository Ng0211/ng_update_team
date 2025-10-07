import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import sacLogo from "../../assets/sac_logo.png";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const linkTextClass =
    theme === "light"
      ? "text-[var(--text-color-secondary)]"
      : "text-[var(--text-color)]";
  const linkClass = `${linkTextClass} hover:text-[var(--primary)] transition-colors`;
  const brandClass = `${linkTextClass} text-xl font-bold`;

  return (
    <nav className="overflow-hidden bg-[var(--card-bg)] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={sacLogo}
            alt="SAC Logo"
            className="h-8 w-auto select-none"
            draggable="false"
          />
          <div className={brandClass}>SAC IITD</div>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li>
              <Link to="/" className={linkClass}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={linkClass}>
                About
              </Link>
            </li>
            <li>
              <Link to="/activities" className={linkClass}>
                Activities
              </Link>
            </li>
            <li>
              <Link to="/teams" className={linkClass}>
                Teams
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkClass}>
                Contact
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full bg-[var(--primary)] ${
              theme === "light"
                ? "text-[var(--text-color-secondary)]"
                : "text-[var(--bg-color)]"
            }`}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
