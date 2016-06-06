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

        $scope.myDate = new Date();
        $scope.minDate = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth() - 2,
            $scope.myDate.getDate()
        );
        $scope.maxDate = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth() + 2,
            $scope.myDate.getDate());
        $scope.onlyWeekendsPredicate = function (date) {
            var day = date.getDay();
            return day === 0 || day === 6;
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

calculatorControllers.controller('UserCtrl', ['$scope', 'userService',
    function ($scope, userService) {
        $scope.newUser = {};

        $scope.register = function () {
            userService.register($scope.newUser);
        }
    }
]);