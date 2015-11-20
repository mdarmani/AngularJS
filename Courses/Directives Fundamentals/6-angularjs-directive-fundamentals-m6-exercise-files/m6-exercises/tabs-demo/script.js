// Code goes here

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  
});

angular.module('app').directive('swTabstrip', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: function($scope) {

      $scope.panes = [];

      $scope.select = function(pane) {
        //turn the selected option to true and enabled this for each anchor element within ng-repeat
        console.log(pane);
        pane.selected = true;
        $scope.panes.forEach(function(response) {
          //console.log(response);
          //console.log(pane);

          //console.log(response == pane);
          if(response !== pane) {
            response.selected = false;
          }
        })
      };
      
      this.addPane = function(pane) {
        console.log($scope.panes.length);
        console.log(pane);
        $scope.panes.push(pane);
        console.log($scope.panes.length);
        if($scope.panes.length === 1) {
          pane.selected = true;
        }
      }
    },
    templateUrl: 'swTabstrip.html'
  }
});

angular.module('app').directive('swPane', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@'
    },
    require: '^swTabstrip',
    link: function(scope, el, attrs, ctrl) {
      ctrl.addPane(scope);
    },
    templateUrl: 'swPane.html'
  }
})






















