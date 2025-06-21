import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-vet-orange text-white px-3 py-1 rounded-md hover:bg-vet-darkorange transition"
    >
      {i18n.language === "en" ? "🇸🇦 العربية" : "🇺🇸 English"}
    </button>
  );
};

export default LanguageToggle;
