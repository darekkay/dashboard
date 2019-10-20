import React, { memo } from "react";

import ThemeSelect from "components/theme-select";
import LanguageSelect from "components/language-select";

const Settings: React.FC<Props> = memo(() => {
  return (
    <>
      <div className="mb-6">
        <h3 className="text-3 font-semibold">Theme</h3>
        <ThemeSelect />
      </div>
      <div>
        <LanguageSelect />
      </div>
    </>
  );
});

export interface Props {
  //
}

export default Settings;
