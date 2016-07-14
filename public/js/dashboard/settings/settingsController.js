dash.controller('settingsCtrl', function ($scope, $uibModal, $log, Settings) {

	$scope.items = ['item1', 'item2', 'item3'];
	$scope.animationsEnabled = true;
	$scope.user = '';

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

	//wrapper function for update
	$scope.updName = function(user){
		if(user.firstName || user.lastName){
			//HACK: must use a service instead of parent
			console.log('parent scope object: ', $scope.$parent.$parent.$$childHead.user);
			$scope.oid = $scope.$parent.$parent.$$childHead.user._id;
			console.dir(user);

			Settings.updateName($scope.oid, user).then(function(){
				$scope.user.firstName = '';
				$scope.user.lastName = '';
			});
		}
	}

	$scope.updDescription = function(user){
		if(user.description){
			//HACK: must use a service instead of parent
			console.log('parent scope object: ', $scope.$parent.$parent.$$childHead.user);
			$scope.oid = $scope.$parent.$parent.$$childHead.user._id;
			console.dir(user);

			Settings.updateDescription($scope.oid, user).then(function(){
				$scope.user.description = '';
			});
		}
	}

});


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