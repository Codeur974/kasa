import styles from "./footer.module.scss";
import logo from "@/images/LOGO.png";
function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="logo" />{" "}
      <p className={styles.getYear}>
        &copy; {getYear()} Kasa. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
