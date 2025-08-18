import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "../components/Header";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Footer from "../components/Footer";
import my from "../assets/home.jpg";
import "./Home.css";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // 👇 Check if navigation passed a scroll target
  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const id = (location.state as any).scrollTo;
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -100; // scroll 100px above the element
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="main-container">
      <Home />

      <div id="home" className="hello-contain" data-aos="fade-up">
        <div className="main-1">
          <p className="hello">HELLO!</p>
          <p className="name-1">I'm Vihangi</p>
          <p className="name-1">Sandakirani</p>

          <a href="/vihangi sandakirani.pdf" download className="CV">
            Download Resume
          </a>
        </div>

        <div className="main-2">
          <img src={my} alt="profile" className="profile" />
        </div>

        <div className="main-3">
          <p className="role">3D Designer</p>
          <p className="role">Frontend Web Developer</p>
          <p className="role">Mobile App developer</p>
        </div>
      </div>

      <div data-aos="fade-up">
        <About />
      </div>

      <div data-aos="fade-up">
        <Skills />
      </div>

      <div data-aos="fade-up">
        <Services />
      </div>

      <div data-aos="fade-up">
        <Projects />
      </div>

      <div data-aos="fade-up">
        <Certificates />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}