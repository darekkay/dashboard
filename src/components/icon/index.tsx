import React, { memo } from "react";
import _ from "lodash";
import cl from "classnames";

import svgs from "./svgs";

import "./styles.scss";

export interface Props {
  className?: string;
  color?: string;
  name: string;
  alt?: string;
  position?: "left" | "right";
}

const renderIcon: React.FC<Props> = props => {
  const component = svgs[_.capitalize(props.name)];
  if (!component) throw new Error(`Unknown icon '${props.name}'`);

  return React.createElement(component, {
    "aria-label": props.alt // "alt" is not supported for inline SVGs
  });
};

const Icon: React.FC<Props> = memo(props => {
  const { name, className, position } = props;
  return (
    <div
      className={cl(
        "icon",
        `icon-${name}`,
        "inline-flex",
        { "mr-3": position === "left" },
        { "ml-3": position === "right" },
        className
      )}
    >
      {renderIcon(props)}
    </div>
  );
});

export default Icon;
