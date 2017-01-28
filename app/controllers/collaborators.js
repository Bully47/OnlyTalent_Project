'use strict';
let Controller = require('./controllers')
const COLLABORATORS = require('../models/collaborators.js')
const CITIES = require('../models/cities.js')

class collaboratorsController extends Controller {

    constructor() {
        super(COLLABORATORS)
    }
    find(req, res, next) {
        this.model.find(req.params.id)
            .populate('city')
            .exec((err, document) => {
                if (err) next(err)
                else res.json(document)
            })
    }
}

module.exports = collaboratorsController
