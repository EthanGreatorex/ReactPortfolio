import { FaSun, FaMoon } from "react-icons/fa";
import "../css/navbar.css";
import PropTypes from "prop-types";
import React from "react";
import {useFadeInOnScroll} from "../hooks/FadeInOnScroll";

function NavBar({ theme, onThemeToggle }) {
  const fadeRef = useFadeInOnScroll();
  return (
    <nav className="navbar" ref={fadeRef}>
      <div className="navbar__theme-toggle">
        <button className="theme-toggle__button" onClick={onThemeToggle}>
          {theme === "light" ? <FaMoon></FaMoon> : <FaSun></FaSun>}
        </button>
      </div>
      <ul className="navbar__links">
        <li className="navbar__links-link">
          <a href="#home">Home</a>
        </li>
        <li className="navbar__links-link">
          <a href="#about">About</a>
        </li>
        <li className="navbar__links-link">
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  theme: PropTypes.string.isRequired,
  onThemeToggle: PropTypes.func.isRequired,
};

export default NavBar;
