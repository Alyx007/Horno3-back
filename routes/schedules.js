const express = require('express')
const router = express.Router()
const SchedulesControllers = require('../controllers/schedulesController')

router.get('/', SchedulesControllers.getAllSchedules)

module.exports = router;