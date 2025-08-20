import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "animate.css";

export default function Enter() {
  const navigate = useNavigate();

  const [text1Animation, setText1Animation] = useState("animate__fadeInLeft");
  const [text2Animation, setText2Animation] = useState("animate__fadeInRight");

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setText1Animation("animate__fadeOutRight");
      setText2Animation("animate__fadeOutLeft");
    }, 4000);

    const navigateTimer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div className="bg-black flex justify-center items-center w-screen h-screen overflow-hidden relative flex-col gap-4 px-4 sm:px-6">
      <h1
        className={`animate__animated ${text1Animation} text-white text-center m-0 text-[clamp(2rem,6vw,5rem)] sm:text-[clamp(2.5rem,8vw,6rem)]`}
      >
        SANDAKIRANI
      </h1>
      <h1
        className={`animate__animated ${text2Animation} text-white text-center m-0 text-[clamp(2rem,6vw,5rem)] sm:text-[clamp(2.5rem,8vw,6rem)]`}
      >
        PORTFOLIO
      </h1>
    </div>
  );
}
