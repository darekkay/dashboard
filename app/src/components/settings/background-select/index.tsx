import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { actions } from "common/ducks/config";
import Input, { Props as InputProps } from "components/forms/input";

import selectComponentProps from "./selectors";

export const BackgroundSelect: React.FC<Props> = (props) => {
  const { backgroundUrl, changeBackgroundUrl, ...rest } = props;
  const { t } = useTranslation();
  return (
    <Input
      label={t("config.background.headline")}
      value={backgroundUrl}
      setValue={(backgroundUrlValue) => changeBackgroundUrl(backgroundUrlValue)}
      {...rest}
    />
  );
};

export interface Props extends Omit<InputProps, "value" | "setValue"> {
  backgroundUrl: string;
  changeBackgroundUrl: (payload: string) => void;
}

export default connect(selectComponentProps, {
  changeBackgroundUrl: actions.changeBackgroundUrl,
})(BackgroundSelect);
