# 1.0.11

## Documentation

The project documentation is now hosted on [my own domain](https://dashboard.darekkay.com/docs/). The GitHub Markdown preview is nice (and can still be used), but a separate site has some advantages:

- It is easier to view and navigate (especially for non-tech people).
- It makes it possible to maintain the project journal as a [blog](https://dashboard.darekkay.com/docs/blog/) (with [RSS support](https://dashboard.darekkay.com/docs/rss.xml)!).
- It looks much better.

There are so many documentation platforms and I've spent way too much time finding the right one. [Docusaurus](https://docusaurus.io/) seemed like the best solution, even with first-class support for a blog. But the configuration is tricky and the folder structure inconvenient. Some other static site generators did not support simple relative links, like `[link](docs/README.md)`. In the end, I went with [VuePress](https://vuepress.vuejs.org/), which offers almost everything that I need out of the box. The RSS part is based on an unofficial plugin that I have customized to my needs.

The documentation itself is an ongoing work in progress, especially for the Widget section.

## Dependencies

When doing my regular dependency update, I was pleasantly surprised:

1. [redux-starter-kit](https://github.com/reduxjs/redux-starter-kit) 1.0 was released. Among the changes, `createAction` now allows defining custom types, leading to a better TypeScript integration.
2. [react-grid-layout](https://github.com/STRML/react-grid-layout), the library I am using for the dashboard grid, got the first updates since 1.5 years.

Unfortunately, I experienced a [strange issue](https://github.com/STRML/react-grid-layout/issues/1063), which crashed the application. The core issue was easy to identify and fix: React props are mutated in `react-grid-layout`, which is never a good idea. But this code hasn't changed in a while. So what caused the issue to emerge _now_? As I have updated a lot of libraries, it took a while to find the responsible library. In the end it was the [immer](https://github.com/immerjs/immer) dependency update in `redux-starter-kit`, which freezes the state, leading to the `react-grid-layout` bug becoming visible.
