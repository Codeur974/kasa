import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import image from "@/images/LOGO.png";

function Header() {
  return (
    <div className={styles.header}>
      <img src={image} alt="logo" />

      <nav className={styles.navbar}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
