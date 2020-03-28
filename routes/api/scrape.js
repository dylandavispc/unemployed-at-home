const router = require("express").Router();
const scrapeIndeed = require("../../services/indeedScrape");

// Indeed Scrape ("/api/scrape/indeed")
router.route("/indeed")
    .get(scrapeIndeed)

module.exports = router;