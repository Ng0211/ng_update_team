import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-[var(--text-color)]">Contact Us</h1>
      <p className="mb-4 text-[var(--text-color)]">
        Have questions or suggestions? Get in touch with the Student Affairs Council.
      </p>
      
      <div className="bg-[var(--card-bg)] p-4 rounded mb-4 shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-[var(--text-color)]">Contact Information</h2>
        <p className="text-[var(--text-color)]"><strong>Email:</strong> sac@iitd.ac.in</p>
        <p className="text-[var(--text-color)]"><strong>Phone:</strong> +91-11-2659-xxxx</p>
        <p className="text-[var(--text-color)]"><strong>Address:</strong> Student Affairs Council, IIT Delhi, Hauz Khas, New Delhi - 110016</p>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-[var(--text-color)]">Send us a message</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-[var(--text-color)]">Name</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded bg-[var(--bg-color)] text-[var(--text-color)]" 
              placeholder="Your Name" 
            />
          </div>
          <div>
            <label className="block mb-1 text-[var(--text-color)]">Email</label>
            <input 
              type="email" 
              className="w-full p-2 border rounded bg-[var(--bg-color)] text-[var(--text-color)]" 
              placeholder="Your Email" 
            />
          </div>
          <div>
            <label className="block mb-1 text-[var(--text-color)]">Message</label>
            <textarea 
              className="w-full p-2 border rounded h-32 bg-[var(--bg-color)] text-[var(--text-color)]" 
              placeholder="Your Message"
            ></textarea>
          </div>
          <button type="submit" className="bg-[var(--primary)] text-[var(--bg-color)] px-4 py-2 rounded hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
