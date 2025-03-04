import React from "react";
import { Link } from "react-router-dom";
import styles from "./error.module.scss";

function Error() {
  return (
    <div className={styles.error}>
      <h1 className={styles.error__number}>404</h1>
      <p className={styles.error__text}>
        <span>Oups! La page que</span>
        <span>vous demandez n'existe pas.</span>
      </p>
      <Link className={styles.error__link} to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
