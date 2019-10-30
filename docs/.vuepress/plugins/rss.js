const path = require("path");

const fs = require("fs-extra");
const RSS = require("rss");
const chalk = require("chalk");

/*
 * Remove headline.
 * Use absolute path for assets.
 * Remove <OutboundLink/> component.
 */
const processMarkdown = (content, siteUrl) =>
  content
    .split("\n")
    .slice(1)
    .join("\n")
    .replace(/\.\.\/assets/g, `${siteUrl}/assets`);

const processHtml = content => content.replace(/<OutboundLink\/>/g, "");

const renderHtml = (page, siteUrl) =>
  processHtml(
    page._context.markdown.render(
      processMarkdown(page._strippedContent, siteUrl)
    ).html
  );

module.exports = (pluginOptions, ctx) => {
  return {
    name: "rss",

    generated() {
      const { pages, sourceDir } = ctx;
      const { filter = () => true, count = 20 } = pluginOptions;
      const siteData = require(path.resolve(sourceDir, ".vuepress/config.js"));
      const siteUrl = `${pluginOptions.site_url}${pluginOptions.base_url}`;

      const feed = new RSS({
        title: siteData.title,
        description: siteData.description,
        feed_url: `${siteUrl}/rss.xml`,
        site_url: `${siteUrl}`,
        language: "en"
      });

      // DEBUG
      //
      // const example = pages
      //   .filter(page => page.path.startsWith("/blog/2"))
      //   .sort((a, b) => b.title.localeCompare(a.title))[0];
      //
      // console.info(processMarkdown(example._strippedContent, siteUrl));
      // console.info(renderHtml(example, siteUrl));

      pages
        .filter(page => page.path.startsWith("/blog/2"))
        .map(page => ({ ...page, date: new Date(page.title.substr(0, 10)) }))
        .sort((a, b) => b.title.localeCompare(a.title))
        .map(page => ({
          title: page.title,
          description: renderHtml(page, siteUrl),
          url: `${siteUrl}${page.path}`,
          date: page.date
        }))
        .slice(0, count)
        .forEach(page => feed.item(page));

      fs.writeFile(path.resolve(ctx.outDir, "rss.xml"), feed.xml());
      console.log(chalk.green.bold("RSS has been generated!"));
    }
  };
};
