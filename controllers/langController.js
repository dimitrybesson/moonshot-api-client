const express = require('express')
const router = express.Router()
const enController = require('./enControllers/enController')
const frController = require('./frControllers/frController')

router.use('/en', enController)
router.use('/fr', frController)

module.exports = router