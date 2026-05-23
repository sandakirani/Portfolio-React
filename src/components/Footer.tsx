import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Main Footer Section */}
      <footer
        className="
          w-full 
          relative
          overflow-hidden
          mt-24
        "
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 via-blue-900/20 to-purple-900/30"></div>
        
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        
        <div
          className="
            relative
            backdrop-blur-xl 
            bg-white/5
            border-t border-white/20
            border-b border-white/10
            shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)]
            flex flex-col items-center justify-center 
            py-10 px-4
          "
        >
          {/* Decorative line above */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"></div>
          
          {/* Social Icons Container */}
          <div
            className="
              flex flex-wrap justify-center items-center 
              gap-8 sm:gap-10 md:gap-12 
              mb-6
            "
          >
            {[
              {
                href: "https://web.facebook.com/vihangi.sandakirani.9",
                icon: <FaFacebookF />,
                color: "hover:text-[#1877f2]",
                label: "Facebook",
              },
              {
                href: "https://www.instagram.com/_sandakirani_/",
                icon: <FaInstagram />,
                color: "hover:text-[#e4405f]",
                label: "Instagram",
              },
              {
                href: "https://www.linkedin.com/in/vihangi-sandakirani",
                icon: <FaLinkedinIn />,
                color: "hover:text-[#0a66c2]",
                label: "LinkedIn",
              },
              {
                href: "https://github.com/sandakirani",
                icon: <FaGithub />,
                color: "hover:text-[#ffffff]",
                label: "GitHub",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={social.label}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300 scale-150 blur-xl"></div>
                
                {/* Icon */}
                <div
                  className={`
                    text-white/80 
                    text-[22px] sm:text-[26px] md:text-[32px] 
                    transition-all duration-300 
                    transform group-hover:scale-125 group-hover:-translate-y-1
                    ${social.color}
                    relative z-10
                  `}
                >
                  {social.icon}
                </div>
                
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          {/* Divider with heart */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-px bg-gradient-to-r from-transparent to-white/20 w-16"></div>
            <FaHeart className="text-teal-400/60 text-xs animate-pulse" />
            <div className="h-px bg-gradient-to-l from-transparent to-white/20 w-16"></div>
          </div>

          {/* Quote / Tagline */}
          <p className="text-white/40 text-xs sm:text-sm text-center max-w-md mx-auto font-light italic">
            "Building intelligent experiences with heart and code"
          </p>
        </div>
      </footer>

      {/* Copyright Strip */}
      <div
        className="
          w-full 
          bg-gradient-to-r from-black via-gray-950 to-black
          text-gray-500 
          text-xs sm:text-sm 
          text-center 
          py-4
          border-t border-white/5
        "
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Vihangi Sandakirani. 
            <span className="hidden sm:inline"> All Rights Reserved.</span>
            <span className="inline sm:hidden"> All Rights Reserved.</span>
          </p>
          <p className="text-[10px] text-white/20 mt-1">
            Designed with ❤️ for AI & UI/UX
          </p>
        </div>
      </div>
    </>
  );
}