import Banner from "@/components/Banner/Banner";
import Card from "@/components/Cards/Cards";
import styles from "./home.module.scss";
import imageBanner from "@/assets/images/IMG.png";
function Home() {
  return (
    <div className={styles.home}>
      <Banner
        imageUrl={imageBanner}
        title="Chez vous, partout et ailleurs"
        showTitle={true}
      />
      <Card />
    </div>
  );
}

export default Home;
