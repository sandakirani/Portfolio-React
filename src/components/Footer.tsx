import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-div">
      <div className="social-links">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/_sandakirani_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/vihangi-sandakirani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
        <a
          href="https://github.com/sandakirani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="social-icon" />
        </a>
      </div>
      <div className="footer-footer">
        <p className="footer-text">CONTACT</p>
      </div>
    </div>
  );
}
