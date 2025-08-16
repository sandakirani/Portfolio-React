import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./HomeCertificates.css";

export default function HomeCertificates() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const certificates = [
    { image: "/certificates/C.E.O 2.0.jpg" },
    { image: "/certificates/introduction in Csharp.jpg" },
    { image: "/certificates/introduction in HTML.jpg" },
    { image: "/certificates/introduction in css.jpg" },
    { image: "/certificates/introduction in C.jpg" },
    { image: "/certificates/introduction in cyber.jpg" },
  ];

  return (
    <div className="home-certificates-contain">
      <p className="home-certificates-heading">My Certificates</p>
      <p className="home-certificates-subheading">CERTIFICATES</p>

      <div className="scroll-container-wrapper">
        <div ref={scrollRef} className="scroll-container">
          {certificates.map((cert, index) => (
            <img
              key={index}
              src={cert.image}
              alt={`Certificate ${index}`}
              className="cert-image"
            />
          ))}
        </div>
      </div>

      {/* Navigation Button */}
      <div className="view-all-btn-wrapper">
        <button
          className="view-all-btn"
          onClick={() => navigate("/certificates")}
        >
          View All Certificates →
        </button>
      </div>
    </div>
  );
}
