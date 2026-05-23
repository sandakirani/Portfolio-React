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
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300 hover:border-teal-500/50 group">
            <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-raleway relative inline-block">
              Who I Am
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-teal-400/50 group-hover:w-full transition-all duration-500"></span>
            </p>
            <p className="text-sm sm:text-base md:text-base font-montserrat leading-relaxed">
              I'm <span className="text-teal-300 font-semibold">Vihangi Sandakirani</span>, a fourth-year undergraduate student in Electronic and Computer Science. 
              I'm deeply passionate about the intersection of <span className="text-teal-400 font-semibold">Artificial Intelligence</span> and 
              <span className="text-teal-300 font-semibold"> UI/UX Design</span>. I firmly believe that exceptional technology should be both 
              intelligent and intuitive seamlessly blending powerful AI capabilities with beautiful, 
              human-centered interfaces that people genuinely love to use.
            </p>
          </div>

          {/* Current Focus */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300 hover:border-teal-500/50 group">
            <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-raleway relative inline-block">
              Current Focus
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-teal-400/50 group-hover:w-full transition-all duration-500"></span>
            </p>
            <p className="text-sm sm:text-base md:text-base font-montserrat leading-relaxed">
              I'm currently immersing myself in <span className="text-teal-400 font-semibold">machine learning model development</span> and 
              <span className="text-teal-300 font-semibold"> user-centered design principles</span>. My primary focus revolves around creating 
              AI-powered applications that aren't just intelligent, but genuinely delightful to interact with. 
              I strive to make complex AI systems accessible through thoughtful, minimalist interfaces that 
              prioritize user needs above all else.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300 hover:border-teal-500/50 group">
            <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-raleway relative inline-block">
              Vision
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-teal-400/50 group-hover:w-full transition-all duration-500"></span>
            </p>
            <p className="text-sm sm:text-base md:text-base font-montserrat leading-relaxed">
              I envision a future where <span className="text-teal-400 font-semibold">AI technology</span> and 
              <span className="text-teal-300 font-semibold"> exceptional design</span> exist in perfect harmony. My aspiration is to 
              bridge the gap between sophisticated algorithms and meaningful human experiences crafting software that's 
              both intellectually powerful and emotionally resonant. I dream of creating interfaces that feel less like 
              tools and more like natural extensions of human thought.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300 hover:border-teal-500/50 group">
            <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-raleway relative inline-block">
              Mission
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-teal-400/50 group-hover:w-full transition-all duration-500"></span>
            </p>
            <p className="text-sm sm:text-base md:text-base font-montserrat leading-relaxed">
              My mission is to democratize AI through <span className="text-teal-400 font-semibold">intuitive, human-centered design</span>. 
              I'm committed to building AI-powered applications that solve genuine real-world problems without 
              overwhelming or intimidating users. By combining deep technical knowledge with profound empathy 
              for human needs, I strive to create digital experiences that are simultaneously powerful, simple, 
              accessible, and truly transformative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}