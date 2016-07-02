app.service('Messages', ['$scope', function($scope, $http) {
	var allmessage = null;

	var serviceObject = {
		/*getMessages: function(){
			return $http.get('')
	         .success(function(data) {
	         	serviceObject.setMessage(data);
	           return data;
	         })
	         .error(function(data) {
	           return data;
	         });
		},*/

		//Create
		/*
		msgAdd : function(copy) {
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
		},*/

		setMessage: function(data){
			allmessage = data;
		}


	}

	return serviceObject;
  
}]);
