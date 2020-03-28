const router = require("express").Router();
const scrapeRoutes = require("./scrape");

// Job Routes
router.use("/scrape", scrapeRoutes)

module.exports = router;