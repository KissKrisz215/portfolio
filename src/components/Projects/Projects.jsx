import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import CryptoApp from "../../assets/cryptoapp.png";
import SuperShop from "../../assets/supershop.png";
import FruitNinja from "../../assets/fruitninja.png";
import "./Projects.css";

function Projects() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="wrapper wrapper-projects">
      <div className="container-projects">
        <span className="container-subtitle">{t("portfolio.subtitle")}</span>
        <h4 className="container-title">
          {t("portfolio.title")}
          <span>🧩</span>
        </h4>
        <div className="projects-container">
          {/* Project #1 */}
          <div className="project-card">
            <div className="project-image-container">
              <a href={t("portfolio.crypto-project.DemoUrl")} target="_blank">
                <img className="image" src={CryptoApp} alt="" />
              </a>
            </div>
            <div className="project-text-container">
              <h5 className="project-title">
                {t("portfolio.crypto-project.title")}
                <span className="project-date">
                  ({t("portfolio.crypto-project.date")})
                  <span className="icon">
                    {t("portfolio.crypto-project.icon")}
                  </span>
                </span>
              </h5>
              <p className="project-description">
                {t("portfolio.crypto-project.description")}
              </p>
              <div className="tech-container">
                <span className="tech-data">
                  {t("portfolio.crypto-project.tech1")}
                </span>
                <span className="tech-data">
                  {t("portfolio.crypto-project.tech2")}
                </span>
                <span className="tech-data">
                  {t("portfolio.crypto-project.tech3")}
                </span>
              </div>
              <div className="buttons-container">
                <a
                  className="link-button"
                  href={t("portfolio.crypto-project.CodeUrl")}
                  target="_blank"
                >
                  <span className="link-text">Code</span>
                  <span className="link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-brand-github"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </span>
                </a>
                <a
                  className="link-button"
                  href={t("portfolio.crypto-project.DemoUrl")}
                  target="_blank"
                >
                  <span className="link-text">Live Demo</span>
                  <span className="link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-external-link"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Project #2 */}
          <div className="project-card">
            <div className="project-image-container">
              <a
                href={t("portfolio.supershop-project.DemoUrl")}
                target="_blank"
              >
                <img className="image" src={SuperShop} alt="" />
              </a>
            </div>
            <div className="project-text-container">
              <h5 className="project-title">
                {t("portfolio.supershop-project.title")}
                <span className="project-date">
                  ({t("portfolio.supershop-project.date")})
                  <span className="icon">
                    {t("portfolio.supershop-project.icon")}
                  </span>
                </span>
              </h5>
              <p className="project-description">
                {t("portfolio.supershop-project.description")}
              </p>
              <div className="tech-container">
                <span className="tech-data">
                  {t("portfolio.supershop-project.tech1")}
                </span>
                <span className="tech-data">
                  {t("portfolio.supershop-project.tech2")}
                </span>
                <span className="tech-data">
                  {t("portfolio.supershop-project.tech3")}
                </span>
                <span className="tech-data">
                  {t("portfolio.supershop-project.tech4")}
                </span>
                <span className="tech-data">
                  {t("portfolio.supershop-project.tech5")}
                </span>
              </div>
              <div className="buttons-container">
                <a
                  className="link-button"
                  href={t("portfolio.supershop-project.CodeUrl")}
                  target="_blank"
                >
                  <span className="link-text">Code</span>
                  <span className="link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-brand-github"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </span>
                </a>
                <a
                  className="link-button"
                  href={t("portfolio.supershop-project.DemoUrl")}
                  target="_blank"
                >
                  <span className="link-text">Live Demo</span>
                  <span className="link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-external-link"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Project #3 */}
          <div className="project-card">
            <div className="project-image-container">
              <a
                href={t("portfolio.fruitninja-project.DemoUrl")}
                target="_blank"
              >
                <img className="image" src={FruitNinja} alt="" />
              </a>
            </div>
            <div className="project-text-container">
              <h5 className="project-title">
                {t("portfolio.fruitninja-project.title")}
                <span className="project-date">
                  ({t("portfolio.fruitninja-project.date")})
                  <span className="icon">
                    {t("portfolio.fruitninja-project.icon")}
                  </span>
                </span>
              </h5>
              <p className="project-description">
                {t("portfolio.fruitninja-project.description")}
              </p>
              <div className="tech-container">
                <span className="tech-data">
                  {t("portfolio.fruitninja-project.tech1")}
                </span>
                <span className="tech-data">
                  {t("portfolio.fruitninja-project.tech2")}
                </span>
                <span className="tech-data">
                  {t("portfolio.fruitninja-project.tech3")}
                </span>
                <span className="tech-data">
                  {t("portfolio.fruitninja-project.tech4")}
                </span>
              </div>
              <div className="buttons-container">
                <a
                  className="link-button"
                  href={t("portfolio.fruitninja-project.CodeUrl")}
                  target="_blank"
                >
                  <span className="link-text">Code</span>
                  <span className="link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-brand-github"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </span>
                </a>
                <a
                  className="link-button"
                  href={t("portfolio.fruitninja-project.DemoUrl")}
                  target="_blank"
                >
                  <span className="link-text">Live Demo</span>
                  <span className="link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-external-link"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
