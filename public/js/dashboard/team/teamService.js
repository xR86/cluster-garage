dash.service('Team', ['$http', function($http) {

	var serviceObject = {
		getUsers : function() {
			return $http.get('/users').
				success(function(data) {
					console.log("get successfully");
					console.log(data);
				}).error(function(data) {
					console.error("error in get");
				});
		}
	};

	return serviceObject;
  
}]);
