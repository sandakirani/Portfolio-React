import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="contain-div">
      <div className="logo-circle">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <span className="name">SANDAKIRANI</span>
      <div className="section">
        <span>Home</span>
        <span>About</span>
        <span>Skills</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </div>
  );
}
