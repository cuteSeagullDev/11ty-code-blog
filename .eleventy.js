const { DateTime } = require('luxon'); //lightweight date formatter

module.exports = function (eleventyConfig) {

  //adding javascript-may not be needed
  // eleventyConfig.addPassthroughCopy("/index.js");



  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy('css');

  // Watch the `css` directory for changes
  eleventyConfig.addWatchTarget('css');


  //filter for data formatting on posts
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'dd LLL yyyy'
    );
  });

};
