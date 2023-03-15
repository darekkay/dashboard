/* eslint-disable prefer-destructuring */

import toLower from "lodash/toLower";

export const toBoolean = (value?: string) => toLower(value) === "true";

/** Available languages */
export const LANGUAGES = ["en", "de", "fr", "pt"];

/** Available themes */
export const THEMES = ["default", "dark"];

/** Dashboard grid properties */
export const GRID = {
  /** Number of dashboard columns */
  COLUMNS_COUNT: 24,

  /** Dashboard row height in px */
  ROW_HEIGHT_PX: 55,
};

/** True, if the application is running in production mode*/
export const IS_PRODUCTION = process.env.NODE_ENV === "production";

/** True, if the application is running in development mode */
export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

/** True, if the application is running in test environment */
export const IS_TEST = process.env.NODE_ENV === "test";

/** The application version, derived from package.json */
export const APP_VERSION = process.env.APP_VERSION;

/** Base URL for all internal API requests */
export const API_BASE_URL =
  process.env.DASHBOARD_API_BASE_URL ?? "http://localhost:3401/";

/** Pause saving the application state, used for testing purposes */
export const IS_STORAGE_PAUSED = toBoolean(
  process.env.DASHBOARD_IS_STORAGE_PAUSED
);

/** If the URL contains the specified string, label IDs are displayed instead of English translations */
export const DEBUG_LABELS = window.location.href.includes("debug.labels");
