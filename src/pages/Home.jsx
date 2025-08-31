import React from "react";

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-[var(--text-color)]">
        Welcome to Student Affairs Council, IIT Delhi
      </h1>
      <p className="mb-4 text-[var(--text-color)]">
        The Student Affairs Council (SAC) at IIT Delhi is responsible for
        managing and coordinating all student activities, clubs, and events
        within the campus.
      </p>
      <div className="bg-[var(--card-bg)] p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-[var(--text-color)]">
          Upcoming Events
        </h2>
        <ul className="list-disc pl-5 text-[var(--text-color)]">
          <li>Annual Cultural Festival - November 2025</li>
          <li>Technical Summit - September 2025</li>
          <li>Sports Meet - October 2025</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
