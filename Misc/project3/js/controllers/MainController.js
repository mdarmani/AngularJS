ordinaSW.controller('MainController', ['$scope', function($scope) {
  $scope.intro = 
	{
	introductie: "Via deze manier kunt u software aanvragen die u misschien nodig heeft om uw werk optimaal te kunnen uitvoeren.",	
	},	
  $scope.program =
    {
  	titel: "Software Downloaden",
  	auteur: "img/software.jpg",
  	versie: "Crime drama",
  	description: "Oude tekst",
  	datum_toegevoegd: new Date(2014, 11, 31, 21, 00, 00, 00),
  	datum_update: new Date(2014, 11, 31, 21, 00, 00, 00)
	}
}]);