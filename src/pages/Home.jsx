import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import ClubCard from "../components/ClubCard";

function Home() {
  const { theme } = useTheme();
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
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
      backgroundImage: theme === 'light' ? "url('/src/assets/activities/background_image.png')" : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }}
    >
      {/* Hero Section */}
      <section 
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/src/assets/home/iit_delhi.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 flex flex-col sm:flex-col gap-4 text-center mx-6 sm:mx-[200px] md:py-16 pb-8 px-6 lg:px-12 items-center justify-start">
          {/* Logo section */}
          <div className="flex md:mt-[50px] mt-[150px] md:mb-6 sm:mb-0 sm:mr-6">
            <img 
              className="w-32 sm:w-40 md:w-48 h-auto object-contain" 
              src="/src/assets/home/sac_logo.png" 
              alt="SAC Logo" 
            />
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-shadow-md text-3xl md:text-7xl font-extrabold text-gray-300 mb-4 md:mb-2">
              Student Affairs Council
            </h2>
            <div className="text-center flex flex-col justify-center items-center">
              <p className="text-lg md:text-3xl text-[#FFD700] font-medium">
                IIT Delhi
              </p>
              <hr className="my-4 border-[#FFD700] border-t-2 w-3/4 sm:w-3/4 lg:w-[300px]" />
              <div className="typed-container">
                <div className="text-gray-300 text-xl md:text-2xl font-semibold inline-block">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 lg:px-20 flex flex-col">
        <div 
          className="md:w-[900px] py-6 px-4 md:mx-auto shadow-lg rounded-xl"
          style={{ backgroundColor: 'rgba(43, 26, 24, 0.1)' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--text-color)]">
            ABOUT US
          </h2>
          <p className="md:text-xl text-center mb-4 text-[var(--text-color)]">
            Student Affairs Council is the apex student body of IIT Delhi. It is
            responsible for:
          </p>
          <ul className="list-disc list-inside mx-auto space-y-2 max-w-2xl text-[var(--text-color)]">
            <li>
              Formulating policies pertaining to all non-academic student
              affairs.
            </li>
            <li>
              Presenting student views on issues of collective concern through
              representation in various policy and decision-making bodies.
            </li>
            <li>
              Addressing students' problems through the institutional framework
              of IIT Delhi.
            </li>
          </ul>
        </div>
      </section>

      {/* Three Column Layout */}
      <div className="container mx-auto   mb-20">
        <div className="flex flex-wrap">
          {/* Left Column */}
          <div className="w-1/4 flex flex-col  gap-5 md:gap-20 scale-[40%] md:scale-100  md:translate-x-0">
            <ClubCard
              className="ml-auto"
              href="https:/home/bhm.iitd.ac.in"
              imageSrc="/src/assets/home/bhm_logo.png"
              imageAlt="BHM Logo"
              title="Board for Hostel Management"
              description="Manages hostel facilities and student accommodation"
              external={true}
            />
            <ClubCard
              className="ml-auto"
              href="https://brca.iitd.ac.in"
              imageSrc="/src/assets/home/brca.png"
              imageAlt="BRCA Logo"
              title="Board for Recreational and Creative Activities"
              description="Organizes cultural and recreational events"
              external={true}
            />
            <ClubCard
              className="ml-auto"
              href="https://bsw.iitd.ac.in"
              imageSrc="/src/assets/home/bsw_logo.png"
              imageAlt="BSW Logo"
              title="Board for Student Welfare"
              description="Focuses on student well-being and support"
              external={true}
            />
          </div>

          {/* Middle Column */}
          <div className="w-1/2 flex items-center justify-center m-0 md:p-8 scale-[80%] md:scale-100">
            <div className="flex flex-col items-center justify-center">
              <img 
                src="/src/assets/home/sac_centre_bg_removed.png" 
                alt="SAC Centre" 
                className="w-11/12 h-auto pb-5 max-w-xl"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/4 flex flex-col gap-5 md:gap-20 scale-[40%] md:scale-100 -translate-x-8 md:translate-x-0">
            <ClubCard
              href="https://bsa.iitd.ac.in"
              imageSrc="/src/assets/home/bsa.png"
              imageAlt="BSA Logo"
              title="Board for Student Activities"
              description="Coordinates student activities and events"
              external={true}
            />
            <ClubCard
              href="https://bsp.iitd.ac.in"
              imageSrc="/src/assets/home/bsp_logo.png"
              imageAlt="BSP Logo"
              title="Board for Student Publications"
              description="Manages student publications and media"
              external={true}
            />
            <ClubCard
              href="/activities"
              imageSrc="/src/assets/home/IITDClubs.png"
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
