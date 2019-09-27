import React from "react";
import { ConfigurationProps } from "widgets/index";
import Input from "components/input";

const Configuration = ({ id, options, setOptionValue }: ConfigurationProps) => (
  <Input
    setValue={value => setOptionValue({ id, key: "pattern", value })}
    value={options.pattern}
  />
);

export default Configuration;
