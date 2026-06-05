import React from "react";
import { Mail, Phone, Linkedin, Instagram, FileText } from "lucide-react";

export default function TeamCard({
  name,
  role,
  image,
  email,
  phone,
  linkedin,
  instagram,
  sop,
  percentageOffset = "10%",
}) {
  return (
    <div className="bg-[var(--card-bg)] rounded-lg text-center transition-all hover:shadow-lg/30 hover:brightness-110 hover:z-20 relative overflow-hidden flex flex-col items-center gap-y-2 w-full max-w-[16rem] md:max-w-[18rem]">
      <img
        src={image}
        alt={name}
        className="w-full h-52 sm:h-56 object-cover"
        style={{
          objectPosition: "center " + percentageOffset,
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 80%, transparent 100%)",
        }}
      />
      <div className="flex flex-col items-center px-4 py-2 w-full -mt-5 relative z-50">
        <h2 className="mt-3 text-base sm:text-lg font-semibold text-[var(--teams-text-hover)]">
          {name}
        </h2>
        <p className="text-[var(--text-color-sub)] text-xs sm:text-sm ">
          {role}
        </p>
        <div className="flex justify-center space-x-4 mt-3 text-[var(--text-color-sub)]">
          {phone && (
            <a
              href={`tel:${phone}`}
              className="hover:text-[var(--teams-text-hover)]"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--teams-text-hover)]"
            >
              <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--teams-text-hover)]"
            >
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="hover:text-[var(--teams-text-hover)]"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          )}
          {sop && (
            <a
              href={sop}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--teams-text-hover)]"
              title="View SOP"
            >
              <FileText className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}


// import React from "react";
// import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
// export default function TeamCard({
//   name,
//   role,
//   image,
//   email,
//   phone,
//   linkedin,
//   instagram,
//   percentageOffset = "10%",
// }) {
//   return (
//     <div className="bg-[var(--card-bg)] rounded-lg text-center transition-all hover:shadow-lg/30 hover:brightness-110 hover:z-20 relative overflow-hidden flex flex-col items-center gap-y-2 w-full max-w-[16rem] md:max-w-[18rem]">
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-52 sm:h-56 object-cover"
//         style={{
//           objectPosition: "center " + percentageOffset,
//           maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
//           WebkitMaskImage:
//             "linear-gradient(to bottom, black 80%, transparent 100%)",
//         }}
//       />
//       <div className="flex flex-col items-center px-4 py-2 w-full -mt-5 relative z-20">
//         <h2 className="mt-3 text-base sm:text-lg font-semibold text-[var(--teams-text-hover)]">
//           {name}
//         </h2>
//         <p className="text-[var(--text-color-sub)] text-xs sm:text-sm ">
//           {role}
//         </p>
//         <div className="flex justify-center space-x-4 mt-3 text-[var(--text-color-sub)]">
//           {phone && (
//             <a
//               href={`tel:${phone}`}
//               className="hover:text-[var(--teams-text-hover)]"
//             >
//               <Phone className="w-4 h-4 md:w-5 md:h-5" />
//             </a>
//           )}
//           {linkedin && (
//             <a
//               href={linkedin}
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-[var(--teams-text-hover)]"
//             >
//               <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
//             </a>
//           )}
//           {instagram && (
//             <a
//               href={instagram}
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-[var(--teams-text-hover)]"
//             >
//               <Instagram className="w-4 h-4 md:w-5 md:h-5" />
//             </a>
//           )}
//           {email && (
//             <a
//               href={`mailto:${email}`}
//               className="hover:text-[var(--teams-text-hover)]"
//             >
//               <Mail className="w-4 h-4 md:w-5 md:h-5" />
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
