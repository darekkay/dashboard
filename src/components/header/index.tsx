import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";

import { APP_VERSION } from "common/environment";
import Link from "components/link";
import Button, { ButtonSize, ButtonVariant } from "components/button";
import Icon from "components/icon";
import Menu, { MenuAction, MenuSeparator } from "components/menu";
import Modal from "components/modal";
import Settings from "components/settings";

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

    const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
    const openSettingsModal = () => setSettingsModalOpen(true);
    const closeSettingsModal = () => setSettingsModalOpen(false);

    return (
      <header className="flex items-center justify-between px-7 py-2 border-bottom bg-color-panel">
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
          <Menu icon="bars" title="Main menu" disclosureClassName="my-2">
            <MenuAction
              text={t("common.edit")}
              icon="edit"
              onClick={toggleLayoutEditable}
            />
            <MenuAction
              text={t("common.documentation")}
              icon="question"
              href="https://dashboard.darekkay.com/docs"
            />
            <MenuSeparator />
            <MenuAction
              text={t("common.settings")}
              icon="cog"
              onClick={openSettingsModal}
            />
          </Menu>
        )}

        <Modal
          headline={t(`common.settings`)}
          closeModal={closeSettingsModal}
          isOpen={isSettingsModalOpen}
        >
          <Settings />
          <div className="mt-6 text-right">
            <Button
              className="w-full md:w-auto md:ml-5 mt-5"
              onClick={closeSettingsModal}
            >
              {t("common.close")}
            </Button>
          </div>
        </Modal>
      </header>
    );
  }
);

export default Header;
