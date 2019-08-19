import React from "react";

import { storiesOf } from "@storybook/react";

import Icon from "components/icon";
import Link from "../index";

const Story = () => {
  return (
    <>
      <div>
        <Link url="#" external={false}>
          Regular Link
        </Link>
      </div>
      <div>
        <Link url="#" external={true}>
          External Link
        </Link>
      </div>
      <div>
        <Link url="#" external={true}>
          Icon Link <Icon name="heart" position="right" />
        </Link>
      </div>
    </>
  );
};

storiesOf("Components.Link", module).add("Variants", () => <Story />);
