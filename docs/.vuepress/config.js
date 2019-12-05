module.exports = {
  title: "Dashboard Documentation",
  description: "Customizable personal dashboard and startpage",
  base: "/docs/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Widgets", link: "/widgets/" },
      { text: "Development", link: "/development/" },
      { text: "Changelog", link: "/changelog/" },
      { text: "Blog", link: "/blog/" },
      { text: "RSS", link: "https://dashboard.darekkay.com/docs/rss.xml" }
    ],
    sidebar: {
      "/widgets/": [
        {
          title: "",
          collapsable: false,
          children: [""]
        }
      ],
      "/development/": [
        {
          title: "",
          collapsable: false,
          children: [""]
        }
      ],
      "/blog/": [
        {
          title: "Blog",
          collapsable: false,
          sidebarDepth: 0,
          children: [
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
            "2019-03-14"
          ]
        }
      ]
    }
  },
  plugins: [
    [
      require("./plugins/rss"),
      {
        base_url: "/docs",
        site_url: "https://dashboard.darekkay.com",
        count: 20
      }
    ]
  ]
};
