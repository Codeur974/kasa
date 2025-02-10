import api from "@/doc.json";
import Card from "./Card";
import styles from "./cards.module.scss";

const Cards = () => {
  return (
    <div className={styles.cards}>
      <ul>
        {api.map((itemCard) => (
          <Card itemCard={itemCard} key={itemCard.id} />
        ))}
      </ul>
    </div>
  );
};
export default Cards;
