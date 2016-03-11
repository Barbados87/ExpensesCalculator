'use strict';
var calculatorApp = new angular.module('calculatorApp', [
    'ngRoute',
    'calculatorControllers',
    'calculatorServices'
]);

calculatorApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/people',
            {
                templateUrl: 'calc/Scripts/app/views/PeopleList.html',
                controller: 'PeopleListCtrl'
            })
            .otherwise(
            {
                redirectTo: '/people'
            });
    }
]);