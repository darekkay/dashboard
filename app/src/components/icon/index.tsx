import React from "react";
import cl from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import fontAwesomeIcons, { FontAwesomeIconName } from "./font-awesome";
import customIcons, { CustomIconName } from "./custom";

import "./styles.scss";

export type IconName = FontAwesomeIconName | CustomIconName;

const renderIcon: React.FC<Props> = (props) => {
  // @ts-expect-error
  const customIcon = customIcons[props.name];
  if (customIcon !== undefined) {
    return React.createElement(customIcon, {
      "aria-label": props.alt, // "alt" is not supported for inline SVGs
    });
  }

  // @ts-expect-error
  const fontAwesomeIcon = fontAwesomeIcons[props.name];
  if (fontAwesomeIcon !== undefined) {
    return <FontAwesomeIcon title={props.alt} icon={fontAwesomeIcon} />;
  }

  throw new Error(`Unknown icon '${props.name}'`);
};

const Icon: React.FC<Props> = (props) => {
  const { className, position } = props;
  return (
    <div
      className={cl(
        "icon",
        "inline-flex",
        { "mr-3": position === "left" },
        { "ml-3": position === "right" },
        className
      )}
    >
      {renderIcon(props)}
    </div>
  );
};

export interface Props {
  className?: string;
  color?: string;
  name: IconName;
  alt?: string;
  position?: "left" | "right";
}

export default Icon;
