import React from "react";
import { Button, ButtonProps } from "@darekkay/react-ui";

import Icon from "components/icon";
import Section from "components/section";

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
    <div className="space-x-5 space-y-2">
      <Button {...rest}>{children ?? "Regular"}</Button>
      <Button {...rest} size="small">
        {children ?? "Small"}
      </Button>
      <Button {...rest} outline>
        {children ?? "Outline"}
      </Button>
      <Button {...rest} outline size="small">
        {children ?? "Outline Small"}
      </Button>
      <Button {...rest} outline border={false}>
        {children ?? "Borderless"}
      </Button>
    </div>
  </Section>
);

export default {
  title: "Shared Components/Button",
};

export const Variants = () => (
  <div className="space-y-6">
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
);
