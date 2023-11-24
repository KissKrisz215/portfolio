import React, { useEffect, useState, useRef } from "react";
import "./LanguageSelector.css";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [t, i18n] = useTranslation("global");
  const dropdownRef = useRef(null);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="lang-menu " ref={dropdownRef}>
      <div className="lang-selected " onClick={() => setIsOpen(!isOpen)}>
        {i18n.language === "en" ? (
          <div className="lang-text">
            <span className="flag fi fi-gb"></span>English
          </div>
        ) : (
          <div className="lang-text">
            <span className="flag fi fi-hu"></span>Magyar
          </div>
        )}

        <div className="dropdown-arrow">
          <svg
            className="-me-1 ms-0 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <ul className="lang-dropdown">
          <li>
            <p
              href="#"
              className={
                i18n.language === "en"
                  ? "lang bg-gray-100 text-gray-900 rounded-md"
                  : "lang"
              }
              onClick={() => handleChangeLanguage("en")}
            >
              <span className="fi fi-gb" />
              English
            </p>
          </li>
          <li>
            <p
              href=""
              className={
                i18n.language === "hu"
                  ? "lang bg-gray-100 text-gray-900 rounded-md"
                  : "lang"
              }
              onClick={() => handleChangeLanguage("hu")}
            >
              <span className="flag fi fi-hu"></span>Magyar
            </p>
          </li>
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;
