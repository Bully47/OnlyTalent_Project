'use strict'
let mongoose = require('mongoose')

let collaboratorsModel = mongoose.model('Collaborator', new mongoose.Schema({
    name: String,
}, {
    timestamps: true
}))
module.exports = collaboratorsModel
