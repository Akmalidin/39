import React, { useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <header data-aos="fade-down">
      <div className="container">
        <div className="header__wrapper">
          <NavLink to={"/"}>
            <img src={Logo} alt="School Logo" />
          </NavLink>
          <nav>
            <ul>
              <li>
                <NavLink className="header__nav-item" exact to={"/"}>
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink className="header__nav-item" to={"/about"}>
                  О нас
                </NavLink>
              </li>
              <li>
                <NavLink className="header__nav-item" to={"/teachers"}>
                  Учителя
                </NavLink>
              </li>
              <li>
                <NavLink className="header__nav-item" to={"/events"}>
                  События
                </NavLink>
              </li>
              <li>
                <NavLink className="header__nav-item" to={"/contacts"}>
                  Контакты
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
