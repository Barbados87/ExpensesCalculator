var calculatorControllers = new angular.module('calculatorControllers', []);

calculatorControllers.controller('PeopleListCtrl', ['$scope', '$http', 'peopleCrudService',
    function ($scope, $http, peopleCrudService) {
        peopleCrudService.get(function (data) {
            $scope.people = data;
        });

        $scope.addNew = function() {
            peopleCrudService.save($scope.newPerson);
            $scope.newPerson = {};
        }
    }
]);