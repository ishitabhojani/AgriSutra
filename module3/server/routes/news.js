const express = require('express');
const { handelGetNews } = require('../controllers/newsController');
const router = express.Router();

// const API_URL = 'http://api.mediastack.com/v1/news';
// const API_KEY = '69db73de2a296478a049c25925247d1c';
// const CATEGORY = 'general';
// const COUNTRIES = 'in';
// const KEYWORDS = 'agriculture,farmers';

router.get('/', handelGetNews);

module.exports = router;
