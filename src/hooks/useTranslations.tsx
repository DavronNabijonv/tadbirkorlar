import { eng } from "@/locales/eng";
import { ru } from "@/locales/ru";
import { uz } from "@/locales/uz";
import type { Language } from "@/types";
import { useLocation } from "react-router-dom";

export const useTranslations = () => {
  const { pathname } = useLocation();
  const translations = { uz, ru, eng };
  const lang = pathname.split("/")[1] as Language;

  return {
    ...translations[lang] || translations.uz,
    locale: translations[lang] ? lang : "uz", 
  };
};
