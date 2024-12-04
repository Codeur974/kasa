import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src={`${process.env.PUBLIC_URL}/images/IMG.png`} alt="logo" />{" "}
      <h1 className={styles.banner__title}>Chez vous, partout et ailleurs</h1>
    </div>
  );
};
export default Banner;
