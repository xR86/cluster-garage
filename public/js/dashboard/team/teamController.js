dash.controller('teamCtrl', ['$scope', '$http', '$uibModal', 'Team', function($scope,  $http, $uibModal, Team) {

	var getUsersCall = Team.getUsers();
	getUsersCall.then(function(response){
		console.log(response);
		$scope.teamMembers = response.data;
	});

	$scope.openRegisterModal = function (size) {

		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'public/js/dashboard/team/teamRegisterPartial.html',
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
	
}]);


// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

dash.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
	
  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});