angular.module('app', ['ngSanitize', 'ui.select']).controller('ctrl', function($scope){
	$scope.itemArray = [
		{id: 1, name: 'first'},
		{id: 2, name: 'second'},
		{id: 3, name: 'third'},
		{id: 4, name: 'fourth'}
	];

	$scope.selected = $scope.itemArray[0];
});