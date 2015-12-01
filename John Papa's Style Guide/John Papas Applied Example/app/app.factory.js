(function() {
	
    'use strict';

    angular
        .module('myApp')

        .factory('sessionDataService', function ($log) {
        	$log.info('not done...');
        	return function refresh() {
				//sessions.push('2erferik');
			   	$log.info('Executed refresh()');		    
			}
        	$log.info('done!');	  
		})
})();