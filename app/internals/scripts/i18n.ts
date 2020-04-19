/** Find missing i18n translations */

/* eslint-disable no-console */
import { readdirSync, readFileSync } from "fs";
import { join } from "path";

import { isObject, reduce, merge, keys, difference } from "lodash";

const I18N_FILES_PATH = "src/common/translations";

/* For some labels it is OK to not have explicit translations */
const ALLOWED_MISSING_TRANSLATION_PREFIXES = [
  "language",
  "widget.cryptocurrencies.crypto"
];

const flattenKeys = (object: any, path: string[] = []): any =>
  !isObject(object)
    ? { [path.join(".")]: object }
    : reduce(
        object,
        (acc, next, key) => merge(acc, flattenKeys(next, [...path, key])),
        {}
      );

const readI18nFiles = (path: string): { [key: string]: string[] } =>
  readdirSync(path)
    // Read all i18n files
    .map(fileName => ({
      lang: fileName.substring(0, fileName.length - 5),
      labels: readFileSync(join(I18N_FILES_PATH, fileName), "utf-8")
    }))

    // Convert to JSON
    .map(file => ({
      ...file,
      labels: JSON.parse(file.labels)
    }))

    // Flatten keys
    .map(file => ({
      ...file,
      labels: flattenKeys(file.labels)
    }))

    // Concatenate all translations into a single {lang: labels} object
    .reduce((acc, file) => ({ ...acc, [file.lang]: keys(file.labels) }), {});

const allTranslations = readI18nFiles(I18N_FILES_PATH);

let containsMissingKeys = false;

Object.entries(allTranslations).forEach(([lang, labels]) => {
  if (lang === "en") return;

  /* Find labels that are defined for 'en' (= default) but missing in any other language */
  const missingLabels = difference(allTranslations.en, labels).filter(key =>
    ALLOWED_MISSING_TRANSLATION_PREFIXES.every(
      prefix => !key.startsWith(`${prefix}.`)
    )
  );

  if (missingLabels.length > 0) {
    console.error(`Missing '${lang}' translations for the following keys:`);
    console.info(missingLabels);
    console.info();
    containsMissingKeys = true;
  }

  /* Find labels that are missing for 'en' but defined in any other language */
  const unknownLabels = difference(labels, allTranslations.en);

  if (unknownLabels.length > 0) {
    console.warn(`Unknown labels for '${lang}':`);
    console.info(unknownLabels);
    console.info();
  }
});

if (!containsMissingKeys) {
  console.info("✓ All labels are translated.");
} else {
  console.error("✗ Label translations are missing.");
  process.exit(1);
}
