const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async ( req, res ) => {

    // Test Variables
    let searchTerm = "full+stack+web+developer"
    let location = "Orlando%2C+FL"

    // const { searchTerm, location }

    axios.get("https://www.indeed.com/jobs?q=full+stack+web+developer&l=Orlando%2C+FL").then(function(response) {

  // Load the HTML into cheerio
  var $ = cheerio.load(response.data);

  // Make an empty array for saving our scraped info
  var results = [];

  // With cheerio, look at each award-winning site, enclosed in "figure" tags with the class name "site"
  $("div.result").each(function(i, element) {

    /* Cheerio's find method will "find" the first matching child element in a parent.
     *    We start at the current element, then "find" its first child a-tag.
     *    Then, we "find" the lone child img-tag in that a-tag.
     *    Then, .attr grabs the imgs srcset value.
     *    The srcset value is used instead of src in this case because of how they're displaying the images
     *    Visit the website and inspect the DOM if there's any confusion
    */
    var preLink = $(element).find("a").attr("href");

    const postLink = "https://www.indeed.com" + preLink;

    // Push the image's URL (saved to the imgLink var) into the results array
    results.push({ link: postLink });
  });

  // After looping through each element found, log the results to the console
  res.json(results)
  console.log(results);
});
};