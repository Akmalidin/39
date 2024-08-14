import React from "react";
import { PiStudentBold } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

export const Our = () => {
  return (
    <section className="our">
      <div className="container">
        <div className="our__wrapper">
          <div className="our__item">
            <div className="our__item-wrapper">
              <div className="our__icon-wrapper">
                <PiStudentBold className="our__icon" />
              </div>
              <p className="our__count">1200</p>
              <h2 className="our__title">Ученики</h2>
            </div>
          </div>
          <div className="our__item">
            <div className="our__item-wrapper">
              <div className="our__icon-wrapper">
                <FaChalkboardTeacher className="our__icon" />
              </div>
              <p className="our__count">78</p>
              <h2 className="our__title">Учителя</h2>
            </div>
          </div>
          <div className="our__item">
            <div className="our__item-wrapper">
              <div className="our__icon-wrapper">
                <SiGoogleclassroom className="our__icon" />
              </div>
              <p className="our__count">120</p>
              <h2 className="our__title">Классы</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
