const express = require('express')
const router = express.Router()

router.use('/en', (req, res) => res.send('English'))
router.use('/fr', (req, res) => res.send('French'))

module.exports = router