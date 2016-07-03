app.service('Register', ['$http', function($http) {

	var serviceObject = {

		register : function(user) {

			return $http.post('/register', user).
			success(function(data) {
				console.log("posted successfully");
			}).error(function(data) {
				console.error("error in posting");
			});

		}

	};

	return serviceObject;
  
}]);
