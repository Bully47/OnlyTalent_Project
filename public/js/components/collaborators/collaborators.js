((app) => {
    'use strict'

    app.component('collaborators', {
        templateUrl: 'js/components/collaborators/collaborators.html',
        controller: function(collaboratorsService) {
            collaboratorsService.get().then((res) => {
                this.collaborators = res.data;
            })
            this.delete = (idx, collaborator) => {
                collaboratorsService.delete(collaborator).then((res) => {
                    this.collaborators.splice(idx, 1)
                })
            }
            this.add = (newCollaborator) => {
                collaboratorsService.add(newCollaborator).then((res) => {
                    this.collaborators.push(this.collaborator)
                    this.collaborator = {}
                })
            }
            this.update = (collaborator) => {
                collaborator.city = collaborator.city._id
                collaboratorsService.update(collaborator).then((res) => {

                })
            }
        }
    })
})(angular.module('app.collaborators'))
