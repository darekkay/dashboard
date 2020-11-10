import React from "react";
import { Trans, useTranslation } from "react-i18next";

import Button from "components/button";
import Link from "components/link";
import { State } from "state/store";
import demoTemplate from "templates/demo.json";

const WelcomePage: React.FC<Props> = ({ importState }) => {
  const { t } = useTranslation();
  const createExampleBoard = () => {
    importState(demoTemplate as State);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div
        className="max-w-full text-center space-y-5"
        style={{ width: "500px" }}
      >
        <p>
          <Trans i18nKey="welcome.message1">
            <strong>{{ projectName: "Dashboard" }}</strong>
          </Trans>
        </p>
        <p>{t("welcome.message2")}</p>
        <p>
          <Button onClick={createExampleBoard}>
            {t("welcome.createExampleBoard")}
          </Button>
        </p>
        <p>
          <Trans i18nKey="welcome.message3">
            <Link href="https://dashboard.darekkay.com/docs/" />
          </Trans>
        </p>
      </div>
    </div>
  );
};

export interface Props {
  importState: (state: State) => void;
}

export default WelcomePage;
