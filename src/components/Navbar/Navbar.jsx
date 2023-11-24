import React from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { ReactComponent as FlagIcon } from "../../assets/hu.svg";

function Navbar() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="navbar wrapper px-12">
      <div className="container flex items-center justify-between">
        <a className="navbar-brand" href="">
          Krisztian.dev
        </a>
        <div className="flex gap-7">
          <a className="navbar-link" href="">
            Home
          </a>
          <a className="navbar-link" href="">
            About
          </a>
          <a className="navbar-link" href="">
            Projects
          </a>
          <a className="navbar-link" href="">
            Contact
          </a>
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
