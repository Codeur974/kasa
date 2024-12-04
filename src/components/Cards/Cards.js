import doc from "../../doc.json";
import React, { useState, useEffect } from "react";
import styles from "./cards.module.scss";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const filteredData = doc.map((itemCards) => ({
      image: itemCards.cover,
      title: itemCards.title,
    }));

    setData(filteredData);
  }, []);

  return (
    <div className={styles.cards}>
      <ul className="">
        {data.map((itemCards, index) => (
          <li key={index}>
            <h3>{itemCards.title}</h3>
            <img src={itemCards.image} alt={itemCards.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
