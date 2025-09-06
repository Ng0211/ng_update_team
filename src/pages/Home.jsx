import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen relative">
        {/* Hero Section with Background Image */}
        <div
          className="min-h-screen bg-cover bg-center relative flex flex-col items-center justify-center text-white"
          style={{
            backgroundImage: `linear-gradient(${
              theme === "light"
                ? "rgba(255, 255, 255, 0.8)"
                : "rgba(0, 0, 0, 0.6)"
            }, ${
              theme === "light"
                ? "rgba(255, 255, 255, 0.8)"
                : "rgba(0, 0, 0, 0.6)"
            }), url("/src/assets/iitd-background.jpg")`,
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-b ${
              theme === "light"
                ? "from-white/40 to-white/70"
                : "from-black/40 to-black/70"
            } z-0`}
          ></div>

          {/* Content */}
          <div className="container mx-auto px-4 z-10 text-center">
            <div className="flex flex-col items-center justify-center gap-6">
              {/* SAC Logo */}
              <img
                src="/src/assets/sac_logo.png"
                alt="SAC Logo"
                className="w-32 md:w-40 animate-fade-in-down"
              />

              {/* Main Heading */}
              <h1
                className={`text-5xl md:text-7xl font-bold mb-2 tracking-tight animate-fade-in ${
                  theme === "light" ? "text-gray-900" : "text-white"
                }`}
              >
                Student Affairs Council
              </h1>

              {/* Subheading */}
              <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-8 animate-fade-in">
                IIT Delhi
              </h2>

              <div className="w-20 h-1 bg-yellow-400 my-4"></div>

              {/* Welcome Text */}
              <p
                className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up ${
                  theme === "light" ? "text-gray-800" : "text-white"
                }`}
              >
                The Student Affairs Council (SAC) is the apex student body at
                IIT Delhi, responsible for managing and coordinating all student
                activities, clubs, and events within the campus.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <button
                  onClick={() => {
                    window.scrollTo({
                      top: document.documentElement.scrollHeight,
                      behavior: "smooth",
                    });
                  }}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-md font-semibold transition-all"
                >
                  Learn More
                </button>
                <Link
                  to="/events"
                  className={`${
                    theme === "light"
                      ? "bg-transparent hover:bg-gray-800/20 border-2 border-gray-800 text-gray-900"
                      : "bg-transparent hover:bg-white/20 border-2 border-white text-white"
                  } px-8 py-3 rounded-md font-semibold transition-all`}
                >
                  Upcoming Events
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer ${
              scrolled ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300 ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            <ChevronDown size={36} />
          </div>
        </div>

        {/* Additional content can be added below the hero section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[var(--text-color)]">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-2 text-[var(--text-color)]">
                Annual Cultural Festival
              </h3>
              <p className="text-[var(--text-color-light)] mb-4">
                November 2025
              </p>
              <p className="text-[var(--text-color)]">
                Join us for the biggest cultural extravaganza of the year
                featuring performances, competitions, and celebrity appearances.
              </p>
            </div>
            <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-2 text-[var(--text-color)]">
                Technical Summit
              </h3>
              <p className="text-[var(--text-color-light)] mb-4">
                September 2025
              </p>
              <p className="text-[var(--text-color)]">
                Engage with industry leaders, participate in hackathons, and
                showcase your technical prowess.
              </p>
            </div>
            <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-2 text-[var(--text-color)]">
                Sports Meet
              </h3>
              <p className="text-[var(--text-color-light)] mb-4">
                October 2025
              </p>
              <p className="text-[var(--text-color)]">
                Compete in various sports competitions and represent your hostel
                or department in this annual sporting event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
