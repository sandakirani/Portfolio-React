import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="pt-32 sm:pt-40 pb-16 px-4 sm:px-10 md:px-20 bg-black text-white flex flex-col items-center"
      id="about"
    >
      {/* Section Heading */}
      <p className="font-bold font-['Playfair_Display'] text-[clamp(2rem,5vw,6rem)] mt-8 sm:mt-12">
        About Me
      </p>
      <p className="font-bold text-[#1f1e1e] mt-2 -mb-5 text-[clamp(2rem,6vw,7rem)]">
        ABOUT
      </p>

      {/* Grid Container */}
      <div className="w-full max-w-screen-xl mt-16 sm:mt-24">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8"
          data-aos="fade-up"
        >
          {/* Who I Am */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300">
            <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-raleway">
              Who I Am
            </p>
            <p className="text-sm sm:text-base md:text-base font-montserrat leading-relaxed">
              I am Vihangi Sandakirani, a fourth-year undergraduate student
              pursuing a degree in Electronic and Computer Science. With a
              strong passion for technology, I combine visual storytelling and
              functional design to create meaningful digital experiences. My
              curiosity drives me to explore everything from the intricate
              details in 3D modeling to the exciting world of AI.
            </p>
          </div>

          {/* Current Focus */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300">
            <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-raleway">
              Current Focus
            </p>
            <p className="text-sm sm:text-base md:text-base font-montserrat leading-relaxed">
              I am currently expanding my knowledge in cybersecurity while
              deepening my interest in artificial intelligence and machine
              learning. I'm particularly passionate about building AI assistants
              that enhance user interaction and solve real-world problems.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300">
            <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-raleway">
              Vision
            </p>
            <p className="text-sm sm:text-base md:text-base font-montserrat leading-relaxed">
              For me, technology is more than just coding; it is a creative tool
              to address challenges, improve lives, and build impactful
              solutions. I am eager to continue learning, growing, and
              contributing to innovative projects that make a positive
              difference.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300">
            <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-raleway">
              Mission
            </p>
            <p className="text-sm sm:text-base md:text-base font-montserrat leading-relaxed">
              My mission is to innovate and build impactful software solutions
              that bridge the gap between technology and human needs. With a
              strong foundation in electronic and computer science, I strive to
              continuously grow as a developer while contributing to real-world
              projects that make a positive difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
