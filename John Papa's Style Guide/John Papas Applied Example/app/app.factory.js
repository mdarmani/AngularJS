(function() {
	
    'use strict';

    angular
        .module('myApp')

        .factory('sessionDataService', function ($log) {
        	return {
        		refresh: function () {     		
			   		$log.info('Executed refresh()');		    
				}
        	}        	 
		})

		.factory('avengersService', function ($log) {
        	return {
				getAvengers: function() {
					$log.info('getting data...');
				    return [
				        {
				            Name: 'Iron Man',
				            RealName: 'Anthony "Tony" Edward Stark',
				            MemberSince: '1963',
				            Notes: 'Founder of original roster. Joined West Coast Branch in West Coast Avengers vol. 2 #1 (1984). Expelled for Armor War (1987). Current member of the main Avengers team.'
				        },
				        {
				            Name: 'Thor',
				            RealName: 'Thor Odinson (a.k.a. Dr. Donald Blake, Sigurd Jarlson, Jake Olsen, Odinson)',
				            MemberSince: '1963',
				            Notes: 'Former member of the main Avengers team.',
				        },
				        {
				            Name: 'Ant-Man',
				            RealName: 'Dr. Henry Jonathan "Hank" Pym',
				            MemberSince: '1963',
				            Notes: 'Became Giant-Man in Avengers #2 (1963), Goliath in Avengers #28 (1966), and Yellowjacket in Avengers #59 (1969). Expelled as Yellowjacket in Avengers #213 (1981). Joined West Coast Branch as Doctor Pym in West Coast Avengers #21 (1988). Became The Wasp in Mighty Avengers #21 (March 2009). He is one of only two members, the other being Kelsey Leigh (Captain Britain), who have Avengers status in both their civilian and superhero guises. Formerly the head of the Avengers Academy, former member of the Secret Avengers and formerly the leader of the Avengers A.I. Squad. Currently merged with Ultron.',
				        }
				    ]
				}
        	}        	 
		})

		.factory('logger', function() {
		    return { name: 'The Catcher in the Rye', author: 'J. D. Salinger' };
		})

		.factory('creditService', function ($log) {
        	return {
				isOrderTotalOk: function(total) {					
					if (total <= 0) {
						return 'Sorry, not enough balance';
					} else {
						return 'Your balance is ' + total + ' . Now that was fun wasn\'t it?';
					}					
				}
        	}        	 
		})
})();