const express = require('express')
const router = express.Router()
const ExperiencesControllers = require('../controllers/experiencesController')

router.get('/', ExperiencesControllers.getAllExperiences)

module.exports = router;