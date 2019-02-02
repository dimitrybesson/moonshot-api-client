const express = require('express')
const request = require('request-promise-native')

const router = express.Router()

const baseUrl = 'https://api-gw.radio-canada.ca/aggregate-content/v1'

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

const getSportsContent = (path) => {
  return request({
    uri: `${baseUrl}${path}`,
    json: true
  })

  .then(data => data.map(mapAggrNewsItem))
}

router.get('/top-stories', (req, res) => {

  getSportsContent('/items?typeSet=cbc-ocelot&pageSize=10&page=1&orderLineupId=2.631&inline=relatedLinks&categorySlug=sports&source=Polopoly')

  .then(data => res.send(data))
})

module.exports = router