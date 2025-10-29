import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import sacLogo from "../../assets/sac_logo.png";
import { Sun, Moon } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { theme, toggleTheme } = useTheme();
  const linkTextClass =
    theme === "light"
      ? "text-[var(--text-color-secondary)]"
      : "text-[var(--text-color)]";
  const linkClass = `${linkTextClass} hover:text-[var(--primary)] transition-colors text-sm sm:text-base`;
  const brandClass = `${linkTextClass} text-lg sm:text-xl font-bold`;
  return (
    <nav
      className={`overflow-hidden bg-[var(--card-bg)] p-4 shadow-md ${
        isHome ? "sticky top-0 z-50" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={sacLogo} alt="SAC Logo" className="h-8 w-auto" />
          <span className={brandClass}>SAC IITD</span>
        </div>
        <div className="flex items-center">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 mr-4">
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
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
            aria-pressed={theme === "dark"}
            className={`relative inline-flex items-center h-8 w-14 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)] focus:ring-offset-[var(--navbar-bg)] ${
              theme === "light"
                ? "bg-[var(--navbar-text)]/30"
                : "bg-[var(--primary)]/50"
            }`}
          >
            {/* Sun/Moon indicators (smaller on mobile) */}
            <Sun
              aria-hidden="true"
              className={`absolute left-1 pointer-events-none transition-opacity duration-300 text-[var(--text-color-secondary)] w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                theme === "light" ? "opacity-100" : "opacity-30"
              }`}
            />
            <Moon
              aria-hidden="true"
              className={`absolute right-1 pointer-events-none transition-opacity duration-300 text-[var(--text-color-secondary)] w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                theme === "dark" ? "opacity-100" : "opacity-30"
              }`}
            />
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-[var(--btn-color)] shadow-md transition-transform duration-300 ${
                theme === "light" ? "translate-x-0" : "translate-x-6"
              }`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
