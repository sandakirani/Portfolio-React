import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        w-full 
        bg-teal-500/20 
        backdrop-blur-lg 
        border-t border-red-500/10 
        shadow-[0_4px_12px_rgba(109,109,109,0.6),0_2px_6px_rgba(0,0,0,0.3)] 
        flex flex-col items-center justify-center 
        pt-8 pb-10 
        mt-24
      "
    >
      <div
        className="
          flex flex-wrap justify-center items-center 
          gap-6 sm:gap-8 md:gap-10 lg:gap-12 
          py-2
        "
      >
        {[
          {
            href: "https://web.facebook.com/vihangi.sandakirani.9",
            icon: <FaFacebookF />,
          },
          {
            href: "https://www.instagram.com/_sandakirani_/",
            icon: <FaInstagram />,
          },
          {
            href: "https://www.linkedin.com/in/vihangi-sandakirani",
            icon: <FaLinkedinIn />,
          },
          {
            href: "https://github.com/sandakirani",
            icon: <FaGithub />,
          },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-white 
              text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] 
              transition-transform transform hover:scale-125 
              mx-3
            "
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
