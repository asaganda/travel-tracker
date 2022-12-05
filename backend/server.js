const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.listen(3000, () => {
    console.log('listening...')
})

mongoose.connect('mongodb://localhost:27017/travel-tracker')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...')
})