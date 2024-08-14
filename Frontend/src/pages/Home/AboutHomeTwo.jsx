import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

export const AboutHomeTwo = () => {
  return (
    <section data-aos="fade-up" className="about-home-two">
      <div className="container">
        <h1>Наша миссия</h1>
        <p>
          Мы стремимся воспитывать интеллектуально любопытных и социально ответственных учеников, готовых к будущим вызовам. Наши образовательные программы ориентированы на развитие критического мышления и творческого подхода.
        </p>
        <NavLink to="/about" className="about-home-two__link">
          Узнать больше <FaArrowRightLong />
        </NavLink>
      </div>
    </section>
  );
};
