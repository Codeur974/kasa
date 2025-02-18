import doc from "@/doc.json";
import React from "react";

import { useParams, Navigate } from "react-router-dom";
import Slider from "../../components/slider/Slider";

import Styles from "./logement.module.scss";
import Rating from "../../components/rating/Rating"; // Assurez-vous que le chemin est correct
import Collaps from "../../components/collaps/Collaps";

const Logement = () => {
  const { id } = useParams();
  const logement = doc.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/error" replace={true} />; // Utilise le composant Navigate pour rediriger
  }
  const [firstName, lastName] = logement.host.name.split(" ");
  return (
    <div className={Styles.logement}>
      <Slider pictures={logement.pictures} />
      <div className={Styles.logement__content}>
        <div className={Styles.logement__blockContent}>
          <h2 className={Styles.logement__title}>{logement.title}</h2>
          <p className={Styles.logement__location}>{logement.location}</p>
          <h4 className={Styles.logement__tags}>
            {logement.tags.map((tag, index) => (
              <span key={index} className={Styles.logement__tag}>
                {tag}
              </span>
            ))}
          </h4>
        </div>

        <div className={Styles.logement__block}>
          <div className={Styles.logement__host}>
            <div className={Styles.logement__host__name}>
              <p className={Styles.logement__firstname}>{firstName}</p>
              <p className={Styles.logement__lastname}>{lastName}</p>
            </div>

            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className={Styles.hostPicture}
            />
          </div>
          <div className={Styles.logement__rating}>
            <Rating rating={logement.rating} />
          </div>
        </div>
      </div>
      <div className={Styles.logement__collapsContainer}>
        <Collaps
          title={"Description"}
          description={logement.description}
          className={Styles.logement__collaps}
          titleClassName={Styles.collaps__title}
        />
        <Collaps
          title="Équipements"
          equipments={logement.equipments}
          className={Styles.logement__collaps}
          titleClassName={Styles.collaps__title}
        />
      </div>
    </div>
  );
};

export default Logement;
