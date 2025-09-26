import React from "react";

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
          The Student Affairs Council is the apex student body of IIT Delhi,
          representing the entire student community and championing their
          interests. SAC is responsible for:
        </p>

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
    </div>
  );
}

export default About;
