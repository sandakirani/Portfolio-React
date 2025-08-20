import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Code, Layout, Smartphone, Brain, Shield } from "lucide-react";

const services = [
  {
    title: "3D Designer",
    description: "Creating immersive 3D models and visuals for web and apps.",
    icon: <Box size={32} />,
    tags: ["Blender", "Three.js", "3D Modeling"],
  },
  {
    title: "Frontend Web Developer",
    description: "Building responsive, modern, and scalable web applications.",
    icon: <Code size={32} />,
    tags: ["React.js", "TypeScript"],
  },
  {
    title: "UI/UX Designer",
    description: "Designing intuitive and engaging user experiences.",
    icon: <Layout size={32} />,
    tags: ["Figma", "Canva"],
  },
  {
    title: "Mobile App Developer",
    description: "Crafting cross-platform and native mobile applications.",
    icon: <Smartphone size={32} />,
    tags: ["Kotlin", "Android Studio", "React Native", "Expo"],
  },
  {
    title: "AI/ML Learner",
    description: "Exploring artificial intelligence and machine learning concepts.",
    icon: <Brain size={32} />,
    tags: ["Python", "TensorFlow", "PyTorch"],
  },
  {
    title: "Cybersecurity Learner",
    description: "Exploring and strengthening digital security practices.",
    icon: <Shield size={32} />,
    tags: ["Network Security", "Ethical Hacking"],
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="pt-20 pb-16 px-4 sm:px-8 md:px-16 lg:px-20 bg-black text-white flex flex-col items-center"
      id="services"
    >
      <p className="font-bold font-['Playfair_Display'] text-white text-[clamp(2rem,5vw,80px)] mt-[clamp(20px,3vw,50px)] text-center">
        Services
      </p>
      <p className="font-bold text-[#1f1e1e] mt-[clamp(5px,2vw,10px)] -mb-5 text-[clamp(2.5rem,6vw,100px)] text-center">
        SERVICES
      </p>

      <div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-14 justify-items-center mx-auto max-w-[1300px] mt-[clamp(80px,10vw,150px)]"
        data-aos="fade-up"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-6 md:p-8 max-w-[400px] w-full text-left transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_6px_20px_rgba(20,184,166,0.5)]"
          >
            <div className="text-teal-500 mb-4">{service.icon}</div>
            <h3 className="text-lg sm:text-xl md:text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm sm:text-sm md:text-base text-gray-300 mb-4">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-sky-500/15 text-teal-500 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mt-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
