import React from "react";
import { useTranslation } from "react-i18next";

import { PersistorContext } from "entry";
import BackgroundSelect from "components/settings/background-select";
import ThemeSelect from "components/settings/theme-select";
import LanguageSelect from "components/settings/language-select";
import ImportExport from "components/settings/import-export";
import Button from "components/button";
import Icon from "components/icon";
import Section from "components/section";

const Settings: React.FC<Props> = ({ closeModal }) => {
  const { t } = useTranslation();
  return (
    <PersistorContext.Consumer>
      {(purgeStore) => (
        <div className="space-y-6">
          <Section type="modal" headline={t("config.theme.headline")}>
            <ThemeSelect />
          </Section>

          <Section type="modal" headline={t("config.background.headline")}>
            <BackgroundSelect onEnter={closeModal} />
          </Section>

          <Section type="modal" headline={t("config.language.headline")}>
            <LanguageSelect />
          </Section>

          <hr />

          <Section type="modal" headline={t("config.data.purge")}>
            <Button outline variant="danger" onClick={purgeStore}>
              <Icon name="trash" position="left" />
              {t("config.data.purge")}
            </Button>
          </Section>

          <Section type="modal" headline={t("config.data.backup")}>
            <ImportExport />
          </Section>
        </div>
      )}
    </PersistorContext.Consumer>
  );
};

export interface Props {
  closeModal: () => void;
}

export default Settings;
