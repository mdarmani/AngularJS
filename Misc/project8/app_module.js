var myMod1 = angular.module("app", [])

.controller('GreetingController1', ['$scope', function($scope) {
  $scope.greet2 = 'Hola!';
}]);

console.log('tester');