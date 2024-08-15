import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import teach from "../../assets/images/Учитель2.jpg";

export const Events = () => {
  return (
    <section className="school-fairs-section">
       <div className="event__search">
        <div className="container">
          <h2>Школьные События</h2>
          <div className="event__search-bar">
            <input
              type="text"
              placeholder="Поиск cобытия..."
              className="event__input"
            />
            <button className="teachers__search-button">
              Поиск
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="fairs-grid">
          <div className="fairs-left">
            <h2>Школьные Ярмарки</h2>
            <p>
              Школьные ярмарки — это увлекательные события, где учащиеся могут
              продемонстрировать свои проекты и участвовать в различных
              конкурсах и мастер-классах.
            </p>
            <p>
              Эти мероприятия способствуют развитию творческого потенциала детей
              и позволяют им проявить себя в различных областях.
            </p>
          </div>
          <div className="fairs-right">
            <img src={teach} alt="Учитель" className="fairs-image" />
          </div>
        </div>
        <div className="event__wrapper">
          {[
            { title: "Фестиваль", date: "18.11.24" },
            { title: "Ярмарка", date: "02.08.24" },
            { title: "Концерт", date: "10.09.24" },
            { title: "Фестиваль", date: "18.11.24" },
            { title: "Ярмарка", date: "02.08.24" },
            { title: "Концерт", date: "10.09.24" },
          ].map((event, index) => (
            <div className="event__card" key={index}>
              <h2>{event.title}</h2>
              <h4>
                Дата <span>{event.date}</span>
              </h4>
              <button aria-label={`Смотреть ${event.title.toLowerCase()}`}>
                Смотреть <FaArrowRightLong className="event__btn-icon" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
