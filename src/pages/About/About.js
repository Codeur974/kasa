import Banner from "../../components/Banner/Banner";
import CollapsContainer from "../../components/collaps/CollapsContainer";
import styles from "./about.module.scss";
import imageBanner from "@/images/IMG2.png";

function About() {
  return (
    <div>
      <Banner imageUrl={imageBanner} />
      <div className={styles.about__content}>
        <CollapsContainer />
      </div>
    </div>
  );
}

export default About;
