'use strict'
let mongoose = require('mongoose')

let citiesModel = mongoose.model('City', new mongoose.Schema({
    name: String
}, {
    timestamps: true
}))
module.exports = citiesModel
