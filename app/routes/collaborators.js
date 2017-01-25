'use strict'

let collaboratorsController = require('../controllers/collaborators')

module.exports = (app) => {

    let ctrl = new collaboratorsController()

    app.get('/collaborators', (req, res, next) => {
        return ctrl.find(req, res, next)
    })

}
