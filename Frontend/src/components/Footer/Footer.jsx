import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../../assets/images/logo_column.png";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiTiktokFill } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  const [links, setLinks] = useState({
    link_tiktok: "",
    link_instagram: "",
    link_facebook: "",
    link_twitter: "",
  });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/link/links/")
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
              <FaPhoneAlt /> <strong> Телефон:</strong> +62.21.5314.1135
            </p>
            <p>
              <MdEmail /> <strong> Email:</strong> community@dwidasa.com
            </p>
            <p>
              <FaLocationDot /> <strong> Адрес:</strong> Атабаева 58
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
                href={links.link_tiktok}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTiktokFill className="footer__icon" />
              </a>
            </div>
            <div className="footer__icon">
              <a
                href={links.link_facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="footer__icon" />
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
