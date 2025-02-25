const axios = require("axios");

const API_URL = "http://api.mediastack.com/v1/news";
const API_KEY = "69db73de2a296478a049c25925247d1c";
const CATEGORY = "general";
const COUNTRIES = "in";
const KEYWORDS = "agriculture,farmers";

async function handelGetNews(req, res) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        access_key: API_KEY,
        categories: CATEGORY,
        countries: COUNTRIES,
        keywords: KEYWORDS,
      },
    });

    if (response.data && response.data.data) {
      const articles = response.data.data.map((article) => ({
        title: article.title,
        description: article.description,
        url: article.url,
        image: article.image || null,
        source: article.source,
      }));

      res.json(articles);
    } else {
      res.status(500).json({ message: "Error fetching news" });
    }
  } catch (error) {
    console.error("News API Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


module.exports = {
    handelGetNews,
}