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

  return {
    // leave dir settings alone if you didn’t customise them
  };
};