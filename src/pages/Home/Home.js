import Banner from "@/components/Banner/Banner";
import Card from "@/components/Cards/Cards";
function Home() {
  return (
    <div>
      <Banner
        imageUrl={`${process.env.PUBLIC_URL}/images/IMG.png`}
        title="Bienvenue chez nous"
      />
      <Card />
    </div>
  );
}

export default Home;
