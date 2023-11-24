import React from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

function Navbar() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="navbar wrapper px-12">
      <div className="container flex items-center justify-between">
        <a className="navbar-brand" href="#home">
          Krisztian.dev
        </a>
        <div className="flex gap-7">
          <a className="navbar-link" href="#home">
            {t("navbar.item1")}
          </a>
          <a className="navbar-link" href="">
            {t("navbar.item2")}
          </a>
          <a className="navbar-link" href="">
            {t("navbar.item3")}
          </a>
          <a className="navbar-link" href="">
            {t("navbar.item4")}
          </a>
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
