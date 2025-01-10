import styles from "./cards.module.scss";
import { Link } from "react-router-dom";

function unitCard({ itemCard, onClick }) {
  return (
    <div className={styles.unitCard}>
      <Link to={`/logement/${itemCard.id}`}>
        <li key={itemCard.id} onClick={onClick}>
          <h3>{itemCard.title}</h3>
          <img src={itemCard.cover} alt={itemCard.title} />
        </li>
      </Link>
    </div>
  );
}

export default unitCard;
