import aboutprofile from "../assets/about.png";
import "./About.css";

export default function About() {
  return (
    <div className="about-contain">
      <p className="about-heading">ABOUT</p>

      <div className="about-box">
        <p className="about-subheading">About Me</p>
        <p className="about-content">
          I am Vihangi Sandakirani, a fourth-year undergraduate student pursuing
          a degree in Electronic and Computer Science. With a strong passion for
          technology, I combine visual storytelling and functional design to
          create meaningful digital experiences. My curiosity drives me to
          explore everything from the intricate details in 3D modeling to the
          exciting world of AI.
        </p>
        <p className="about-content">
          I have experience working with 3D design using Blender, frontend web
          development with React, mobile app design, and real-time system
          development in Python. I also enjoy experimenting with UI/UX concepts
          and integrating machine learning techniques into practical
          applications.
        </p>
        <p className="about-content">
          Currently, I am expanding my knowledge in cybersecurity while
          deepening my interest in artificial intelligence and machine learning.
          I'm particularly passionate about building AI assistants that enhance
          user interaction and solve real-world problems.
        </p>
        <p className="about-content">
          For me, technology is more than just coding; it is a creative tool to
          address challenges, improve lives, and build impactful solutions. I am
          eager to continue learning, growing, and contributing to innovative
          projects that make a positive difference.
        </p>
      </div>

      <a href="/vihangi sandakirani.pdf" download className="CV">
        {" "}
        Download Resume
      </a>

      <div className="about-image">
        <img src={aboutprofile} alt="About image" />
      </div>
    </div>
  );
}
