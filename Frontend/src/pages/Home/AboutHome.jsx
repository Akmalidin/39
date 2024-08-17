import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

export const AboutHome = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <section data-aos="zoom-in-down" className="about-home">
      <div className="container">
        <h1>О нашей школе</h1>
        <p>
          Мы — образовательное учреждение с богатой историей и традициями. Наша школа предлагает качественное образование, поддерживает всестороннее развитие детей и создает поддерживающую и стимулирующую учебную среду.
        </p>
        <NavLink to="/about" onClick={scrollToTop} className="about-home__link">
          Узнать больше <FaArrowRightLong />
        </NavLink>
      </div>
    </section>
  );
};
