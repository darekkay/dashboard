import _ from "lodash";

export const toBoolean = (value?: string) => _.toLower(value) === "true";

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
