import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import aboutBanner from "../../assets/about-banner.webp";
import aboutText from "../../assets/about-text.svg";
import LaptopEmoji from "../../assets/laptop-emoji.png";
import "./About.css";

function About() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="wrapper" id="about">
      <div className="about-container">
        <div className="image-container">
          <img className="about-image" src={aboutBanner} alt="" />
          <div className="circle-container">
            <img className="circle-text" src={aboutText} alt="" />
            <img className="circle-emoji" src={LaptopEmoji} alt="" />
          </div>
        </div>
        <div className="text-container">
          <span className="about-subtitle">{t("about.subtitle")}</span>
          <h3 className="about-title">{t("about.title")} 📍</h3>
          <p className="about-description">{t("about.description")}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
