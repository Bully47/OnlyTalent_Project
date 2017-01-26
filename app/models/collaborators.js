'use strict'
let mongoose = require('mongoose')

let collaboratorsModel = mongoose.model('Collaborator', new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
}, {
    timestamps: true
}))
module.exports = collaboratorsModel
