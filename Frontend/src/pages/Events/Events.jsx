import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import teach from "../../assets/images/Учитель2.jpg";

export const Events = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/event/events/")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setError("Ошибка при загрузке данных. Попробуйте позже.");
        setLoading(false);
      });
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  // Close modal on "Escape" key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  // Close modal when clicking outside the modal content
  const handleOutsideClick = (event) => {
    if (event.target.className === "modal") {
      closeModal();
    }
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

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
            <button className="teachers__search-button">Поиск</button>
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
          {events.map((event) => (
            <div
              key={event.title}
              className="event__card"
              style={{
                backgroundImage: `url(${
                  event.image || "/src/assets/images/Mask.png"
                })`,
              }}
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
          <div className="modal" onClick={handleOutsideClick}>
            <div className="modal__content">
              <div
                className="modal__image"
                style={{
                  backgroundImage: `url(${
                    selectedEvent.image || "/src/assets/images/Mask.png"
                  })`,
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
