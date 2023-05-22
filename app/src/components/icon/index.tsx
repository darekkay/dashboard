import React from "react";
import cl from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import fontAwesomeIcons, { FontAwesomeIconName } from "./font-awesome";
import customIcons, { CustomIconName } from "./custom";

import "./styles.scss";

export type IconName = FontAwesomeIconName | CustomIconName;

const renderIcon = ({ name, alt }: Props) => {
  // @ts-expect-error
  const customIcon = customIcons[name];
  if (customIcon !== undefined) {
    return React.createElement(customIcon, {
      "aria-label": alt, // "alt" is not supported for inline SVGs
    });
  }

  // @ts-expect-error
  const fontAwesomeIcon = fontAwesomeIcons[name];
  if (fontAwesomeIcon !== undefined) {
    return <FontAwesomeIcon title={alt} icon={fontAwesomeIcon} />;
  }

  throw new Error(`Unknown icon '${name}'`);
};

const Icon = (props: Props) => {
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
  name: IconName;
  alt?: string;
  position?: "left" | "right";
}

export default Icon;
