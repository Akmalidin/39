import React, { useState } from 'react';
import axios from 'axios';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      name: name,
      message: message,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/review/reviews/', reviewData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) { 
        setStatus('Ваш отзыв был отправлен успешно!');
        setName('');
        setMessage('');
      } else {
        setStatus('Ошибка при отправке отзыва.');
      }
    } catch (error) {
      console.error('Ошибка сети:', error);
      setStatus('Ошибка сети. Пожалуйста, попробуйте еще раз.');
    }
  };

  return (
    <div className="contact-hero__form">
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Добавить отзыв</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};
