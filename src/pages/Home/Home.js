import Banner from "@/components/Banner/Banner";
import Card from "@/components/Cards/Cards";
import styles from "./home.module.scss";
function Home() {
  return (
    <div className={styles.home}>
      <Banner
        imageUrl={`${process.env.PUBLIC_URL}/images/IMG.png`}
        title="Chez vous, partout et ailleurs"
      />
      <Card />
    </div>
  );
}

export default Home;
