import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); 

  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    if (darkMode) {
      document.body.classList.add("dark"); 
    } else {
      document.body.classList.remove("dark"); 
    }
  };
    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Contact
          </NavLink>
        </li>
        <li>
          <button className="theme-btn" onClick={toggleTheme}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </li>
      
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>
      </ul>
    </nav>
  );
}