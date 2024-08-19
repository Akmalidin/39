import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { MdMeetingRoom } from "react-icons/md";

const useCountUp = (ref, end, duration = 2000) => {
  useEffect(() => {
    const element = ref.current;
    let start = 0;
    const range = end - start;
    let current = start;
    let startTime = null;

    const countUp = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.min(range * (progress / duration), range);
      element.textContent = Math.floor(start + increment);

      if (progress < duration) {
        requestAnimationFrame(countUp);
      } else {
        element.textContent = end; 
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(countUp);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
  }, [ref, end, duration]);
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

export const AboutHomeThree = () => {
  const studentsRef = useRef(null);
  const teachersRef = useRef(null);
  const classesRef = useRef(null);
  const roomRef = useRef(null);

  useCountUp(studentsRef, 1200, 3000); 
  useCountUp(teachersRef, 80, 3000);
  useCountUp(classesRef, 120, 3000);
  useCountUp(roomRef, 70, 3000);

  return (
    <section data-aos="fade-up" className="about-home-three">
      <div className="container">
        <h2>Наш подход</h2>
        <p>
          Мы стремимся открыть перед нашими учениками новые горизонты знаний. В нашей школе каждый ребенок получает возможность развивать свои способности, что закладывает основу для их будущих успехов.
        </p>
        <NavLink to="/about" onClick={scrollToTop} className="about-home-three__link">
          Узнать больше <FaArrowRightLong />
        </NavLink>

        <div className="our__wrapper">
          <div className="our__item">
            <div className="our__item-wrapper">
              <div className="our__icon-wrapper">
                <PiStudentBold className="our__icon" />
              </div>
              <p ref={studentsRef} className="our__count">0</p>
              <h2 className="our__title">Ученики</h2>
            </div>
          </div>
          <div className="our__item">
            <div className="our__item-wrapper">
              <div className="our__icon-wrapper">
                <FaChalkboardTeacher className="our__icon" />
              </div>
              <p ref={teachersRef} className="our__count">0</p>
              <h2 className="our__title">Учителя</h2>
            </div>
          </div>
          <div className="our__item">
            <div className="our__item-wrapper">
              <div className="our__icon-wrapper">
                <SiGoogleclassroom className="our__icon" />
              </div>
              <p ref={classesRef} className="our__count">0</p>
              <h2 className="our__title">Классы</h2>
            </div>
          </div>
          <div className="our__item">
            <div className="our__item-wrapper">
             <div className="our__ittem__info">
             <div className="our__icon-wrapper">
                <MdMeetingRoom className="our__icon" />
              </div>
              <p ref={roomRef} className="our__count">0</p>
             </div>
              <h2 className="our__title our__doptitle">Кабинеты</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
