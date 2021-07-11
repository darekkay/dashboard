import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { LANGUAGES } from "common/environment";
import { actions } from "common/ducks/config";
import Dropdown from "components/forms/dropdown";

import selectComponentProps from "./selectors";

export const LanguageSelect: React.FC<Props> = (props) => {
  const { language, changeLanguage } = props;
  const { t } = useTranslation();

  return (
    <Dropdown
      label={t("config.language.headline")}
      options={LANGUAGES}
      getOptionLabel={(languageKey) => t(`config.language.${languageKey}`)}
      value={language}
      setValue={(selectedLanguage) => changeLanguage(selectedLanguage)}
    />
  );
};

export interface Props {
  language: string;
  changeLanguage: (payload: string) => void;
}

export default connect(selectComponentProps, {
  changeLanguage: actions.changeLanguage,
})(LanguageSelect);
