// Code goes here

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.bountyHunters = [{
    name: 'Boba Fett'
  }, {
    name: 'IG-88'
  }, {
    name: 'Dengar'
  }, {
    name: 'Bossk'
  }, {
    name: 'Cad Bane'
  }]
  
  $scope.add = function() {
    $scope.bountyHunters.push({name: '4LOM'});
  }
  $scope.remove = function() {
    $scope.bountyHunters.length--;
  }
})

angular.module('app').directive('myRepeat', function() {
  return {
    restrict: 'A',
    transclude: 'element',
    //manipulate the DOM using the link: property
    link: function(scope, el, attr, ctrl, transclude) {
      console.log(el);
      //split the elements and store them in var piece
      var pieces = attr.myRepeat.split(' ');
      //store a single object in the var itemString
      var itemString = pieces[0];
      console.log(itemString);
      //store all the items in a var collectionName
      var collectionName = pieces[2];
      console.log(collectionName);
      //create and empty array and store it in var elements
      var elements = [];
      
      //watch all the array objects for changes
      scope.$watchCollection(collectionName, function(collection) {
        //Check if the length of elements are greater than 0
        if(elements.length > 0) {
          //if the length of elements in the array is more then 0, start counting i
          for(var i=0; i < elements.length; i++) {
            //create a function that removes the current element
            elements[i].el.remove();
            //also remove the element from the entire scope (to prevent data accumulation in parent sub nodes)
            elements[i].scope.$destroy();
          }
          //if elements are not freater than 0, return an empty array
          elements = [];
        }
        
        for(var i=0; i < collection.length; i++) {
            //create a new scope to prevent the original scope from being overidden. Store this in var childScope
            var childScope = scope.$new();
            //assign the current element in the array to a new scope and make this equal to the current element in the original scope
            childScope[itemString] = collection[i];
            //transclude the content of the directive with the new scope and clone it
            transclude(childScope, function(clone) {
            //append the clone to the DOM
            el.before(clone);
            //Define an empty object and store this in var item
            var item = {};
            //associate item.el with the clone
            item.el = clone;
            //create a new scope to assign the new scope
            item.scope = childScope;
            console.log(item);
            //push the oject to the empty array (line 74)
            elements.push(item);
          })
        }
      })
    }
  }
})

/* Start test area */

angular.module('app').directive('transcludeDirective', 
 function() {
  return {
    transclude: 'element',
    scope: {},
    restrict: 'A',
    replace: true,
    link: function(scope, elem, attrs, ctrl, transclude) {
      transclude(function(clone) { //'clone' is the clone of the directive element
        clone.css('background-color', 'yellow');
        elem.after(clone); //append the clone 
      });
    },
    template: '<div ng-transclude>Yes</div>',
    //template: '<div my-div="test" id="no">Yes</div>'
  }
});

























