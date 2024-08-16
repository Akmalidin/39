import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  })
}


const formatPhoneNumber = (number) => {
  return number.replace(/\D/g, "");
};

export const Personal = () => {
  const [personal, setPersonal] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/personal/personals/")
      .then((response) => {
        console.log(response.data);
        setPersonal(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="personal">
      <div className="container">
        <div className="personal__head">
          <h2>Познакомьтесь с нашим персоналом</h2>
          <NavLink to="/teachers" onClick={scrollToTop}>
            <h3>
              Учителя <FaArrowRightLong className="personal__icon" />
            </h3>
          </NavLink>
        </div>
        <div className="personal__list">
          {personal.map((person) => (
            <div key={person.id} className="personal__card">
              <a
                href={`https://wa.me/${formatPhoneNumber(person.phone_number)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="personal__link"
              >
                <div className="personal__image">
                  <img
                    src={person.photo || "path-to-your-placeholder-image"}
                    alt={person.name}
                  />
                  <IoLogoWhatsapp className="whatsapp-icon" size={40} />
                </div>
                <div className="personal__info">
                  <h3>{person.name}</h3>
                  <p>{person.the_teacher_of}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};