import React from "react";

export const AboutHeroPropis = ({ title, description, img }) => {
  return (
    <div className="hero__content">
      <div  data-aos="zoom-out" className="hero__text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <img
        src={img}
        alt="Классная комната"
        className="hero__image"
      />
    </div>
  );
};
