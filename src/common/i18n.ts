import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

import { DEBUG_LABELS } from "common/environment";

import de from "./translations/de.json";
import en from "./translations/en.json";

export const resources = {
  en: {
    translation: DEBUG_LABELS ? {} : en
  },
  de: {
    translation: de
  }
} as Resource;

/* Use browser language as default, if a translation is available */
export const defaultLanguage = () => {
  const browserLanguage = navigator.language?.substr(0, 2);
  return resources[browserLanguage] ? browserLanguage : "en";
};

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage(),
  fallbackLng: "en",

  interpolation: {
    escapeValue: false // not required for React
  }
});

export default i18n;
