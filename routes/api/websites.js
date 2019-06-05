const express = require('express')
const route = express.Router()
const Website = require('../../models/Website')
const { create, read, update, destroy } = require('./form')
module.exports = route

route.post('/', (req, res) => {
  const newWebsite = { link: req.body.link, description: req.body.description }
  create(Website)(newWebsite, res)
})

route.get('/', (req, res) => read(Website)(res))
//
route.put('/:id', (req, res) => {
  const { link, description } = req.body
  const _id = req.params.id
  update(Website)({ _id, link, description }, res)
})

route.delete('/:id', (req, res) => {
  destroy(Website)(req.params.id, res)
})