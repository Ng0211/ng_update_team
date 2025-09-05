import React from 'react';
import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
    const [loading, setLoading] = useState(false);
    const [confirmed, setConfirmed] = useState(false);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending
    setTimeout(() => {
      setLoading(false);
      // handle success here


      setConfirmed(true);
      setInterval(() => {
        setConfirmed(false);}, 1000);
    }, 2000);
      

  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-[var(--text-color)] flex justify-center mt-8">Contact Us</h1>
      <p className="mb-2 text-[var(--text-color)] flex justify-center">
        Have questions or suggestions? Get in touch with the Student Affairs Council.
      </p>
    <div className="flex items-center justify-center bg-[var(--bg-color)] text-[var(--text-color)] p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/40 rounded-xl shadow-2xl p-8 w-full max-w-lg mt-8"
      >
        <h2 className="text-3xl font-bold mb-8 text-left">Contact Us</h2>
        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-4 py-2 rounded-md border outline-blue-400 bg-white/60 text-[var(--text-color)]"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 rounded-md border bg-white/60 text-[var(--text-color)]"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="w-full px-4 py-2 rounded-md border bg-white/60 text-[var(--text-color)]"
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 rounded-md border bg-white/60 min-h-[120px] text-[var(--text-color)]"
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
  type="submit"
  className={`w-full font-semibold py-3 rounded-md transition-colors flex items-center justify-center
    ${confirmed ? "bg-lime-600 text-white" : "bg-yellow-400 hover:bg-yellow-500 text-black"}
  `}
  disabled={loading || confirmed}
>
  {loading ? (
    <>
      <svg className="animate-spin h-5 w-5 mr-2 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
      </svg>
      Sending...
    </>
  ) : confirmed ? (
    "Message Sent!"
  ) : (
    "Send Message"
  )}
</button>
      </form>
    </div>
    <div className="flex justify-center mt-16"><div className="bg-[var(--card-bg)] p-4 rounded mb-4 shadow-md flex-row justify-center text-white text-center px-8 md:px-48 ">
        <h2 className="text-xl font-semibold mb-2 ">Contact Information</h2>
        <p className=""><strong>Email:</strong> sac@iitd.ac.in</p>
        <p className=""><strong>Phone:</strong> +91-11-2659-xxxx</p>
        <p className=""><strong>Address:</strong> Student Affairs Council, IIT Delhi, Hauz Khas, New Delhi - 110016</p>
      </div></div>
    
    </div>
  );
}

export default Contact;
