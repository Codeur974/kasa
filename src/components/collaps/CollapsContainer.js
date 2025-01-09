import Collaps from "./Collaps";
import styles from "./collaps.module.scss";

export default function CollapsContainer() {
  return (
    <div className={styles.collapsContainer}>
      <Collaps
        title={"Fiabilité"}
        description={`Les annonces fait sur Kasa garentissent une fiabilité total. Les photos sont conformes aux logements,et toutes les informations sont régulièrement vérifiépar nos équipes.`}
      />
      <Collaps
        title={"Respect"}
        description={`Les annonces fait sur Kasa garentissent une fiabilité total. Les photos sont conformes aux logements,et toutes les informations sont régulièrement vérifiépar nos équipes.`}
      />
      <Collaps
        title={"Service"}
        description={`Les annonces fait sur Kasa garentissent une fiabilité total. Les photos sont conformes aux logements,et toutes les informations sont régulièrement vérifiépar nos équipes.`}
      />

      <Collaps
        title={"Sécurité"}
        description={`Les annonces fait sur Kasa garentissent une fiabilité total. Les photos sont conformes aux logements,et toutes les informations sont régulièrement vérifiépar nos équipes.`}
      />
    </div>
  );
}
