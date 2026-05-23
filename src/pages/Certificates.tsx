import { useEffect } from "react";
import AOS from "aos";
import { FaCertificate } from "react-icons/fa";
import "aos/dist/aos.css";

export default function Certificates() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const certificates = [
    {
      title: "🏆 SDG SPRINTS Challenge - Winners (BIN MATRIX)",
      Issued: "Issued by: IEEE Sri Lanka Section SIGHT",
      Date: "Date: February 2026",
      description:
        "Team V.STAY secured the top spot with our project BIN MATRIX - a smart waste management system ensuring 'Clean Cities' never come at the cost of unsafe hands. The solution integrates AI and IoT for sustainable waste management, contributing to SDG 11 (Sustainable Cities), SDG 8 (Decent Work), SDG 3 (Good Health), and SDG 12 (Responsible Consumption).",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7423921184578400257/",
    },
    {
      title:
        "C.E.O 2.0 All Island Case Study Competition - Certificate of Participation",
      Issued: "Issued by: AIESEC in University of Kelaniya",
      Date: "Date: July 23, 2023",
      description:
        "Participated in the national-level C.E.O 2.0 case study competition, organized in collaboration with AIESEC. Engaged in strategic problem-solving and teamwork with Team GPA 5.0.",
      link: "https://www.linkedin.com/posts/vihangi-sandakirani_celebrating-my-new-certification-activity-7096329010384683009-5vbK",
    },
    {
      title: "Smart Panel Light Transformer - Innovation Showcase",
      Issued:
        "5th International Conference on Applied and Pure Sciences (ICAPS 2024)",
      Date: "Undergraduate Symposium, University of Kelaniya",
      description:
        "Contributed to a sustainable IoT innovation that transforms traditional panel lights into smart systems without full replacements. Demonstrated cost-effective retrofitting, mobile control, energy efficiency, and voice assistant integration.",
      link: "https://www.linkedin.com/posts/vihangi-sandakirani_icaps2024-smarthome-iot-activity-7341350939166916608-UZDS",
    },
  ];

  return (
    <section
      className="pt-20 sm:pt-28 pb-16 px-4 sm:px-10 md:px-20 bg-black text-white flex flex-col items-center"
      id="certificates"
    >
      {/* Section Heading */}
      <p className="font-bold font-['Playfair_Display'] text-[clamp(2rem,5vw,6rem)] mt-8 sm:mt-12">
        Certificates
      </p>
      <p className="font-bold text-[#1f1e1e] mt-2 -mb-5 text-[clamp(2rem,6vw,7rem)]">
        CERTIFICATES
      </p>

      {/* Grid */}
      <div
        className="certificate-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16"
        data-aos="fade-up"
      >
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="certificate-card bg-gradient-to-br from-[#111] to-[#1a1a1a] p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg flex flex-col justify-between hover:-translate-y-2 hover:shadow-teal-500/10 transition-all duration-300 w-full max-w-[400px] mx-auto border border-white/5 hover:border-teal-500/30 group"
          >
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
            
            <div className="certificate-text relative">
              {/* Title with icon decoration */}
              <div className="flex items-start gap-2 mb-3">
                <div className="w-1 h-6 bg-teal-500/30 rounded-full mt-1 group-hover:h-8 transition-all duration-300"></div>
                <p className="certificate-title text-white font-bold text-lg sm:text-xl leading-tight">
                  {cert.title}
                </p>
              </div>
              
              {/* Issuer with subtle icon */}
              <div className="ml-3 pl-1 border-l-2 border-teal-500/20 mb-2">
                <p className="certificate-issue text-teal-300/80 text-sm mb-1 font-medium">
                  {cert.Issued}
                </p>
                {cert.Date && (
                  <p className="certificate-date text-gray-400 text-xs mb-1">
                    📅 {cert.Date}
                  </p>
                )}
              </div>
              
              {/* Description with improved spacing */}
              <p className="certificate-description text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
                {cert.description}
              </p>
            </div>
            
            {/* Link with improved styling */}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-start text-teal-400 text-[18px] mt-6 gap-2 hover:text-teal-300 transition-all duration-300 group/link w-max"
                title="View Certificate"
              >
                <div className="relative">
                  <FaCertificate className="certificate-icon text-xl group-hover/link:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-teal-400/20 blur-md opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
                <span className="text-sm sm:text-base relative">
                  View Certificate
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover/link:w-full transition-all duration-300"></span>
                </span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}