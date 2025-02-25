// server/routes/marketTrends.js
const express = require('express');
const router = express.Router();
const { scrapeMarketData } = require('../scraping/pupScraper');

router.get('/', async (req, res) => {
  const { commodity, state, market } = req.query;

  if (!commodity || !state || !market) {
    return res.status(400).json({ error: "Missing query parameters" });
  }

  try {
    const data = await scrapeMarketData(state, commodity, market);
    return res.json(data);
  } catch (error) {
    console.error("Error scraping market data:", error);
    return res.status(500).json({ error: error.toString() });
  }
});

module.exports = router;
