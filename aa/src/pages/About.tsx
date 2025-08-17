import "./About.css";

export default function About() {
  return (
      <section className="about-contain" id="about">
      <p className="about-heading">About Me</p>
      <p className="about-heading2">ABOUT</p>

      <div className="about-box">
        <div className="about-grid">
          {/* Who I Am */}
          <div className="about-card">
            <p className="about-subheading">Who I Am</p>
            <p className="about-content">
              I am Vihangi Sandakirani, a fourth-year undergraduate student
              pursuing a degree in Electronic and Computer Science. With a strong
              passion for technology, I combine visual storytelling and functional
              design to create meaningful digital experiences. My curiosity drives
              me to explore everything from the intricate details in 3D modeling
              to the exciting world of AI.
            </p>
          </div>

          {/* Current Focus */}
          <div className="about-card">
            <p className="about-subheading">Current Focus</p>
            <p className="about-content">
              I am currently expanding my knowledge in cybersecurity while
              deepening my interest in artificial intelligence and machine
              learning. I'm particularly passionate about building AI assistants
              that enhance user interaction and solve real-world problems.
            </p>
          </div>

          {/* Vision */}
          <div className="about-card">
            <p className="about-subheading">Vision</p>
            <p className="about-content">
              For me, technology is more than just coding; it is a creative tool
              to address challenges, improve lives, and build impactful solutions.
              I am eager to continue learning, growing, and contributing to
              innovative projects that make a positive difference.
            </p>
          </div>

          {/* Mission */}
          <div className="about-card">
            <p className="about-subheading">Mission</p>
            <p className="about-content">
              My mission is to innovate and build impactful software solutions
              that bridge the gap between technology and human needs. With a strong
              foundation in electronic and computer science, I strive to
              continuously grow as a developer while contributing to real-world
              projects that make a positive difference.
            </p>
          </div>
        </div>     
      </div>

    </section>
  );
}
