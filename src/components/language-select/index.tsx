import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { LANGUAGES } from "common/environment";
import { actionCreators } from "common/ducks/config";
import Button from "components/button";
import Icon from "components/icon";
import selectComponentProps from "./selectors";

export interface Props {
  language: string;
  changeLanguage: (payload: string) => void;
}

export const LanguageSelect: React.FC<Props> = memo(props => {
  const { language, changeLanguage } = props;
  const { i18n, t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <>
      {LANGUAGES.map(language => (
        <Button
          key={language}
          className="m-4"
          outline
          onClick={() => changeLanguage(language)}
        >
          <Icon name={language} position="left" />
          {t(`language.${language}`)}
        </Button>
      ))}
    </>
  );
});

export default connect(selectComponentProps, actionCreators)(LanguageSelect);
