import React, { useRef, useState } from "react";
import { DownloadCloud, ChevronLeft, ChevronRight, X } from "lucide-react";
import ProjectCard from "../components/ui/ProjectCard";

function About() {
  const years = [
    "2018-19",
    "2019-20",
    "2020-21",
    "2021-22",
    "2022-23",
    "2023-24",
    "2024-25",
    "2025-26",
  ];
  const mmScrollRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Distinct sample dates per academic year (replace hrefs with real links later)
  const meetingData = {
    "2018-19": [
      { date: "11 MAY'18", href: "https://drive.google.com/file/d/1-ehc_jiBitQBdPt4peR7MggiUIELBgyd/view" },
      { date: "14 SEPTEMBER'18", href: "https://drive.google.com/file/d/1OecrMJJqMMpTsvUuGqdqZfATYdlbxSwv/view" },
      { date: "26 NOVEMBER'18", href: "https://drive.google.com/file/d/1Xnp8O5IEjTxH7MeQdyiqI9CFyVZ7Mhkv/view" },
      { date: "21 FEBRUARY'19", href: "https://drive.google.com/file/d/1WzRC9Fcrmfh_xKl9Cg0G8-U48wsnZV2n/view" },
    ],
    "2019-20": [
      { date: "25 APRIL'19", href: "https://drive.google.com/file/d/14WNbreCcXOqj5meUYspVMxpq_ZoJSQ8i/view" },
      { date: "20 SEPTEMBER'19", href: "https://drive.google.com/file/d/1Vz6EYPo4yjxG5Xwpps6buTYu8aOZ92kW/view" },
      { date: "22 JANUARY'20", href: "https://drive.google.com/file/d/1Vz6EYPo4yjxG5Xwpps6buTYu8aOZ92kW/view" },
    ],
    "2020-21": [
      { date: "17 DECEMBER'20", href: "https://docs.google.com/document/d/10CNKCLgVJvW46bJWk3aT4hhMzRGFIRkgMD8ztDXaS2w/edit?tab=t.0" },
      { date: "1 APRIL'21", href: "https://drive.google.com/file/d/1fFRxOaI6fNJnb2gBq9qyeV75wUYtsPSf/view?usp=sharing" },
    ],
    "2021-22": [
      { date: "17 DECEMBER'21", href: "https://drive.google.com/file/d/1KiyfbVUQ6y9Sd5TAqvH5u0BbDDa_uNPF/view?usp=sharing" },
    ],
    "2022-23": [
      { date: "23 JANUARY'23", href: "https://docs.google.com/document/u/0/d/1vc_QzlnpcbMSa7UrbWa_B9w5yjvbYWTeWFbEGRHMUlg/mobilebasic" },
      { date: "5 APRIL'23", href: "https://docs.google.com/document/d/1u7umIL-xEBEPvajEuY9YK4FKfI51c1pzp9V1oS0tAmI/edit" },
    ],
    "2023-24": [
      { date: "29 NOVEMBER'23", href: "https://docs.google.com/document/d/1rcVadhGeAQYZqaa2Fx68LSaycSVtsez0-Qpy0BsDbnE/edit" },
      { date: "20 MARCH'24", href: "https://drive.google.com/file/d/1jokDftXRXSz7PpgJJItHzMew4g27b-Cd/view?usp=sharing" },
    ],
    "2024-25": [
      { date: "6 NOVEMBER'24", href: "https://drive.google.com/file/d/1h1FLPHYTti1Y3FBsyMAK8ByM28pI0aKa/view?usp=sharing" },
    ],
    "2025-26": [
      { date: "17 MARCH'26", href: "https://drive.google.com/file/d/1V98wjXYqYnz85-ysC310Uy6F37tLGcKn/view?usp=sharing" },
    ],
  };

  const scrollByAmount = (amount) => {
    if (!mmScrollRef.current) return;
    mmScrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };
  return (
    <div className="py-12 px-6 lg:px-20 flex flex-col">
      <div
        className="md:w-[900px] py-6 px-4 md:mx-auto shadow-lg rounded-xl"
        style={{ backgroundColor: "var(--contact-form-bg)" }}
      >
        <div className="flex justify-center mb-6">
          <div className="h-1 w-20 bg-[var(--btn-color)] rounded-full"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[var(--text-color)] relative">
          <span
            className={`relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-[var(--btn-color)]/50 after:rounded-full`}
          >
            ABOUT SAC
          </span>
        </h2>

        <p className="md:text-xl text-center mb-6 text-[var(--text-color)] max-w-3xl mx-auto">
          The SAC Constitution at IIT Delhi outlines guidelines for student
          governance, promoting accountability and transparency. It empowers
          students to participate in decisions affecting academics, residential
          life, and social experiences, ensuring their voices are heard and
          rights are upheld for a supportive campus environment.
        </p>

        {/* Constitution card with yellow button */}
        <div className="flex justify-center mb-8">
          <div className="bg-[var(--contact-form-input-bg)] px-3 py-2 rounded-xl shadow">
            <a
              href="https://docs.google.com/document/d/1zk5mOgtTPKKUOkTyEVD04JkSrCLyUBwN/export?format=pdf"
              className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-[var(--btn-color)] text-[var(--contact-btn-text)] font-semibold rounded-lg transition-colors duration-200 shadow-md hover:brightness-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read SAC Constitution"
            >
              <span className="underline">Read SAC Constitution</span>
              <DownloadCloud className="w-5 h-5" />
            </a>
          </div>
        </div>

        <ul className="space-y-4 max-w-2xl mx-auto text-[var(--text-color)] mb-6">
          <li className="flex items-start">
            <span className="mr-2 text-[var(--btn-color)] mt-1">◆</span>
            <span>
              Formulating and implementing policies related to all non-academic
              student affairs, enriching campus life for every student.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-[var(--btn-color)] mt-1">◆</span>
            <span>
              Presenting student perspectives on issues of collective concern
              through active representation in various policy and
              decision-making bodies.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-[var(--btn-color)] mt-1">◆</span>
            <span>
              Addressing students' problems effectively through the
              institutional framework, ensuring their voice is heard and valued.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-[var(--btn-color)] mt-1">◆</span>
            <span>
              Coordinating and supporting all student activities, clubs, and
              cultural events that enrich campus life and foster community.
            </span>
          </li>
        </ul>

        {/* The original Home section had a button linking to /about.
            Since we're already on the About page, we omit that CTA here. */}
      </div>
      {/* Separate Projects Card */}
      <div
        className="md:w-[900px] py-8 px-4 md:mx-auto shadow-lg rounded-xl mt-16"
        style={{ backgroundColor: "var(--contact-form-bg)" }}
      >
        <section>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-[var(--btn-color)] rounded-full"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[var(--text-color)]">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Mercury: Streamlined Messaging for Club and Society Secretaries "
              description="Effortlessly manage communication with Mercury, a chatbot designed to help secretaries of societies and clubs send messages to multiple WhatsApp groups simultaneously. Simplify updates, enhance coordination, and save time with this efficient tool developed with expertise from SAC, IIT Delhi."
              href="#"
              // ctaLabel="Explore"
            />
            <ProjectCard
              title="IITD Hospital Digitalisation & Improvement in Services "
              description="

    A survey revealed critical gaps in first aid kit availability, needing urgent restocking and standardization.
    Positive feedback on HAC recommendations highlighted enhancements in the campus healthcare experience.

"
              href="/activities"
              // ctaLabel="View Clubs"
            />
            <ProjectCard
              title="Diversity & Inclusion "
              description="Prabhjit, Jayant, Ayushya, Hansika, Aditya Raj

    Remaking the PoSH module (from IGES) into a broader questionnaire incorporating themes from Indradhanu, OAE, and ICE (all verticals of ODI).
    Mandatory training & sensitization by the Office of Diversity & Inclusion for all PoR holders in the Institute.
"
              href="#"
              // ctaLabel="View Updates"
            />
            <ProjectCard
              title=" Married Scholars Accommodation "
              description="Arush, Purushottam, Abhishek, Hansika

    Introduce and implement a fully transparent ERP-based allocation and complaint registration system.
    Get WiFi facilities and install water coolers in all A-type flats while improving apartment maintenance.
"
              href="#"
              // ctaLabel="Give Feedback"
            />
          </div>
        </section>
      </div>

      {/* Minutes of Meetings Section */}
      <div
        className="md:w-[900px] py-8 px-4 md:mx-auto shadow-lg rounded-xl mt-16"
        style={{ backgroundColor: "var(--contact-form-bg)" }}
      >
        <section>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-[var(--btn-color)] rounded-full"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[var(--text-color)]">
            Minutes of Meetings
          </h2>
          <div className="relative">
            {/* Left Button */}
            <button
              type="button"
              onClick={() => scrollByAmount(-300)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[var(--btn-color)] text-[var(--contact-btn-text)] shadow hover:brightness-110"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Scroll Container */}
            <div
              ref={mmScrollRef}
              className="overflow-x-auto no-scrollbar px-10"
            >
              <div className="flex gap-4">
                {years.map((y) => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => {
                      setSelectedYear(y);
                      setIsModalOpen(true);
                    }}
                    className="min-w-[9rem] text-center px-4 py-3 md:py-4 rounded-lg shadow bg-[var(--btn-color)] text-[var(--contact-btn-text)] hover:brightness-110 transition font-semibold"
                    aria-label={`Open minutes for ${y}`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Button */}
            <button
              type="button"
              onClick={() => scrollByAmount(300)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[var(--btn-color)] text-[var(--contact-btn-text)] shadow hover:brightness-110"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </section>
      </div>
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="mm-title"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsModalOpen(false)}
          />
          {/* Modal content */}
          <div
            className="relative z-10 w-11/12 max-w-4xl rounded-xl shadow-lg p-6"
            style={{ backgroundColor: "var(--contact-form-bg)" }}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 p-1 rounded-full hover:brightness-110"
              style={{ backgroundColor: "var(--contact-form-input-bg)" }}
            >
              <X className="w-5 h-5 text-[var(--text-color)]" />
            </button>
            <h3
              id="mm-title"
              className="text-xl md:text-2xl font-bold text-center mb-6 text-[var(--text-color)]"
            >
              Minutes of Meetings — {selectedYear}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(meetingData[selectedYear] || []).map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-lg shadow p-5 text-center"
                  style={{ backgroundColor: "var(--btn-color)" }}
                >
                  <div className="font-extrabold tracking-wide text-[var(--contact-btn-text)]">
                    {m.date.toUpperCase()}
                  </div>
                  <a
                    href={m.href}
                    className="mt-3 inline-block underline"
                    style={{ color: "var(--btn-confirmation)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See Details
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
