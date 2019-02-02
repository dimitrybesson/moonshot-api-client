const express = require('express')
const request = require('request-promise-native')

const router = express.Router()

const baseUrl = 'https://api-gw.radio-canada.ca/audio/v1'

// const map function
const mapRadioItem = (item) => {
  return {
    id: item.id,
    title: item.title,
    fullTitle: item.fullTitle,
    image: item.network.logoUrl,
    streamUrl: item.streamUrl,
    url: 'https://betalisten.cbc.ca/live-radio'
  }
}

const getRadioContent = (path) => {
  return request({
    uri: `${baseUrl}${path}`,
    json: true
  })

  .then(data => data)
}

router.get('/live', (req, res) => {

  getRadioContent('/live-streams/41')

  .then(data => res.send(mapRadioItem(data)))
})

module.exports = router
