"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, TranslationKey } from "@/lib/translations";

export type Language = "en" | "ur";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLanguage: () => void;
  isUrdu: boolean;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("nisab_college_lang") as Language;
      if (saved === "ur" || saved === "en") {
        setLangState(saved);
      }
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
      if (lang === "ur") {
        document.documentElement.classList.add("lang-urdu");
        document.body?.classList.add("lang-urdu");
      } else {
        document.documentElement.classList.remove("lang-urdu");
        document.body?.classList.remove("lang-urdu");
      }
    }
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("nisab_college_lang", newLang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    const next = lang === "en" ? "ur" : "en";
    setLang(next);
  };

  const isUrdu = lang === "ur";

  const t = (key: TranslationKey): string => {
    const langDict = translations[lang];
    if (langDict && key in langDict) {
      return (langDict as Record<string, string>)[key];
    }
    return (translations.en as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, isUrdu, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
