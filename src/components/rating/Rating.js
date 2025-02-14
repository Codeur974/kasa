import React from "react";
import styles from "./rating.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

const Rating = ({ rating }) => {
  const fullStars = Math.round(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className={styles.rating}>
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className={styles.star} />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStarEmpty}
          className={styles.star}
        />
      ))}
    </div>
  );
};

export default Rating;
