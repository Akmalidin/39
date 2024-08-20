import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Translate from "../Translate";

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDelta = 15;

      if (Math.abs(currentScrollTop - lastScrollTop) <= scrollDelta) {
        return;
      }

      if (currentScrollTop > lastScrollTop && currentScrollTop > 80) {
        setIsSticky(false);
        setScrollingUp(false);
      } else if (currentScrollTop < lastScrollTop && currentScrollTop > 180) {
        setIsSticky(true);
        setScrollingUp(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`header ${isSticky ? "sticky" : ""} ${scrollingUp ? "scrolling-up" : ""}`}
      data-aos="fade-down"
    >
      <div className="container">
        <div className="header__wrapper">
          <NavLink to={"/"}>
            <img src={Logo} alt="School Logo" />
          </NavLink>
          <div className={`hamburger-menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <nav className={menuOpen ? "active" : ""}>
            <ul>
              <li>
                <NavLink className="header__nav-item" to={"/"}>
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
              <li>
                <Translate />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
