const express = require('express')
const router = express.Router()
const ExperienceControllers = require('../controllers/experiencesController')

router.get('/', ExperienceControllers.getAllExperience)

module.exports = router;