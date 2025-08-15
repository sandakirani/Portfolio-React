import "./Certificates.css";

export default function Certificates() {
  const certificates = [
    {
      image: "/certificates/C.E.O 2.0.jpg",
      title:
        "C.E.O 2.0 All Island Case Study Competition - Certificate of Participation",
      Issued: "Issued by: AIESEC in University of Kelaniya",
      Date: "Date: July 23, 2023",
      description:
        "Participated in the national-level C.E.O 2.0 case study competition, organized in collaboration with AIESEC in Informatics Institute of Technology and Uva Wellassa University. Engaged in strategic problem-solving and teamwork with Team GPA 5.0.",
    },
    {
      image: "/certificates/introduction in Csharp.jpg",
      title: "Introduction to C#",
      Issued: "Issued by: Sololearn",
      Date: "Date: July 02, 2024",
      description:
        "Achieved certification in C#, exploring variables, loops, methods, and object-oriented programming fundamentals. Strengthened programming foundation for desktop and mobile development.",
    },
    {
      image: "/certificates/introduction in HTML.jpg",
      title: "Introduction to HTML",
      Issued: "Issued by: Sololearn",
      Date: "Date: July 10, 2024",
      description:
        "Successfully completed a structured course covering HTML basics, elements, forms, and best practices for building static web pages.",
    },
    {
      image: "/certificates/introduction in css.jpg",
      title: "Introduction to CSS",
      Issued: "Issued by: Sololearn",
      Date: "Date: July 14, 2024",
      description:
        "Completed a beginner-friendly course on CSS, gaining hands-on experience in styling modern web pages and improving the aesthetics of front-end applications.",
    },
    {
      image: "/certificates/introduction in C.jpg",
      title: "Introduction to C",
      Issued: "Issued by: Sololearn",
      Date: "Date: July 15, 2024",
      description:
        "Completed the beginner-level course on C programming, covering essential topics such as variables, data types, control structures, loops, functions, and arrays. This course laid the foundation for understanding structured programming and low-level memory manipulation in C.",
    },
    {
      image: "/certificates/ICAPS.jpg",
      title: "Smart Panel Light Transformer - Innovation Showcase",
      Issued:
        "Presented at: 5th International Conference on Applied and Pure Sciences (ICAPS 2024) - Undergraduate Symposium, University of Kelaniya",
      description:
        "Contributed to a sustainable IoT innovation that transforms traditional panel lights into smart systems without full replacements. Demonstrated cost-effective retrofitting, mobile control, energy efficiency, and voice assistant integration.",
    },
    {
      image: "/certificates/introduction in cyber.jpg",
      title: "Introduction to Cyber Security",
      Issued: "Issued by: Simplilearn",
      Date: "Date: August 05, 2025",
      description:
        "Completed the foundational course in Cyber Security, covering key areas such as digital threats, risk mitigation, and data protection. This marks the first step into the world of securing digital systems and networks.",
      link: "https://simpli-web.app.link/e/WoskoQO2QVb",
    },
  ];

  return (
    <div className="certificates-contain">
      <p className="certificates-heading">Certificates</p>
      <p className="certificates-subheading">CERTIFICATES</p>

      <div className="certificate-list">
        {certificates.map((cert, index) => (
          <div
            className={`certificate-item ${index % 2 === 0 ? "left-image" : "right-image"}`}
            key={index}
          >
            <div className="certificate-image-container">
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certificate-image"
                />
              </a>
            </div>
            <div className="certificate-text">
              <p className="certificate-title">{cert.title}</p>
              <p className="certificate-issue">{cert.Issued}</p>
              {cert.Date && <p className="certificate-issue">{cert.Date}</p>}
              <p className="certificate-description">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
