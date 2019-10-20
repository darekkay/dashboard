import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import { APP_VERSION } from "common/environment";
import Link from "components/link";
import Button, { ButtonSize } from "components/button";
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

const Header: React.FC<Props> = memo(
  ({ isLayoutEditable, toggleLayoutEditable }) => {
    const { t } = useTranslation();
    return (
      <header className="flex flex-col md:flex-row items-center justify-between px-7 py-2 border-bottom bg-color-panel">
        <div>
          <Button
            className="m-2"
            outline
            size={ButtonSize.Small}
            onClick={toggleLayoutEditable}
          >
            <Icon name="edit" position="left" />
            {t(isLayoutEditable ? "common.save" : "common.edit")}
          </Button>
          <ThemeSelect />
          <LanguageSelect />
        </div>
        <Version />
      </header>
    );
  }
);

export default Header;
