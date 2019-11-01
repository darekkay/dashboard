import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { DEBUG_LABELS } from "common/environment";

import de from "./translations/de.json";
import en from "./translations/en.json";

const resources = {
  en: {
    translation: DEBUG_LABELS ? {} : en
  },
  de: {
    translation: de
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false // not required for React
  }
});

export default i18n;
