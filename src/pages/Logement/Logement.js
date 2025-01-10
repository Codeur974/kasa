import doc from "@/doc.json";
import React from "react";
import { useParams } from "react-router-dom";
import Slider from "./slider/Slider";

import Styles from "./logement.module.scss";
import Rating from "./rating/Rating"; // Assurez-vous que le chemin est correct
import Collaps from "../../components/collaps/Collaps";

const Logement = () => {
  const { id } = useParams();
  const logement = doc.find((item) => item.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }
  const [firstName, lastName] = logement.host.name.split(" ");
  return (
    <div className={Styles.logement}>
      <Slider pictures={logement.pictures} />
      <div className={Styles.logement__content}>
        <div className={Styles.logement__block}>
          <h2 className={Styles.logement__title}>{logement.title}</h2>
          <h3 className={Styles.logement__location}>{logement.location}</h3>
          <h4 className={Styles.logement__tags}>
            {logement.tags.map((tag, index) => (
              <span key={index} className={Styles.logement__tag}>
                {tag}
              </span>
            ))}
          </h4>
          <Collaps title={"Description"} className={Styles.logement__collaps} />
        </div>

        <div className={Styles.logement__block}>
          <div className={Styles.logement__host}>
            <div className={Styles.logement__host__name}>
              <h3>{firstName}</h3>
              <h3>{lastName}</h3>
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

          <Collaps title={"Equipement"} className={Styles.logement__collaps} />
        </div>
      </div>
    </div>
  );
};

export default Logement;
