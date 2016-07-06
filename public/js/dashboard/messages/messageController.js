dash.controller('messageCtrl', ['$scope', '$http', 'Messages', function($scope,  $http, Messages) {
	$scope.msgList = [{msgText:'Welcome to the message board !', done:false}];
	$scope.msgMongoList = [];

	//$scope.$Messages = Messages;
	//$scope.serviceData = Messages.msgAdd();

	//Create
	$scope.msgAdd = function() {
		if($scope.msgInput){
				$scope.msgList.push({msgText:$scope.msgInput, done:false});

				var copy = $scope.msgInput;
				$scope.msgInput = "";

				var container = document.getElementById("msgContainer");
				container.scrollTop = container.scrollHeight;

				copy = JSON.stringify({ content: copy });

				Messages.messageAdd(copy);
		}
	};
	


	//Read
	$scope.msgRetrieve = function() {
		$scope.msgList = [{content:'Welcome to the message board !', done:false}];

		$scope.loading = true;

		var data;
		var promise = Messages.messageRetrieve().then(function(dat){
			data = dat.data;
			//console.log(dat.data);

			if(data){
				$scope.msgMongoList = angular.fromJson(data);

				angular.forEach($scope.msgMongoList, function(value, key) {
					//console.log(key + ': ' + value);
					var i = 0;

					var id, content, timestamp;
					$scope.msgList.push(value);

					$scope.loading = false;
					//console.dir(value);
				});
			}
		});

	}
	$scope.msgRetrieve(); //should run on window.onload

	//Update

	//Delete
	$scope.msgRemove = function() {
		/*
		//initial method
		var oldList = $scope.msgList;
		$scope.msgList = [];
		angular.forEach(oldList, function(x) {
			if (!x.done) $scope.msgList.push(x);
		});
		*/
		var count = 0;
		angular.forEach($scope.msgList, function(x) {
			if (x.done) {
				$scope.msgList.splice(count, 1);

				if(x._id){
					Messages.messageDelete(x._id);
				}
			}
			count++;
		});
		

	};

	$scope.msgRemoveAll = function() {
		var oldList = $scope.msgList;
		$scope.msgList = [];
	};
}]);

