import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import { APP_VERSION } from "common/environment";
import Link from "components/link";
import Button, { ButtonSize, ButtonVariant } from "components/button";
import Icon from "components/icon";
import Menu from "components/menu";
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
          <ThemeSelect />
          <LanguageSelect />
        </div>
        <Version />

        {isLayoutEditable && (
          <Button
            className="m-2"
            variant={ButtonVariant.Primary}
            outline
            size={ButtonSize.Small}
            onClick={toggleLayoutEditable}
          >
            <Icon name="save" position="left" />
            {t("common.save")}
          </Button>
        )}

        {!isLayoutEditable && (
          <Menu
            icon="bars"
            title="Main menu"
            items={[
              {
                text: t("common.edit"),
                icon: "edit",
                onClick: toggleLayoutEditable
              }
            ]}
          />
        )}
      </header>
    );
  }
);

export default Header;
