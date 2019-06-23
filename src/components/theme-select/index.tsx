import React, { memo, useCallback, useEffect } from "react";
import { connect } from "react-redux";

import getThemeStyle from "common/themes";
import { actionCreators } from "common/ducks/config";
import Button, { ButtonType } from "components/button";
import Icon from "components/icon";
import selectComponentProps from "./selectors";

export interface Props {
  theme: string;
  changeTheme: (payload: string) => void;
}

export const updateCssVariables = (theme: string) => {
  /* TODO: probably move to a side-effect library */
  document.documentElement.setAttribute("style", getThemeStyle(theme));
};

/* TODO: refactor to select all themes instead of toggling */
const getNextTheme = (theme: string) =>
  theme === "default" ? "dark" : "default";

export const ThemeSelect = memo((props: Props) => {
  const { theme, changeTheme } = props;

  const toggleTheme = useCallback(() => {
    changeTheme(getNextTheme(theme));
  }, [theme, changeTheme]);

  useEffect(() => {
    updateCssVariables(theme);
  }, [theme]);

  return (
    <Button className="m-2" type={ButtonType.Primary} onClick={toggleTheme}>
      <Icon name="palette" position="left" />
      Theme: {theme}
    </Button>
  );
});

export default connect(
  selectComponentProps,
  actionCreators
)(ThemeSelect);
