// Code goes here

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.bountyHunters = [{
    name: 'Boba Fett', age: 35
  }, {
    name: 'IG-88', age: 130
  }, {
    name: 'Dengar', age: 42
  }, {
    name: 'Bossk', age: 782
  }, {
    name: 'Cad Bane', age: 51
  }]
  
  $scope.add = function() {
    $scope.bountyHunters.push({name: '4LOM'});
  }
  $scope.remove = function() {
    $scope.bountyHunters.length--;
  }
});

angular.module('app').directive('userList', function($compile) {
  return {
    restrict: 'A',
    transclude: 'element',

    link: function(scope, el, attr, ctrl, transclude) {
      console.log(el);
      var pieces = attr.userList.split(' ');
      var itemString = pieces[0];
      var collectionName = pieces[2];
      var elements = [];
      
      scope.$watchCollection(collectionName, function(response) {
        console.log(response);
        //console.log(elements);
        if(elements.length > 0) {
          for(var i=0; i < elements.length; i++) {
            elements[i].el.remove();
            elements[i].scope.$destroy();
          }
          elements = [];
        }

        
        for(var i=0; i < response.length; i++) {
          //console.log(elements);

          //Associate the entire controller scope to a new clone scope called childScope
          var childScope = scope.$new();
          console.log(scope.$new());

          //IMPORTANT - associate current item in response chain with the current item in the new scope 
          childScope[itemString] = response[i];

          //create the funtion that contains the content to be transcluded
          transclude(childScope, function(response) {

            //store the html string in the template variable via the $compile method
            var template = $compile('<div class="panel panel-primary" ><div class="panel-heading">{{' + itemString + '.name}}</div><div class="panel-body" /></div>');
            //assign the template var to the new childscope
            var wrapper = template(childScope);
            console.log(wrapper);

            //console.log(response);

            //scan the html string for the panel-body div and append the response of the 
            wrapper.find(".panel-body").append(response);

            //append the mutated wrapper before the element
            el.before(wrapper);

            //create an empty object and store it in item
            var item = {};

            //assign the wrapper as the first key/value pair in the object
            item.el = wrapper;

            console.log(item);

            //assign childscope as second item in the object
            item.scope = childScope;
            console.log(item);

            //push the item to the empty elements array for further DOM manipulation done by the 'link:' property
            elements.push(item);
          })
        }
      })
    }
  }
})






















