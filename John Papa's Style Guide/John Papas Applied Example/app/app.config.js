(function() {
	
    'use strict';

    angular
    	.module('myApp')

    	.config(config);

    	function config($routeProvider) {
		    $routeProvider
		        .when('/avengers', {
		            templateUrl: 'avengers.html',
		            controller: 'Avengers',
		            controllerAs: 'vm'
		        }).when('/avengers', {
		            templateUrl: 'avengers.html',
		            controller: 'Avengers',
		            controllerAs: 'vm'
		        }).when('/avengers', {
		            templateUrl: 'avengers.html',
		            controller: 'Avengers',
		            controllerAs: 'vm'
		        }).when('/avengers', {
		            templateUrl: 'avengers.html',
		            controller: 'Avengers',
		            controllerAs: 'vm'
		        }).otherwise({redirectTo: '/views/view1'});
		}
    	
})();