dash.controller('teamCtrl', ['$scope', '$http', function($scope,  $http) {

	$scope.teamMembers = [
		{
			firstName: 'Dan',
			lastName: 'Alexandru',
			avatar: 'https://github.com/identicons/xR86.png',
			roles: [{
				role: 'Fullstack'
			}]
		}
	];
	
}]);

