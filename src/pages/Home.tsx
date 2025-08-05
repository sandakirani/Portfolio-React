import Home from "../components/Header";
import my from "../assets/home.png";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "black",minHeight: "100vh",width: "100vw"}}>
      <Home/>
    <div>
      <h2>HELLO!</h2>
      <p>I'm Vihangi</p>
      <p>Sandakirani</p>
      {/* Add your portfolio content here */}
    </div>

    <div>
      <img src={my} alt="profile" className="profile"/>
    </div>

    <div>
      <p>3D Designer</p>
      <p>Frontend Web Developer</p>
      <p>UI/UX Designer</p>
      <p>Mobile App developer</p>
      <p>AI/ML Engineer</p>
    </div>
    </div>
  );
}
