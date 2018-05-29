var app = angular.module('app', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.controller('ctrl', ['$scope', function($scope) {
    $scope.alerts = [
        { msg: '成功！很好地完成了提交。', type: 'success' },
        { msg: '信息！请注意这个信息。', type: 'info' },
        { msg: '警告！请不要提交。', type: 'warning' },
        { msg: '错误！请进行一些更改。', type: 'danger' }
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({ msg: '这是新的警告' });
    }

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    }
}]);