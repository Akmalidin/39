import React from "react";
import room from "../../assets/images/room.png";
import room2 from "../../assets/images/room2.jpg";
import comps from "../../assets/images/comps.jpeg";
import { NavLink } from "react-router-dom";

export const AbautGalareya = () => {
  return (
    <section data-aos="zoom-in" className="her">
      <div className="container">
        <h2>Наша галерея</h2>
        <div className="her__left__right">
          <div data-aos="fade-down-right" className="her__left">
            <NavLink to="/gallerys">
              <img src={room} alt="room" />
            </NavLink>
          </div>
          <div className="her__right-wrapper">
            <div data-aos="fade-down" className="her__right-top">
              <NavLink to="/gallerys">
                <img src={room2} alt="room" />
              </NavLink>
            </div>
            <div data-aos="zoom-in-up" className="her__right-bottom">
              <NavLink to="/gallerys">
                <img src={comps} alt="room" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
