const mongoose = require('./connection.js')

const CitySchema = new mongoose.Schema({
    name: String,
})

const CityCollection = mongoose.model('City', CitySchema)

//getAll
const getAllCities = () => {
    return CityCollection.find()
}
//getOne
const getCity = (cityId) => {
    return CityCollection.findById(cityId)
}
//create
const addNewCity = (newCity) => {
    return CityCollection.create(newCity)
}
//update
const updateCity = (cityId, updatedCity) => {
    return CityCollection.updateOne({ _id: cityId }, updatedCity)
}
//delete
const deleteCity = (cityId) => {
    return CityCollection.deleteOne({ _id: cityId })
}


module.exports = {
    getAllCities,
    getCity,
    addNewCity,
    updateCity,
    deleteCity
}