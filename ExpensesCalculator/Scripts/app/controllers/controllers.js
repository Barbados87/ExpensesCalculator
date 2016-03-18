var calculatorControllers = new angular.module('calculatorControllers', []);

calculatorControllers.controller('PeopleListCtrl', ['$scope', '$http', 'peopleCrudService',
    function ($scope, $http, peopleCrudService) {
        peopleCrudService.get(function (data) {
            $scope.people = data;
        });

        $scope.addNew = function() {
            peopleCrudService.save($scope.newPerson);
            $scope.newPerson = {};
        };
    }
]);

calculatorControllers.controller('NewExpenseCtrl', ['$scope', '$http', 'peopleCrudService', 'expensesCrudService',
    function($scope, $http, peopleCrudService, expensesCrudService) {
        peopleCrudService.get(function (data) {
            $scope.people = data;
        });

        $scope.addNew = function() {
            expensesCrudService.save($scope.newExpense);
            $scope.newExpense = {};
        }
    }
]);

calculatorControllers.controller('PersonExpensesCtrl', ['$scope', '$http', 'expensesCrudService',
    function ($scope, $http, expensesCrudService) {

    }
]);