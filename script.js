var app = angular.module("computer"['ngRoute'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/main', {
        templateURL='main.html',
        controller='MainCtrl'
    });
}]);