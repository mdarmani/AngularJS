'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/view4', {
    templateUrl: 'views/view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', [function() {

}]);