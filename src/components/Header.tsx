import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = 0;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      navigate("/home", { state: { scrollTo: id } });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-red-300/10 shadow-lg flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6">
      {/* Logo and Name */}
      <div className="flex items-center gap-2 sm:gap-3 mb-2 md:mb-0">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-black bg-white flex items-center justify-center cursor-pointer">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="text-white text-base sm:text-lg md:text-xl font-kotta italic cursor-pointer">
          SANDAKIRANI
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 text-white text-sm sm:text-base md:text-lg lg:text-xl font-allerta">
        {[
          "home",
          "about",
          "skills",
          "services",
          "projects",
          "certificates",
          "contact",
        ].map((section) => (
          <a
            key={section}
            onClick={() => scrollToSection(section)}
            className="cursor-pointer hover:text-gray-200 transition-transform duration-300 hover:scale-110"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </div>
  );
}
