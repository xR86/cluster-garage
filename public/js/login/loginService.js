app.service('Login', ['$http', function($http) {

	var serviceObject = {

		login : function(user) {

			return $http.post('/login', user).
			success(function(data) {
				console.log("posted successfully");
			}).error(function(data) {
				console.error("error in posting");
			});

		}

	};

	return serviceObject;
  
}]);
