
const mongoose = require('./connection.js')

const RestaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  hours: String,
  phoneNumber: Number,
  cityId: String
})

const RestaurantCollection = mongoose.model('Restaurant', RestaurantSchema)

//getAllRestaurants
const getAllRestaurants = () => {
  return RestaurantCollection.find({});
}

//getRestaurantById 
const getRestaurantById = (cityId) => {
  return RestaurantCollection.find({ cityId: cityId })
}

//getOneRestaurant
const getRestaurant = (restaurantId) => {
  return RestaurantCollection.findById(restaurantId);
}

//createRestaurant
const addNewRestaurant = (newRestaurant) => {
  return RestaurantCollection.create(newRestaurant);

}

//updateRestaurant
const updateRestaurant = (restaurantId, updateRestaurant) => {
  return RestaurantCollection.updateOne({ _id: restaurantId }, updateRestaurant)
}

//deleteRestaurant
const deleteRestaurant = (restaurantId) => {
  return RestaurantCollection.deleteOne({ _id: restaurantId })

}

module.exports = {
  getAllRestaurants,
  getRestaurant,
  addNewRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurantById
};