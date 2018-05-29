var app = angular.module('app', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.controller('ctrl', ['$scope', function($scope) {
    $scope.dt = new Date();

    $scope.today = function() {
        $scope.dt = new Date();
    }

    $scope.options = {
        minDate: new Date(),
        showWeeks: true
    }
}]);