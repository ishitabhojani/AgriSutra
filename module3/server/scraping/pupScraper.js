// server/scraping/pupScraper.js
const puppeteer = require('puppeteer');

/**
 * Close the popup if it appears on the page.
 */
async function closePopup(page) {
  try {
    await page.waitForSelector('.popup-onload .close', { timeout: 3000 });
    await page.click('.popup-onload .close');
    console.log("Popup closed");
  } catch (error) {
    console.log("Popup not found");
  }
}

/**
 * Scrape market data from Agmarknet using Puppeteer.
 * @param {string} state - The state name to select.
 * @param {string} commodity - The commodity name to select.
 * @param {string} market - The market name to select.
 * @returns {Array} - An array of scraped data objects.
 */
async function scrapeMarketData(state, commodity, market) {
  const url = "https://agmarknet.gov.in/SearchCmmMkt.aspx";
  // Launch Puppeteer (in headless mode)
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Go to initial page
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Close the popup if present
  await closePopup(page);

  // Select commodity
  const commodityValue = await page.evaluate((commodity) => {
    const options = Array.from(document.querySelectorAll('#ddlCommodity option'));
    const match = options.find(option => option.textContent.trim() === commodity);
    return match ? match.value : "";
  }, commodity);
  await page.select('#ddlCommodity', commodityValue);

  // Select state
  const stateValue = await page.evaluate((state) => {
    const options = Array.from(document.querySelectorAll('#ddlState option'));
    const match = options.find(option => option.textContent.trim() === state);
    return match ? match.value : "";
  }, state);
  await page.select('#ddlState', stateValue);

  // Set date to 7 days ago
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const day = String(sevenDaysAgo.getDate()).padStart(2, '0');
  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const month = monthNames[sevenDaysAgo.getMonth()];
  const year = sevenDaysAgo.getFullYear();
  const dateString = `${day}-${month}-${year}`;

  await page.evaluate((dateString) => {
    document.getElementById('txtDate').value = dateString;
  }, dateString);

  // Click the first search button
  await Promise.all([
    page.click('#btnGo'),
    page.waitForNavigation({ waitUntil: 'networkidle2' })
  ]);

  // Select market
  const marketValue = await page.evaluate((market) => {
    const options = Array.from(document.querySelectorAll('#ddlMarket option'));
    const match = options.find(option => option.textContent.trim() === market);
    return match ? match.value : "";
  }, market);
  await page.select('#ddlMarket', marketValue);

  // Click the search button again
  await Promise.all([
    page.click('#btnGo'),
    page.waitForNavigation({ waitUntil: 'networkidle2' })
  ]);

  // Wait for the results table to appear
  await page.waitForSelector('#cphBody_GridPriceData');

  // Extract table data
  const data = await page.evaluate(() => {
    const rows = document.querySelectorAll('#cphBody_GridPriceData tr');
    const dataList = [];
    rows.forEach(row => {
      const cells = Array.from(row.querySelectorAll('td')).map(td => td.innerText.trim());
      if (cells.length) {
        dataList.push(cells);
      }
    });
    return dataList;
  });

  // Transform data into JSON objects
  let jsonList = [];
  // This slicing/indexing depends on the table structure
  // Adjust if the actual site changes or table format differs
  for (let i = 3; i < data.length; i++) {
    const row = data[i];
    if (row.length >= 10) {
      jsonList.push({
        "S.No": row[0],
        "City": row[1],
        "Commodity": row[3],
        "Min Price": row[6],
        "Max Price": row[7],
        "Model Price": row[8],
        "Date": row[9]
      });
    }
  }

  await browser.close();
  return jsonList;
}

module.exports = {
  scrapeMarketData
};
