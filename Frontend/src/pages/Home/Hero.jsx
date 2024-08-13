import React from "react";
import Hero_img from "../../assets/images/Учитель.png";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div data-aos="zoom-in-right" className="hero__info">
            <h1>Образование — ключ к успеху</h1>
            <h4>Каждый урок — шаг к достижению вашей мечты.</h4>
            <div className="hero__info-btns">
              <button>
                Узнать больше <FaArrowRightLong />
              </button>
              <button>
                <FaInstagram className="info__btn-icon" /> Instagram
              </button>
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
