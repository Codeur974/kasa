import styles from "./footer.module.scss";

function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className={styles.footer}>
      <img src={`${process.env.PUBLIC_URL}/images/LOGO.png`} alt="logo" />{" "}
      <p className={styles.getYear}>
        &copy; {getYear()} Kasa. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
