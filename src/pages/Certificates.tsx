import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Certificates.css";

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
      link: "https://www.linkedin.com/posts/vihangi-sandakirani_sololearn-activity-7213798843258146816-I9g5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvXYMkB57HmQhefMC2-tLEEPej6tEDn7Xw",
    },
    {
      title: "Introduction to HTML",
      Issued: "Issued by: Sololearn",
      Date: "Date: July 10, 2024",
      description:
        "Successfully completed a structured course covering HTML basics, elements, forms, and best practices for building static web pages.",
      link: "https://www.linkedin.com/posts/vihangi-sandakirani_sololearn-activity-7216763148320530432-Odo8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvXYMkB57HmQhefMC2-tLEEPej6tEDn7Xw",
    },
    {
      title: "Introduction to CSS",
      Issued: "Issued by: Sololearn",
      Date: "Date: July 14, 2024",
      description:
        "Completed a beginner-friendly course on CSS, gaining hands-on experience in styling modern web pages and improving the aesthetics of front-end applications.",
      link: "https://www.linkedin.com/posts/vihangi-sandakirani_sololearn-activity-7218106748224634881-n0yD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvXYMkB57HmQhefMC2-tLEEPej6tEDn7Xw",
    },
    {
      title:
        "C.E.O 2.0 All Island Case Study Competition - Certificate of Participation",
      Issued: "Issued by: AIESEC in University of Kelaniya",
      Date: "Date: July 23, 2023",
      description:
        "Participated in the national-level C.E.O 2.0 case study competition, organized in collaboration with AIESEC in Informatics Institute of Technology and Uva Wellassa University. Engaged in strategic problem-solving and teamwork with Team GPA 5.0.",
      link: "https://www.linkedin.com/posts/vihangi-sandakirani_celebrating-my-new-certification-activity-7096329010384683009-5vbK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvXYMkB57HmQhefMC2-tLEEPej6tEDn7Xw", // replace with your linkedin link
    },
    {
      title: "Smart Panel Light Transformer - Innovation Showcase",
      Issued:
        "5th International Conference on Applied and Pure Sciences (ICAPS 2024)",
      Date: "Undergraduate Symposium, University of Kelaniya",
      description:
        "Contributed to a sustainable IoT innovation that transforms traditional panel lights into smart systems without full replacements. Demonstrated cost-effective retrofitting, mobile control, energy efficiency, and voice assistant integration.",
      link: "https://www.linkedin.com/posts/vihangi-sandakirani_icaps2024-smarthome-iot-activity-7341350939166916608-UZDS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvXYMkB57HmQhefMC2-tLEEPej6tEDn7Xw",
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
    <section className="certificates-contain" id="certificates">
      <p className="certificates-heading">Certificates</p>
      <p className="certificates-subheading">CERTIFICATES</p>

      <div className="certificate-grid" data-aos="fade-up">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <div className="certificate-text">
              <p className="certificate-title">{cert.title}</p>
              <p className="certificate-issue">{cert.Issued}</p>
              {cert.Date && <p className="certificate-issue">{cert.Date}</p>}
              <p className="certificate-description">{cert.description}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-btn"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
