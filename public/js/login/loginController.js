app.controller('loginCtrl', ['$scope', '$window', '$http', 'Login', function($scope, $window, $http, Login) {

	$scope.login = function(user) {

		//console.dir(user);

		var promise = Login.login(user);
		promise.then(function(result){
			$scope.loginOk = true;

			$window.location.href = '/';
		});


	};

	
	
}]);

