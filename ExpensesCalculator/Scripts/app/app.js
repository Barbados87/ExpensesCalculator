﻿'use strict';
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
            .when('/expenses',
            {
                templateUrl: 'calc/Scripts/app/views/PersonExpenses.html',
                controller: 'PersonExpensesCtrl'
            })
            .when('/newexpense',
            {
                templateUrl: 'calc/Scripts/app/views/AddExpense.html',
                controller: 'NewExpenseCtrl'
            })
            .when('/debts',
            {
                templateUrl: 'calc/Scripts/app/views/PersonDebts.html',
                controller: 'PersonDebtsCtrl'
            })
            .otherwise(
            {
                redirectTo: '/people'
            });
    }
]);