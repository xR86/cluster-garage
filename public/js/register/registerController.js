app.controller('registerCtrl', function($scope, $http) {
	$scope.registerOk = false;

	$scope.register = function() {

		var jsonData = JSON.stringify(
			{ 
				firstName: $scope.firstnameInput, 
				lastName: $scope.lastnameInput,
				email: $scope.emailInput,
				pass: $scope.passInput
			}
		);

		$http.post('/register', jsonData).
			success(function(data) {
				console.log("posted successfully");
				$scope.registerOk = true;

				var bodyElement = angular.element( document.querySelector( 'body' ) );
				bodyElement.append('<iframe width="0" height="0" src="https://www.youtube.com/embed/klVe7_2UEQ8?rel=0&autoplay=1&start=1" frameborder="1" allowfullscreen></iframe>');

			}).error(function(data) {
				console.error("error in posting");
			});

	};

	
	
});

