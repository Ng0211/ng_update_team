import React from "react";

function Footer() {
  return (
    <footer className="bg-[var(--card-bg)] text-[var(--text-color)] p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>
          © {new Date().getFullYear()} Student Affairs Council, IIT Delhi. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
