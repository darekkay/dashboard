import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link, Button } from "@darekkay/react-ui";

import { State } from "state/store";
import demoTemplate from "templates/demo.json";

import illustration from "./illustration.svg";

const WelcomePage = ({ importState }: Props) => {
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
          <img src={illustration} alt="" style={{ maxWidth: "250px" }} />
        </p>
        <p>
          <Trans
            i18nKey="welcome.message1"
            values={{ projectName: "Dashboard" }}
            components={{
              strong: <strong />,
            }}
          />
        </p>
        <p>{t("welcome.message2")}</p>
        <p>
          <Button onClick={createExampleBoard}>
            {t("welcome.createExampleBoard")}
          </Button>
        </p>
        <p>
          <Trans
            i18nKey="welcome.message3"
            components={{
              dashboardLink: (
                <Link href="https://dashboard.darekkay.com/docs/">{""}</Link>
              ),
            }}
          />
        </p>
      </div>
    </div>
  );
};

export interface Props {
  importState: (state: State) => void;
}

export default WelcomePage;
