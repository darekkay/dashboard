# Changelog

## Unreleased

- :sparkles: New widget: Image.
- :construction_worker: Let the widget generator create a properties file.
- :book: Use an accessible accent color for the documentation.

## 1.1.0 (2019-12-05)

- :sparkles: New widget: Chemical Element of the Day.
- :rocket: Add a button to clear input fields.
- :construction_worker: Prepare the architecture to support remote-driven widgets.
- :construction_worker: Replace `redux-observable` with [redux-saga](https://github.com/redux-saga/redux-saga).
- :construction_worker: Turn off TypeScript linter rules for plain JavaScript files.
- :book: Add [Code of Conduct](https://github.com/darekkay/dashboard/blob/master/CODE_OF_CONDUCT.md).
- :book: Fix formatting and grammar issues in the documentation.

## 1.0.11 (2019-11-03)

- :sparkles: Add a button in the settings modal to delete all user data.
- :rocket: Improve the language selection UI.
- :bug: Display modal scrollbars if the content does not fit the screen.
- :bug: Prevent header height changes when switching between edit and view mode.
- :book: Use VuePress for documentation (see [live](https://dashboard.darekkay.com/docs/)).
- :construction_worker: Add a debugging mode for label translations.
- :construction_worker: Format Tailwind output file after it is generated.
- :construction_worker: Update dependencies.

## 1.0.10 (2019-10-21)

- :rocket: Restructure the settings UI.
- :rocket: Add a theme selection preview.
- :gem: Define default options per widget.
- :gem: Centralize the access to environmental variables.
- :bug: Hide the vertical scrollbar if all widgets fit into the screen.
- :book: Update documentation.
- :construction_worker: List available widgets dynamically.

## 1.0.9 (2019-09-30)

- :sparkles: Add a configuration dialog for the search widget.
- :gem: Add common search providers.
- :rocket: Replace the widget loading animation with a skeleton.
- :bug: Minor bug fixes and improvements.

## 1.0.8 (2019-09-21)

- :sparkles: Enable removing existing widgets from the dashboard.
- :gem: Extract button colors to support different themes.
- :gem: Add a global focus ring for all focusable elements.
- :construction_worker: Migrate to travis-ci.com.

## 1.0.7 (2019-08-27)

- :sparkles: Add widget drawer.
- :sparkles: Add multi-language support (English and German).
- :rocket: Disable all animations if the user prefers not to see any.
- :bug: Remove click effect for disabled buttons.
- :construction_worker_man: Add Storybook to preview UI components.

## 1.0.6 (2019-07-15)

- :sparkles: Make widgets draggable and resizable.
- :sparkles: Add search widget.
- :rocket: Load only currently used widgets.
- :gem: Use functional CSS with Tailwind CSS.
- :construction_worker: Add widget file generator.

## 1.0.5 (2019-05-25)

- :sparkles: Add DateTime widget.
- :sparkles: Persist the state in the local storage.

## 1.0.4 (2019-04-22)

- :sparkles: Make text widget editable.
- :rocket: Improve performance.
- :gem: Extract footer component.
- :gem: Clean up code.
- :construction_worker_man: Add application state (redux).

## 1.0.3 (2019-03-21)

- :sparkles: Add theme support.
- :sparkles: Add favicons.
- :rocket: Don't crash the whole app if a single widget fails.

## 1.0.2 (2019-03-20)

- :sparkles: Add a text widget.
- :sparkles: Make widget content centered (configurable).

## 1.0.1 (2019-03-17)

- :sparkles: Add a grid container with configurable widgets.
- :construction_worker_man: Add component file generators.

## 1.0.0 (2019-03-13)

- :tada: Initial release.
