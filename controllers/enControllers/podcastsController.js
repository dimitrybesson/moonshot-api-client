const express = require('express')
const request = require('request-promise-native')

const router = express.Router()

const baseUrl = 'https://api-gw.radio-canada.ca/audio/v1'

const mapPodcast = item => {

  const clip = item.mostRecentClip

  return {
    id: item.id,
    title: item.title,
    description: item.description,
    image: item.image,
    contentType: 'podcast',
    hostImage: item.hostImage,
    clipCount: item.clipCount,
    slugTitle: item.slugTitle,
    url: `https://betalisten.cbc.ca/cbc-podcasts/${item.id}-${item.slugTitle}`,
    mostRecentClip: {
      id: clip.id,
      title: clip.title,
      duration: clip.duration,
      url: clip.url,
      releasedAt: clip.releasedAt,
      releasedAtPretty: clip.releasedAtPretty
    }
  }
}

const getRadioContent = (path) => {
  return request({
    uri: `${baseUrl}${path}`,
    json: true
  })

  .then(data => data.map(mapPodcast))
}

router.get('/', (req, res) => {

  getRadioContent('/shows?originalPodcast=true&pageSize=100&inline=mostRecentClip')

  .then(data => res.send(data))
})

module.exports = router
