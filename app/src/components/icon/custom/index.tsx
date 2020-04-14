import React from "react";

export interface CustomIcons {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const icons: CustomIcons = {};

export default icons;
