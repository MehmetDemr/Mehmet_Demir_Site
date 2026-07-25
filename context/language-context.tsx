"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "tr" | "en" | "de" | "ru" | "es" | "fr" | "pl" | "it";

const supportedLocales: Locale[] = [
  "tr",
  "en",
  "de",
  "ru",
  "es",
  "fr",
  "pl",
  "it",
];

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isLoading: boolean;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved && supportedLocales.includes(saved as Locale)) {
      setLocaleState(saved as Locale);
    }
    setIsLoading(false);
  }, []);

  const setLocale = (value: Locale) => {
    setLocaleState(value);
    localStorage.setItem("locale", value);
  };

  const value = useMemo(
    () => ({ locale, setLocale, isLoading }),
    [locale, isLoading],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
