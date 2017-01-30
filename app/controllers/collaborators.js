'use strict';
let Controller = require('./controllers')
const COLLABORATORS = require('../models/collaborators.js')

class collaboratorsController extends Controller {

    constructor() {
        super(COLLABORATORS)
    }

}

module.exports = collaboratorsController
