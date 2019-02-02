const express = require('express')
const newsController = require('./newsController')
const sportsController = require('./sportsController')
const radioController = require('./radioController')
const musicController = require('./musicController')

const router = express.Router()

router.use('/news', newsController)
router.use('/sports', sportsController)
router.use('/radio', radioController)
router.use('/music', musicController)

module.exports = router