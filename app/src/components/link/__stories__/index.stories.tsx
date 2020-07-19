import React from "react";
import { storiesOf } from "@storybook/react";

import Icon from "components/icon";

import Link from "../index";

const Story = () => {
  return (
    <>
      <div>
        <Link href="#" external={false}>
          Regular Link
        </Link>
      </div>
      <div>
        <Link href="#" external={true}>
          External Link
        </Link>
      </div>
      <div>
        <Link href="#" external={true}>
          Icon Link <Icon name="cog" position="right" />
        </Link>
      </div>
    </>
  );
};

storiesOf("Components.Link", module).add("Variants", () => <Story />);
