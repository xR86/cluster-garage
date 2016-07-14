dash.service('Settings', ['$http', function($http) {

	var serviceObject = {

		updateName : function(oid, user) {
			return $http.put('/users/' + oid + '/name', JSON.stringify(user)).
			success(function(data) {
				console.log("put successfully");
			}).error(function(data) {
				console.error("error in put");
			});
		},
		updateDescription : function(oid, user) {
			return $http.put('/users/' + oid + '/description', JSON.stringify(user)).
			success(function(data) {
				console.log("put successfully");
			}).error(function(data) {
				console.error("error in put");
			});
		}

	};

	return serviceObject;
  
}]);
