/**
 * Getting Started With AngularJS
 * http://dosoma.com/series/getting-started-with-angularjs/episode/overview
 */

/**
 * Modules are simple containers for various pieces of your application.
 *
 * angular.module('ExampleApp', ['angular-loading-bar'])
 * <body ng-app='ExampleApp'> 
 */
angular.module('ExampleApp', [])


/**
 * Controller that connects business logic to the view.
 */
.controller('ExampleCtrl', ['$scope', 'User', function($scope, User) {
  
  // Grab this from a route variable
  $scope.userId = 1;
  
  $scope.updateUser = function() {
    $scope.user.update().success(function(data) {
      if (data.success) {
        /**
         *`data` contains the response from your
         * server so you'll want to respond 
         * with JSON.
         */
        console.log('Successful request!');
        return;
      }
      
      // Because there is no backend this will always error.
      console.log('Error!');
    });
  };
  
  $scope.init = function() {
    $scope.user = new User($scope.userId);
  };
  
  $scope.init();
  
}])


/**
 * Factories return an object where you can run some code beforehand.
 *
 * var example = new ExampleFactory();
 * example.modifyFonts(somehow);
 */
.factory('User', ['$http', function($http) {
  
  return function(userId) {
    // Private Variables
    // var someValue = '';
    
    // Public Variables
    var self = {
      id: 0,
      info: {
        first: '',
        last: '',
        email: ''
      }
    };

    // Private Functions
    function init() {
      self.id = userId;
      self.load();
    }
    
    // Public Functions
    self.update = function() {
      return $http.put('/api/users/' + self.id, self.info);
    };
    
    self.create = function(inputs) {
      return $http.post('/api/users', inputs);
    }
    
    self.load = function() {
      return $http.get('/api/users/' + self.id).success(function(data) {
        self.info.first = 'Rick' // data.user.first;
        self.info.last = 'James' // data.user.first;
        self.info.email = 'rick@james.com' // data.user.first;
      });
    };

    init();
    
    // Return instance
    return self;
  };
  
}]);