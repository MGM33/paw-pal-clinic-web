
import React, { useState } from "react";

const LanguageToggle = () => {
  const [currentLang, setCurrentLang] = useState('en');

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setCurrentLang(newLang);
    
    // Set document properties for RTL support
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    
    // Trigger Google Translate
    const tryTranslate = () => {
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = newLang;
        selectElement.dispatchEvent(new Event('change'));
        console.log(`Language changed to: ${newLang}`);
      } else {
        // Retry if Google Translate isn't ready yet
        setTimeout(tryTranslate, 200);
      }
    };
    
    // Wait a bit for Google Translate to load
    setTimeout(tryTranslate, 500);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-theme-deepsky text-white px-3 py-1 rounded-md hover:bg-theme-sky transition duration-300 text-sm font-medium"
    >
      {currentLang === "en" ? "عربي" : "English"}
    </button>
  );
};

export default LanguageToggle;
