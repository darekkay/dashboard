import React from "react";

import { storiesOf } from "@storybook/react";

import Icon from "../index";

import customIcons from "../custom";
import fontAwesomeIcons from "../font-awesome";

const icons = [...Object.keys(fontAwesomeIcons), ...Object.keys(customIcons)];

storiesOf("Components.Icon", module).add("Kitchen Sink", () => (
  <div>
    {icons.map(icon => (
      <div className="flex items-center">
        <Icon key={icon} name={icon} position="left" />
        <div>{icon}</div>
      </div>
    ))}
  </div>
));
