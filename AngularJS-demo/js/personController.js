var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fullName = function() { //定义控制器方法
        return $scope.firstName + " " + $scope.lastName;
    }
});