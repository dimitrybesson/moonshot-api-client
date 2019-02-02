const express = require('express')
const request = require('request-promise-native')

const router = express.Router()

const baseUrl = 'https://api-gw.radio-canada.ca/audio/v1'

const mapMusicItem = item => {
  return {
    id: item.id,
    title: item.title,
    fullTitle: item.fullTitle,
    image: item.network.logoUrl,
    streamUrl: item.streamUrl,
    url: 'https://betalisten.cbc.ca/live-radio'
  }
}

const getMusicContent = (path) => {
  return request({
    uri: `${baseUrl}${path}`,
    json: true
  })

  .then(data => mapMusicItem(data))
}

router.get('/live', (req, res) => {

  getMusicContent('/live-streams/37')

  .then(data => res.send(data))
})

module.exports = router
