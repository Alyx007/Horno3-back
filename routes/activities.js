const express = require('express')
const router = express.Router()
const ActivitiesControllers = require('../controllers/activitiesController.js')

router.get('/', ActivitiesControllers.getAllActivity)
router.get('/:id', ActivitiesControllers.getActivity)
router.post('/add', ActivitiesControllers.addActivity)
router.put('/update/:id', ActivitiesControllers.updateActivity)

module.exports = router;