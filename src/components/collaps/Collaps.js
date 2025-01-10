import styles from "./collaps.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Collaps({ title, description, className }) {
  const [isOpen, setOpen] = useState(false);

  const toggleDescription = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={`${className}`}>
      <div className={styles.collaps} onClick={toggleDescription}>
        <h3 className={styles.collaps__title}>{title}</h3>

        <div>
          <FontAwesomeIcon
            icon={faAngleUp}
            className={`${styles.icon} ${isOpen ? styles.rotate : ""}`}
          />
        </div>
      </div>
      <div
        className={`${styles.collaps__description} ${
          isOpen ? styles.open : styles.closed
        }`}
      >
        <p className={styles.collaps__paragraph}>{description}</p>
      </div>
    </div>
  );
}
