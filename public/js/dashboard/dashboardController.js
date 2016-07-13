dash.controller('dashCtrl', ['$scope', '$http', '$window', 'Idle', function($scope,  $http, $window, Idle) {

	$scope.$on('IdleStart', function() {
        // the user appears to have gone idle
        console.log("Don't be so idle");
        $scope.$apply(function(){
	        $scope.isAFK = true;
	    });
    });

     $scope.$on('IdleEnd', function() {
        // the user has come back from AFK and is doing stuff. if you are warning them, you can use this to hide the dialog
        console.log("Oh, ok");
        $scope.isAFK = false; //slower because apply not used ?
    });



	$scope.$on('IdleTimeout', function() {
        // the user has timed out (meaning idleDuration + timeout has passed without any activity)
        // this is where you'd log them
        $scope.logout();
    });

    $scope.logout = function(){
    	//$window.location.href('/logout');
		//$location.path('/logout');
		//$location.url('/logout');

		//HACK: should be consistent with register and login redirects
		$window.location.assign('/logout');

		console.log('logged out');
	};


	//user data exposed to dashboard scope
	//TODO: move this call to a service (to be used in other controllers also)
	$http.get('/logged').
		success(function(data) {
			console.log("get successfully");
			//console.log(angular.fromJson(data));
			$scope.user = data.user;
			console.dir($scope.user);

		}).error(function(data) {
			console.error("error in get");
		});
	
}]).config(function(IdleProvider, KeepaliveProvider) {
	    // configure Idle settings
	    IdleProvider.idle(5); // in seconds
	    IdleProvider.timeout(1800); // in seconds //60s*30min = 30 minutes
	    KeepaliveProvider.interval(2); // in seconds
	})
	.run(function(Idle){
	    // start watching when the app runs. also starts the Keepalive service by default.
	    Idle.watch();
	});
