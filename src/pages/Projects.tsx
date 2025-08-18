import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      video: "/projects/Csharp.mp4",
      title: "Desktop App | C# + MSSQL ( Mobile Shop Management System )",
      description: `A fully functional system designed to streamline mobile shop operations
      such as inventory control, sales tracking, customer management, and
      report generation. This project enhanced my skills in full-stack
      development, database integration, and user interface design.`,
      github: "https://github.com/sandakirani/mobile-shop-management-system",
    },
    {
      video: "/projects/coffeeshop.mp4",
      title:
        "Android App | Kotlin + SQLite ( Coffee Shop System | Cafe Bloom )",
      description: `As part of a 7-member team, I helped develop a fully functional
            Android app using Kotlin and SQLite. The app features a clean UI,
            smooth performance on low-end devices, and efficient local data
            storage. This project strengthened my skills in mobile development,
            team collaboration, version control, and debugging in real-world
            scenarios.`,
      github: "https://github.com/sandakirani/CafeBloom",
    },
    {
      video: "/projects/fullstack.mp4",
      title:
        "Website | React + Springboot + MongoDB ( Mobile Phone Management System | Cellular world )",
      description: `A full-stack web application that allows users to explore, filter,
            and purchase mobile phones online. Built with React, Spring Boot,
            and MongoDB, the system features secure JWT-based authentication and
            a responsive UI. Developed as a team project, it reflects strong
            collaboration and real-world development practices.`,
      github: "https://github.com/sandakirani/Cellular-world",
    },
    {
      video: "/projects/pitchMeter.mp4",
      title: "Mobile App | Pitch Meter UI (React Native + Expo)",
      description: `A React Native mobile application built with Expo that provides a simple 
        and intuitive interface for pitch-based audio analysis. The app allows users 
        to select a mode, choose a singer and song, set the desired pitch, and 
        start live recording with a single tap. Designed with a clean and responsive 
        UI to ensure smooth user interaction.`,
      github: "https://github.com/sandakirani/PitchMeter-Mobile-Frontend.git",
    },
  ];

  return (
<section className="projects-contain" id="projects">

      <p className="projects-heading">Projects</p>
      <p className="projects-subheading">PROJECTS</p>

      <div className="project-grid">
        {projects.map((proj, index) => (
          <div className="project-item" key={index}>
            <video controls>
              <source src={proj.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-btn"
            >
              View on GitHub
            </a>
            <p className="project-title">{proj.title}</p>
            <p className="project-description">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
