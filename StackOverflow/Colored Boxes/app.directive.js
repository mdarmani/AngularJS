(function() {
	
    'use strict';

    angular
        .module('myApp')

        .directive('coloredBoxes', function() {
		  return {
		    restrict: 'E',
		    transclude: true,
		    templateUrl: '/templates/colored-boxes.html'
		  };
		});

})();