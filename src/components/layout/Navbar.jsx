import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="overflow-hidden bg-[var(--card-bg)] text-[var(--text-color)] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">SAC IITD</div>
        <div className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li>
              <Link
                to="/"
                className="hover:text-[var(--primary)] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/activities"
                className="hover:text-[var(--primary)] transition-colors"
              >
                Activities
              </Link>
            </li>
            <li>
              <Link
                to="/teams"
                className="hover:text-[var(--primary)] transition-colors"
              >
                Teams
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[var(--primary)] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[var(--primary)] text-[var(--bg-color)]"
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
