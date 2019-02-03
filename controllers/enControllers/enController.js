const express = require('express')
const newsController = require('./newsController')
const sportsController = require('./sportsController')
const radioController = require('./radioController')
const musicController = require('./musicController')
const podcastsController = require('./podcastsController')

const router = express.Router()

router.use('/news', newsController)
router.use('/sports', sportsController)
router.use('/radio', radioController)
router.use('/music', musicController)
router.use('/podcasts', podcastsController)

module.exports = router