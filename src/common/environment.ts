import _ from "lodash";

export const toBoolean = (value?: string) => _.toLower(value) === "true";

/** Available languages */
export const LANGUAGES = ["en", "de"];

/** Available themes */
export const THEMES = ["default", "dark"];

/** Dashboard grid properties */
export const GRID = {
  /** Number of dashboard columns */
  COLUMNS_COUNT: 24,

  /** Dashboard row height in px */
  ROW_HEIGHT_PX: 60
};

/** True, if the application is running in production mode*/
export const IS_PRODUCTION = process.env.NODE_ENV === "production";

/** True, if the application is running in development mode */
export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

/** The application version, derived from package.json */
export const APP_VERSION = process.env.REACT_APP_VERSION;

/** Pause saving the application state, used for testing purposes */
export const IS_STORAGE_PAUSED = toBoolean(
  process.env.REACT_APP_IS_STORAGE_PAUSED
);

/** If the URL contains the specified string, label IDs are displayed instead of English translations */
export const DEBUG_LABELS = window.location.href.indexOf("debug:labels") >= 0;
