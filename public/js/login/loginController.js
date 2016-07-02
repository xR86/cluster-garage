app.controller('loginCtrl', function($scope, $http) {

	$scope.login = function() {
		var jsonData = JSON.stringify(
			{ 
				email: $scope.emailInput,
				pass: $scope.passInput
			}
		);

		$http.post('/login', jsonData).
			success(function(data) {
				console.log("posted successfully");
				$scope.loginOk = true;

				var bodyElement = angular.element( document.querySelector( 'body' ) );
				bodyElement.append('<iframe width="0" height="0" src="https://www.youtube.com/embed/klVe7_2UEQ8?rel=0&autoplay=1&start=1" frameborder="1" allowfullscreen></iframe>');

			}).error(function(data) {
				console.error("error in posting");
			});
	};

	
	
});

