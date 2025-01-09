import Banner from "../../components/Banner/Banner";
import CollapsContainer from "../../components/collaps/CollapsContainer";
import styles from "./about.module.scss";

function About() {
  return (
    <div>
      <Banner imageUrl={`${process.env.PUBLIC_URL}/images/IMG2.png`} />
      <div className={styles.about__content}>
        <CollapsContainer />
      </div>
    </div>
  );
}

export default About;
