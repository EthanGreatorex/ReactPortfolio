import { FaSun, FaMoon } from "react-icons/fa";
import "../css/navbar.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import React from "react";

function NavBar({ theme, onThemeToggle }) {
  return (
    <motion.div
      
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1.5, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="navbar-container"
      >
      <nav className="navbar">
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
    </motion.div>
  );
}

NavBar.propTypes = {
  theme: PropTypes.string.isRequired,
  onThemeToggle: PropTypes.func.isRequired,
};

export default NavBar;
