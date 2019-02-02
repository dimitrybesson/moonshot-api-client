const express = require('express')
const router = express.Router()
const enController = require('./enControllers/enController')

router.use('/en', enController)
router.use('/fr', (req, res) => res.send('French'))

module.exports = router