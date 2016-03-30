var calculatorServices = angular.module('calculatorServices', []);

calculatorServices.factory('peopleCrudService', [
    '$http', '$location', function($http, $location) {
        var factory = {};

        factory.get = function(callback) {
            $http.get('/calc/api/people').then(function(response) {
                callback(response.data);
            });
        };

        factory.getPerson = function (id, callback) {
            $http.get('/calc/api/people/' + id).then(function (response) {
                callback(response.data);
            });
        };

        factory.save = function(person) {
            $http.post('/calc/api/people',
            {
                "name": person.name
            }).then(function() {
                $location.path('~/Scripts/app/views/PeopleList.html');
            });
        };

        return factory;
    }
]);

calculatorServices.factory('expensesCrudService', ['$http', '$location', function ($http, $location) {
    var factory = {};

    factory.get = function (callback) {
        $http.get('/calc/api/expenses').then(function (response) {
            callback(response.data);
        });
    };

    factory.getExpenses = function(personId, callback) {
        $http.get('/calc/api/expenses/' + personId).then(function(response) {
            callback(response.data);
        });
    };

    factory.save = function (expense) {
        $http.post('/calc/api/expenses',
        {
            "personId": expense.personId,
            "amount": expense.amount,
            "date": expense.date,
            "description": expense.description
        }).then(function () {
            $location.path('/expenses/' + expense.personId);
        });
    };

    return factory;
}])