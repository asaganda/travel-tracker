const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const Location = require('./models/locations.js')

app.use(express.json())
app.use(cors())

// sending new location info here
app.post('/locations', (req, res) => {
    Location.create(req.body, (err, createdLocation) => {
        res.json(createdLocation)
    })
})

// getting all locations to list
app.get('/locations', (req, res) => {
    Location.find({}, (err, foundLocations) => {
        res.json(foundLocations)
    })
})

// deletes specific id location given from request
app.delete('/locations/:id', (req, res) => {
    Location.findByIdAndRemove(req.params.id, (err, deletedLocation) => {
        res.json(deletedLocation)
    })
})

// updates specific id location given from request
app.put('/locations/:id', (req, res) => {
    Location.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLocation) => {
        res.json(updatedLocation)
    })
})

app.listen(3000, () => {
    console.log('listening...')
})

mongoose.connect('mongodb://localhost:27017/travel-tracker')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...')
})