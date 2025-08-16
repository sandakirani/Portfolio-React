import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "../components/Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./HomeCertificates";
import Footer from "../components/Footer";
import my from "../assets/home.png";
import "./Home.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // initialize AOS
  }, []);

  return (
    <div className="main-container">
      <Home />

      <div id="home" className="hello-contain" data-aos="fade-up">
        <div className="main-1">
          <p className="hello">HELLO!</p>
          <p className="name-1">I'm Vihangi</p>
          <p className="name-1">Sandakirani</p>
        </div>

        <div className="main-2">
          <img src={my} alt="profile" className="profile" />
        </div>

        <div className="main-3">
          <p className="role">3D Designer</p>
          <p className="role">Frontend Web Developer</p>
          <p className="role">UI/UX Designer</p>
          <p className="role">Mobile App developer</p>
          <p className="role">AI/ML Engineer</p>
          <p className="role">Cybersecurity Learner</p>
        </div>
      </div>

      <div id="about" data-aos="fade-up">
        <About />
      </div>

      <div id="skills" data-aos="fade-up">
        <Skills />
      </div>

      <div id="projects" data-aos="fade-up">
        <Projects />
      </div>

      <div id="certificates" data-aos="fade-up">
        <Certificates />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
