const express = require('express')
const router = express.Router()

router.use('/activities', require('./activities.js'))
// router.use('/exceptions', require('./exceptions.js'))
// router.use('/schedules', require('./schedules.js'))
// router.use('/news', require('./news.js'))
// router.use('/experiences', require('./experiences.js'))


module.exports = router;