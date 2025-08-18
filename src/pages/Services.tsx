import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";
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
    tags: ["Figma", "canva"],
  },
  {
    title: "Mobile App Developer",
    description: "Crafting cross-platform and native mobile applications.",
    icon: <Smartphone size={32} />,
    tags: ["Kotlin", "Android Studio", "React Native", "Expo"],
  },

  {
    title: "AI/ML Learner",
    description:
      "Exploring artificial intelligence and machine learning concepts.",
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
    <section className="services-section" id="services">
      <p className="services-heading">Services</p>
      <p className="services-subheading">SERVICES</p>
      <div className="services-container" data-aos="fade-up">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
            <div className="service-tags">
              {service.tags.map((tag, i) => (
                <span key={i} className="service-tag">
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
