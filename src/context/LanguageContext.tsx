"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language, Translations } from "@/i18n/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{
  children: React.ReactNode;
  initialLang?: Language;
}> = ({ children, initialLang = "es" }) => {
  const [lang, setLangState] = useState<Language>(initialLang);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isEn = window.location.pathname.startsWith("/en");
      if (isEn) {
        setLangState("en");
        return;
      }
      const stored = localStorage.getItem("acarrealiquidos_lang") as Language;
      if (stored === "es" || stored === "en") {
        setLangState(stored);
      }
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("acarrealiquidos_lang", newLang);
      const isEn = window.location.pathname.startsWith("/en");
      if (newLang === "en" && !isEn) {
        window.history.pushState(null, "", "/en");
      } else if (newLang === "es" && isEn) {
        window.history.pushState(null, "", "/");
      }
    }
  };

  const t = translations[lang] || translations.es;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
