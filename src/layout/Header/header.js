import { Link } from "react-router";
import styles from "./header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <img src={`${process.env.PUBLIC_URL}/images/LOGO.png`} alt="logo" />

      <nav className={styles.navbar}>
        <Link to="/" className={styles.link}>
          Acueil
        </Link>
        <Link to="about" className={styles.link}>
          A propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
