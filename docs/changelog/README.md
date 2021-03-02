# Changelog

## Current development

- :sparkles: Make background image configurable.
- :rocket: Display widget resize handle when focused. 
- :bug: Make widgets configurable on mobile again.
- :bug: Recalculate grid width on toggling the widget drawer.
- :hammer: Update dependencies.

## 1.4.0 (2021-01-10)

- :sparkles: New widget: [Country of the Day](https://dashboard.darekkay.com/docs/widgets/totd-world-countries.html).
- :sparkles: New widget: [Twitter Stats](https://dashboard.darekkay.com/docs/widgets/twitter-stats.html).
- :sparkles: New widget: [YouTube Stats](https://dashboard.darekkay.com/docs/widgets/youtube-stats.html).
- :sparkles: New widget: [Random Image](https://dashboard.darekkay.com/docs/widgets/random-image.html).
- :gem: Localize numbers.
- :gem: Don't render unavailable widgets. 
- :bug: Truncate widget headline.
- :bug: Make the Website widget usable in Firefox.
- :bug: Fix GitHub Stats not rendering if they have a value of zero ([@TateKennington](https://github.com/TateKennington)).
- :bug: Fix main menu focus ring.
- :hammer: Replace `enzyme` tests with `react-testing-library`.
- :hammer: Replace TravisCI with GitHub Actions.
- :hammer: Replace `moment` with `dayjs`.
- :hammer: Enable `lodash` tree-shaking.
- :hammer: Update dependencies.

## 1.3.0 (2020-04-22)

- :sparkles: New widget: [GitHub Stats](https://dashboard.darekkay.com/docs/widgets/github-stats.html).
- :sparkles: Add French translation ([@faboo03](https://github.com/faboo03)).
- :sparkles: Add a button to view the dashboard in fullscreen mode.
- :rocket: **[Date & Time]**: Localize date format.
- :rocket: Replace language select buttons with a dropdown.
- :rocket: Cache external axios calls.
- :gem: Remove unnecessary `React.memo` calls.
- :gem: Improve error screen design.
- :gem: Improve icon name TypeScript typing.
- :gem: Implement error handling for internal and 3rd-party requests.
- :hammer: Add a script to find missing label translations.
- :book: Publish a roadmap.
- :book: Update documentation.

## 1.2.0 (2020-04-11)

- :sparkles: New widget: [Cryptocurrencies](https://dashboard.darekkay.com/docs/widgets/cryptocurrencies.html).
- :sparkles: Enable data backup & restore.
- :rocket: Make input clear button not focusable via keyboard.
- :hammer: Split project into separate modules.
- :hammer: Create an Express server.
- :hammer: Update dependencies.

## 1.1.5 (2020-03-04)

- :sparkles: Enable moving/resizing widgets in view mode.
- :rocket: Enable widget configuration in edit mode.
- :rocket: Save configuration modals on pressing Enter within inputs.
- :rocket: Detect OS dark theme preference.
- :rocket: Improve widget placement by removing vertical gaps.
- :rocket: **[Text]**: Display a focus indicator.
- :bug: Persist widget state on viewport changes.
- :gem: Add semantics to all input fields.
- :gem: Provide focus ring fallback for Windows High Contrast mode.
- :gem: Normalize styling across browsers.
- :gem: Extract shared styles into a [separate package](https://www.npmjs.com/package/@darekkay/styles).
- :gem: Use a common color palette.
- :gem: Replace the (hamburger) menu button with a custom Button component.
- :hammer: Update dependencies.

## 1.1.4 (2020-02-04)

- :rocket: Introduce widget categories.
- :rocket: Use 24 columns instead of 12.
- :rocket: Center template board horizontally.
- :rocket: Use a red trash icon for the widget removal button.
- :rocket: Let the header link point to home instead of GitHub.
- :rocket: **[Chemical Elements]**: Display German name if German language is active.
- :bug: **[Image]**: Let the content always fit the whole widget.
- :bug: Fix the Input clear button on macOS.
- :gem: Use consistent typography.
- :gem: Add borderless buttons.
- :gem: Use the public Font Awesome icon package.
- :book: Update documentation.

## 1.1.3 (2020-01-14)

- :sparkles: New widget: [QR Code](https://dashboard.darekkay.com/docs/widgets/qr-code.html).
- :sparkles: New widget: [Counter](https://dashboard.darekkay.com/docs/widgets/counter.html).
- :sparkles: Display a message if required widget configuration is missing.
- :sparkles: Display a welcome page when no widget is available.
- :rocket: Move the board edit button into the header.
- :rocket: **[Website]** Display a list of example pages within the configuration modal.
- :rocket: Improve widget buttons design.
- :rocket: Provide a more detailed message if the user disabled JavaScript.
- :rocket: Prevent re-mounting all widgets on every layout change.
- :bug: Persist the selected language across sessions.
- :bug: Fix widget drawer layout on mobile.
- :gem: Refactor form components.
- :hammer: Add new file generators.
- :book: Update documentation.

## 1.1.2 (2020-01-10)

- :sparkles: New widget: [Website](https://dashboard.darekkay.com/docs/widgets/website.html) (Iframe).
- :sparkles: Auto-detect default language.
- :rocket: Add a button to cancel changed widget options.
- :rocket: Remove inner focus ring in Firefox.
- :rocket: Normalize some CSS rules across browsers.
- :bug: Prevent double vertical scrollbar.
- :gem: Refactor the menu into a [compound component](https://kentcdodds.com/blog/compound-components-with-react-hooks).
- :hammer: Host [Storybook](https://dashboard.darekkay.com/storybook/).
- :book: Add internationalization docs.
- :book: Standardize the changelog format.

## 1.1.1 (2019-12-22)

- :sparkles: New widget: [Image](https://dashboard.darekkay.com/docs/widgets/image.html).
- :gem: Include a `robots.txt` file.
- :hammer: Make Storybook widgets resizeable for improved UI tests.
- :hammer: Add new file generators (widget story, widget properties).
- :hammer: Enable GitLab CI.
- :hammer: Update dependencies.
- :book: Use an accessible accent color for the documentation.

## 1.1.0 (2019-12-05)

- :sparkles: New widget: [Chemical Element of the Day](https://dashboard.darekkay.com/docs/widgets/totd-chemical-elements.html).
- :rocket: Add a button to clear input fields.
- :gem: Prepare the architecture to support remote-driven widgets.
- :gem: Replace `redux-observable` with [redux-saga](https://github.com/redux-saga/redux-saga).
- :hammer: Turn off TypeScript linter rules for plain JavaScript files.
- :book: Add [Code of Conduct](https://github.com/darekkay/dashboard/blob/master/CODE_OF_CONDUCT.md).
- :book: Fix formatting and grammar issues in the documentation.

## 1.0.11 (2019-11-03)

- :sparkles: Add a button in the settings modal to delete all user data.
- :rocket: Improve the language selection UI.
- :bug: Display modal scrollbars if the content does not fit the screen.
- :bug: Prevent header height changes when switching between edit and view mode.
- :gem: Add a debugging mode for label translations.
- :hammer: Format Tailwind output file after it is generated.
- :hammer: Update dependencies.
- :book: Use VuePress for documentation (see [live](https://dashboard.darekkay.com/docs/)).

## 1.0.10 (2019-10-21)

- :rocket: Restructure the settings UI.
- :rocket: Add a theme selection preview.
- :bug: Hide the vertical scrollbar if all widgets fit into the screen.
- :gem: Define default options per widget.
- :gem: Centralize the access to environmental variables.
- :gem: List available widgets dynamically.
- :book: Update documentation.

## 1.0.9 (2019-09-30)

- :sparkles: Add a configuration dialog for the search widget.
- :rocket: **[Search]** Add common search providers.
- :rocket: Replace the widget loading animation with a skeleton.
- :bug: Minor bug fixes and improvements.

## 1.0.8 (2019-09-21)

- :sparkles: Enable removing existing widgets from the dashboard.
- :rocket: Add a global focus ring for all focusable elements.
- :gem: Extract button colors to support different themes.
- :hammer: Migrate to travis-ci.com.

## 1.0.7 (2019-08-27)

- :sparkles: Add widget drawer.
- :sparkles: Add multi-language support (English and German).
- :rocket: Disable all animations if the user prefers not to see any.
- :bug: Remove click effect for disabled buttons.
- :hammer: Add Storybook to preview UI components.

## 1.0.6 (2019-07-15)

- :sparkles: New widget: [Search](https://dashboard.darekkay.com/docs/widgets/search.html).
- :sparkles: Make widgets draggable and resizable.
- :rocket: Load only currently used widgets.
- :gem: Use functional CSS with Tailwind CSS.
- :hammer: Add widget file generator.

## 1.0.5 (2019-05-25)

- :sparkles: New widget: [Date & Time](https://dashboard.darekkay.com/docs/widgets/date-time.html).
- :sparkles: Persist the state in the local storage.

## 1.0.4 (2019-04-22)

- :sparkles: **[Text]** Make the widget editable.
- :rocket: Improve performance.
- :gem: Extract footer component.
- :gem: Clean up code.
- :gem: Add application state (redux).

## 1.0.3 (2019-03-21)

- :sparkles: Add theme support.
- :sparkles: Add favicons.
- :rocket: Don't crash the whole app if a single widget fails.

## 1.0.2 (2019-03-20)

- :sparkles: New widget: [Text](https://dashboard.darekkay.com/docs/widgets/text.html).
- :rocket: Make widget content centered (configurable).

## 1.0.1 (2019-03-17)

- :sparkles: Add a grid container with configurable widgets.
- :hammer: Add component file generators.

## 1.0.0 (2019-03-13)

- :tada: Initial release.
