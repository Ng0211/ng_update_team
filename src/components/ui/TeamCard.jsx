import React from "react";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
export default function TeamCard({ name, role, image, email, phone, linkedin, instagram, percentageOffset = "10%" }) {
  return (
    <div className="bg-[var(--card-bg)] rounded-lg text-center transition-all hover:shadow-lg/50 hover:brightness-110 hover:z-10 relative overflow-hidden flex flex-col items-center gap-y-2 w-60  md:w-72 lg:w-82 h-[360px]">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover"
        style={{
          objectPosition: "center " + percentageOffset,
          maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)"
        }}
      />
      <div className="flex flex-col items-center px-4 py-2 w-full">
        <h2 className="mt-3 text-lg font-semibold text-[var(--teams-text-hover)]">{name}</h2>
        <p className="text-[var(--text-color-sub)] text-sm ">{role}</p>
        <div className="flex justify-center space-x-4 mt-3 text-[var(--text-color-sub)]">
          {phone && (
            <a href={`tel:${phone}`} className="hover:text-[var(--teams-text-hover)]">
              <Phone size={18} />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--teams-text-hover)]">
              <Linkedin size={18} />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noreferrer" className="hover:text-[var(--teams-text-hover)]">
              <Instagram size={18} />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="hover:text-[var(--teams-text-hover)]">
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}