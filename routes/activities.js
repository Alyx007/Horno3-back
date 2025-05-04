const express = require('express')
const router = express.Router()
const ActivitiesControllers = require('../controllers/activitiesControlle')

router.get('/', ActivitiesControllers.getAllActivity)

module.exports = router;