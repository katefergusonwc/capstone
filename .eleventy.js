const { DateTime } = require("luxon");
const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });
  eleventyConfig.addPassthroughCopy("public");
};
