import React, { useState, useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const Event = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/event/events/")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <section className="event">
      <div className="container">
        <div className="event__head">
          <h2>Событие</h2>
          <NavLink to="/events" onClick={scrollToTop}>
            <h3>
              смотреть все <FaArrowRightLong className="event__icon" />
            </h3>
          </NavLink>
        </div>
        <div className="event__wrapper">
          {events.slice(0, 10).map((event) => (
            <div
              key={event.title}
              className="event__card"
              style={{ backgroundImage: `url(${event.image || '/src/assets/images/Mask.png'})` }}
            >
              <h2>{event.title}</h2>
              <h4>
                Дата <span>{new Date(event.date).toLocaleDateString()}</span>
              </h4>
              <button
                aria-label={`Смотреть ${event.title}`}
                onClick={() => openModal(event)}
              >
                Смотреть <FaArrowRightLong className="event__btn-icon" />
              </button>
            </div>
          ))}
        </div>
        {isModalOpen && selectedEvent && (
          <div className="modal">
            <div className="modal__content" ref={modalRef}>
              <div
                className="modal__image"
                style={{
                  backgroundImage: `url(${selectedEvent.image || '/src/assets/images/Mask.png'})`,
                }}
              ></div>
              <div className="modal__info">
                <h2>{selectedEvent.title}</h2>
                <p>{selectedEvent.description}</p>
                <p>
                  <strong>Дата:</strong>{" "}
                  {new Date(selectedEvent.date).toLocaleDateString()}
                </p>
                <button onClick={closeModal}>Закрыть</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
