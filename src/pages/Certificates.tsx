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
      title: "Introduction to C#",
      Issued: "Issued by: Sololearn",
      Date: "Date: July 02, 2024",
      description:
        "Achieved certification in C#, exploring variables, loops, methods, and object-oriented programming fundamentals. Strengthened programming foundation for desktop and mobile development.",
      link: "https://www.linkedin.com/posts/vihangi-sandakirani_sololearn-activity-7213798843258146816-I9g5",
    },
    {
      title: "Introduction to HTML",
      Issued: "Issued by: Sololearn",
      Date: "Date: July 10, 2024",
      description:
        "Successfully completed a structured course covering HTML basics, elements, forms, and best practices for building static web pages.",
      link: "https://www.linkedin.com/posts/vihangi-sandakirani_sololearn-activity-7216763148320530432-Odo8",
    },
    {
      title: "Introduction to CSS",
      Issued: "Issued by: Sololearn",
      Date: "Date: July 14, 2024",
      description:
        "Completed a beginner-friendly course on CSS, gaining hands-on experience in styling modern web pages and improving the aesthetics of front-end applications.",
      link: "https://www.linkedin.com/posts/vihangi-sandakirani_sololearn-activity-7218106748224634881-n0yD",
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
      Issued: "5th International Conference on Applied and Pure Sciences (ICAPS 2024)",
      Date: "Undergraduate Symposium, University of Kelaniya",
      description:
        "Contributed to a sustainable IoT innovation that transforms traditional panel lights into smart systems without full replacements. Demonstrated cost-effective retrofitting, mobile control, energy efficiency, and voice assistant integration.",
      link: "https://www.linkedin.com/posts/vihangi-sandakirani_icaps2024-smarthome-iot-activity-7341350939166916608-UZDS",
    },
    {
      title: "Introduction to Cyber Security",
      Issued: "Issued by: Simplilearn",
      Date: "Date: August 05, 2025",
      description:
        "Completed the foundational course in Cyber Security, covering key areas such as digital threats, risk mitigation, and data protection. This marks the first step into the world of securing digital systems and networks.",
      link: "https://simpli-web.app.link/e/WoskoQO2QVb",
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
            className="certificate-card bg-[#111] p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg flex flex-col justify-between hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300 w-full max-w-[400px] mx-auto"
          >
            <div className="certificate-text">
              <p className="certificate-title text-white font-bold text-lg sm:text-xl mb-2">
                {cert.title}
              </p>
              <p className="certificate-issue text-[#bbb] text-sm mb-1">{cert.Issued}</p>
              {cert.Date && <p className="certificate-issue text-[#bbb] text-sm mb-1">{cert.Date}</p>}
              <p className="certificate-description text-[#ddd] text-sm sm:text-base mt-2 leading-relaxed">
                {cert.description}
              </p>
            </div>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-teal-500 text-[18px] mt-4 gap-2 hover:text-green-200 hover:scale-110 transition"
                title="View Certificate"
              >
                <FaCertificate className="certificate-icon" />
                <span className="text-sm sm:text-base">View Certificate</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
