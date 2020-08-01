import React from "react";
import { storiesOf } from "@storybook/react";

import Icon from "components/icon";

import Link from "../index";

const Story = () => {
  return (
    <>
      <div>
        <Link href="/" external={false}>
          Regular Link
        </Link>
      </div>
      <div>
        <Link href="https://example.com" external>
          External Link
        </Link>
      </div>
      <div>
        <Link href="https://example.com" external>
          Icon Link <Icon name="cog" position="right" />
        </Link>
      </div>
    </>
  );
};

storiesOf("Components.Link", module).add("Variants", () => <Story />);
