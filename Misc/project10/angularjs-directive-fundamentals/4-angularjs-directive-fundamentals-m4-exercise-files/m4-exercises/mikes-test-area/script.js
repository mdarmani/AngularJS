// Code goes here

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  
  
});

angular.module('app').directive('transcludeDirective', function() {
  return {
    restrict: 'AE',
    transclude: 'element',
    scope: {},
    template: '<div class="mikes-element"><div ng-transclude></div></div>',
    replace: true,
    link: function(scope, elem, attrs, ctrl, transclude) {
      transclude(function(wef) { //'clone' is the clone of the directive element
        wef.css('background-color', 'yellow');
        elem.after(wef); //append the clone
      });
    }    
  }
});












