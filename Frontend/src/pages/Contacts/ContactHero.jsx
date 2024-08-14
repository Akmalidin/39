import React from 'react';


export const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="container">
        <div className="contact-hero__wrapper">
          <div className="contact-hero__form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input type="text" id="name" name="name" placeholder="Ваше имя" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Ваш Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Сообщение</label>
                <textarea id="message" name="message" placeholder="Ваше сообщение" required></textarea>
              </div>
              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
