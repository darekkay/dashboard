import React, { memo, useCallback, useEffect } from "react";
import { connect } from "react-redux";

import getThemeStyle from "common/themes";
import { actionCreators } from "common/ducks/settings";
import Button from "components/button/Button";
import Icon from "components/icon/Icon";
import selectComponentProps from "./selectors";

import "./ThemeSelect.scss";

export interface Props {
  theme: string;
  changeTheme: (payload: string) => void;
}

const updateCssVariables = (theme: string) => {
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
    <Button className="m-2" type="primary" onClick={toggleTheme}>
      <Icon name="palette" position="left" />
      Theme: {theme}
    </Button>
  );
});

export default connect(
  selectComponentProps,
  actionCreators
)(ThemeSelect);
