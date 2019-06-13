import React from "react";

/**
 * Theme options are defined via CSS variables, so it's easy to switch values at runtime.
 */

export interface Variables {
  "--text-color": string;
  "--background-color": string;
  "--highlight-color": string;
  "--border-color": string;
  "--widget-text-color": string;
  "--widget-background-color": string;
  "--widget-dim-background-color": string;
  "--footer-background-color": string;
  "--loading-background-color": string;
  "--loading-spinner-color": string;

  [key: string]: string;
}

export interface Themes {
  [key: string]: Variables & React.CSSProperties;
}

const themes: Themes = {
  default: {
    "--text-color": "#2b3236",
    "--background-color": "#f5f7fb",
    "--highlight-color": "#005aff",
    "--border-color": "#ddd",
    "--widget-text-color": "#000",
    "--widget-background-color": "#fff",
    "--widget-dim-background-color": "rgba(0, 0, 0, 0.05)",
    "--footer-background-color": "#fff",
    "--loading-background-color": "hsla(0, 0%, 62%, 0.3)",
    "--loading-spinner-color": "#202020"
  },
  dark: {
    "--text-color": "#fff",
    "--background-color": "#1c1c1c",
    "--highlight-color": "#b9ca4a",
    "--border-color": "#74715e",
    "--widget-text-color": "#fff",
    "--widget-background-color": "#333",
    "--widget-dim-background-color": "rgba(0, 0, 0, 0.5)",
    "--footer-background-color": "#333",
    "--loading-background-color": "hsla(0, 0%, 96%, 0.3)",
    "--loading-spinner-color": "#fff"
  }
};

// TODO: memoize
export const objectToStyleString = (object: { [key: string]: string }) => {
  const result = [];
  for (let prop in object) {
    result.push(`${prop}:${object[prop]}`);
  }

  return result.join("; ");
};

const getThemeStyle = (name: string) => objectToStyleString(themes[name]);

export default getThemeStyle;
