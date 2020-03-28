const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async ( req, res ) => {

	// const { searchTerm, location } = req.query;

  // Test Variables
  let searchTerm = "full+stack+web+developer"
  let location = "Orlando%2C+FL"

  const url = "https://www.indeed.com/jobs?q=" + searchTerm + "r&l=" + location;

	try {
		axios.get(url).then(function(response) {
			var $ = cheerio.load(response.data);

			var results = [];
		
			$("div.result").each(function(i, element) {

				var preLink = $(element).find("a").attr("href");
				const link = "https://www.indeed.com" + preLink;

				const title = $(element).find("div.title").text().trim();

				results.push({ link, title });
			});

		res.json(results)

		});

	} catch(err) {
		console.log(err);
	};
};