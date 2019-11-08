
const express = require('express')
const restaurantApi = require('../models/restaurant.js')

const restaurantRouter = express.Router()


//getAll
restaurantRouter.get('/', (req, res) => {
    restaurantApi.getAllRestaurants()
        .then((allRestaurants) => {
            res.json(allRestaurants)

        })
})

restaurantRouter.get('/cityId/', (req, res) => {
    restaurantApi.getRestaurantById(req.params.cityId)
        .then((restaurantById) => {
            res.json(restaurantById)
        })
})

//getOne
restaurantRouter.get('/:restaurantId', (req, res) => {
    restaurantApi.getRestaurant(req.params.id)
        .then((singleRestaurant) => {
            res.json(singleRestaurant)
        })
})

//addNewRestaurant
restaurantRouter.post('/', (req, res) => {
    restaurantApi.addNewRestaurant(req.body)
        .then((newRestaurant) => {
            res.json(newRestaurant)
        })
})

//updateRestaurant
restaurantRouter.put('/:restaurantId', (req, res) => {
    restaurantApi.updateRestaurant(req.params.id, req.body)
        .then((updatedRestaurant) => {
            res.json(updatedRestaurant)
        })
})

//deleteRestaurant
restaurantRouter.delete('/:restaurantId', (req, res) => {
    restaurantApi.deleteRestaurant(req.params.id)
        .then((deletedRestaurant) => {
            res.json(deletedRestaurant)
        })
})

module.exports = {
    restaurantRouter
}