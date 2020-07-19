import React from "react";
import { useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Input from "components/forms/input";
import Button from "components/button";

import providers from "./lib/providers";

const Configuration = ({
  options,
  setOptions,
  save,
}: ConfigurationProps<Props>) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <Input
        setValue={(value) => setOptions({ title: value })}
        value={options.title}
        label={t("widget.search.configuration.title")}
        type="text"
        onEnter={save}
      />
      <Input
        setValue={(value) => setOptions({ pattern: value })}
        value={options.pattern}
        label={t("widget.search.configuration.pattern")}
        type="text"
        onEnter={save}
      />
      <div>
        {providers.map((provider) => (
          <Button
            key={provider.title}
            className="mr-5 mb-2"
            variant="secondary"
            size="small"
            outline
            onClick={() =>
              setOptions({
                title: provider.title,
                pattern: provider.pattern,
              })
            }
          >
            {provider.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export interface Props {
  title: string;
  pattern: string;
}

export default Configuration;
