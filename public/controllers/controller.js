var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from Controller");

    person1 = {
        name: 'tim',
        email: 'tim@email.com',
        number: '12321312123'
    };

    person2 = {
            name: 'emily',
            email: 'emily@emily.com',
            number: '3242342323423'
        };

        person3 = {
            name: 'john',
            email: 'email2@gmail.com',
            number: 'test'
        };

        var contactList = [person1, person2, person3];
        $scope.contactList = contactList;
        
}]);
