import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import { APP_VERSION } from "common/environment";
import Link from "components/link";
import Button from "components/button";
import Icon from "components/icon";
import ThemeSelect from "components/theme-select";
import LanguageSelect from "components/language-select";

const Version: React.FC<{}> = () => (
  <div>
    <Link href="https://github.com/darekkay/dashboard">Dashboard</Link>{" "}
    {APP_VERSION}
  </div>
);

export interface Props {
  isLayoutEditable: boolean;
  toggleLayoutEditable: () => void;
}

const Footer: React.FC<Props> = memo(
  ({ isLayoutEditable, toggleLayoutEditable }) => {
    const { t } = useTranslation();
    return (
      <footer className="flex flex-col md:flex-row items-center justify-between p-5 border-top bg-color-panel">
        <div>
          <Button className="m-2" outline onClick={toggleLayoutEditable}>
            <Icon name="edit" position="left" />
            {t(isLayoutEditable ? "common.save" : "common.edit")}
          </Button>
          <ThemeSelect />
          <LanguageSelect />
        </div>
        <Version />
      </footer>
    );
  }
);

export default Footer;
