const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async ( req, res ) => {

	// const { searchTerm, gps } = req.query;

  // Test Variables
  let searchTerm = "full+stack+web+developer"
  let gps = "Orlando%2C+FL"

  const url = "https://www.indeed.com/jobs?q=" + searchTerm + "r&l=" + gps + "&limit=50&sort=date";

	try {
		axios.get(url).then(function(response) {
			var $ = cheerio.load(response.data);

			var results = [];
			
		
			$("div.result").each(function(i, element) {

				const link = "https://www.indeed.com" + $(element).find("a").attr("href");
				const title = $(element).find("div.title").text().trim();
				const company = $(element).find("div.sjcl").find("div").find("span.company").text().trim();
				let location = $(element).find("div.sjcl").find("span.location").text().trim();
				if (!location) {location = $(element).find("div.sjcl").find("div.location").text().trim()}
				const date = $(element).find("div.result-link-bar").find("span.date").text().trim();
				const descriptions = $(element).find("div.summary li").map(function() {
					return $(this).text();
				}).toArray();

				results.push({ link, title, company, location, descriptions, date });
			});

		res.json(results)

		});

	} catch(err) {
		console.log(err);
	};
};