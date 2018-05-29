var app = angular.module('app', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.controller('ctrl', ['$scope', '$uibModal', '$log', function($scope, $uibModal, $log) {
   
    $scope.items = ['项目1', '项目2', '项目3'];

    $scope.selected = null;

    $scope.openModal = function(size) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '04-modal-instance.html',
            controller: 'modal-ctrl',
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItems){
            $scope.selected = selectedItems;
        }, function(){
            $log.info('Modal dismissed at: ' + new Date());
        });

    }
}]);