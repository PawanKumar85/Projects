import React, { useState } from "react";
import style from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={style.navbar}>
      <a href="/" className={style.title}>
        Portfolio
      </a>
      <div className={style.menu}>
        <img
          className={style.menuBtn}
          src={menuOpen ? getImageUrl("nav/closeIcon.png"):getImageUrl("nav/menuIcon.png")}
          alt="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${style.menuItems} ${menuOpen && style.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#platform">Platform</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
