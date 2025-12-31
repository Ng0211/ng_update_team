import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import sacLogo from "../../assets/sac_logo.png";
import { Sun, Moon, Menu, X } from "lucide-react";


function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!isHome) return; // only track on Home
    const handler = () => setAtTop(window.scrollY <= 50);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [isHome]);
  const { theme, toggleTheme } = useTheme();
  const onHero = isHome && atTop;
  const linkTextClass = onHero
    ? "text-white"
    : theme === "light"
    ? "text-[var(--text-color-secondary)]"
    : "text-[var(--text-color)]";
  const linkClass = `${linkTextClass} hover:text-[var(--primary)] transition-colors text-sm sm:text-base`;
  const brandClass = `${linkTextClass} text-lg sm:text-xl font-bold`;
  return (
    <nav
      className={`p-4 w-full transition-all duration-300 ease-in-out ${
        isHome
          ? "fixed top-0 left-0 z-50 " + 
            (onHero && !menuOpen
              ? "bg-transparent shadow-none" 
              : "bg-[var(--card-bg)] shadow-md") 
          : "sticky top-0 bg-[var(--card-bg)] shadow-md z-50" 
      }`}
    >
      
      <div className="container mt-2 mb-2 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={sacLogo} alt="SAC Logo" className="h-8 w-auto" />
          <span className={brandClass}>SAC IITD</span>
        </div>
        
        <div className="flex items-center">
          <ul className="hidden md:flex flex-wrap gap-x-4 gap-y-2 mr-4">
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
          {/*
          <button
            onClick={toggleTheme}
            aria-label={`Switch 
              theme === "light" ? "dark" : "light"
            } mode`}
            aria-pressed={theme === "dark"}
            className={`relative inline-flex items-center h-8 w-14 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)] focus:ring-offset-[var(--navbar-bg)] ${
              theme === "light"
                ? "bg-[var(--navbar-text)]/30"
                : "bg-[var(--primary)]/50"
            }`}
          >
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
          */}
          <button
            className="md:hidden ml-2 text-current text-[white] "
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <div
        className={`md:hidden overflow-hidden  rounded transition-all duration-300 ease-in-out
        ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        bg-[var(--card-bg)] shadow-md`}
      >
        <ul className="flex flex-col gap-4 p-4">
          <li>
            <Link to="/" className={linkClass} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/activities" className={linkClass} onClick={() => setMenuOpen(false)}>
              Activities
            </Link>
          </li>
          <li>
            <Link to="/teams" className={linkClass} onClick={() => setMenuOpen(false)}>
              Teams
            </Link>
          </li>
          <li>
            <Link to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;
