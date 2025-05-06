const express = require('express')
const router = express.Router()
const ExceptionControllers = require('../controllers/exceptionsController')

router.get('/', ExceptionControllers.getAllExceptions)

module.exports = router;