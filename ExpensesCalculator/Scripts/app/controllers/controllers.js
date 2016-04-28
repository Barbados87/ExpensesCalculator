var calculatorControllers = new angular.module('calculatorControllers', []);

calculatorControllers.controller('PeopleListCtrl', ['$scope', 'peopleCrudService',
    function ($scope, peopleCrudService) {
        peopleCrudService.get(function (data) {
            $scope.people = data;
        });

        $scope.addNew = function() {
            peopleCrudService.save($scope.newPerson);
            $scope.newPerson = {};
        };
    }
]);

calculatorControllers.controller('NewExpenseCtrl', ['$scope', '$routeParams', 'peopleCrudService', 'expensesCrudService',
    function ($scope, $routeParams, peopleCrudService, expensesCrudService) {
        $scope.newExpense = {};
        $scope.newExpense.personId = $routeParams.personId;
        peopleCrudService.get(function (data) {
            $scope.people = data;
        });

        $scope.addNew = function() {
            expensesCrudService.save($scope.newExpense);
            $scope.newExpense = {};
        };
    }
]);

calculatorControllers.controller('PersonExpensesCtrl', ['$scope', '$routeParams', 'peopleCrudService', 'expensesCrudService',
    function ($scope, $routeParams, peopleCrudService, expensesCrudService) {
        $scope.personId = $routeParams.personId;
        peopleCrudService.getPerson($routeParams.personId, function (data) {
                $scope.personName = data.name;
            }
        );

        expensesCrudService.getExpenses($scope.personId, function(data) {
            $scope.expenses = data;
            $scope.expenses.totalAmount = 0;
        });
    }
]);

calculatorControllers.controller('PersonDebtsCtrl', ['$scope', 'peopleCrudService',
    function ($scope, peopleCrudService) {
        peopleCrudService.get(function (data) {
            $scope.people = data;
        });
    }
]);