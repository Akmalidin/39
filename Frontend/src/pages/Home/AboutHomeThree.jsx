import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

export const AboutHomeThree = () => {
  return (
    <section data-aos="fade-up" className="about-home-three">
      <div className="container">
        <h1>Наш подход</h1>
        <p>
          Мы стремимся открыть перед нашими учениками новые горизонты знаний. В нашей школе каждый ребенок получает возможность развивать свои способности, что закладывает основу для их будущих успехов.
        </p>
        <NavLink to="/about" className="about-home-three__link">
          Узнать больше <FaArrowRightLong />
        </NavLink>
      </div>
    </section>
  );
};
