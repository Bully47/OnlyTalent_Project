'use strict'
let mongoose = require('mongoose')

let collaboratorsModel = mongoose.model('Collaborator', new mongoose.Schema({
    name: String,
    age: Number,
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City"
    }
}, {
    timestamps: true
}))
module.exports = collaboratorsModel
