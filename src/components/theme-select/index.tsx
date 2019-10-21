import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { THEMES } from "common/environment";
import { actionCreators } from "common/ducks/config";
import Icon from "components/icon";

import selectComponentProps from "./selectors";

export interface Props {
  theme: Theme;
  changeTheme: (payload: string) => void;
}

export type Theme = "default" | "dark";

const themeSelectors = THEMES.map(theme => `theme-${theme}`);

export const updateCssVariables = (theme: Theme) => {
  /* TODO: probably move to a side-effect library */
  document.body.classList.remove(...themeSelectors);
  document.body.classList.add(`theme-${theme}`);
};

export const Theme: React.FC<ThemeProps> = ({ name, label, onClick }) => (
  <div
    className={`theme-${name} inline-block m-4 cursor-pointer`}
    style={{ width: "200px", height: "120px" }}
    tabIndex={0}
    role="button"
    onClick={onClick}
  >
    <div className="flex flex-col w-full h-full relative p-2 border text-color-default bg-color-default">
      <div className="flex items-center mx-3">
        <span>{label}</span>
        <div className="ml-auto text-color-highlight">
          <Icon name="bars" />
        </div>
      </div>

      <div className="flex flex-grow">
        <div className="bg-color-panel m-4" style={{ width: "40%" }} />
        <div className="bg-color-panel m-4" style={{ width: "60%" }} />
      </div>
    </div>
  </div>
);

interface ThemeProps {
  name: string;
  label: string;
  onClick: () => void;
}

export const ThemeSelect: React.FC<Props> = memo(props => {
  const { theme, changeTheme } = props;

  const { t } = useTranslation();

  useEffect(() => {
    updateCssVariables(theme);
  }, [theme]);

  return (
    <>
      {THEMES.map(themeName => {
        return (
          <Theme
            name={themeName}
            label={t(`theme.${themeName}`)}
            onClick={() => changeTheme(themeName)}
          />
        );
      })}
    </>
  );
});

export default connect(
  selectComponentProps,
  actionCreators
)(ThemeSelect);
