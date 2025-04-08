const express = require('express')
const router = express.Router()
const ActivitiesControllers = require('../controllers/activities.js')

router.get('/', ActivitiesControllers.getAllActvity)
router.get('/:id', ActivitiesControllers.getActvity)
router.post('/add', ActivitiesControllers.addActvity)
router.put('/update/:id', ActivitiesControllers.updateActivity)

module.exports = router;