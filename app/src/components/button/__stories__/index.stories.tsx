import React from "react";

import { storiesOf } from "@storybook/react";

import Icon from "components/icon";
import Section from "components/section";
import Button, { Props as ButtonProps } from "../index";

const commonProps = {
  className: "mr-5",
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
  <Section type="story" headline={title}>
    <>
      <Button {...commonProps} {...rest}>
        {children || "Regular"}
      </Button>
      <Button {...commonProps} {...rest} size="small">
        {children || "Small"}
      </Button>
      <Button {...commonProps} {...rest} outline>
        {children || "Outline"}
      </Button>
      <Button {...commonProps} {...rest} outline size="small">
        {children || "Outline Small"}
      </Button>
      <Button {...commonProps} {...rest} outline border={false}>
        {children || "Borderless"}
      </Button>
    </>
  </Section>
);

storiesOf("Components.Button", module).add("Variants", () => (
  <div>
    <Row title="Primary Button" variant="primary" />
    <Row title="Secondary Button" variant="secondary" />
    <Row title="Danger Button" variant="danger" />
    <Row title="Unstyled Button" variant="unstyled" />

    <Row title="Disabled Button" variant="primary" disabled />

    <Row title="Icon Text Button" variant="primary">
      Button <Icon name="cog" position="right" />
    </Row>
    <Row title="Icon Button" variant="primary" aria-label="Icon Button">
      <Icon name="cog" />
    </Row>
  </div>
));
