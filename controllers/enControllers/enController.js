const express = require('express')
const newsController = require('./newsController')

const router = express.Router()

router.use('/news', newsController)

module.exports = router