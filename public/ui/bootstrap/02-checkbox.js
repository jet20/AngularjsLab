var app = angular.module('app', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.controller('ctrl', ['$scope', function($scope) {
    $scope.checkModel = {
        'left': true,
        'middle': false,
        'right': false,
    };
    $scope.checkResults = [];

    $scope.$watchCollection('checkModel', function(){
        $scope.checkResults = [];
        angular.forEach($scope.checkModel, function(value, key) {
            if(value) {
                $scope.checkResults.push(key);
            }
        });
    });
}]);