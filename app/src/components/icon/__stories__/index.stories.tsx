import React from "react";

import Icon from "../index";
import fontAwesomeIcons, { FontAwesomeIconName } from "../font-awesome";

const icons = [...Object.keys(fontAwesomeIcons)] as FontAwesomeIconName[];

export const KitchenSink = () => (
  <div>
    {icons.map((icon) => (
      <div key={icon} className="flex items-center">
        <Icon name={icon} position="left" />
        <div>{icon}</div>
      </div>
    ))}
  </div>
);

export default {
  title: "Components/Icon",
};

KitchenSink.storyName = "Kitchen Sink";
