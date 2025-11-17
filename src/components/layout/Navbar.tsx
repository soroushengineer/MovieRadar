import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content container">
        <Link to="/" className="logo">MovieRadar</Link>

        <ul className="nav-links">
          <li><Link to="/">Movies</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
      </div>
    </nav>
  );
}
