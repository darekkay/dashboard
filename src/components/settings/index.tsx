import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import ThemeSelect from "components/theme-select";
import LanguageSelect from "components/language-select";
import Button, { ButtonVariant } from "components/button";
import Icon from "components/icon";
import { PersistorContext } from "index";

const Settings: React.FC<Props> = memo(() => {
  const { t } = useTranslation();
  return (
    <PersistorContext.Consumer>
      {purgeStore => (
        <>
          <div className="mb-6">
            <h3 className="text-3 font-semibold">{t("theme.headline")}</h3>
            <ThemeSelect />
          </div>
          <div className="mb-6">
            <h3 className="text-3 font-semibold">{t("language.headline")}</h3>
            <LanguageSelect />
          </div>
          <div>
            <h3 className="text-3 font-semibold">{t("data.purge")}</h3>
            <Button
              className="m-4"
              outline
              variant={ButtonVariant.Danger}
              onClick={purgeStore}
            >
              <Icon name="trash" position="left" />
              {t("data.purge")}
            </Button>
          </div>
        </>
      )}
    </PersistorContext.Consumer>
  );
});

export interface Props {
  //
}

export default Settings;
