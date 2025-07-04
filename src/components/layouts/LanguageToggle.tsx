
import React, { useState } from "react";

const LanguageToggle = () => {
  const [currentLang, setCurrentLang] = useState('en');

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setCurrentLang(newLang);
    
    // Set document direction for RTL/LTR
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    
    // Trigger Google Translate
    const tryChangeLang = () => {
      const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
      if (select) {
        select.value = newLang;
        select.dispatchEvent(new Event('change'));
      } else {
        setTimeout(tryChangeLang, 500);
      }
    };
    
    tryChangeLang();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="ml-4 px-4 py-2 rounded-full border border-theme-deepsky text-theme-deepsky hover:bg-theme-deepsky hover:text-white transition-colors"
    >
      {currentLang === 'en' ? 'عربي' : 'English'}
    </button>
  );
};

export default LanguageToggle;
