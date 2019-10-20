import React, { memo } from "react";

import ThemeSelect from "components/theme-select";
import LanguageSelect from "components/language-select";

const Settings: React.FC<Props> = memo(() => {
  return (
    <>
      <div>
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
