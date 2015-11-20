// Code goes here

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.items = ['item1', 'item2', 'item3', 'item4'];  
});

angular.module('app').directive('myLazyRender', function() {
  return {
    restrict: 'A',
    transclude: 'element',
    priority: 500,
    link: function(scope, el, attr, ctrl, transclude) {
      var unwatchFn = scope.$watch(attr.myLazyRender, function(value) {
        if(value == true) {
          transclude(scope, function(clone) {
            el.after(clone);
          });
          unwatchFn();
        }
      })
    }
  }
})

angular.module('app').directive('echo', function() {
  return {
    priority: 300,
    link: function() {
      console.log('echo');
    }
  }
})
