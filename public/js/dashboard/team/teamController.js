dash.controller('teamCtrl', ['$scope', '$http', 'Team', function($scope,  $http, Team) {

	var getUsersCall = Team.getUsers();
	getUsersCall.then(function(response){
		console.log(response);
		$scope.teamMembers = response.data;
	});
	
}]);

