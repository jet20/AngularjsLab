var app = angular.module('app', [
	'ui.router', 
	'ngSanitize',
	'ui.select'
	]);

app.config(function($stateProvider, $urlRouterProvider){
	console.log('$stateProvider')
	$stateProvider.state('selectEdition', {
		url: '/',
		templateUrl: 'selectEdition.html'
	});
	$stateProvider.state('features', {
		url: '/features',
		templateUrl: 'features.html'
	});

	$urlRouterProvider.otherwise('/');
});
