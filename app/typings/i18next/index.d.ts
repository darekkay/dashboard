import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    // disallow null values as valid translation
    returnNull: false;
  }
}
