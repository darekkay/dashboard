import React, { memo, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { actionCreators } from "common/ducks/config";
import Button, { ButtonVariant } from "components/button";
import Icon from "components/icon";
import selectComponentProps from "./selectors";

export interface Props {
  language: string;
  changeLanguage: (payload: string) => void;
}

/* TODO: refactor to select all language instead of toggling */
const getNextLanguage = (language: string) => (language === "de" ? "en" : "de");

export const LanguageSelect = memo((props: Props) => {
  const { language, changeLanguage } = props;
  const { i18n } = useTranslation();

  const toggleLanguage = useCallback(() => {
    changeLanguage(getNextLanguage(language));
  }, [language, changeLanguage]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <Button className="m-2" outline onClick={toggleLanguage}>
      <Icon name="flag" position="left" />
      Language: {language}
    </Button>
  );
});

export default connect(
  selectComponentProps,
  actionCreators
)(LanguageSelect);
