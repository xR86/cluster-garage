dash.service('Messages', ['$http', function($http) {

	var serviceObject = {

		//Create
		messageAdd : function(copy) {

			$http.post('/message', copy)
				.success(function(data) {
					console.log("posted successfully");
				}).error(function(data) {
					console.error("error in posting");
				});

		},

		messageRetrieve : function(){
			return $http.get('/message').
				success(function(data) {
					console.log("get successfully");
					//console.log(angular.fromJson(data));

				}).error(function(data) {
					console.error("error in get");
				});
		},

		//Delete
		messageDelete : function(id) {
			$http.delete('/message/' + id)
				.success(function(data) {
					console.log("delete successfully");
				}).error(function(data) {
					console.error("error in deleting");
				});
		}

	};

	return serviceObject;
  
}]);
