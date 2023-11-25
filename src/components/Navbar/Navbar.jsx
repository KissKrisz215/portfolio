import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import "./Navbar.css";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

function Navbar() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="navbar wrapper px-12">
      <div className="container flex items-center justify-between">
        <Link
          className="navbar-brand"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
        >
          Krisztian.dev
        </Link>
        <div className="flex gap-7">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            className="navbar-link"
          >
            {t("navbar.item1")}
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={600}
            className="navbar-link"
          >
            {t("navbar.item2")}
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={600}
            className="navbar-link"
          >
            {t("navbar.item3")}
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={600}
            className="navbar-link"
          >
            {t("navbar.item4")}
          </Link>
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
