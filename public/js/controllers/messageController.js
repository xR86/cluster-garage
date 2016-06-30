app.controller('messageCtrl', function($scope, $http) {
	$scope.msgList = [{msgText:'Welcome to the message board !', done:false}];
	$scope.msgMongoList = [];

	//Create
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

			$http.post('/message', copy).
				success(function(data) {
					console.log("posted successfully");
				}).error(function(data) {
					console.error("error in posting");
				});
		}
	};

	//Read
	$scope.msgRetrieve = function() {
		$http.get('/message').
				success(function(data) {
					console.log("get successfully");
					$scope.msgList = [{msgText:'Welcome to the message board !', done:false}];

					$scope.msgMongoList = angular.fromJson(data);

					angular.forEach($scope.msgMongoList, function(value, key) {
						//console.log(key + ': ' + value);
						var i = 0;

						var id, content, timestamp;
						angular.forEach(value, function(value, key) {
							//console.log(key + ': ' + value);
							i++;

							if(key == "_id"){
								id = value;
							} else if (key == "content"){
								content = value;
							} else if (key == "timestamp"){
								timestamp = value;
							}

							if(i%4===0){
								$scope.msgList.push({_id: id, msgText:content, addedTimestamp: timestamp, done:false});
							}
						});
					});
				}).error(function(data) {
					console.error("error in get");
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

				//console.log(x._id);
				if(x._id){
					//var copy = JSON.stringify({ id: x._id });;

					$http.delete('/message/' + x._id).
						success(function(data) {
							console.log("delete successfully");
						}).error(function(data) {
							console.error("error in deleting");
						});
				}
			}
			count++;
		});
		

	};

	$scope.msgRemoveAll = function() {
		var oldList = $scope.msgList;
		$scope.msgList = [];
	};
});

