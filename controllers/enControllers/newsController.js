const express = require('express')
const request = require('request-promise-native')

const router = express.Router()

const mapAggrNewsItem = (item) => {
  return {
    id: item.id,
    title: item.title,
    image: item.typeAttributes.imageLarge,
    publishedAt: item.publishedAt,
    readablePublishedAt: item.readablePublishedAt,
    updatedAt: item.updatedAt,
    readabUpdatedAt: item.readabUpdatedAt,
    numViewers: item.typeAttributes.trending.numViewers,
    url: item.typeAttributes.url
  }
}

const baseUrl = 'https://api-gw.radio-canada.ca/aggregate-content/v1'

const getNewsContent = (path) => {
  return request({
    uri: `${baseUrl}${path}`,
    json: true
  })

  .then(data => data.map(mapAggrNewsItem))
}

router.get('/top-stories', (req, res) => {

  getNewsContent('/items?lineupSlug=trending-news')

  .then(data => res.send(data))
})

router.get('/world', (req, res) => {

  getNewsContent('/categories/36/items')

  .then(data => res.send(data))
})

router.get('/local', (req, res) => {

  getNewsContent('/categories/55/items')

  .then(data => res.send(data))
})

module.exports = router