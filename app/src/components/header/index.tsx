import React from "react";
import { useTranslation } from "react-i18next";

import Button from "components/button";
import Icon from "components/icon";
import Menu, { MenuAction } from "components/menu";
import Modal from "components/modal";
import Settings from "components/settings";
import useBooleanState from "common/hooks/useBooleanState";
import Drawer from "components/drawer";
import { WidgetType } from "widgets/list";

const Logo: React.FC = () => (
  <div className="text-4 font-semibold tracking-wide cursor-default">
    Dashboard
  </div>
);

const Header: React.FC<Props> = ({
  addWidgetToLayout,
  isFullscreen,
  toggleFullscreen,
}) => {
  const { t } = useTranslation();

  const [isSettingsModalOpen, openSettingsModal, closeSettingsModal] =
    useBooleanState(false);

  const [isWidgetDrawerOpen, openWidgetDrawer, closeWidgetDrawer] =
    useBooleanState(false);

  return (
    <header className="flex items-center justify-between px-7 py-2 border-bottom bg-default">
      <div className="mr-auto">
        <Logo />
      </div>

      <Button
        className="mr-6 my-2"
        variant="primary"
        outline
        size="small"
        onClick={openWidgetDrawer}
      >
        <Icon name="plus" position="left" />
        Add widget
      </Button>

      <Button
        className="mr-6 my-2"
        variant="primary"
        outline
        size="small"
        onClick={toggleFullscreen}
        aria-label={t(
          isFullscreen ? "common.fullscreen.exit" : "common.fullscreen.start"
        )}
      >
        <Icon name={isFullscreen ? "compress" : "expand"} />
      </Button>

      <Menu icon="bars" title="Main menu" disclosureClassName="my-2">
        <MenuAction
          text={t("common.documentation")}
          icon="question"
          href="https://dashboard.darekkay.com/docs"
        />
        <MenuAction
          text={t("common.settings")}
          icon="cog"
          onClick={openSettingsModal}
        />
      </Menu>

      {/* Widget drawer */}
      <Modal
        headline="Add widget to dashboard"
        maxWidth="500px"
        closeModal={closeWidgetDrawer}
        isOpen={isWidgetDrawerOpen}
        renderFooter={() => (
          <Button
            className="w-full md:w-auto md:ml-5 mt-5"
            onClick={closeWidgetDrawer}
          >
            {t("common.close")}
          </Button>
        )}
      >
        <Drawer
          addWidgetToLayout={addWidgetToLayout}
          onWidgetAdded={closeWidgetDrawer}
        />
      </Modal>

      {/* Settings modal */}
      <Modal
        headline={t(`common.settings`)}
        closeModal={closeSettingsModal}
        isOpen={isSettingsModalOpen}
        renderFooter={() => (
          <Button className="w-full md:w-auto" onClick={closeSettingsModal}>
            {t("common.close")}
          </Button>
        )}
      >
        <Settings closeModal={closeSettingsModal} />
      </Modal>
    </header>
  );
};

Header.displayName = "Header";

export interface Props {
  addWidgetToLayout: (widgetType: WidgetType) => void;

  isFullscreen: boolean;
  toggleFullscreen: () => void;
}

export default Header;
