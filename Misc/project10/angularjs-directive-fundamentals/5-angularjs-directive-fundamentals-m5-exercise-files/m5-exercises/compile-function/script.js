// Code goes here

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  
});

angular.module('app').directive('simpleDirective', function() {
  return {
    // controller etc..
    compile: function(el, attrs) {

    	//console.log(el.context.attributes);
    	
    	//console.log(attrs);

    	console.log(el);
    	console.log(el.context);
    	console.log(el['0']);
    	//console.log(el);
    	//console.log(el.context === el.0)

    	
      // do some work
      return function(scope, el, attrs, ctrl, transclude) {
        // implementation
      }
    }
  }
})
