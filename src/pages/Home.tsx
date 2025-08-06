import Home from "../components/Header";
import About from "./About";
import Skills from "./Skills";
import my from "../assets/home.png";
import "./Home.css";

export default function HomePage() {
  return (
    <div className="main-container">
      <Home />
      <div className="hello-contain">
        <div className="main-1">
          <p className="hello">HELLO!</p>
          <p className="name-1">I'm Vihangi</p>
          <p className="name-1">Sandakirani</p>
          {/* Add your portfolio content here */}
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
        </div>
      </div>

      <About />
      <Skills />
    </div>
  );
}
