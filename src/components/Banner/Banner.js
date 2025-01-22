import styles from "./banner.module.scss";

const Banner = ({ imageUrl, title }) => {
  return (
    <div className={styles.banner}>
      <img src={imageUrl} alt="logo" />
      <h1 className={styles.banner__title}>{title}</h1>
    </div>
  );
};
export default Banner;
