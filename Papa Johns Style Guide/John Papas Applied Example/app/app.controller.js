(function() {

    'use strict';

    angular
        .module('myApp')

        /* Creating a controller using the Controller As method */
        .controller('controllerAsMethod', controllerAsMethod);

		function controllerAsMethod($scope, $log) {
			//Set this to vm to represent ViewModel and also prevent jshint warnings by including the comment below.

			/* jshint validthis: true */
    		var vm = this;

    		//Adding the various descriptions
    		vm.array4 = [
    			'4.1 Using the controller as Syntax.',
    			'4.2 '
    		]

    		//Create an empty array
			vm.original = [''];

		    //Apply a save function to add a value to the array and replace it every time 'Save' is clicked
		  	vm.save = function() {	

		  		if (!isNaN(vm.name)) {
		  			throw alert('Sorry, not a valid name. Please try again.');
		  		} else {
		  			vm.original.push(vm.name);
			 		if (vm.original.length > 2) {
			 			vm.original.shift();
			 		}
		  		}						 				 		

		 		vm.previous = vm.original[0];
		 		vm.current = vm.original[1];

		 		//Improvised watch function
		 		$scope.$watch('vm.original', function(previous, current) {
		 			previous = vm.original[0];
		 			current = vm.original[1];
		 			if (previous == "" && current == undefined) {
		 				alert('I need names to compare. Please enter names.');
		 			} else if ((previous == undefined && typeof current === 'string') || (previous == '' && typeof current === 'string')) {
		 				alert('Great, I just need one more name.')
		 			} else if (previous == undefined && current == undefined) {
		 				alert('Are you sure you are entering names?')
		 			} else if (typeof previous === 'string' && current == "") {
		 				alert('You did not enter second name. Please try again.');
		 			} else if (previous !== current) {
		 				alert('Names are not the same.');
		 			} else if (previous == current) {
		 				alert('Names are the same.');
		 			}
			    });
			}

			

		}

})();