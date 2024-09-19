import React, { useState, useEffect } from "react";
import axios from "axios";
import { GrContactInfo } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import loadingi from "../../assets/images/loading.svg";
import notfound from "../../assets/images/not-found.jpeg";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

export const Personal = () => {
  const [personal, setPersonal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8001/personal/personals")
      .then((response) => {
        setPersonal(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Не удалось загрузить данные персоналом");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <img src={loadingi} alt="Загрузка" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <img src={notfound} alt="Ошибка загрузки" />
      </div>
    );
  }

  if (personal.length === 0) {
    return (
      <div className="no-product">
        <p>На данный момент персонал отсутствует.</p>
      </div>
    );
  }

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
              <div
                className="personal__image"
                onClick={() => {
                  if (person.pdf_file) {
                    window.open(person.pdf_file, "_blank");
                  } else {
                    alert("PDF файл не найден.");
                  }
                }}
              >
                <img
                  src={person.photo || "path-to-your-placeholder-image"}
                  alt={person.name}
                />
                <GrContactInfo className="whatsapp-icon" size={40} />
              </div>
              <div className="personal__info">
                <h3>{person.name}</h3>
                <p>{person.the_teacher_of}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
