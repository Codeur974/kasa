import Banner from "@/components/Banner/Banner";
import Cards from "@/components/Cards/Cards";
import imageBanner from "@/assets/images/IMG.png";
function Home() {
  return (
    <>
      <Banner
        imageUrl={imageBanner}
        title="Chez vous, partout et ailleurs"
        showTitle={true}
      />
      <Cards />
    </>
  );
}

export default Home;
