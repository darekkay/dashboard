import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { THEMES } from "common/environment";
import { actions } from "common/ducks/config";
import Icon from "components/icon";

import selectComponentProps from "./selectors";

const themeSelectors = THEMES.map((theme) => `theme-${theme}`);

export const updateCssVariables = (theme: Theme) => {
  document.body.classList.remove(...themeSelectors);
  document.body.classList.add(`theme-${theme}`);
};

export const ThemeOption: React.FC<ThemeProps> = ({ name, label, onClick }) => (
  <button
    className={`theme-${name} inline-block mr-6 p-0 border-0 cursor-pointer`}
    style={{ width: "150px", height: "100px" }}
    onClick={onClick}
    type="button"
  >
    <div className="flex flex-col w-full h-full relative p-2 border text-default bg-offset">
      <div className="flex items-center mx-3">
        <span className="text-3 font-bold">{label}</span>
        <div className="ml-auto text-interaction">
          <Icon name="bars" />
        </div>
      </div>

      <div className="flex flex-grow">
        <div className="bg-default m-4" style={{ width: "40%" }} />
        <div className="bg-default m-4" style={{ width: "60%" }} />
      </div>
    </div>
  </button>
);

interface ThemeProps {
  name: string;
  label: string;
  onClick: () => void;
}

export const ThemeSelect: React.FC<Props> = (props) => {
  const { theme, changeTheme } = props;

  const { t } = useTranslation();

  useEffect(() => {
    updateCssVariables(theme);
  }, [theme]);

  return (
    <div>
      <div className="mb-2 text-3 font-semibold">
        {t("config.theme.headline")}
      </div>
      {THEMES.map((themeName) => {
        return (
          <ThemeOption
            key={themeName}
            name={themeName}
            label={t(`config.theme.${themeName}`)}
            onClick={() => changeTheme(themeName)}
          />
        );
      })}
    </div>
  );
};

export type Theme = "default" | "dark";

export interface Props {
  theme: Theme;
  changeTheme: (payload: string) => void;
}

export default connect(selectComponentProps, {
  changeTheme: actions.changeTheme,
})(ThemeSelect);
