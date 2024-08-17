import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero_img from "../../assets/images/Учитель.png";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const Hero = () => {
  const [links, setLinks] = useState({ link_instagram: "" });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/link/links/")
      .then((response) => {
        setLinks(response.data[0]);
      })
      .catch((error) => console.error("Error fetching the links:", error));
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div data-aos="zoom-in-right" className="hero__info">
            <h1>Образование — ключ к успеху</h1>
            <h4>Каждый урок — шаг к достижению вашей мечты.</h4>
            <div className="hero__info-btns">
              <NavLink to={"/about"}>
                <button>
                  Узнать больше <FaArrowRightLong className="info__btn-icon1" />
                </button>
              </NavLink>
              <a
                href={links.link_instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <FaInstagram className="info__btn-icon2" /> Instagram
                </button>
              </a>
            </div>
          </div>
          <img
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
            src={Hero_img}
            alt="Учитель"
          />
        </div>
      </div>
    </section>
  );
};
