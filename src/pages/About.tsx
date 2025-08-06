import aboutprofile from "../assets/about.png";
import "./About.css";

export default function About() {
  return (
    <div className="about-contain">
      <p className="about-heading">ABOUT</p>

      <div className="about-box">
        <p className="about-subheading">About Me</p>
        <p className="about-content">
          Hi, I'm Vihangi Sandakirani — a passionate tech explorer with a love
          for both visual storytelling and functional design. I'm currently
          pursuing my degree in Electronic and Computer Science, and I'm driven
          by a deep curiosity for how things work — from the tiniest pixel in a
          3D model to the backend logic that powers modern applications.
          </p>
          <p className="about-content">
          Blending creativity with code, I specialize in 3D modeling, full-stack
          web development, and mobile app design. Whether it's building
          immersive 3D scenes in Blender, designing responsive user interfaces
          in React, or developing real-time systems using Python, I love turning
          ideas into digital experiences that are both beautiful and meaningful.
          </p>
          <p className="about-content">
          I believe technology isn't just about writing code — it’s about
          solving problems, enhancing lives, and expressing imagination. I’m
          excited to keep learning, building, and contributing to projects that
          make a difference.
        </p>
      </div>

        <a href="/vihangi sandakirani.pdf" download className="CV"> Download Resume</a>

      <div className="about-image">
        <img src={aboutprofile} alt="About image" />
      </div>
    </div>
  );
}
