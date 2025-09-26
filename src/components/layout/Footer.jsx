import { Instagram, Linkedin, Globe, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import sacLogo from "../../assets/home/sac_logo.png";

export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)] py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Logo Section */}
        <div className="space-y-4">
          <img src={sacLogo} alt="SAC Logo" className="w-32" />
          <button className="bg-[var(--btn-color)] text-[var(--btn-text-color)] px-4 py-2 rounded-md font-semibold hover:brightness-110 transition">
            <Link to="/contact">Get in Touch</Link>
          </button>
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} />
            <a
              href="https://maps.app.goo.gl/z4Zdz4jqDHQhzELN7"
              target="_blank"
              rel="noopener noreferrer"
            >
              IIT Delhi, Hauz Khas
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail size={16} />
            <a href="mailto:sacgsec@admin.iitd.ac.in" className="underline">
              SAC General Secretary
            </a>
            {/* <a href="/team/gs" className="text-yellow-400 hover:underline">
              (Profile)
            </a> */}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail size={16} />
            <a href="mailto:dgssac@admin.iitd.ac.in" className="underline">
              SAC Deputy General Secretary
            </a>
            {/* <a href="/team/dgs" className="text-yellow-400 hover:underline">
              (Profile)
            </a> */}
          </div>
        </div>

        {/* Constituent Bodies */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Constituent Bodies of SAC
          </h3>
          <ul className="space-y-2">
            {[
              {
                name: "BHM",
                url: "https://bhm.iitd.ac.in",
                instagram: "https://www.instagram.com/bhmiitd/?hl=en",
                linkedin:
                  "https://www.linkedin.com/company/board-for-hostel-management/",
                web: "https://bhm.iitd.ac.in",
              },
              {
                name: "BRCA",
                url: "https://brca.iitd.ac.in",
                instagram: "https://www.instagram.com/brcaiitd/",
                linkedin:
                  "https://www.linkedin.com/company/board-for-recreational-and-creative-activities/",
                web: "https://brca.iitd.ac.in",
              },
              {
                name: "BSA",
                url: "https://bsa.iitd.ac.in",
                instagram: "https://www.instagram.com/bsa.iitd/?hl=en",
                linkedin: "https://www.linkedin.com/company/bsaiitd/",
                web: "https://bsa.iitd.ac.in/",
              },
              {
                name: "BSP",
                url: "https://bsp.iitd.ac.in",
                instagram: "https://www.instagram.com/bsp.iitdelhi/",
                linkedin:
                  "https://www.linkedin.com/company/board-for-student-publications/",
                web: "https://bsp.iitd.ac.in",
              },
              {
                name: "BSW",
                url: "https://bsw.iitd.ac.in",
                instagram: "https://www.instagram.com/bsw_iitd/?hl=en",
                linkedin:
                  "https://www.linkedin.com/company/bsw-iitd/posts/?feedView=all",
                web: "https://bsw.iitd.ac.in/",
              },
              // {
              //   name: "Associated Clubs",
              //   url: "/clubs",
              //   instagram: "https://www.instagram.com/sac.iitd/",
              //   linkedin: "https://www.linkedin.com/company/sac-iit-delhi/",
              //   web: "/clubs",
              // },
            ].map((body) => (
              <li key={body.name} className="flex items-center justify-between">
                <a href={body.url} className="hover:underline">
                  {body.name}
                </a>
                <div className="flex gap-2">
                  <a
                    href={body.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram
                      size={16}
                      className="text-[var(--text-color)] hover:text-[var(--primary)]"
                    />
                  </a>
                  <a
                    href={body.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin
                      size={16}
                      className="text-[var(--text-color)] hover:text-[var(--primary)]"
                    />
                  </a>
                  <a href={body.web} target="_blank" rel="noopener noreferrer">
                    <Globe
                      size={16}
                      className="text-[var(--text-color)] hover:text-[var(--primary)]"
                    />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://csc.iitd.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                CSC - Computer Services Center
              </a>
            </li>
            <li>
              <a
                href="https://ocs.iitd.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                OCS - Office of Career Services
              </a>
            </li>
            <li>
              <a
                href="https://library.iitd.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Library
              </a>
            </li>
            <li>
              <a
                href="https://hospital.iitd.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Healthcare
              </a>
            </li>
            <li>
              <a
                href="https://iitd.ac.in/scs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Counselling
              </a>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://academics.iitd.ac.in/ecertification"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                eCertification
              </a>
            </li>
            <li>
              <a
                href="https://www.iitd.ac.in/newsletter"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Subscribe to IITD Notices
              </a>
            </li>
            <li>
              <a
                href="https://forms.iitd.ac.in/roombooking"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Room Booking
              </a>
            </li>
            <li>
              <a
                href="https://www.iitd.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                IIT Delhi Website
              </a>
            </li>
            <li>
              <a
                href="https://sac.iitd.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                SAC Main Website
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
