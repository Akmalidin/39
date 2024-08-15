import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const Event = () => {

  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  
    return null;
  };

  return (
    <section className="event">
      <div className="container">
        <div className="event__head">
          <h2>Событие</h2>
          <NavLink to="/events" onClick={ScrollToTop}>
            <h3>
              смотреть все <FaArrowRightLong className="event__icon" />
            </h3>
          </NavLink>
        </div>
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
