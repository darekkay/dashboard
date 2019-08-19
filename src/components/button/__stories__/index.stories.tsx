import React from "react";

import { storiesOf } from "@storybook/react";

import Icon from "components/icon";
import Button, { ButtonType, ButtonSize, Props as ButtonProps } from "../index";

const commonProps = {
  className: "mr-5"
};

interface RowProps {
  title: string;
  children?: React.ReactNode;
}

const Row = ({
  title,
  children,
  ...rest
}: RowProps & Omit<ButtonProps, "children">) => (
  <>
    <h2>{title}</h2>
    <div>
      <Button {...commonProps} {...rest}>
        {children || "Regular"}
      </Button>
      <Button {...commonProps} {...rest} size={ButtonSize.Small}>
        {children || "Small"}
      </Button>
    </div>
  </>
);

storiesOf("Components.Button", module).add("Variants", () => (
  <div>
    <Row title="Primary Button" type={ButtonType.Primary} />
    <Row title="Secondary Button" type={ButtonType.Secondary} />

    <Row title="Primary Outline Button" type={ButtonType.Primary} outline />
    <Row title="Secondary Outline Button" type={ButtonType.Secondary} outline />

    <Row title="Disabled Button" type={ButtonType.Primary} disabled />

    <Row title="Icon Text Button" type={ButtonType.Primary}>
      Button <Icon name="heart" position="right" />
    </Row>
    <Row title="Icon Button" type={ButtonType.Primary} ariaLabel="Icon Button">
      <Icon name="heart" />
    </Row>
  </div>
));
