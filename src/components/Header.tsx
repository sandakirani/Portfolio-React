import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname === "/") {
      // Already on home page → just scroll
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -120;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      // Not on home page → go home and pass target section
      navigate("/home", { state: { scrollTo: id } });
    }
  };

  return (
    <div className="contain-div">
      <div className="logo-circle">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <span className="name">SANDAKIRANI</span>
      <div className="section">
        <a onClick={() => scrollToSection("home")}>Home</a>
        <a onClick={() => scrollToSection("about")}>About</a>
        <a onClick={() => scrollToSection("skills")}>Skills</a>
        <a onClick={() => scrollToSection("services")}>Services</a>
        <a onClick={() => scrollToSection("projects")}>Projects</a>
        <a onClick={() => scrollToSection("certificates")}>Certificates</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </div>
    </div>
  );
}
