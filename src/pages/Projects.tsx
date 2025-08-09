import { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const projects = [
    {
      video: "/projects/Csharp.mp4",
      title: "Desktop App | C# + MSSQL ( Mobile Shop Management System )",
      description: `A fully functional system designed to streamline mobile shop operations
      such as inventory control, sales tracking, customer management, and
      report generation. This project enhanced my skills in full-stack
      development, database integration, and user interface design.`,
      github:
        "https://github.com/sandakirani/mobile-shop-management-system.git",
    },
  ];
  return (
    <div className="projects-contain">
      <p className="projects-heading">Projects</p>
      <p className="projects-subheading">PROJECTS</p>

      <div className="project-grid">
        {projects.map((proj, index) => (
          <div className="project-item" key={index}>
            {playingIndex === index ? (
              <video autoPlay controls>
                <source src={proj.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div
                className="video-thumbnail"
                onClick={() => setPlayingIndex(index)}
              >
                <video
                  src={proj.video}
                  muted
                  preload="metadata"
                  onLoadedMetadata={(e) => {
                    e.currentTarget.currentTime = 0; // show first frame
                  }}
                />
                <div className="play-button">&#9658;</div>
              </div>
            )}
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-btn"
            >View on GitHub</a>
            <p className="project-description">{proj.title}</p>
            <p className="project-description">{proj.description}</p>
          </div>
        ))}

        <div className="project-item">
          <video controls>
            <source src="/projects/Csharp.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="project-description">Blender</p>
          <p className="project-description">
            A 3D animation project created using Blender for my Computer
            Graphics course. This project pushed my creativity and technical
            skills, offering hands-on experience with real-world workflows,
            teamwork, and full system development. A milestone in my journey
            into the world of 3D design.
          </p>
        </div>

        <div className="project-item">
          <video controls>
            <source src="/projects/coffeeshop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="project-description">
            Android App | Kotlin + SQLite ( Coffee Shop System | Cafe Bloom )
          </p>
          <p className="project-description">
            As part of a 7-member team, I helped develop a fully functional
            Android app using Kotlin and SQLite. The app features a clean UI,
            smooth performance on low-end devices, and efficient local data
            storage. This project strengthened my skills in mobile development,
            team collaboration, version control, and debugging in real-world
            scenarios.
          </p>
        </div>

        <div className="project-item">
          <video controls>
            <source src="/projects/fullstack.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="project-description">
            Website | React + Springboot + MongoDB ( Mobile Phone Management
            System | Cellular world )
          </p>
          <p className="project-description">
            A full-stack web application that allows users to explore, filter,
            and purchase mobile phones online. Built with React, Spring Boot,
            and MongoDB, the system features secure JWT-based authentication and
            a responsive UI. Developed as a team project, it reflects strong
            collaboration and real-world development practices.
          </p>
        </div>
      </div>
    </div>
  );
}
