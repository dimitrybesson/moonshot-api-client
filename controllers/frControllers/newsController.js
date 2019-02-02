const express = require('express')
const request = require('request-promise-native')

const router = express.Router()

const baseUrl = 'https://services.radio-canada.ca/hackathon/neuro/v1'
const key = '31b2bb0e-85ec-4406-9b22-31c93d7e75f9'
const keyQuery = `?client_key=${key}`

const mapNeuroNewsItem = (item) => {
  // some item objects don't have summaryImage
  const imageUrl = item.summaryImage ? item.summaryImage.concreteImages[0].mediaLink.href : ''

  return {
    id: item.id,
    title: item.title,
    source: 'neuro',
    sourceId: item.id,
    image: imageUrl,
    publishedAt: null,
    readablePublishedAt: null,
    updatedAt: item.publishedLastTimeAt,
    readableUpdatedAt: null,
    numViewers: null
  }
}

router.get('/top-stories', (req, res) => {

  return request({
    uri: `${baseUrl}/future/lineups/4159${keyQuery}`,
    json: true
  })

  .then(data => {
    return res.send(data.pagedList.items.map(mapNeuroNewsItem))
  })
})

module.exports = router