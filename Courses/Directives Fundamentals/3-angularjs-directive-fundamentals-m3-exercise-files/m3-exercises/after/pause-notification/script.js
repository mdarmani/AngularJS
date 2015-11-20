// Code goes here

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.messages = [];
  
  $scope.handlePause = function(e) {
    console.log(e);
    $scope.messages.push({text: 'paused!'});
    console.log('paused!');
  }
});

angular.module('app').directive('eventPause', function($parse) {
  return {
    restrict: 'A',
    link: function(scope, el, attrs) {
      console.log(attrs);
      var fn = $parse(attrs['eventPause']);
      el.on('pause', function(event) {
        scope.$apply(function() {
          fn(scope, {evt: event})
        })
      })
    }
  }
})

angular.module('app').directive('spacebarSupport', function() {
  return {
    restrict: 'A',
    link: function(scope, el, attrs) {
      $('body').on('keypress', function(evt) {
        var vidEl = el[0];
        if(evt.keyCode === 32) {
          if(vidEl.paused) {
            vidEl.play();
          } else {
            vidEl.pause();
          }
        }
      })
    }
  }
})

angular.module('app').directive('mikesDirective', function($parse) {
    var context = {
        author: { name: 'Umur'},
        title: '$parse Service',
        doSomething: function (something) {
            alert(something);
        }
    };
    var parsedAuthorNameFn = $parse('author.name');
    var parsedTitleFn = $parse('title');
    var parsedDoSomethingFn = $parse('doSomething(author.name)');

    var authorName = parsedAuthorNameFn(context);
    console.log(authorName);
    // = 'Umur'
    var parsedTitle = parsedTitleFn(context);
    console.log(parsedTitle);
    // = '$parse Service'
    var parsedDoSomething = parsedDoSomethingFn(context);
    console.log(parsedDoSomething);
    // shows you an alert 'Umur' but provides $compile error
})
