import React from "react";

import { storiesOf } from "@storybook/react";

import Icon from "../index";

import fontAwesomeIcons, { FontAwesomeIconName } from "../font-awesome";

const icons = [...Object.keys(fontAwesomeIcons)] as FontAwesomeIconName[];

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
