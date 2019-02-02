const express = require('express')
const request = require('request-promise-native')

const router = express.Router()

router.get('/top-stories', (req, res) => res.send('English top stories'))

module.exports = router