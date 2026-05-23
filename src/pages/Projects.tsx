import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaFigma } from "react-icons/fa";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // System Development Projects
  const systemDevProjects = [
    {
      image: "/projects/mobileshop.jpg",
      title: "Mobile Shop Management System",
      category: "Desktop App",
      techStack: [".NET", "C#", "MySQL"],
      github: "https://github.com/sandakirani/mobile-shop-management-system",
    },
    {
      image: "/projects/coffee.jpeg",
      title: "Coffee Shop System (Cafe Bloom)",
      category: "Android App",
      techStack: ["Kotlin", "SQLite", "Android Studio"],
      github: "https://github.com/sandakirani/CafeBloom",
    },
    {
      image: "/projects/Celluler.jpg",
      title: "Mobile Phone Management System (Cellular world)",
      category: "Full Stack Web",
      techStack: ["React", "SpringBoot", "Node.js", "MongoDB", "JWT"],
      github: "https://github.com/sandakirani/Cellular-world",
    },
  ];

  // Python Development Projects
  const pythonDevProjects = [
    {
      video: "/projects/3dmodel.mp4",
      title: "3D Hand Motion (Blender + MediaPipe)",
      category: "3D Animation & Hand Tracking",
      techStack: ["Blender", "MediaPipe", "Python", "OpenCV"],
      github: "",
    },
  ];

  // Mobile UI/UX Design Projects
  const mobileUIProjects = [
    {
      image: "/projects/binmatrix-driver.png",
      title: "BinMatrix Driver App",
      category: "Mobile App (Driver Side)",
      techStack: ["Figma", "Mobile UI", "Route Navigation", "Collection Status"],
      figma: "https://www.figma.com/design/qD7ctUBmdsU1IU4ymW54UW/BinMatrix?node-id=0-1&m=dev&t=jsveygFNVNQ15rp0-1",
      description: "Driver interface for navigation, collection updates, and route management",
    },
    {
      image: "/projects/binmatrix-user.png",
      title: "BinMatrix User App",
      category: "Mobile App (User Side)",
      techStack: ["Figma", "Mobile UI", "Bin Status", "Collection Schedule"],
      figma: "https://www.figma.com/design/qD7ctUBmdsU1IU4ymW54UW/BinMatrix?node-id=0-1&m=dev&t=jsveygFNVNQ15rp0-1",
      description: "User interface for tracking bin status, schedule pickups, and recycling tips",
    },
  ];

  // Web UI/UX Design Projects
  const webUIProjects = [
    {
      image: "/projects/binmatrix-admin.png",
      title: "BinMatrix Admin Dashboard",
      category: "Web Dashboard",
      techStack: ["Figma", "Admin Panel", "Analytics", "Driver Management"],
      figma: "https://www.figma.com/design/qD7ctUBmdsU1IU4ymW54UW/BinMatrix?node-id=3-2&m=dev&t=jsveygFNVNQ15rp0-1",
      description: "Admin dashboard for managing drivers, routes, and waste collection analytics",
    },
    {
      image: "/projects/fashionmirror-admin.png",
      title: "Fashion Mirror Admin UI",
      category: "Admin Dashboard",
      techStack: ["Figma", "Admin Panel", "Analytics", "User Management"],
      figma: "https://www.figma.com/design/H8lB0YN04INStfWBEbZnce/Fashion-Mirror?node-id=230-537&m=dev&t=pIQeBR8fZDektlOO-1",
      description: "Admin dashboard for managing virtual try-on platform",
    },
    {
      image: "/projects/fashionmirror-user.png",
      title: "Fashion Mirror Backend User Portal",
      category: "User Portal",
      techStack: ["Figma", "User Dashboard", "Profile Management", "Try-on History"],
      figma: "https://www.figma.com/design/H8lB0YN04INStfWBEbZnce/Fashion-Mirror?node-id=98-537&m=dev&t=pIQeBR8fZDektlOO-1",
      description: "User portal for customers to manage their virtual try-on experience",
    },
  ];

  return (
    <section
      className="pt-20 pb-16 px-4 sm:px-8 md:px-16 lg:px-20 bg-black text-white flex flex-col items-center"
      id="projects"
    >
      <style>
        {`
          .scrollbar-thin::-webkit-scrollbar {
            height: 6px;
          }
          .scrollbar-thin::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.3);
            border-radius: 10px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.5);
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>

      <p className="font-bold font-['Playfair_Display'] text-[clamp(2rem,5vw,80px)] mt-[clamp(50px,5vw,100px)] text-center">
        Projects
      </p>
      <p className="font-bold text-[#1f1e1e] mt-[clamp(10px,3vw,10px)] -mb-5 text-[clamp(2.5rem,6vw,100px)] text-center">
        PROJECTS
      </p>

      {/* Web UI/UX Design Section - FIRST */}
      <div className="w-full max-w-screen-xl mt-[clamp(80px,10vw,120px)]" data-aos="fade-up">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display'] text-white">
            Web UI/UX Design
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-600/50 to-transparent"></div>
        </div>
        
        <div className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-thin">
          <div className="flex gap-6 min-w-max">
            {webUIProjects.map((proj, index) => (
              <div
                key={`web-${index}`}
                className="project-card w-[320px] sm:w-[380px] bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl transition-all hover:-translate-y-2 hover:border-teal-500/50 flex-shrink-0"
              >
                <div className="image-container relative flex justify-center">
                  <a href={proj.figma} target="_blank" rel="noopener noreferrer" className="block w-full">
                    {/* Desktop/Laptop frame for web dashboards */}
                    <div className="relative w-full">
                      {/* Browser Frame */}
                      <div className="bg-gray-800 rounded-t-xl p-2 flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="flex-1 mx-4">
                          <div className="bg-gray-700 rounded-md px-2 py-0.5 text-xs text-gray-400 text-center truncate">
                            {proj.title.toLowerCase().replace(/\s+/g, '-')}.figma
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-48 object-cover object-top rounded-b-xl"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-1">{proj.title}</h3>
                  <p className="text-xs text-gray-400 mb-2 line-clamp-2">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs text-teal-300 bg-teal-500/20 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={proj.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-500 text-[18px] mt-4 hover:text-green-500 transition group"
                  >
                    <FaFigma className="text-xl group-hover:scale-110 transition-transform" />
                    <span className="text-sm">View Design</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile UI/UX Design Section - SECOND */}
      <div className="w-full max-w-screen-xl mt-16" data-aos="fade-up" data-aos-delay="100">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display'] text-white">
            Mobile UI/UX Design
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-600/50 to-transparent"></div>
        </div>
        
        <div className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-thin">
          <div className="flex gap-6 min-w-max">
            {mobileUIProjects.map((proj, index) => (
              <div
                key={`mobile-${index}`}
                className="project-card w-[320px] sm:w-[380px] bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl transition-all hover:-translate-y-2 hover:border-teal-500/50 flex-shrink-0"
              >
                <div className="image-container relative flex justify-center">
                  <a href={proj.figma} target="_blank" rel="noopener noreferrer" className="block">
                    {/* Mobile frame with bezel styling */}
                    <div className="relative mx-auto">
                      {/* Phone Bezel */}
                      <div className="relative rounded-[2.5rem] bg-gradient-to-br from-gray-700 to-gray-900 p-2 shadow-2xl">
                        {/* Phone Screen */}
                        <div className="relative rounded-[2rem] overflow-hidden bg-black">
                          {/* Dynamic Island / Notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>
                          {/* Image */}
                          <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-auto min-h-[280px] object-cover object-top rounded-[1.8rem]"
                          />
                          {/* Home Indicator */}
                          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-400 rounded-full"></div>
                        </div>
                        {/* Volume buttons */}
                        <div className="absolute left-[-3px] top-20 w-1 h-8 bg-gray-600 rounded-l-md"></div>
                        <div className="absolute left-[-3px] top-32 w-1 h-8 bg-gray-600 rounded-l-md"></div>
                        {/* Power button */}
                        <div className="absolute right-[-3px] top-24 w-1 h-10 bg-gray-600 rounded-r-md"></div>
                      </div>
                    </div>
                  </a>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-1">{proj.title}</h3>
                  <p className="text-xs text-gray-400 mb-2 line-clamp-2">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs text-teal-300 bg-teal-500/20 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={proj.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-500 text-[18px] mt-4 hover:text-green-500 transition group"
                  >
                    <FaFigma className="text-xl group-hover:scale-110 transition-transform" />
                    <span className="text-sm">View Design</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Python & 3D Development Section - THIRD */}
      <div className="w-full max-w-screen-xl mt-16" data-aos="fade-up" data-aos-delay="150">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display'] text-white">
            Python & 3D Development
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-600/50 to-transparent"></div>
        </div>
        
        <div className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-thin">
          <div className="flex gap-6 min-w-max">
            {pythonDevProjects.map((proj, index) => (
              <div
                key={`python-${index}`}
                className="project-card w-[320px] sm:w-[380px] bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl transition-all hover:-translate-y-2 hover:border-teal-500/50 flex-shrink-0"
              >
                <div className="image-container relative">
                  <video
                    src={proj.video}
                    autoPlay
                    loop
                    muted
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">{proj.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.techStack.map((tech, i) => (
                      <span key={i} className="text-xs text-teal-300 bg-teal-500/20 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Development Section - FOURTH */}
      <div className="w-full max-w-screen-xl mt-16" data-aos="fade-up" data-aos-delay="200">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display'] text-white">
            System Development
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-600/50 to-transparent"></div>
        </div>
        
        <div className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-thin">
          <div className="flex gap-6 min-w-max">
            {systemDevProjects.map((proj, index) => (
              <div
                key={`system-${index}`}
                className="project-card w-[320px] sm:w-[380px] bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl transition-all hover:-translate-y-2 hover:border-teal-500/50 flex-shrink-0"
              >
                <div className="image-container relative">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </a>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">{proj.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.techStack.map((tech, i) => (
                      <span key={i} className="text-xs text-teal-300 bg-teal-500/20 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-500 text-[18px] mt-4 hover:text-green-500 transition"
                  >
                    <FaGithub className="text-xl" />
                    <span className="text-sm">GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}