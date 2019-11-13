
const express = require('express')

const cityApi = require('../models/city.js')

const cityRouter = express.Router()


//getAll
cityRouter.get('/', (req, res) => {
    cityApi.getAllCities()
        .then((cities) => {
            res.json(cities)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

//getOne
cityRouter.get('/:cityId', (req, res) => {
    cityApi.getCity(req.params.cityId)
        .then((singleCity) => {
            res.json(singleCity)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

//create
cityRouter.post('/', (req, res) => {
    cityApi.addNewCity(req.body)
        .then((newCity) => {
            res.json(newCity)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

//updateCity
cityRouter.put('/:cityId', (req, res) => {
    cityApi.updateCity(req.params.cityId, req.body)
        .then((updatedCity) => {
            res.json(updatedCity)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

//deleteCity
cityRouter.delete('/:cityId', (req, res) => {
    cityApi.deleteCity(req.params.cityId)
        .then((deletedCity) => {
            res.json(deletedCity)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

module.exports = {
    cityRouter
}