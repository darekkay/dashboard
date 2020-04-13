import React from "react";

import { ReactComponent as De } from "./lang/de.svg";
import { ReactComponent as En } from "./lang/en.svg";
import { ReactComponent as Fr } from "./lang/fr.svg";

export interface CustomIcons {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const icons: CustomIcons = {
  "lang-de": De,
  "lang-en": En,
  "lang-fr": Fr
};

export default icons;
