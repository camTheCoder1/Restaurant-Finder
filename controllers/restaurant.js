
const express = require('express')
const restaurantApi = require('../models/restaurant.js')

const restaurantRouter = express.Router()


//getAll
restaurantRouter.get('/', (req, res) => {
    restaurantApi.getAllRestaurants()
        .then((allRestaurants) => {
            res.json(allRestaurants)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

restaurantRouter.get('/byCityId/:cityId', (req, res) => {
    restaurantApi.getRestaurantById(req.params.restaurantId)
        .then((singleRestaurant) => {
            res.json(singleRestaurant)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

//getOne
restaurantRouter.get('/:restaurantId', (req, res) => {
    restaurantApi.getRestaurant(req.params.restaurantId)
        .then((singleRestaurant) => {
            res.json(singleRestaurant)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

//create
restaurantRouter.post('/', (req, res) => {
    restaurantApi.addNewRestaurant(req.body)
        .then((newRestaurant) => {
            res.json(newRestaurant)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

//updateRestaurant
restaurantRouter.put('/:restaurantId', (req, res) => {
    restaurantApi.updateRestaurant(req.params.restaurantId, req.body)
        .then((updatedRestaurant) => {
            res.json(updatedRestaurant)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

//deleteRestaurant
restaurantRouter.delete('/:restaurantId', (req, res) => {
    restaurantApi.deleteRestaurant(req.params.restaurantId)
        .then((deletedRestaurant) => {
            res.json(deletedRestaurant)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

module.exports = {
    restaurantRouter
}