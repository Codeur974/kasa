import doc from "@/doc.json";
import UnitCard from "./unitCard";
import styles from "./cards.module.scss";

const Card = () => {
  return (
    <div className={styles.cards}>
      <ul>
        {doc.map((itemCard) => (
          <UnitCard itemCard={itemCard} key={itemCard.id} />
        ))}
      </ul>
    </div>
  );
};

export default Card;
