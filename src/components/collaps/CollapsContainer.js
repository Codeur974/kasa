import Collaps from "./Collaps";
import styles from "./collaps.module.scss";

export default function CollapsContainer() {
  return (
    <div className={styles.collapsContainer}>
      <Collaps
        title={"Fiabilité"}
        description={
          "Les annonces fait sur Kasa garentissent une fiabilité total. Les photos sont conformes aux logements,et toutes les informations sont régulièrement vérifiépar nos équipes."
        }
      />
      <Collaps
        title={"Respect"}
        description={`La bienveillance fait partie des valeur fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.`}
      />
      <Collaps
        title={"Service"}
        description={`La qualité de service est au coeur de notre engagement chez kaza. Nous veillons à ce que chaque intéraction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.`}
      />

      <Collaps
        title={"Sécurité"}
        description={`La sécurité est la priorité de kaza. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respecteés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes.`}
      />
    </div>
  );
}
