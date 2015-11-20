// Code goes here

angular.module('app', ['ngAnimate']);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.user1 = {
    name: 'Luke Skywalker',
    address: {
      street: 'PO Box 123',
      city: 'Secret Rebel Base',
      planet: 'Yavin 4'
    },
    friends: [
      'Han',
      'Leia',
      'Chewbacca'
    ],
    rank: 'scout',
    score: 27
  },
  $scope.user2 = {
    name: 'Han Solo',
    address: {
      street: 'PO Box 123',
      city: 'Mos Eisley',
      planet: 'Tattoine'
    },
    friends: [
      'Han',
      'Leia',
      'Chewbacca'
    ],
    rank: 'scout',
    score: 27
  }
});

angular.module('app').controller('secondCtrl', function($scope) {
  $scope.portal = {
    intro: 'Choose your destiny',
    locations: [
      'Naboo',
      'Otoh Gunga',
      'Droid Control Ship',
      'Theed Hangar',
      'Jedi Temple',
      'Galactic City'
    ]
  }
});

angular.module('app').directive('userInfoCard', function() {
  return {
    templateUrl: "userInfoCard.html",
    restrict: "E",
    scope: {
      userz: '=myAddition'
    },
    controller: function($scope) {
      $scope.knightMe = function(user) {
        if (user.score > 25) {
          user.rank = 'miner';
        }        
      }
    }
  }
});

angular.module('app').directive('destinationsCard', function() {
  return {
    templateUrl: "destinationsCard.html",
    restrict: "C",
    scope: {
      twoWayStreet: "=myTwoWayBind"
    }

  }
});

angular.module("app").directive("myDirective", function () {
  return {
    restrict: "A",
    scope: {
      text: "@myText",
      twoWayBind: "=myTwoWayBind",
      oneWayBind: "&myOneWayBind"
    }
  };
});

angular.module('app').controller("myController", function ($scope) {
  $scope.foo = {name: "Umur"};
  $scope.bar = "wereld";
});

console.log('omg');
