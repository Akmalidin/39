import React from "react";
import Logo from "../../assets/images/logo_column.png";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiTiktokFill } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo-section">
            <NavLink to={"/"} className="footer__logo">
              <img src={Logo} alt="School Logo" />
            </NavLink>
          </div>

          <nav className="footer__nav">
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
                <NavLink className="header__nav-item" to={"/academics"}>
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

          <div className="footer__contact">
            <h3>Связаться</h3>
            <p>
              <strong><FaPhoneAlt/> Телефон:</strong> +62.21.5314.1135
            </p>
            <p>
              <strong><MdEmail/> Email:</strong> community@dwidasa.com
            </p>
            <p>
              <strong><FaLocationDot/> Адрес:</strong> Атабаева 58
            </p>
          </div>

          <div className="footer__social-links">
            <div className="footer__icon">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="footer__icon" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTiktokFill className="footer__icon" />
              </a>
            </div>
            <div className="footer__icon">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="footer__icon" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter className="footer__icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
