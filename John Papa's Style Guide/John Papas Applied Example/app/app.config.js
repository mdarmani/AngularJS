(function() {
	
    'use strict';

    angular
    	.module('myApp')

    	.config(config);

    	function config($routeProvider) {
		    $routeProvider
		        .otherwise({redirectTo: '/views/home'});
		}
    	
})();