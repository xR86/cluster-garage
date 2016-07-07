var dash = angular.module('clusterGarage.dashboard', ['ui.router', 'ngIdle', 'ui.bootstrap']);

dash.config(function($stateProvider, $urlRouterProvider){

	// For any unmatched url, send to /message
	//$urlRouterProvider.otherwise("/message")

	$stateProvider
		.state('message', {
			url: "/message",
			templateUrl: "public/js/dashboard/messageContainer.html" 
		})


		.state('other', {
			url: "/other",
			templateUrl: "public/js/dashboard/other.html"
		});

});
