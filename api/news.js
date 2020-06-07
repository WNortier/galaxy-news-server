//@ts-nocheck
const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news-controller');

router.get('/get-news', newsController.getNews);

module.exports = router;
