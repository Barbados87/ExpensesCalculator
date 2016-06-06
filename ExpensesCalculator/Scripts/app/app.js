'use strict';
var calculatorApp = new angular.module('calculatorApp', [
    'ngRoute',
    'calculatorControllers',
    'calculatorServices',
    'ngMaterial'
]);

calculatorApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/people',
            {
                templateUrl: '/calc/Scripts/app/views/PeopleList.html',
                controller: 'PeopleListCtrl'
            })
            .when('/expenses',
            {
                templateUrl: '/calc/Scripts/app/views/PersonExpenses.html',
                controller: 'PersonExpensesCtrl'
            })
            .when('/expenses/:personId',
            {
                templateUrl: '/calc/Scripts/app/views/PersonExpenses.html',
                controller: 'PersonExpensesCtrl'
            })
            .when('/addexpense',
            {
                templateUrl: '/calc/Scripts/app/views/AddExpense.html',
                controller: 'NewExpenseCtrl'
            })
            .when('/addexpense/:personId',
            {
                templateUrl: '/calc/Scripts/app/views/AddExpense.html',
                controller: 'NewExpenseCtrl'
            })
            .when('/debts',
            {
                templateUrl: '/calc/Scripts/app/views/PersonDebts.html',
                controller: 'PersonDebtsCtrl'
            })
            .when('/debts/:personId',
            {
                templateUrl: '/calc/Scripts/app/views/PersonDebts.html',
                controller: 'PersonDebtsCtrl'
            })
            .otherwise(
            {
                redirectTo: '/people'
            });
    }
]);