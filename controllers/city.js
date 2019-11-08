
const express = require('express')

const cityApi = require('../models/city.js')

const cityRouter = express.Router()


//getAll
cityRouter.get('/', (req, res) => {
  cityApi.getAllCities()
    .then((allCitys) => {
      res.json(allCitys)

    })
})

//getOne
cityRouter.get('/:cityId', (req, res) => {
  cityApi.getCity(req.params.id)
    .then((singleCity) => {
      res.json(singleCity)
    })
})

//addNewCity
cityRouter.post('/', (req, res) => {
  cityApi.addNewCity(req.body)
    .then((newCity) => {
      res.json(newCity)
    })
})

//updateCity
cityRouter.put('/:cityId', (req, res) => {
  cityApi.updateCity(req.params.id, req.body)
    .then((updatedCity) => {
      res.json(updatedCity)
    })
})

//deleteCity
cityRouter.delete('/:cityId', (req, res) => {
  cityApi.deleteCity(req.params.id)
    .then((deletedCity) => {
      res.json(deletedCity)
    })
})

module.exports = {
  cityRouter
}