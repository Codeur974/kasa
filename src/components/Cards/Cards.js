import doc from "@/doc.json";
import UnitCard from "./unitCard";
import styles from "./cards.module.scss";

const Card = () => {
  const handleCardClick = (itemCard) => {
    console.log("Card clicked:", itemCard);
  };

  return (
    <div className={styles.cards}>
      <ul>
        {doc.map((itemCard) => (
          <UnitCard
            itemCard={itemCard}
            key={itemCard.id}
            onClick={() => handleCardClick(itemCard)}
          />
        ))}
      </ul>
    </div>
  );
};
export default Card;
