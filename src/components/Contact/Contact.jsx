import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import "./Contact.css";

function Contact() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="wrapper" id="contact">
      <div className="contact-container">
        <h5 className="subtitle">{t("contact.subtitle")}</h5>
        <span className="title">
          {t("contact.title")}
          <span>👇</span>
        </span>
        <div className="cards-container">
          <div className="contact-card">
            <span className="content-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-map-search"
              >
                <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                <path d="M9 4v13"></path>
                <path d="M15 7v5"></path>
                <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M20.2 20.2l1.8 1.8"></path>
              </svg>
            </span>
            <div className="content-text">
              <p className="content-card-title"> {t("contact.location")}</p>
              <p className="content-card-description">
                {" "}
                {t("contact.locationdata")}
              </p>
            </div>
          </div>
          <div className="contact-card">
            <span className="content-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-mail"
              >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            </span>
            <div className="content-text">
              <p className="content-card-title"> {t("contact.mail")}</p>
              <p className="content-card-description">
                {" "}
                {t("contact.maildata")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
