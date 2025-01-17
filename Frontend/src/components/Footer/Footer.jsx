import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../../assets/images/logo_column.png";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { SlSocialFacebook } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const [contact, setContact] = useState({
    phone: "",
    email: ""
  });

  const [links, setLinks] = useState({
    link_tiktok: "",
    link_instagram: "",
    link_facebook: "",
    link_twitter: "",
  });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8001/contact/contacts/")
      .then((response) => {
        if (response.data.length > 0) {
          const contactInfo = response.data[0]; 
          setContact({
            phone: contactInfo.phone_number,
            email: contactInfo.email
          });
        }
      })
      .catch((error) => {
        console.error("Ошибка при загрузке контакта:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8001/link/links/")
      .then((response) => {
        const data = response.data;
        if (data.length > 0) {
          setLinks(data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching links:", error);
      });
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo-section">
            <NavLink to={"/"} className="footer__logo" onClick={scrollToTop}>
              <img src={Logo} alt="School Logo" />
            </NavLink>
          </div>

          <nav className="footer__nav">
            <ul>
              <li>
                <NavLink className="header__nav-item" onClick={scrollToTop} exact to={"/"}>
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink className="header__nav-item" onClick={scrollToTop} to={"/about"}>
                  О нас
                </NavLink>
              </li>
              <li>
                <NavLink className="header__nav-item" onClick={scrollToTop} to={"/teachers"}>
                  Учителя
                </NavLink>
              </li>

              <li>
                <NavLink className="header__nav-item" onClick={scrollToTop} to={"/events"}>
                  События
                </NavLink>
              </li>
              <li>
                <NavLink className="header__nav-item" onClick={scrollToTop} to={"/contacts"}>
                  Контакты
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="footer__contact">
            <h3>Связаться</h3>
            <p>
              <FaPhoneAlt /> <strong> Телефон:</strong> {contact.phone}
            </p>
            <p>
              <MdEmail /> <strong> Email:</strong> {contact.email}
            </p>
            <p>
              <FaLocationDot /> <strong> Адрес:</strong>  Мадумарова 85 а, г.Ош
            </p>
          </div>

          <div className="footer__social-links">
            <div className="footer__icon">
              <a
                href={links.link_instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="footer__icon" />
              </a>
              <a
                href={links.link_youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineYoutube className="footer__icon" />
              </a>
            </div>
            <div className="footer__icon">
              <a
                href={links.link_facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialFacebook className="footer__icon" />
              </a>
              <a
                href={links.link_twitter}
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