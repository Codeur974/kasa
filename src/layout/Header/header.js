import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <img src={`${process.env.PUBLIC_URL}/images/LOGO.png`} alt="logo" />

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
          À propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
