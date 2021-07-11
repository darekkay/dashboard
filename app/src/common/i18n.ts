import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "typed-redux-saga";

import dayjs from "common/date";
import { DEBUG_LABELS } from "common/environment";
import { actions as configActions } from "common/ducks/config";
import { State } from "state/store";

import "dayjs/locale/de";
import "dayjs/locale/fr";

// NICE: import only the language that is being used
import de from "./translations/de.json";
import en from "./translations/en.json";
import fr from "./translations/fr.json";

export const resources: Resource = {
  en: {
    translation: DEBUG_LABELS ? {} : en,
  },
  de: {
    translation: de,
  },
  fr: {
    translation: fr,
  },
};

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
    escapeValue: false, // not required for React
    format: (value, format, language) => {
      if (format === "number") {
        return new Intl.NumberFormat(language).format(value);
      }
      return value;
    },
  },
});

const updateLanguage = (language: string) => {
  i18n.changeLanguage(language);
  dayjs.locale(language);
};

const onChangeLanguage = (action: PayloadAction<string>) => {
  updateLanguage(action.payload);
};

/* If the language was stored before, use it when the store is rehydrated */
const onRehydrate = (action: PayloadAction<State>) => {
  const language = action.payload?.config?.language || "en";
  updateLanguage(language);
};

export function* saga() {
  yield* takeEvery(configActions.changeLanguage.toString(), onChangeLanguage);
  yield* takeEvery("persist/REHYDRATE", onRehydrate);
}

export default i18n;
