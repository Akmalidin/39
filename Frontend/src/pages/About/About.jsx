import React from "react";
import { AboutHero } from "./AboutHero";
import { AbautGalareya } from "./AbautGalareya";

export const About = () => {
  return (
    <section className="about">
      <div  data-aos="zoom-in-down" className="about__wrapper">
        <div className="container">
          <h2>О нашей школе</h2>
          <p>
            Наша школа имени Октябрьской революции предоставляет качественное
            образование с 1987 года. Она находится по адресу ул. Магзиева, 85а в
            городе Ош. Школа предлагает обучение на узбекском и русском языке и
            имеет проектную вместимость на 1200 учеников. На данный момент в
            школе обучаются 900 учеников. Мы гордимся нашими достижениями и
            стремимся к совершенству в учебном процессе, продолжая воспитывать
            поколения творческих, амбициозных и талантливых людей.
          </p>
        </div>
      </div>

      <AboutHero />
      <AbautGalareya/>
    </section>
  );
};
