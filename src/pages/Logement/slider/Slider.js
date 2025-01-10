import React from "react";

import { useState } from "react";
import Styles from "./slider.module.scss";

function Slider({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className={Styles.slider}>
      <button className={Styles.prev} onClick={prevSlide}>
        ❮
      </button>
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className={Styles.image}
      />
      <button className={Styles.next} onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}

export default Slider;
