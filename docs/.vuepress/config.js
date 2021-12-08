module.exports = {
  title: "Dashboard Documentation",
  description: "Customizable personal dashboard and startpage",
  base: "/docs/",

  bundler: "@vuepress/bundler-vite",

  head: [
    [
      "meta",
      {
        property: "og:image",
        content: "https://dashboard.darekkay.com/docs/assets/img/dashboard.jpg",
      },
    ],
    ["meta", { property: "og:title", content: "Dashboard blog" }],
    ["meta", { name: "twitter:site", content: "@darek_kay" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
  ],

  themeConfig: {
    repo: "https://github.com/darekkay/dashboard",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    lastUpdated: false,
    contributors: false,
    navbar: [
      { text: "Home", link: "/" },
      { text: "Widgets", link: "/widgets/" },
      { text: "Roadmap", link: "/roadmap/" },
      { text: "Development", link: "/development/" },
      { text: "Changelog", link: "/changelog/" },
      { text: "Blog", link: "/blog/" },
      { text: "RSS", link: "https://dashboard.darekkay.com/docs/rss.xml" },
    ],
    sidebar: {
      "/widgets/": [
        {
          text: "",
          children: [""],
        },
      ],
      "/roadmap/": [
        {
          text: "",
          children: [""],
        },
      ],
      "/development/": [
        {
          text: "",
          children: [""],
        },
      ],
      "/blog/": [
        {
          text: "Blog",
          children: [
            "2021-05-26",
            "2021-01-10",
            "2020-04-22",
            "2020-04-11",
            "2020-03-04",
            "2020-02-04",
            "2020-01-14",
            "2020-01-10",
            "2019-12-22",
            "2019-12-05",
            "2019-11-03",
            "2019-10-21",
            "2019-09-30",
            "2019-09-21",
            "2019-08-27",
            "2019-07-15",
            "2019-05-25",
            "2019-04-22",
            "2019-03-21",
            "2019-03-20",
            "2019-03-17",
            "2019-03-14",
          ],
        },
      ],
    },
    sidebarDepth: 1,
  },
  plugins: [
    [
      require("./plugins/rss"),
      {
        base_url: "/docs",
        site_url: "https://dashboard.darekkay.com",
        count: 20,
      },
    ],
    [
      "@vuepress/plugin-search",
      {
        hotKeys: [],
      },
    ],
  ],
};
