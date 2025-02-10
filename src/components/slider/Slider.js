import React, { useState } from "react";
import Styles from "./slider.module.scss";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

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
      {pictures.length > 1 && (
        <>
          <button className={Styles.prev} onClick={prevSlide}>
            <SlArrowLeft />
          </button>
          <button className={Styles.next} onClick={nextSlide}>
            <SlArrowRight />
          </button>
        </>
      )}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className={Styles.image}
      />
      {pictures.length > 1 && (
        <div className={Styles.counter}>
          {currentIndex + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
}

export default Slider;
