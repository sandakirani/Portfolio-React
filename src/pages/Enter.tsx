import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
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
            navigate('/home');
        }, 5000);

        return () => {
            clearTimeout(animationTimer);
            clearTimeout(navigateTimer);
        };
    }, [navigate]);

    return(
        <div style={styles.container}>
            <h1 className={`animate__animated ${text1Animation}`}
                style={{color:"white", margin: 0}}>SANDAKIRANI</h1>
            <h1 className={`animate__animated ${text2Animation}`}
                style={{color:"white", margin: 0}}>PORTFOLIO</h1>
        </div>
    );
}
const styles: { [key: string]: React.CSSProperties & { [key: string]: any } } = {
  container: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    position: "relative",
    flexDirection: "column",
    gap: "5px",

    // ✅ Responsive breakpoints
    ["@media (max-width: 480px)"]: {
      flexDirection: "column",
      padding: "10px",
      gap: "5px",
    },
    ["@media (min-width: 481px) and (max-width: 768px)"]: {
      flexDirection: "column",
      padding: "10px",
      gap: "10px",
    },
    ["@media (min-width: 769px) and (max-width: 992px)"]: {
      flexDirection: "row",
      padding: "15px",
      gap: "15px",
    },
    ["@media (min-width: 993px) and (max-width: 1200px)"]: {
      flexDirection: "row",
      padding: "20px",
      gap: "20px",
    },
    ["@media (min-width: 1201px)"]: {
      flexDirection: "row",
      gap: "25px",
      padding: "25px",
    },
  },
};
