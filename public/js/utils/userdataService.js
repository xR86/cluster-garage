app.service('UserData', ['$http', function($http) {

	var serviceObject = {
		getUserData : function() {
			return $http.get('/logged').
				success(function(data) {
					console.log("get successfully");
					//console.log(data);
				}).error(function(data) {
					console.error("error in get");
				});
		}
	};

	return serviceObject;
  
}]);
