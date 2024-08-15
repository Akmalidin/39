import React from "react";

export const ContactMap = () => {
  return (
    <div className="contact-hero__map">
      <h3>
        Наш адрес : <span>Мадумарова 85 а, г.Ош</span>
      </h3>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Abe8ebdb5d66b61a82d698a2bbdb3d2914e8285d2929ebf61045dd0bae6d6d07f&amp;source=constructor"
        width="525"
        height="250"
        frameborder="2"
        loading="lazy"
      ></iframe>
    </div>
  );
};
