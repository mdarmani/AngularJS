// script.js

    // create the module and name it scotchApp
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

     // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
    
    // configure our routes
    scotchApp.config(function ($logProvider, $locationProvider, $routeProvider) {
    	
    	$logProvider.debugEnabled(true);
    	
    	$locationProvider.html5Mode(true);
    	
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController',
                controllerAs: 'home'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController',
                controllerAs: 'about'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController',
                controllerAs: 'contact'
            });
            
		//$locationProvider.hashPrefix('!');            
    });

   