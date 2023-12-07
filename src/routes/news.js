const express = require("express");
const path = require("path");
const router = express.Router();
const newsController = require("../controller/news");

router.get("/news", newsController.getAllNews);
router.get("/news/newsdb", newsController.newsToDb)
router.get("/news/:category", newsController.getNewsByCategory);
router.get("/news/search/:keyword", newsController.getNewsBySearch);

module.exports = router;
