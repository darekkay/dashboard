import React, { memo } from "react";
import cl from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import customIcons, { CustomIcons } from "./custom";
import fontAwesomeIcons from "./font-awesome";

import "./styles.scss";

export interface Props {
  className?: string;
  color?: string;
  name: string;
  alt?: string;
  position?: "left" | "right";
  icons?: CustomIcons;
}

const renderIcon: React.FC<Props> = props => {
  const customIcon = (props.icons || customIcons)[props.name];
  if (customIcon !== undefined) {
    return React.createElement(customIcon, {
      "aria-label": props.alt // "alt" is not supported for inline SVGs
    });
  }

  const fontAwesomeIcon = fontAwesomeIcons[props.name];
  if (fontAwesomeIcon !== undefined) {
    return <FontAwesomeIcon title={props.alt} icon={fontAwesomeIcon} />;
  }

  throw new Error(`Unknown icon '${props.name}'`);
};

const Icon: React.FC<Props> = memo(props => {
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
});

export default Icon;
