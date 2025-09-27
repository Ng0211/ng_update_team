import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import ClubCard from "../components/ui/ClubCard";
import { ChevronDown, ExternalLink } from "lucide-react";


// Import all images
import backgroundImage from "../assets/activities/background_image.png";
import iitDelhiImage from "../assets/home/iit_delhi.jpeg";
import sacLogo from "../assets/home/sac_logo.png";
import sacCentreImage from "../assets/home/sac_centre_bg_removed.png";
import bhmLogo from "../assets/home/bhm_logo.png";
import brcaLogo from "../assets/home/brca.png";
import bswLogo from "../assets/home/bsw_logo.png";
import bsaLogo from "../assets/home/bsa.png";
import bspLogo from "../assets/home/bsp_logo.png";
import iitdClubsImage from "../assets/home/IITDClubs.png";

function Home() {
  const { theme } = useTheme();
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fullText = "Welcomes You!";
  const typeSpeed = 60;
  const deleteSpeed = 50;
  const deleteDelay = 2000;

  useEffect(() => {
    let timeout;

    if (!isDeleting) {
      if (currentIndex < fullText.length) {
        timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, typeSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, deleteDelay);
      }
    } else {
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, fullText.length]);

  return (
    <div
      className="w-full overflow-hidden main"
      style={{
        backgroundImage: theme === "light" ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        style={{
          // backgroundImage: theme === "light" ? `url(${iitDelhiImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[var(--card-bg)] opacity-50"></div>

        <div className="relative z-10 flex flex-col gap-8 text-center mx-auto max-w-6xl md:py-16 pb-8 px-6 lg:px-12 items-center justify-start backdrop-blur-sm bg-[var(--card-bg)]/30 rounded-xl shadow-2xl border border-[var(--text-color)]/10 animate-fadeIn">
          {/* Logo section with glow effect */}
          <div className="flex md:mt-[40px] mt-[100px] mb-0 sm:mb-0 relative">
            <div className="absolute inset-0 -z-10 bg-[var(--btn-color)]/20 blur-xl rounded-full"></div>
            <img
              className="w-32 sm:w-44 md:w-52 h-auto object-contain drop-shadow-[0_0_8px_rgba(var(--btn-color-rgb),0.6)] animate-float"
              src={sacLogo}
              alt="SAC Logo"
            />
          </div>

          <div className="text-center w-full">
            {/* Main heading with animation */}
            <h2 className="text-shadow-lg text-4xl md:text-7xl font-extrabold text-[var(--text-color)] mb-3 md:mb-2 tracking-tighter leading-none animate-slideInFromTop">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--btn-color)] via-[var(--text-color)] to-[var(--btn-color)]">
                Student Affairs Council
              </span>
            </h2>

            <div className="text-center flex flex-col justify-center items-center">
              {/* Subheading with enhanced styling */}
              <p className="text-xl md:text-4xl text-[var(--btn-color)] font-bold tracking-wide mb-2 animate-slideInFromBottom">
                IIT Delhi
              </p>
              {/* Decorative divider */}
              <div className="relative flex items-center w-full md:w-2/3 lg:w-[350px] my-6">
                <div className="flex-grow border-t-2 border-[var(--btn-color)] border-opacity-70"></div>
                <div className="mx-4">
                  <span className="inline-block w-3 h-3 bg-[var(--btn-color)] rounded-full animate-pulse"></span>
                </div>
                <div className="flex-grow border-t-2 border-[var(--btn-color)] border-opacity-70"></div>
              </div>{" "}
              {/* Typed text with improved visibility */}
              <div className="typed-container bg-[var(--card-bg)]/30 px-6 py-3 rounded-lg backdrop-blur-md">
                <div className="text-[var(--text-color)] text-xl md:text-2xl font-medium inline-block animate-fadeIn">
                  {typedText}
                  <span className="animate-cursor ml-1">|</span>
                </div>
              </div>
              {/* Mission statement */}
              <p className="mt-6 text-[var(--text-color)] max-w-2xl text-base md:text-lg animate-fadeIn delay-300 hidden md:block">
                Fostering leadership, creativity, and excellence through
                student-led initiatives since 1961. The apex body for all
                student activities at IIT Delhi.
              </p>
            </div>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 mb-8 animate-fadeIn delay-500">
            <button
              onClick={() => navigate("/about")}
              className="px-8 py-3 bg-gradient-to-r from-[var(--btn-color)] to-[var(--primary)] text-[var(--text-color-secondary)] font-bold rounded-full hover:shadow-[0_0_15px_var(--btn-color)] transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              <span>Discover SAC</span>
              <ChevronDown size={18} />
            </button>
            <a
              href="https://www.iitd.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border-2 border-[var(--btn-color)] text-[var(--btn-color)] font-bold rounded-full hover:bg-[var(--btn-color)]/10 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              <span>Visit IIT Delhi</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 animate-fadeIn delay-700">
            <a
              href="https://twitter.com/iitdelhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-color)] hover:text-[var(--btn-color)] transition-colors p-2 bg-[var(--card-bg)]/30 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/sac.iitd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-color)] hover:text-[var(--btn-color)] transition-colors p-2 bg-[var(--card-bg)]/30 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/school/iit-delhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-color)] hover:text-[var(--btn-color)] transition-colors p-2 bg-[var(--card-bg)]/30 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>

          {/* Scroll down indicator */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-[var(--btn-color)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* About section moved to dedicated About page */}

      {/* Three Column Layout */}
      <div className="container mx-auto   mb-20">
        <div className="flex flex-wrap">
          {/* Left Column */}
          <div className="w-1/3 flex flex-col  gap-5 md:gap-20 scale-[40%] md:scale-100  md:translate-x-0">
            <ClubCard
              className="ml-auto"
              href="https:/home/bhm.iitd.ac.in"
              imageSrc={bhmLogo}
              imageAlt="BHM Logo"
              title="Board for Hostel Management"
              description="Manages hostel facilities and student accommodation"
              external={true}
            />
            <ClubCard
              className="ml-auto"
              href="https://brca.iitd.ac.in"
              imageSrc={brcaLogo}
              imageAlt="BRCA Logo"
              title="Board for Recreational and Creative Activities"
              description="Organizes cultural and recreational events"
              external={true}
            />
            <ClubCard
              className="ml-auto"
              href="https://bsw.iitd.ac.in"
              imageSrc={bswLogo}
              imageAlt="BSW Logo"
              title="Board for Student Welfare"
              description="Focuses on student well-being and support"
              external={true}
            />
          </div>

          {/* Middle Column */}
          <div className="w-1/3 flex items-center justify-center m-0 md:p-8 scale-[80%] md:scale-100">
            <div className="flex flex-col items-center justify-center">
              <img
                src={sacCentreImage}
                alt="SAC Centre"
                className="w-11/12 h-auto pb-5 max-w-xl"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/3 flex flex-col gap-5 md:gap-20 scale-[40%] md:scale-100 -translate-x-8 md:translate-x-0">
            <ClubCard
              href="https://bsa.iitd.ac.in"
              imageSrc={bsaLogo}
              imageAlt="BSA Logo"
              title="Board for Student Activities"
              description="Coordinates student activities and events"
              external={true}
            />
            <ClubCard
              href="https://bsp.iitd.ac.in"
              imageSrc={bspLogo}
              imageAlt="BSP Logo"
              title="Board for Student Publications"
              description="Manages student publications and media"
              external={true}
            />
            <ClubCard
              href="/activities"
              imageSrc={iitdClubsImage}
              imageAlt="IITD Clubs"
              title="IIT Delhi Clubs"
              description="Various student clubs and organizations"
              external={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
