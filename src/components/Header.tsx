import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = 80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      navigate("/home", { state: { scrollTo: id } });
    }
  };

  const navItems = [
    "home",
    "about",
    "skills",
    "services",
    "projects",
    "contact",
  ];

  return (
    <>
      {/* Header */}
      <div
        className={`
          fixed top-0 left-0 w-full z-50 
          transition-all duration-500 ease-out
          ${isScrolled 
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3" 
            : "bg-black/40 backdrop-blur-md border-b border-white/5 py-5"
          }
        `}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo and Name */}
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection("home")}>
              {/* Animated logo container */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/30 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center shadow-lg overflow-hidden">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              
              {/* Animated text */}
              <div className="overflow-hidden">
                <span className="text-white text-base sm:text-lg md:text-xl font-['Playfair_Display'] font-bold tracking-wide cursor-pointer relative">
                  SANDAKIRANI
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 group-hover:w-full transition-all duration-500"></span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="relative group px-3 lg:px-4 py-2 text-white/80 hover:text-white text-sm lg:text-base font-medium transition-all duration-300"
                >
                  <span className="relative z-10">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                  
                  {/* Hover background effect */}
                  <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  
                  {/* Bottom line animation */}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Animated gradient border bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent"></div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed top-[72px] left-0 right-0 z-40
          transform transition-all duration-500 ease-out
          ${isMobileMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-full pointer-events-none"
          }
        `}
      >
        <div className="bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
          <div className="max-w-screen-2xl mx-auto px-6 py-6">
            <div className="flex flex-col gap-3">
              {navItems.map((section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`
                    group relative px-4 py-3 text-white/80 hover:text-white text-base font-medium
                    transition-all duration-300 rounded-lg hover:bg-white/5
                    transform hover:translate-x-2
                  `}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                </button>
              ))}
            </div>
            
            {/* Mobile menu decorative elements */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-white/30 text-xs text-center">
                Let's create something amazing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <div 
        className="fixed top-0 left-0 z-50 h-0.5 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 transition-all duration-300"
        style={{
          width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`,
        }}
      />
    </>
  );
}