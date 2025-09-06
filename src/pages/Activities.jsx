import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

function Activities() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState("cultural");
  const [sliderPosition, setSliderPosition] = useState(0);

  // Club data organized by category
  const clubData = {
    cultural: [
      {
        name: "Dance Club",
        instagram: "https://www.instagram.com/iitddanceclub/",
        image: "/src/assets/activities/dance.png",
        alt: "Dance Club Logo"
      },
      {
        name: "Debating Club",
        instagram: "https://www.instagram.com/debsoc_iitd/",
        image: "/src/assets/activities/deb.png",
        alt: "Debating Club Logo"
      },
      {
        name: "Dramatics Club",
        instagram: "https://www.instagram.com/ankahi_iitd/",
        image: "/src/assets/activities/ankhi.png",
        alt: "Dramatics Club Logo"
      },
      {
        name: "Music Club",
        instagram: "https://www.instagram.com/iitdmusicclub/",
        image: "/src/assets/activities/music.png",
        alt: "Music Club Logo"
      },
      {
        name: "Design Club",
        instagram: "https://www.instagram.com/designclubiitd/",
        image: "/src/assets/activities/design.png",
        alt: "Design Club Logo"
      },
      {
        name: "Photography Club",
        instagram: "https://www.instagram.com/pfc.iitd/",
        image: "/src/assets/activities/pfc.png",
        alt: "Photography Club Logo"
      },
      {
        name: "Hindi Samiti",
        instagram: "https://www.instagram.com/hindisamiti.iitd/",
        image: "/src/assets/activities/hs.png",
        alt: "Hindi Samiti Logo"
      },
      {
        name: "Fine Arts Club",
        instagram: "https://www.instagram.com/facc.azure.iitd/",
        image: "/src/assets/activities/finearts.png",
        alt: "Fine Arts Club Logo"
      },
      {
        name: "Literary Club",
        instagram: "https://www.instagram.com/litclub.iitd/",
        image: "/src/assets/activities/lit.png",
        alt: "Literary Club Logo"
      },
      {
        name: "Quiz Club",
        instagram: "https://www.instagram.com/iitdqc/",
        image: "/src/assets/activities/qc.png",
        alt: "Quiz Club Logo"
      },
      {
        name: "Spic Macay",
        instagram: "https://www.instagram.com/spicmacay_iitd/",
        image: "/src/assets/activities/spic.png",
        alt: "Spic Macay Logo"
      }
    ],
    technical: [
      {
        name: "DevClub",
        website: "https://www.devclub.in/",
        image: "/src/assets/activities/dev.png",
        alt: "DevClub Logo"
      },
      {
        name: "Robotics Club",
        website: "https://roboticsclub.iitd.ac.in/",
        image: "/src/assets/activities/robo.png",
        alt: "Robotics Club Logo"
      },
      {
        name: "Axlr8",
        website: "https://automobileclub.iitd.ac.in/",
        image: "/src/assets/activities/axlr.png",
        alt: "Axlr8 Logo"
      },
      {
        name: "Aeromodelling Club",
        instagram: "https://www.instagram.com/aeroclub_iitd/",
        image: "/src/assets/activities/aero.png",
        alt: "Aeromodelling Club Logo"
      },
      {
        name: "Physics & Astronomy Club",
        website: "https://pac.iitd.ac.in/",
        image: "/src/assets/activities/pac.png",
        alt: "PAC Logo"
      },
      {
        name: "Economics Club",
        instagram: "https://www.instagram.com/econclubiitd/",
        image: "/src/assets/activities/eco.png",
        alt: "Economics Club Logo"
      },
      {
        name: "iGem",
        website: "https://2023.igem.wiki/iit-delhi/team",
        image: "/src/assets/activities/igem.png",
        alt: "iGem Logo"
      },
      {
        name: "Textile Engineering Society",
        website: "https://textile.iitd.ac.in/",
        image: "/src/assets/activities/tes.png",
        alt: "TES Logo"
      },
      {
        name: "ACES ACM",
        instagram: "https://www.instagram.com/acesacm.iitdelhi/",
        image: "/src/assets/activities/aces.png",
        alt: "ACES ACM Logo"
      },
      {
        name: "Mathematics Society",
        website: "https://mathsoc.iitd.ac.in/",
        image: "/src/assets/activities/mathsoc.png",
        alt: "Mathsoc Logo"
      },
      {
        name: "Electrical Engineering Society",
        instagram: "https://www.instagram.com/ees_iitdelhi/",
        image: "/src/assets/activities/ees.png",
        alt: "EES Logo"
      },
      {
        name: "Physics Society",
        instagram: "https://www.instagram.com/physoc.iitd/",
        image: "/src/assets/activities/physoc.png",
        alt: "Physics Society Logo"
      },
      {
        name: "Mechanical Engineering Society",
        instagram: "https://www.instagram.com/mes.iitdelhi/",
        image: "/src/assets/activities/mes.png",
        alt: "MES Logo"
      },
      {
        name: "Chemical Engineering Society",
        website: "https://ches.iitd.ac.in/",
        image: "/src/assets/activities/chemsoc.png",
        alt: "Chemical Engineering Society Logo"
      },
      {
        name: "Civil Engineering Society",
        website: "https://civil.iitd.ac.in/",
        image: "/src/assets/activities/ces.png",
        alt: "CES Logo"
      }
    ],
    others: [
      {
        name: "Entrepreneurship Development Cell",
        website: "https://edciitd.com/",
        image: "/src/assets/activities/edc.png",
        alt: "EDC Logo"
      },
      {
        name: "Alumni Affairs",
        website: "https://alumni.iitd.ac.in/",
        image: "/src/assets/activities/ar.png",
        alt: "Alumni Affairs Logo"
      },
      {
        name: "International Programmes",
        website: "https://international.iitd.ac.in/",
        image: "/src/assets/activities/ip.png",
        alt: "International Programmes Logo"
      },
      {
        name: "IITD OnAir",
        instagram: "https://www.instagram.com/iitdonair/",
        image: "/src/assets/activities/onair.png",
        alt: "IITD OnAir Logo"
      },
      {
        name: "Indradhanu",
        website: "https://indradhanuiitd.in/",
        image: "/src/assets/activities/indra.png",
        alt: "Indradhanu Logo"
      },
      {
        name: "Enactus IITD",
        website: "https://www.enactus-iitd.com/",
        image: "/src/assets/activities/enactus.png",
        alt: "Enactus Logo"
      }
    ]
  };

  const categories = [
    { id: "cultural", label: "Cultural" },
    { id: "technical", label: "Technical" },
    { id: "others", label: "Others" }
  ];

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    const index = categories.findIndex(cat => cat.id === categoryId);
    setSliderPosition(index * 100);
  };

  const ClubCard = ({ club }) => {
    const link = club.instagram || club.website;
    const isExternal = link.startsWith('http');
    
    return (
      <div className="flex flex-col items-center">
        <div 
          className="w-full max-w-[280px] h-48 sm:h-64 shadow-xl dark:shadow-2xl flex flex-col items-center relative overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 border border-gray-300 dark:border-gray-600"
          style={{ backgroundColor: 'var(--activities-club-card-bg)' }}
        >
          <a
            href={link}
            rel="noopener"
            target="_blank"
            className="w-full h-full group"
          >
            <img
              src={club.image}
              alt={club.alt}
              className="w-full h-full object-cover p-4 sm:p-6 transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/280x256/302122/ffffff?text=" + club.name;
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              {/* Instagram icon removed as per original */}
            </div>
          </a>
        </div>
        <h3 className="text-sm sm:text-lg md:text-xl font-semibold mt-2 sm:mt-4 font-poppins text-center" style={{ color: 'var(--text-color)' }}>
          {club.name}
        </h3>
      </div>
    );
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Background Image
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/src/assets/activities/background_image.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      /> */}

      {/* Header Section */}
      <div 
        className="pt-10 pb-10"
        style={{
          backgroundImage: theme === 'light' ? "url('/src/assets/activities/background_image.png')" : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
        <h2 className="mb-10 text-3xl md:text-4xl lg:text-5xl font-bold text-center" style={{ color: 'var(--text-color)' }}>
          Activities In IIT Delhi
        </h2>

        {/* Navigation buttons */}
        <div className="flex justify-center mx-4 mb-16">
          <div 
            className="relative rounded-lg p-2 max-w-[800px] w-full shadow-lg border border-gray-200 dark:border-gray-600"
            style={{ backgroundColor: 'var(--activities-nav-bg)' }}
          >
            <div
              className="absolute transition-all duration-300 h-10 bottom-3 rounded-lg"
              style={{
                width: 'calc(33.333% - 8px)',
                transform: `translateX(${sliderPosition}%)`,
                left: '10px',
                backgroundColor: 'var(--activities-tab-bg)'
              }}
            />
            <div className="relative flex">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-btn relative z-10 py-3 px-4 transition-colors duration-300 font-poppins text-sm sm:text-lg font-semibold whitespace-nowrap flex items-center justify-center`}
                  style={{
                    color: activeCategory === category.id 
                      ? 'var(--activities-tab-active)' 
                      : 'var(--activities-tab-inactive)',
                    width: '33.333%'
                  }}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Content */}
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-content mx-auto max-w-7xl px-4 transition-opacity duration-300 ${
              activeCategory === category.id ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {clubData[category.id].map((club, index) => (
                <ClubCard key={index} club={club} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr className="separator border-gray-500 dark:border-gray-400 w-3/4 mx-auto mt-16 mb-8" />

      
    </div>
  );
}

export default Activities;
