import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import "./MobileNavbar.css";

function MobileNavbar() {
  const [t, i18n] = useTranslation("global");
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <div className="mobile-container">
      <span
        className="hamburger-icon"
        onClick={() => setIsDropDown(!isDropDown)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="33"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mobile-menu"
        >
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
      </span>
      <div
        className="navbar-dropdown"
        style={{ left: isDropDown ? "0%" : "-100%" }}
      >
        <span className="close-button" onClick={() => setIsDropDown(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-x"
          >
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </span>
        <div className="mobile-links">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            className="mobilenavbar-link"
            onClick={() => setIsDropDown(false)}
          >
            {t("navbar.item1")}
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={600}
            className="mobilenavbar-link"
            onClick={() => setIsDropDown(false)}
          >
            {t("navbar.item2")}
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={600}
            className="mobilenavbar-link"
            onClick={() => setIsDropDown(false)}
          >
            {t("navbar.item3")}
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={600}
            className="mobilenavbar-link"
            onClick={() => setIsDropDown(false)}
          >
            {t("navbar.item4")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
