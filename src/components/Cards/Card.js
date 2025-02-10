import styles from "./cards.module.scss";
import { Link } from "react-router-dom";

function Card({ itemCard }) {
  return (
    <div className={styles.unitCard}>
      <Link to={`/logement/${itemCard.id}`} className={styles.unitCard__link}>
        <li key={itemCard.id}>
          <h3>{itemCard.title}</h3>
          <img src={itemCard.cover} alt={itemCard.title} />
        </li>
      </Link>
    </div>
  );
}

export default Card;
