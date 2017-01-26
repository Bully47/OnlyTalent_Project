'use strict'

let collaboratorsController = require('../controllers/collaborators')

module.exports = (app) => {

    let ctrl = new collaboratorsController()

    app.get('/collaborators', (req, res, next) => {
        return ctrl.find(req, res, next)
    })
    app.delete('/collaborators/:id', (req, res, next) => {
        return ctrl.delete(req, res, next)
    })
    app.post('/collaborators', (req, res, next) => {
        return ctrl.create(req, res, next)
    })

}
