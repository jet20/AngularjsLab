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

	$urlRouterProvider.otherwise('/');
});
