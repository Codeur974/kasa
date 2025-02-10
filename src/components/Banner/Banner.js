import styles from "./banner.module.scss";

const Banner = ({ imageUrl, title, showTitle }) => {
  return (
    <div className={styles.banner}>
      <img src={imageUrl} alt="logo" />
      {showTitle && title && <h1 className={styles.banner__title}>{title}</h1>}
    </div>
  );
};
export default Banner;
