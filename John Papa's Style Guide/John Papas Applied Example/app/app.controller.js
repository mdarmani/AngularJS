(function() {

    'use strict';

    angular
        .module('myApp')

        /* Creating a controller using the Controller As method */
        .controller('controllers', controllers)

		function controllers($scope, $log) {

			//Set this to vm to represent ViewModel and also prevent jshint warnings by including the comment below.
			/* jshint validthis: true */
    		var vm = this;

    		//Adding the various descriptions
    		vm.array4 = [
    			'4.1 controllerAs View Syntax',
    			'4.2 controllerAs Controller Syntax',
    			'4.3 controllerAs with vm',
    			'4.4 Bindable Members Up Top',
    			'4.4 Function Declarations to Hide Implementation Details',
    			'4.5 Defer Controller Logic to Services',
    			'4.6 Keep Controllers Focused',
    			'4.7 Assigning Controllers'
    		]

    		//Create an empty array
			vm.original = [''];
			vm.count = 0;

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

			}

			//With the $watch function that is supposed to work
			$scope.$watch('vm.count', function(current, original) {
		        $log.info('vm.count was %s', original);
		        $log.info('vm.count is now %s', current);
		    })			

		    vm.countUp = function(){
				vm.count += 1;
			}

		

			/* 4.4 Bindable Members Up Top */
			vm.gotoSession = gotoSession;
			vm.refresh = refresh;
			vm.search = search;
			vm.sessions = [];
			vm.title = 'Sessions';

			////////////

			function gotoSession() {
			 	$log.info('Executed gotoSession()');
			}

			function refresh() {
			   	$log.info('Executed refresh()');		    
			}

			function search() {
			   	$log.info('Executed search()');
			}
		}
})();