import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <span className="logo-icon">🎥</span>
          <span className="logo-text">FireMovie</span>
        </div>
        <button className="hamburger-menu" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="/AddMovie"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Add Movie
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
};
