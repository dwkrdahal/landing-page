import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("navbar-bg");
  }

  let navLinkClasses = ["nav-link"];
  if (scrolled) {
    navLinkClasses.push("nav-link-scrolled");
  }

  return (
    <nav className={navbarClasses.join(" ")}>
      <div className="logo">
        <img src="navbar-brand.png" alt="Logo part 1" className="logo-img" />
        {/* <img
          src="navbar-brand-ver.png"
          alt="Logo part 2"
          className="logo-img"
        /> */}
        <span>ALKA</span>
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li className="nav-item">
          <a href="#home" className={navLinkClasses.join(" ")}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#services" className={navLinkClasses.join(" ")}>
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className={navLinkClasses.join(" ")}>
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#team" className={navLinkClasses.join(" ")}>
            Team
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects" className={navLinkClasses.join(" ")}>
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#image-gallery" className={navLinkClasses.join(" ")}>
            Image Gallery
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className={navLinkClasses.join(" ")}>
            Contact
          </a>
        </li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
      </div>
      <div className={`overlay ${menuOpen ? "open" : ""}`}></div>
    </nav>
  );
};

export default Navbar;
