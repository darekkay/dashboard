import React from "react";
import _ from "lodash";

import { storiesOf } from "@storybook/react";

import Icon from "../index";
import svgs from "../svgs";

const icons = Object.keys(svgs).map(_.toLower);

storiesOf("Components.Icon", module).add("Kitchen Sink", () => (
  <div>
    {icons.map(icon => (
      <Icon key={icon} name={icon} position="left" />
    ))}
  </div>
));
