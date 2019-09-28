import React from "react";
import { useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Input from "components/input";
import Button from "components/button";

import providers from "widgets/search/providers";

const Configuration = ({ id, options, setOptions }: ConfigurationProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Input
        setValue={value => setOptions({ id, values: { title: value } })}
        value={options.title}
        label={t("widget.search.configuration.title")}
        className="mb-6"
      />
      <Input
        setValue={value => setOptions({ id, values: { pattern: value } })}
        value={options.pattern}
        label={t("widget.search.configuration.pattern")}
        className="mb-6"
      />
      <div>
        {providers.map(provider => (
          <Button
            className="mr-5 mb-2"
            outline
            onClick={() =>
              setOptions({
                id,
                values: { title: provider.title, pattern: provider.pattern }
              })
            }
          >
            {provider.title}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Configuration;
