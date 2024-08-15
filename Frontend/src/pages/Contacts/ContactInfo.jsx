import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/contact/contacts/")
      .then(response => {
        // Проверяем, что массив не пуст, и получаем первый контакт
        if (response.data.length > 0) {
          setContact(response.data[0]);
        }
      })
      .catch(error => {
        console.error("Ошибка при загрузке контакта:", error);
      });
  }, []);

  // Проверяем, загружены ли данные
  if (!contact) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="contact-hero__info">
      <img
        src={contact.photo}
        alt={contact.name}
        className="contact-hero__image"
      />
      <h2>{contact.name}</h2>
      <p>{contact.admin}</p>
      <p>
        <FaPhoneAlt /> Телефон: {contact.phone_number}
      </p>
      <p>
        <MdEmail /> Email: {contact.email}
      </p>
    </div>
  );
};

export default ContactInfo;
