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

const Header = ({
  addWidgetToLayout,
  isFullscreen,
  toggleFullscreen,
}: Props) => {
  const { t } = useTranslation();

  const [isSettingsModalOpen, openSettingsModal, closeSettingsModal] =
    useBooleanState(false);

  const [isWidgetDrawerOpen, openWidgetDrawer, closeWidgetDrawer] =
    useBooleanState(false);

  return (
    <header className="flex items-center justify-end px-7 pt-2 bg-transparent print-hidden">
      <Button
        className="mr-6 my-2"
        variant="primary"
        size="small"
        onClick={openWidgetDrawer}
      >
        <Icon name="plus" />
        <div className="sr-only">{t("widget.drawer.open")}</div>
      </Button>

      <Button
        className="mr-6 my-2"
        variant="primary"
        size="small"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={toggleFullscreen}
        aria-label={t(
          isFullscreen ? "common.fullscreen.exit" : "common.fullscreen.start"
        )}
      >
        <Icon name={isFullscreen ? "compress" : "expand"} />
      </Button>

      <Menu icon="bars" title={t("common.menu")} disclosureClassName="my-2">
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
        headline={t("widget.drawer.headline")}
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
  toggleFullscreen: () => Promise<void>;
}

export default Header;
