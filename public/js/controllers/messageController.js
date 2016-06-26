angular.module('messageBoard').controller('messageCtrl', function($scope, $http) {
	$scope.msgList = [{msgText:'Welcome to the message board !', done:false}];

	$scope.msgAdd = function() {
		if($scope.msgInput){
			$scope.msgList.push({msgText:$scope.msgInput, done:false});
			//console.log($scope.msgInput);
			var copy = $scope.msgInput;
			$scope.msgInput = "";

			var container = document.getElementById("msgContainer");
			container.scrollTop = container.scrollHeight;

			//console.log(copy);
			copy = JSON.stringify({ content: copy });
			//console.log(copy);

			$http.post('/',copy).
				success(function(data) {
					console.log("posted successfully");
				}).error(function(data) {
					console.error("error in posting");
				});
		}
	};

	$scope.msgRemove = function() {
		/*
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
			}
			count++;
		});
	};

	$scope.msgRemoveAll = function() {
		var oldList = $scope.msgList;
		$scope.msgList = [];
	};
});

