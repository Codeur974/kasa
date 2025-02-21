import Banner from "../../components/Banner/Banner";
import CollapsContainer from "../../components/collaps/CollapsContainer";
import imageBanner from "@/assets/images/IMG2.png";

function About() {
  return (
    <>
      <Banner imageUrl={imageBanner} showTitle={false} />
      <div>
        <CollapsContainer />
      </div>
    </>
  );
}

export default About;
