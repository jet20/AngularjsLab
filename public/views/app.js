var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	console.log('$stateProvider')
	$stateProvider.state('selectEdition', {
		url: '/',
		templateUrl: 'selectEdition.html'
	});

	$urlRouterProvider.otherwise('/');
});
