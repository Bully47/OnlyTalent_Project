((app) => {
    'use strict'

    app.service('collaboratorsService', function($http) {
        return {
            get() {
                return $http.get('/api/collaborators')
            }
        }
    })
})(angular.module('app.services'))
