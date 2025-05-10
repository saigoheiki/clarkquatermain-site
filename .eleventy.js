// .eleventy.js
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // {{ someDate | date("yyyy") }}
  eleventyConfig.addFilter("date", (value, format = "yyyy") =>
    DateTime.fromJSDate(
      value === "now" ? new Date() : new Date(value)
    ).toFormat(format)
  );

  // Copy images to the output folder so hero banner loads
  eleventyConfig.addPassthroughCopy("img");

  // --- collections -------------------------------------------------
  // makes every Markdown file in /books/ available as {{ books }}
  eleventyConfig.addCollection("books", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("./books/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  return {
    // leave dir settings alone if you didn’t customise them
  };
};