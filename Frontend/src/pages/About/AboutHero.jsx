import React from "react";
import future from "../../assets/images/future.jpg";
import innovations from "../../assets/images/innovations.jpeg";
import values from "../../assets/images/values.jpeg";
import approach from "../../assets/images/approach.jpeg";
import mission from "../../assets/images/mission.jpeg";
import { AboutMisia } from "./AboutMisia";
import { AboutHeroPropis } from "./AboutHeroPropis";

export const AboutHero = () => {
  return (
    <>
      <section className="about__hero">
        <div className="container">
          <AboutHeroPropis
            title="Наша миссия"
            description="В нашей школе мы стремимся предоставить каждому ученику возможность раскрыть свои уникальные способности и достичь максимальный потенциал. Мы создаем поддерживающую и вдохновляющую атмосферу, где каждый ребенок может развиваться как интеллектуально, так и творчески."
            img={mission}
          />
          <AboutHeroPropis
            title="Наш подход"
            description="Мы применяем современные методы обучения, которые способствуют активному вовлечению учеников в учебный процесс. Наш подход основывается на индивидуальных потребностях каждого ребенка, что позволяет эффективно раскрывать его личный потенциал и стимулировать стремление к знаниям."
            img={approach}
          />
        </div>

        <AboutMisia />

        <div className="container">
          <AboutHeroPropis
            title="Наши ценности"
            description="Мы верим в важность личного развития и обучения через практический опыт. Наша школа поощряет инновации и креативность, а также поддерживает активное участие родителей в образовательном процессе, создавая тем самым гармоничную образовательную среду."
            img={values}
          />
          <AboutHeroPropis
            title="Наше будущее"
            description="Мы ориентированы на будущее и постоянно обновляем наши образовательные программы, чтобы они соответствовали современным требованиям и трендам. Наша цель — подготовить учеников к успешной жизни и карьере в быстро меняющемся мире."
            img={future}
          />
          <AboutHeroPropis
            title="Инновации в образовании"
            description="Мы постоянно стремимся внедрять новейшие образовательные технологии и методики, чтобы учебный процесс был интересным и эффективным. Наши ученики осваивают не только теоретические знания, но и получают навыки, необходимые для успешной жизни в современном мире."
            img={innovations}
          />
        </div>
      </section>
    </>
  );
};
