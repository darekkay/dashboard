import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import { PayloadAction } from "redux-starter-kit";
import { takeEvery } from "@redux-saga/core/effects";

import { DEBUG_LABELS } from "common/environment";
import { changeLanguage } from "common/ducks/config";
import { State } from "state/store";

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

const onChangeLanguage = (action: PayloadAction<string>) => {
  i18n.changeLanguage(action.payload);
};

/* If the language was stored before, use it when the store is rehydrated */
const onRehydrate = (action: PayloadAction<State>) => {
  const language = action.payload?.config?.language;
  if (language) i18n.changeLanguage(language);
};

export function* saga() {
  yield takeEvery(changeLanguage.toString(), onChangeLanguage);
  yield takeEvery("persist/REHYDRATE", onRehydrate);
}

export default i18n;
