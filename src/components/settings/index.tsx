import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import ThemeSelect from "components/theme-select";
import LanguageSelect from "components/language-select";

const Settings: React.FC<Props> = memo(() => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mb-6">
        <h3 className="text-3 font-semibold">{t("theme.headline")}</h3>
        <ThemeSelect />
      </div>
      <div>
        <h3 className="text-3 font-semibold">{t("language.headline")}</h3>
        <LanguageSelect />
      </div>
    </>
  );
});

export interface Props {
  //
}

export default Settings;
