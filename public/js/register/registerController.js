app.controller('registerCtrl', ['$scope', '$window', '$http', 'Register', function($scope, $window, $http, Register) {
	$scope.registerOk = false;

	$scope.register = function(user) {

		//console.dir(user);

		var promise = Register.register(user);
		promise.then(function(result){
			$scope.registerOk = true;

			$window.location.href = '/';
		});

	};

	
	
}]);

