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
			vm.original = [];	
			
			$log.info(vm.original);	

		    //Apply a save function to add a value to the array and replace it every time 'Save' is clicked
		  	vm.save = function() {
		 		vm.original.push(vm.name);
		 		if (vm.original.length > 1) {
		 			vm.original.shift();
		 		}

		 		$log.info(vm.original);
			}			

			//Using $watch method to watch for changes to input
			$scope.$watch('vm.original', function() {	
				$log.info(vm.original);
				if (vm.original[0] !== vm.original[0]) {
					alert('omg, sometin changuhhh'); 
				}				       		
    		})

		}

})();