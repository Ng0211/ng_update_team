import React from "react";

function Events() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-[var(--text-color)]">Events</h1>
      <p className="mb-4 text-[var(--text-color)]">
        IIT Delhi hosts various events throughout the academic year. Here are
        some of our flagship events:
      </p>

      <div className="event-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-[var(--card-bg)] rounded p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-[var(--text-color)]">
            Annual Cultural Festival
          </h2>
          <p className="text-[var(--text-color)]">
            A three-day extravaganza showcasing talent in music, dance, drama,
            and more.
          </p>
          <p className="text-[var(--primary)] mt-2">November 2025</p>
        </div>

        <div className="bg-[var(--card-bg)] rounded p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-[var(--text-color)]">Technical Summit</h2>
          <p className="text-[var(--text-color)]">
            A platform for students to showcase their technical skills and
            innovations.
          </p>
          <p className="text-[var(--primary)] mt-2">September 2025</p>
        </div>

        <div className="bg-[var(--card-bg)] rounded p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-[var(--text-color)]">Sports Meet</h2>
          <p className="text-[var(--text-color)]">
            Annual inter-hostel sports competition fostering sportsmanship and
            teamwork.
          </p>
          <p className="text-[var(--primary)] mt-2">October 2025</p>
        </div>
      </div>
    </div>
  );
}

export default Events;
