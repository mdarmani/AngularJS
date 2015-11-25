(function() {
	
    'use strict';

    angular
    	.module('myApp')
    	.config(['$routeProvider', function($routeProvider) {
		  $routeProvider.otherwise({redirectTo: '/view1'});
		}]);		        
})();

