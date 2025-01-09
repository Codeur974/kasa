import styles from "./cards.module.scss";

function unitCard({ itemCard }) {
  return (
    <div className={styles.unitCard}>
      <li key={itemCard.id}>
        <h3>{itemCard.title}</h3>
        <img src={itemCard.cover} alt={itemCard.title} />
      </li>
    </div>
  );
}

export default unitCard;
