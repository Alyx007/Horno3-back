const express = require('express')
const router = express.Router()
const ExceptionControllers = require('../controllersexceptionsController')

router.get('/', ExceptionControllers.getAllExceptions)

module.exports = router;