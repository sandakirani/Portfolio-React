import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/Enter";
import HomePage from "./pages/Home";
import Certificates from "./pages/Certificates";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Router>
  );
}
