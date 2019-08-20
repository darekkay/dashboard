import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import Link from "components/link";
import Button, { ButtonType } from "components/button";
import Icon from "components/icon";
import ThemeSelect from "components/theme-select";
import LanguageSelect from "components/language-select";

const Version = memo(() => (
  <div>
    <Link url="https://github.com/darekkay/dashboard">Dashboard</Link>{" "}
    {process.env.REACT_APP_VERSION}
  </div>
));

export interface Props {
  isLayoutEditable: boolean;
  toggleLayoutEditable: () => void;
}

const Footer = memo(({ isLayoutEditable, toggleLayoutEditable }: Props) => {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between p-5 border-top bg-color-footer">
      <div>
        <Button
          className="m-2"
          type={ButtonType.Primary}
          onClick={toggleLayoutEditable}
        >
          <Icon name="edit" position="left" />
          {t(isLayoutEditable ? "common.save" : "common.edit")}
        </Button>
        <ThemeSelect />
        <LanguageSelect />
      </div>
      <Version />
    </footer>
  );
});

export default Footer;
