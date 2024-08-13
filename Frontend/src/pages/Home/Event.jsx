import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export const Event = () => {
  return (
    <section className="event">
      <div className="container">
        <h1>Событие</h1>
        <div className="event__wrapper">
          <div className="event__card">
            <h2>Фестиваль</h2>
            <h4>
              Дата <span>18.11.24</span>
            </h4>
            <button aria-label="Смотреть фестиваль">
              Смотреть <FaArrowRightLong className="event__btn-icon" />
            </button>
          </div>
          <div className="event__card">
            <h2>Ярмарка</h2>
            <h4>
              Дата <span>02.08.24</span>
            </h4>
            <button aria-label="Смотреть ярмарку">
              Смотреть <FaArrowRightLong className="event__btn-icon" />
            </button>
          </div>
          <div className="event__card">
            <h2>Концерт</h2>
            <h4>
              Дата <span>10.09.24</span>
            </h4>
            <button aria-label="Смотреть концерт">
              Смотреть <FaArrowRightLong className="event__btn-icon" />
            </button>
          </div>
          <div className="event__card">
            <h2>Фестиваль</h2>
            <h4>
              Дата <span>18.11.24</span>
            </h4>
            <button aria-label="Смотреть фестиваль">
              Смотреть <FaArrowRightLong className="event__btn-icon" />
            </button>
          </div>
          <div className="event__card">
            <h2>Фестиваль</h2>
            <h4>
              Дата <span>18.11.24</span>
            </h4>
            <button aria-label="Смотреть фестиваль">
              Смотреть <FaArrowRightLong className="event__btn-icon" />
            </button>
          </div>
          <div className="event__card">
            <h2>Фестиваль</h2>
            <h4>
              Дата <span>18.11.24</span>
            </h4>
            <button aria-label="Смотреть фестиваль">
              Смотреть <FaArrowRightLong className="event__btn-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
