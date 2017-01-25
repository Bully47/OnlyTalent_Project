((app) => {
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/')
        $stateProvider.state('app', {
                url: '',
                abstract: true,
                template: '<ui-view></ui-view>'
            })
            .state('app.home', {
                url: '/',
                template: '<home></home>'
            })
    }])

})(angular.module('app.config'))
