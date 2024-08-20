import React, { useState, useEffect } from "react";
import axios from "axios";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContact = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://127.0.0.1:8000/contact/contacts/");
        if (response.data.length > 0) {
          setContact(response.data[0]);
        } else {
          setStatus("Контактная информация не найдена.");
        }
      } catch (error) {
        console.error("Ошибка при загрузке контакта:", error);
        setStatus("Ошибка при загрузке контактной информации.");
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, []);

  // Обработчик для добавления отзыва
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const reviewData = {
      name,
      message,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/review/reviews/",
        reviewData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setStatus("Ваш отзыв был отправлен успешно!");
        clearForm();
      } else {
        setStatus("Ошибка при отправке отзыва.");
      }
    } catch (error) {
      console.error("Ошибка сети:", error);
      setStatus("Ошибка сети. Пожалуйста, попробуйте еще раз.");
    } finally {
      setLoading(false);
    }
  };

  // Обработчик для отправки доверенности
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    if (!contact || !contact.phone_number) {
      setStatus("Ошибка: контактная информация недоступна.");
      return;
    }

    // Удаление всех нецифровых символов из номера телефона
    const phoneNumber = contact.phone_number.replace(/[^0-9]/g, "");

    // Формирование сообщения
    const whatsappMessage = encodeURIComponent(
      `Имя: ${name}\nСообщение: ${message}`
    );

    // Формирование URL для WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Открытие WhatsApp с сформированным сообщением
    window.open(whatsappURL, "_blank");

    setStatus("");
    clearForm();
  };

  // Очистка формы
  const clearForm = () => {
    setName("");
    setMessage("");
  };

  return (
    <div className="contact-hero__form">
      <form>
        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Сообщение</label>
          <textarea
            id="message"
            name="message"
            placeholder="Ваше сообщение"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-btns">
          <button type="button" onClick={handleReviewSubmit} disabled={loading}>
            {loading ? "Отправка..." : "Добавить отзыв"}
          </button>
          <button type="button" onClick={handleWhatsAppSubmit} disabled={loading}>
            {loading ? "Отправка..." : "Отправить доверенность"}
          </button>
        </div>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};
