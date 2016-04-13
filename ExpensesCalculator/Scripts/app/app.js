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
                templateUrl: 'Scripts/app/views/PeopleList.html',
                controller: 'PeopleListCtrl'
            })
            .when('/expenses',
            {
                templateUrl: 'Scripts/app/views/PersonExpenses.html',
                controller: 'PersonExpensesCtrl'
            })
            .when('/expenses/:personId',
            {
                templateUrl: 'Scripts/app/views/PersonExpenses.html',
                controller: 'PersonExpensesCtrl'
            })
            .when('/addexpense',
            {
                templateUrl: 'Scripts/app/views/AddExpense.html',
                controller: 'NewExpenseCtrl'
            })
            .when('/addexpense/:personId',
            {
                templateUrl: 'Scripts/app/views/AddExpense.html',
                controller: 'NewExpenseCtrl'
            })
            .when('/debts',
            {
                templateUrl: 'Scripts/app/views/PersonDebts.html',
                controller: 'PersonDebtsCtrl'
            })
            .otherwise(
            {
                redirectTo: '/people'
            });
    }
]);