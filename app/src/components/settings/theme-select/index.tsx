import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { THEMES } from "common/environment";
import { actions } from "common/ducks/config";
import Icon from "components/icon";

import selectComponentProps from "./selectors";

const syncTheme = (theme: Theme) => {
  // to prevent flash of incorrect theme, the current theme is written into local storage and read on page load
  localStorage.setItem("theme", theme);
  document.body.dataset.theme = theme;
};

export const ThemeOption = ({ name, label, onClick }: ThemeProps) => (
  <button
    className="inline-block mr-6 p-0 border-0 cursor-pointer"
    data-theme={name}
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

export const ThemeSelect = ({ theme, changeTheme }: Props) => {
  const { t } = useTranslation();

  useEffect(() => {
    syncTheme(theme);
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
