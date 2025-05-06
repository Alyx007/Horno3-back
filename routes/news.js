const express = require('express')
const router = express.Router()
const NewsControllers = require('../controllers/newsController')

router.get('/', NewsControllers.getAllNews)

module.exports = router;