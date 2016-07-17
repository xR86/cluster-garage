dash.controller('settingsCtrl', ['$scope', '$uibModal', '$log', '$window', 'Settings', 'UserData',
function ($scope, $uibModal, $log, $window, Settings, UserData) {

	$scope.items = ['item1', 'item2', 'item3'];
	$scope.animationsEnabled = true;
	$scope.user = '';

	//user data exposed to dashboard scope
	var userCall = UserData.getUserData();
	userCall.then(function(response){
		$scope.user = response.data.user;
		console.log($scope.user);
	});

	$scope.openSettingsModal = function (size) {

		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'public/js/dashboard/settings/settingsPartial.html',
			controller: 'ModalInstanceCtrl',
			size: size,
			resolve: {
				items: function () {
					return $scope.items;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
			}, function () {
				console.log('Modal dismissed at: ' + new Date());
			});
	};

	$scope.toggleAnimation = function () {
		$scope.animationsEnabled = !$scope.animationsEnabled;
	};

	//wrapper function for update of names
	$scope.updName = function(user){
		if(user.firstName || user.lastName){
			$scope.oid = $scope.user._id;
			console.dir(user);

			Settings.updateName($scope.oid, user).then(function(){
				$scope.user.firstName = '';
				$scope.user.lastName = '';
			});
		}
	};

	//wrapper function for update of description
	$scope.updDescription = function(user){
		if(user.description){
			$scope.oid = $scope.user._id;
			console.dir(user);

			Settings.updateDescription($scope.oid, user).then(function(){
				$scope.user.description = '';
			});
		}
	};

	$scope.delAccount = function(){
		if (confirm('Are you sure you want to delete your account?')) {
			$scope.oid = $scope.user._id;

		    Settings.deleteAccount($scope.oid).then(function(){
		    	$window.location.href = '/';
		    });
		} else {
		    // Do nothing!
		    console.log("So ... no delete");
		}
	};

}]);


// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

dash.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});