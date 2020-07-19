import React from "react";
import { useTranslation } from "react-i18next";

import { PersistorContext } from "entry";
import ThemeSelect from "components/settings/theme-select";
import LanguageSelect from "components/settings/language-select";
import ImportExport from "components/settings/import-export";
import Button from "components/button";
import Icon from "components/icon";
import Section from "components/section";

const Settings: React.FC<Props> = () => {
  const { t } = useTranslation();
  return (
    <PersistorContext.Consumer>
      {(purgeStore) => (
        <div className="space-y-6">
          <Section type="modal" headline={t("theme.headline")}>
            <ThemeSelect />
          </Section>

          <Section type="modal" headline={t("language.headline")}>
            <LanguageSelect />
          </Section>

          <Section type="modal" headline={t("data.purge")}>
            <Button
              className="mr-6 mb-3"
              outline
              variant="danger"
              onClick={purgeStore}
            >
              <Icon name="trash" position="left" />
              {t("data.purge")}
            </Button>
          </Section>

          <Section type="modal" headline={t("data.backup")}>
            <ImportExport />
          </Section>
        </div>
      )}
    </PersistorContext.Consumer>
  );
};

export interface Props {
  //
}

export default Settings;
