const express = require('express')
const newsController = require('./newsController')
const sportsController = require('./sportsController')

const router = express.Router()

router.use('/news', newsController)
router.use('/sports', sportsController)

module.exports = router