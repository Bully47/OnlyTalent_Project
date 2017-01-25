((app) => {
    'use strict'

    app.component('collaborators', {
        templateUrl: 'js/components/collaborators/collaborators.html',
        controller: function(collaboratorsService) {
            collaboratorsService.get().then((res) => {
                this.collaborators = res.data;
            })
        }
    })
})(angular.module('app.collaborators'))
