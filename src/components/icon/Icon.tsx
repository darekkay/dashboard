import React from "react";
import _ from "lodash";
import cl from "classnames";

import svgs from "./svgs";

import "./Icon.scss";

export interface Props {
  className?: string;
  color?: string;
  name: string;
  alt?: string;
  position?: "left" | "right";
}

class Icon extends React.PureComponent<Props> {
  static defaultProps = {
    className: undefined,
    color: undefined,
    alt: "",
    position: undefined
  };

  render() {
    const { name, className, position } = this.props;
    return (
      <div
        className={cl(
          "icon",
          `icon-${name}`,
          {
            [`icon-${position}`]: position
          },
          className
        )}
      >
        {this.renderIcon(this.props)}
      </div>
    );
  }

  renderIcon = (props: Props) => {
    const component = svgs[_.capitalize(props.name)];
    if (!component) throw new Error(`Unknown icon '${props.name}'`);

    return React.createElement(component, {
      "aria-label": props.alt // "alt" is not supported for inline SVGs
    });
  };
}

export default Icon;
