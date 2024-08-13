import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoLogoWhatsapp } from "react-icons/io5";

const formatPhoneNumber = (number) => {
  return number.replace(/\D/g, '');
};

export const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/teacher/teachers/")
      .then((response) => {
        console.log(response.data);
        setTeachers(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="teachers">
      <div className="container">
        <h2>Познакомьтесь с нашими учителями</h2>
        <div className="teachers__list">
          {teachers.map((teach) => (
            <div key={teach.id} className="teacher__card">
              <a
                href={`https://wa.me/${formatPhoneNumber(teach.phone_number)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="teacher__link"
              >
                <div className="teacher__image">
                  <img
                    data-aos="zoom-in-up"
                    data-aos-easing="linear"
                    data-aos-duration="3000"
                    src={teach.photo || "path-to-your-placeholder-image"}
                    alt={teach.name}
                  />
                  <IoLogoWhatsapp className="whatsapp-icon" size={40} />
                </div>
                <div data-aos="zoom-out-up" className="teacher__info">
                  <h3>{teach.name}</h3>
                  <p>{teach.the_teacher_of}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
