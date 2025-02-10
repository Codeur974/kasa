import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import styles from "./rating.module.scss";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={styles.rating}>
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className={styles.star} />
      ))}
      {halfStar && (
        <FontAwesomeIcon icon={faStarHalfAlt} className={styles.star} />
      )}
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
