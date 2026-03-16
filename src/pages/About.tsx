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
              My name is Vihangi Sandakirani and I am a fourth-year
              undergraduate student enrolled in the Electronic and Computer
              Science degree program. I am a tech-savvy person who enjoys the
              combination of creative designing, practical development, and
              mathematical problem-solving. I have been working in AI/ML model
              building, mobile app development, and 3D design, leveraging my
              strong math skills to create meaningful and interactive electronic
              experiences.
            </p>
          </div>

          {/* Current Focus */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300">
            <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-raleway">
              Current Focus
            </p>
            <p className="text-sm sm:text-base md:text-base font-montserrat leading-relaxed">
              I am in the process of widening my abilities in artificial
              intelligence and machine learning and proceeding with mobile app
              and web development. I also like creating AI-powered applications
              that would address real-life issues, incorporating models in
              interactive software, experimenting with 3D design and
              visualization, and utilizing mathematical and logical reasoning
              when creating effective, innovative solutions.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300">
            <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-raleway">
              Vision
            </p>
            <p className="text-sm sm:text-base md:text-base font-montserrat leading-relaxed">
              I view technology as an analytical and creative approach to
              solving problems, providing better experiences and solutions that
              are effective. I strive to mix AI, mobile apps, 3D, powerful
              mathematical and logical thinking to create innovative software,
              easy to use.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300">
            <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-raleway">
              Mission
            </p>
            <p className="text-sm sm:text-base md:text-base font-montserrat leading-relaxed">
              My mission will be to create AI-based interactive and mobile-first
              solutions that can tangibly impact a difference. Using my skills
              as a mathematical and logical thinker, accompanied by a
              substantial background in electronic and computer science, I
              expect to participate in projects in the real world as I
              constantly develop as a well-rounded developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
