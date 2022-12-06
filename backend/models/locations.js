const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    image: String,
    touristRating: Number,
    info: String
})

const Location = mongoose.model('Location', locationSchema)
module.exports = Location