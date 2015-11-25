(function() {

    'use strict';

    angular
        .module('myApp')

        /* Creating a controller using the Controller As method */
        .controller('controllerAsMethod', controllerAsMethod);

		function controllerAsMethod($scope, $log) {

			/* jshint validthis: true */
    		var vm = this;

			vm.name = undefined;

			vm.contacts = [
			{type: 'phone', value: '630 820 5712'},
		    {type: 'email', value: 'marco@polo.org'} ];

		    //Assign a greet function to the person
		  	vm.greet = function() {
		 		alert(vm.name);
			}

			//Create a function to add a 
			vm.addContact = function() {
		  		vm.contacts.push({vm: 'email', value: 'yourname@example.org'});
			}

			vm.removeContact = function(contactToRemove) {
		 		var index = vm.contacts.indexOf(contactToRemove);
		  		vm.contacts.splice(index, 1);
			}

			vm.clearContact = function(contact) {
		  		contact.type = 'phone';
		  		contact.value = '';
			}

			$scope.$watch('vm.name', function(current, original) {
				original = vm.name;
				current = vm.newname;
        		$log.info('vm.name was %s', original);
        		$log.info('vm.name is now %s', current);
    		})

		}

})();