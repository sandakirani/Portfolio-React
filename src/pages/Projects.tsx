import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      image: "/projects/mobileshop.jpg",
      title: "Mobile Shop Management System",
      techStack: ["Desktop App (.NET, C#)"],
      extraStack: ["Visual Studio | ", "C# | ", "MySQL"],
      github: "https://github.com/sandakirani/mobile-shop-management-system",
    },
    {
      image: "/projects/coffee.jpeg",
      title: "Coffee Shop System (Cafe Bloom)",
      techStack: ["Android App"],
      extraStack: ["Android Studio | ", "Kotlin | ", "SQLite"],
      github: "https://github.com/sandakirani/CafeBloom",
    },
    {
      image: "/projects/Celluler.jpg",
      title: "Mobile Phone Management System (Cellular world)",
      techStack: ["Website"],
      extraStack: [
        "Visual Studio Code | ",
        "Node.js | ",
        "React(TypeScript) | ",
        "SpringBoot | ",
        "JWT | ",
        "MongoDB",
      ],
      github: "https://github.com/sandakirani/Cellular-world",
    },
    {
      image: "/projects/pitch.png",
      title: "Pitch Meter UI",
      techStack: ["Mobile App"],
      extraStack: ["Visual Studio Code | ", "React Native | ", "Expo"],
      github: "https://github.com/sandakirani/PitchMeter-Mobile-Frontend.git",
    },
  ];

  return (
    <section
      className="pt-20 pb-16 px-4 sm:px-8 md:px-16 lg:px-20 bg-black text-white flex flex-col items-center"
      id="projects"
    >
      <p className="font-bold font-['Playfair_Display'] text-[clamp(2rem,5vw,80px)] mt-[clamp(50px,5vw,100px)] text-center">
        Projects
      </p>
      <p className="font-bold text-[#1f1e1e] mt-[clamp(10px,3vw,10px)] -mb-5 text-[clamp(2.5rem,6vw,100px)] text-center">
        PROJECTS
      </p>

      <div
        className="project-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-6 mt-[clamp(80px,10vw,150px)] w-full max-w-screen-xl"
        data-aos="fade-up"
      >
        {projects.map((proj, index) => (
          <div
            key={index}
            className="project-item bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-6 lg:p-8 rounded-2xl transition-transform hover:-translate-y-2 w-full"
          >
            {/* Image */}
            <div className="image-container relative w-full">
              <a href={proj.github} target="_blank" rel="noopener noreferrer">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="project-image w-full h-56 sm:h-64 md:h-72 lg:h-72 object-cover rounded-xl"
                />
              </a>
              <div className="stack-overlay absolute bottom-2 left-2 flex flex-wrap gap-1 sm:gap-2">
                {proj.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="stack-tag bg-black/80 text-white text-xs sm:text-[15px] px-2 py-1 rounded-md border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Title + Info */}
            <div className="title mt-4 sm:mt-6">
              <div className="title-name mb-4 sm:mb-6">
                <p className="project-title text-lg sm:text-xl md:text-xl font-semibold mb-2">
                  {proj.title}
                </p>

                {proj.extraStack && proj.extraStack.length > 0 && (
                  <div className="extra-stack flex flex-wrap gap-1 sm:gap-2">
                    {proj.extraStack.map((extra, i) => (
                      <span
                        key={i}
                        className="extra-tag text-gray-400 text-xs sm:text-sm"
                      >
                        {extra}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link inline-flex items-center gap-2 text-teal-400 text-sm sm:text-base font-medium hover:text-gray-300 transition"
              >
                <FaGithub className="github-icon text-lg sm:text-2xl" />
                <span className="github-text">GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
