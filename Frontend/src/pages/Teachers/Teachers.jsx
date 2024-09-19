import React, { useState, useEffect } from "react";
import axios from "axios";
import { GrContactInfo } from "react-icons/gr";
import teach from "../../assets/images/teachers.jpg";
import loadingi from "../../assets/images/loading.svg";
import notfound from "../../assets/images/not-found.jpeg";
import oops from "../../assets/images/oops.png";

export const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8001/teacher/teachers/")
      .then((response) => {
        setTeachers(response.data);
        setFilteredTeachers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Ошибка при загрузке данных. Попробуйте позже.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = teachers.filter(
      (teacher) =>
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.the_teacher_of.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTeachers(filtered);
  }, [searchTerm, teachers]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <img src={loadingi} alt="Загрузка..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <img src={notfound} alt="Ошибка при загрузке" />
      </div>
    );
  }

  return (
    <section className="teachers">
      <div className="teachers__search">
        <div className="container">
          <h2>Познакомьтесь с нашими учителями</h2>
          <div className="teachers__search-bar">
            <input
              type="text"
              placeholder="Поиск учителя..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
              className="teachers__input"
            />
            <button className="teachers__search-button">Поиск</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="teachers__wrapper">
          <div className="fairs-grid">
            <div className="fairs-left">
              <h2>Школьные мероприятия</h2>
              <p>
                В нашей школе проводятся разнообразные мероприятия, на которых
                ученики могут проявить свои таланты и развить новые навыки.
              </p>
              <p>
                Участвуя в проектах, конкурсах и мастер-классах, ребята получают
                бесценный опыт, укрепляют командный дух и находят новых друзей.
              </p>
            </div>
            <div className="fairs-right">
              <img src={teach} alt="Учитель" className="fairs-image" />
            </div>
          </div>
          <div className="teachers__list">
            {filteredTeachers.length > 0 ? (
              filteredTeachers.map((teach) => (
                <div key={teach.id} className="teacher__card">
                  <div
                    className="teacher__image"
                    onClick={() => {
                      if (teach.pdf_file) {
                        window.open(teach.pdf_file, "_blank");
                      } else {
                        alert("PDF файл не найден.");
                      }
                    }}
                  >
                    <img
                      src={teach.photo || "path-to-your-placeholder-image"}
                      alt={teach.name}
                    />
                    <GrContactInfo className="whatsapp-icon" size={40} />
                  </div>
                  <div className="teacher__info">
                    <h3>{teach.name}</h3>
                    <p>{teach.the_teacher_of}</p>
                  </div>
                </div>
              ))
            ) : searchTerm ? (
              <img className="oops" src={oops} alt="не найден" />
            ) : (
              <div className="no-product">
                <p>На данный момент нет доступных учителей.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
