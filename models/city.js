
const mongoose = require('./connection.js')

const CitySchema = new mongoose.Schema({
    cityName: String,
    state: String
})

const CityCollection = mongoose.model('City', CitySchema)

//getAllCities
const getAllCities = () => {
    return CityCollection.find({});
}

//getOneCity
const getCity = (cityId) => {
    return CityCollection.findById(cityId);
}

//createCity
const addNewCity = (newCity) => {
    return CityCollection.create(newCity);

}

//updateCity
const updateCity = (cityId, updateCity) => {
    return CityCollection.updateOne({ _id: cityId }, updateCity)
}

//deleteCity
const deleteCity = (cityId) => {
    return CityCollection.deleteOne({ _id: cityId })

}

module.exports = {
    getAllCities,
    getCity,
    addNewCity,
    updateCity,
    deleteCity
};