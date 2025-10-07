import React from "react";
import { DownloadCloud } from "lucide-react";
import ProjectCard from "../components/ui/ProjectCard";

function About() {
  return (
    <div className="py-12 px-6 lg:px-20 flex flex-col">
      <div
        className="md:w-[900px] py-6 px-4 md:mx-auto shadow-lg rounded-xl"
        style={{ backgroundColor: "var(--home-about-bg)" }}
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
          <div className="bg-[var(--card-bg)]/60 backdrop-blur px-3 py-2 rounded-xl shadow">
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
        style={{ backgroundColor: "var(--home-about-bg)" }}
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
    </div>
  );
}

export default About;
