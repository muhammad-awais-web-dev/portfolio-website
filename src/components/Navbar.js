import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import ChatBox from "./ChatBox"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav id="navbar">
      <h1 className="logo">Muhammad Awais<span><br />Web Developer</span></h1>

      <ChatBox /> {/* Appears on the top side with the navigation button on mobile and on the bottom side on the desktop view Also on the desktop opens in the bottom right corner and on the mobile opens in the top side full width styling Colors reflect the overall site color scheme*/}


      {/* Burger Icon */}
      <div className={`burger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>


      {/* Menu */}
      <ul id="navMenu" className={isMenuOpen ? "active" : ""}>
        <Link to="/" className="navLink" onClick={closeMenu}>Home</Link>
        <Link to="/about" className="navLink" onClick={closeMenu}>About</Link>
        <Link to="/projects" className="navLink" onClick={closeMenu}>Projects</Link>
        <Link to="/certifications" className="navLink" onClick={closeMenu}>Certifications</Link>
        <Link to="/services" className="navLink" onClick={closeMenu}>Services</Link>
        <a href="#contact" className="contactBtn" onClick={closeMenu}>Contact</a>
      </ul>
    </nav>
  );
}

export default Navbar;
