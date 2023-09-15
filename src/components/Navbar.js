import { Link } from "react-router-dom";
import "../components/Navbar.css";

export function Navbar() {
  return (
    <nav>
      <Link to="/">หน้าแรก</Link>
      <Link to="/blogs">Myblog</Link>
      <Link to="/about">AboutMe</Link>
    </nav>
  );
}
