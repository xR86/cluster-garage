dash.controller('settingsCtrl', function ($scope, $uibModal, $log, Settings) {

	$scope.items = ['item1', 'item2', 'item3'];
	$scope.animationsEnabled = true;

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
		//HACK: must use a service instead of parent
		console.log(1, $scope.$parent);
		console.log(2, $scope.$parent.$parent.$$childHead.user);
		$scope.oid = $scope.$parent.$parent.$$childHead.user._id;
		console.dir($scope.oid);
		console.dir(user);

		Settings.updateName($scope.oid, user);
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