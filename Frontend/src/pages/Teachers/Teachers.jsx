import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoLogoWhatsapp } from "react-icons/io5";

const formatPhoneNumber = (number) => {
  return number.replace(/\D/g, "");
};

export const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/teacher/teachers/")
      .then((response) => {
        console.log(response.data);
        setTeachers(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.the_teacher_of.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    // This function can be used for any additional search logic if needed
    console.log("Search triggered:", searchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="teachers">
      <div className="teachers__search">
        <div className="container">
          <h2>Познакомьтесь с нашим учителя</h2>
          <div className="teachers__search-bar">
            <input
              type="text"
              placeholder="Поиск учителя..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
              className="teachers__input"
            />
            <button onClick={handleSearch} className="teachers__search-button">
              Поиск
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="teachers__list">
          {filteredTeachers.length > 0 ? (
            filteredTeachers.map((teach) => (
              <div key={teach.id} className="teacher__card">
                <a
                  href={`https://wa.me/${formatPhoneNumber(teach.phone_number)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="teacher__link"
                >
                  <div className="teacher__image">
                    <img
                      src={teach.photo || "path-to-your-placeholder-image"}
                      alt={teach.name}
                    />
                    <IoLogoWhatsapp className="whatsapp-icon" size={40} />
                  </div>
                  <div className="teacher__info">
                    <h3>{teach.name}</h3>
                    <p>{teach.the_teacher_of}</p>
                  </div>
                </a>
              </div>
            ))
          ) : (
            <p className="teachers__no-results">Учителя не найдены</p>
          )}
        </div>
      </div>
    </section>
  );
};
