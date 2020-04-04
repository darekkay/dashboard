import React, { memo } from "react";
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
  const { changeLanguage } = props;
  const { t } = useTranslation();

  return (
    <>
      {LANGUAGES.map(language => (
        <Button
          key={language}
          className="mr-6 mb-3"
          outline
          onClick={() => changeLanguage(language)}
        >
          <Icon name={`lang-${language}`} position="left" />
          {t(`language.${language}`)}
        </Button>
      ))}
    </>
  );
});

export default connect(selectComponentProps, actionCreators)(LanguageSelect);
