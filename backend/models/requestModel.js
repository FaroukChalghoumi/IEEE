const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reqSchema = Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imagePath: {
        type: String,
        required: true 
    }
}, {timestamps : true })

module.exports = mongoose.model('request' , reqSchema)
