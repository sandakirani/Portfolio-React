import logo from "../assets/logo.png";
import "./Header.css";


export default function Header() {
  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -120; // offset 10px above
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
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
        <a onClick={() => scrollToSection("projects")}>Projects</a>
        <a onClick={() => scrollToSection("certificates")}>Certificates</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </div>
    </div>
  );
}
