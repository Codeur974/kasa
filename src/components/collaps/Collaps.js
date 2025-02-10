import styles from "./collaps.module.scss";
import { SlArrowUp } from "react-icons/sl";
import { useState } from "react";

export default function Collaps({
  title,
  description,
  className,
  titleClassName,
  equipments,
}) {
  const [isOpen, setOpen] = useState(false);

  const toggleDescription = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={`${className}`}>
      <div className={styles.collaps} onClick={toggleDescription}>
        <h3 className={`${styles.collaps__title} ${titleClassName}`}>
          {title}
        </h3>

        <div>
          <SlArrowUp
            className={`${styles.icon} ${isOpen ? styles.rotate : ""}`}
          />
        </div>
      </div>
      <div
        className={`${styles.collaps__description} ${
          isOpen ? styles.open : styles.closed
        }`}
      >
        {description && (
          <div className={styles.collaps__paragraph}>{description}</div>
        )}
        {equipments && (
          <ul className={styles.collaps__equipmentsContainer}>
            {equipments.map((equipement, index) => (
              <li key={index} className={styles.collaps__equipment}>
                {equipement}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
